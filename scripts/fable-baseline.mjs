// Read-only baseline capture of the deployed site. The private visitor copy is deleted at the end.
import {chromium} from 'playwright';
const origin=process.env.E2E_URL||'https://espoo-common-ground.vercel.app',out=process.env.OUT||'screenshots/fable/before';
const browser=await chromium.launch({headless:true});const timings=[];
for(let i=0;i<5;i++){const c=await browser.newContext({viewport:{width:1440,height:900}}),p=await c.newPage();const t0=Date.now();await p.goto(origin,{waitUntil:'load'});await p.waitForFunction(()=>!document.querySelector('#app>.loading')&&document.body.innerText.trim().length>200,{timeout:30000});const real=Date.now()-t0;const m=await p.evaluate(()=>({fcp:performance.getEntriesByType('paint').find(e=>e.name==='first-contentful-paint')?.startTime,fp:performance.getEntriesByType('paint').find(e=>e.name==='first-paint')?.startTime,ttfb:performance.getEntriesByType('navigation')[0].responseStart,load:performance.getEntriesByType('navigation')[0].loadEventEnd}));timings.push({...m,real_content_ms:real});await c.request.delete(origin+'/api/session');await c.close();}
console.log(JSON.stringify(timings));
for(const width of [1440,390]){const c=await browser.newContext({viewport:{width,height:width===1440?900:844}}),p=await c.newPage(),tag=width===1440?'desktop':'phone';
 const shot=async(n,full=false)=>{await p.evaluate(()=>document.fonts.ready);await p.waitForFunction(()=>!document.querySelector('#app>.loading'));await p.waitForTimeout(400);await p.screenshot({path:`${out}/${n}-${tag}.png`,fullPage:full});};
 try{await p.goto(origin);await p.waitForFunction(()=>!document.querySelector('#app>.loading')&&document.body.innerText.trim().length>200);await shot('01-overview');await shot('01-overview-full',true);
 const d=await (await c.request.get(origin+'/api/e/espoo-nov-2026')).json(),e=d.event,co=d.companies[0],pe=d.people[0];
 await p.goto(origin+`/e/${e.slug}/c/${co.key}`);await p.locator('#main').waitFor();await p.waitForTimeout(800);await shot('02-company');
 await p.goto(origin+`/e/${e.slug}/p/${pe.key}`);await p.locator('#main').waitFor();await p.waitForTimeout(800);await shot('03-person');await shot('03-person-full',true);
 await p.goto(origin+`/e/${e.slug}/schedule`);await p.locator('#main').waitFor();await p.waitForTimeout(800);await shot('04-schedule');
 await p.goto(origin+`/method?event=${e.slug}`);await p.locator('#main').waitFor();await p.waitForTimeout(800);await shot('05-method');await shot('05-method-full',true);
 await p.goto(origin+'/s/'+pe.schedule_key);await p.waitForTimeout(1200);await p.screenshot({path:`${out}/06-day-${tag}.png`,fullPage:true});
 }finally{await c.request.delete(origin+'/api/session');await c.close();}}
await browser.close();
