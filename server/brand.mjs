import {db} from './store.mjs';

db.exec('CREATE TABLE IF NOT EXISTS brand_cache(domain TEXT PRIMARY KEY,profile TEXT NOT NULL,at TEXT NOT NULL);CREATE TABLE IF NOT EXISTS brand_counter(day TEXT PRIMARY KEY,calls INTEGER NOT NULL);');
const inflight=new Map();
export function publicDomain(value){
 let u;try{u=new URL(/^https?:\/\//i.test(String(value).trim())?String(value).trim():'https://'+String(value).trim());}catch{throw Error('Enter a public company website, such as example.com.');}
 const host=u.hostname.toLowerCase().replace(/^www\./,'');
 if(u.protocol!=='https:'||u.username||u.password||u.port&&!['443'].includes(u.port)||host.length>253||!/^([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$/.test(host)||/\.(?:local|localhost|internal|invalid|test|example)$/.test(host))throw Error('Enter a public HTTPS company website.');
 return host;
}
export function brandProfile(response,domain){
 if(response?.status!=='ok'||!response.brand)throw Error('The website details did not load. Your brief has not changed.');
 const b=response.brand;
 const logo=(b.logos||[]).find(x=>{try{const u=new URL(x.url);return u.protocol==='https:'&&u.hostname==='media.brand.dev';}catch{return false;}});
 return {domain,website:'https://'+domain,name:String(b.title||domain).slice(0,160),description:String(b.description||'').slice(0,600),logo:logo?.url||null,provider:'Context.dev',request_id:response.request_id||null,retrieved_at:new Date().toISOString(),partial:!!response.partial};
}
export async function lookupBrand(value,options={}){
 const domain=publicDomain(value),cached=db.prepare('SELECT profile,at FROM brand_cache WHERE domain=?').get(domain);
 if(cached&&Date.now()-Date.parse(cached.at)<24*3600e3)return {...JSON.parse(cached.profile),cached:true};
 if(inflight.has(domain))return inflight.get(domain);
 const task=(async()=>{
  const key=options.key??process.env.CONTEXT_DEV_API_KEY;
  if(!key)throw Error('Website lookup is unavailable right now. You can continue writing the brief.');
  const day=new Date().toISOString().slice(0,10);db.exec('BEGIN IMMEDIATE');try{const count=db.prepare('SELECT calls FROM brand_counter WHERE day=?').get(day)?.calls||0;if(count>=100)throw Error('Website lookups have reached today\'s limit. You can continue writing the brief.');db.prepare('INSERT INTO brand_counter VALUES(?,1) ON CONFLICT(day) DO UPDATE SET calls=calls+1').run(day);db.exec('COMMIT');}catch(e){db.exec('ROLLBACK');throw e;}
  let r;try{r=await(options.fetch||fetch)('https://api.context.dev/v1/brand/retrieve',{method:'POST',headers:{Authorization:'Bearer '+key,'Content-Type':'application/json'},body:JSON.stringify({domain,type:'by_domain',maxSpeed:true}),signal:AbortSignal.timeout(45000)});}catch{throw Error('The website lookup timed out. Try again, or continue writing the brief.');}
  if(!r.ok)throw Error('The website details did not load. Try again, or continue writing the brief.');
  const profile=brandProfile(await r.json(),domain);db.prepare('INSERT INTO brand_cache VALUES(?,?,?) ON CONFLICT(domain) DO UPDATE SET profile=excluded.profile,at=excluded.at').run(domain,JSON.stringify(profile),profile.retrieved_at);
  return {...profile,cached:false};
 })();inflight.set(domain,task);try{return await task;}finally{inflight.delete(domain);}
}
