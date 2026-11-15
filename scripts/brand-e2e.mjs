import {chromium} from 'playwright';import assert from 'node:assert/strict';import {mkdir,writeFile} from 'node:fs/promises';import {execFileSync} from 'node:child_process';
const origin=process.env.E2E_URL||'https://espoo-common-ground.vercel.app',expected=process.env.EXPECTED_COMMIT||execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim(),out='artifacts/sponsors';await mkdir(out,{recursive:true});
const health=await(await fetch(origin+'/health')).json();assert.equal(health.commit,expected);assert.equal(health.website_lookup_configured,true);assert.equal(health.writing_helper_configured,true);
const browser=await chromium.launch({headless:true}),report={origin,commit:expected,at:new Date().toISOString(),runs:[]};
try{for(const width of [1440,390]){
 const context=await browser.newContext({viewport:{width,height:width===1440?900:844}}),page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
 try{
  await page.goto(origin+'/e/espoo-nov-2026');await page.getByText('Where things stand',{exact:true}).waitFor();await page.screenshot({path:out+'/overview-'+width+'.png'});
  const get=async path=>{const r=await context.request.get(origin+path);assert.equal(r.status(),200);return r.json();};
  const before=await get('/api/e/espoo-nov-2026'),company=before.companies[0];
  await page.goto(origin+'/e/espoo-nov-2026/c/'+company.key);await page.locator('#need').waitFor();await page.locator('#need').fill('My unsaved company need stays here');await page.locator('#company-website').fill('https://stripe.com');
  await page.getByRole('button',{name:'Look up website',exact:true}).click();await page.locator('.brand-preview').waitFor({timeout:60000});assert.equal(await page.locator('#need').inputValue(),'My unsaved company need stays here');
  await page.locator('.brand-preview').scrollIntoViewIfNeeded();await page.locator('.brand-preview img').waitFor();await page.waitForFunction(()=>document.querySelector('.brand-preview img')?.naturalWidth>0);
  assert((await page.locator('.brand-preview').innerText()).includes('Website details via Context.dev'));
  assert.equal(await page.locator('.brand-preview h3').innerText(),'Stripe');
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),true);
  await page.screenshot({path:out+'/brand-'+width+'.png'});
  const after=await get('/api/e/espoo-nov-2026'),own=await get('/api/e/espoo-nov-2026/c/'+company.key);assert.deepEqual(after.rankings,before.rankings);assert.deepEqual(after.summary,before.summary);assert.equal(own.company.brand.domain,'stripe.com');assert.equal(own.company.brand.provider,'Context.dev');
  await page.reload();await page.locator('.brand-preview h3').waitFor();assert.equal(await page.locator('.brand-preview h3').innerText(),'Stripe');
  assert.deepEqual(errors,[]);report.runs.push({width,passed:true,request_id:own.company.brand.request_id,cached:own.company.brand.cached,domain:'stripe.com',screenshot:out+'/brand-'+width+'.png',matcher_unchanged:true,persisted_after_reload:true});
 }finally{await context.request.delete(origin+'/api/session');await context.close();}
}}finally{await browser.close();await writeFile(out+'/brand-e2e.json',JSON.stringify(report,null,2));}
console.log(JSON.stringify(report,null,2));
