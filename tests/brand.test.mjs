import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';import os from 'node:os';import path from 'node:path';
process.env.DATA_DIR=fs.mkdtempSync(path.join(os.tmpdir(),'cg-brand-'));
const {publicDomain,brandProfile,lookupBrand}=await import('../server/brand.mjs');
const {mutate}=await import('../server/api.mjs');const {engineInput,buildEvent}=await import('../src/event-model.mjs');
const fixture=JSON.parse(fs.readFileSync('fixtures/event.json','utf8'));
const {companyAction}=await import('../client/company.mjs');
const {parseCredentialPipe}=await import('../server/runtime-secrets.mjs');
test('onboarding only accepts public HTTPS domains and never credentials or internal addresses',()=>{
 assert.equal(publicDomain(' https://www.stripe.com/payments '),'stripe.com');
 for(const value of ['http://stripe.com','https://user:pass@stripe.com','https://127.0.0.1','https://service.local','https://[::1]','https://stripe.com:444'])assert.throws(()=>publicDomain(value));
});
test('brand profile keeps provenance and only trusted hosted image URLs',()=>{
 const p=brandProfile({status:'ok',request_id:'public-proof',brand:{title:'Example',logos:[{url:'https://attacker.invalid/x'},{url:'https://media.brand.dev/example.svg'}]}},'stripe.com');
 assert.equal(p.logo,'https://media.brand.dev/example.svg');assert.equal(p.provider,'Context.dev');assert.equal(p.request_id,'public-proof');
 assert.throws(()=>brandProfile({status:'error'},'stripe.com'));
});
test('provider-backed lookup persists and caches by domain without repeated paid calls',async()=>{
 let calls=0;const fake=async(url,options)=>{calls++;assert.equal(url,'https://api.context.dev/v1/brand/retrieve');assert.deepEqual(JSON.parse(options.body),{domain:'stripe.com',type:'by_domain',maxSpeed:true});return Response.json({status:'ok',request_id:'real-shape',brand:{title:'Stripe',description:'Payments',logos:[]}});};
 const first=await lookupBrand('stripe.com',{key:'isolated-test',fetch:fake});const second=await lookupBrand('stripe.com',{key:'isolated-test',fetch:fake});assert.equal(calls,1);assert.equal(first.cached,false);assert.equal(second.cached,true);
});
test('brand identity cannot change match scores, proposals or participant visibility',async()=>{
 const e=structuredClone(fixture),c=e.companies[0],input=engineInput(e);buildEvent(e);const meetings=JSON.stringify(e.meetings);
 c.website='https://stripe.com';c.brand={domain:'stripe.com',name:'Highly prestigious employer',description:'An arbitrary description',logo:'https://media.brand.dev/example.svg'};
 assert.deepEqual(engineInput(e),input);assert.equal(JSON.stringify(e.meetings),meetings);
 await mutate(e,'c',c.key,'clear-brand',{});assert.equal(c.brand,undefined);assert.deepEqual(engineInput(e),input);
});
test('a website lookup preserves unsaved need and task edits',async()=>{
 const original=global.document,c=structuredClone(fixture.companies.find(c=>c.tasks.length)),task=c.tasks[0];
 global.document={querySelector:s=>s==='#need'?{value:'My unsaved hiring need'}:s==='#company-website'?{value:'https://stripe.com'}:null,querySelectorAll:s=>s==='[data-task-line]'?[{dataset:{taskLine:task.id},value:'My unsaved task line'}]:[]};
 const ctx={side:'c',local:{company:c,edited:true},data:{company:structuredClone(c)},post:async()=>{ctx.data.company.brand={name:'Stripe'};ctx.data.company.website='https://stripe.com';},render:()=>{}};
 try{await companyAction('website-brand',{},ctx);assert.equal(ctx.local.company.need_text,'My unsaved hiring need');assert.equal(ctx.local.company.tasks[0].line,'My unsaved task line');assert.equal(ctx.local.company.brand.name,'Stripe');assert.equal(ctx.local.edited,true);}finally{global.document=original;}
});
test('encrypted runtime pipe accepts known provider fields and cannot inject process options',()=>{
 assert.deepEqual(parseCredentialPipe('isolated-test'),{GEMINI_API_KEY:'isolated-test'});
 assert.deepEqual(parseCredentialPipe('{"GEMINI_API_KEY":"isolated-test","CONTEXT_DEV_API_KEY":"isolated-context"}'),{GEMINI_API_KEY:'isolated-test',CONTEXT_DEV_API_KEY:'isolated-context'});
 assert.throws(()=>parseCredentialPipe('{"GEMINI_API_KEY":"isolated-test","NODE_OPTIONS":"--inspect"}'));
 assert.throws(()=>parseCredentialPipe('{}'));
});
