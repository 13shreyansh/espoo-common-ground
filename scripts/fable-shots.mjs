// Quick read-only look at every screen family. The private visitor copy is deleted at the end.
import {chromium} from 'playwright';import {mkdir} from 'node:fs/promises';
const origin=process.env.E2E_URL||'http://localhost:4173',out=process.env.OUT||'work/shots';await mkdir(out,{recursive:true});
const browser=await chromium.launch({headless:true});
for(const width of [1440,390]){const c=await browser.newContext({viewport:{width,height:width===1440?900:844}}),p=await c.newPage(),tag=width===1440?'desktop':'phone',errors=[];p.on('pageerror',e=>errors.push(e.message));p.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
 const shot=async(n,full=false)=>{await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(700);const o=await p.evaluate(()=>[innerWidth,document.documentElement.scrollWidth]);if(o[1]>o[0]+1)console.log('OVERFLOW',n,tag,o);await p.screenshot({path:`${out}/${n}-${tag}.png`,fullPage:full});};
 try{await p.goto(origin);await p.locator('.lp-hero h1').waitFor();await shot('00-landing');await shot('00-landing-full',true);
 await p.goto(origin+'/e/espoo-nov-2026');await p.getByText('Where things stand',{exact:true}).waitFor();await shot('01-overview');await shot('01-overview-full',true);
 const d=await (await c.request.get(origin+'/api/e/espoo-nov-2026')).json(),e=d.event,co=d.companies[0],sent=d.companies[1],pe=d.people[0];
 await p.goto(origin+`/e/${e.slug}/c/${co.key}`);await p.locator('#need').waitFor();await shot('02-company-need');
 await p.goto(origin+`/e/${e.slug}/c/${sent.key}`);await p.locator('#tasks').waitFor();await shot('02-company-tasks',true);
 await p.goto(origin+`/e/${e.slug}/p/${pe.key}`);await p.locator('#main').waitFor();await shot('03-person',true);
 await p.goto(origin+`/e/${e.slug}/p/${d.people[5].key}`);await p.locator('#main').waitFor();await shot('03-person-approved',true);
 await p.goto(origin+`/e/${e.slug}/schedule`);await p.locator('#main').waitFor();await shot('04-schedule');
 await p.goto(origin+`/method?event=${e.slug}`);await p.locator('#main').waitFor();await shot('05-method');await shot('05-method-full',true);
 await p.goto(origin+'/e/espoo-oct-2026/schedule');await p.locator('#main').waitFor();await shot('06-oct-schedule');
 await p.goto(origin+'/e/espoo-oct-2026/report');await p.locator('#main').waitFor();await shot('07-report',true);
 const old=await (await c.request.get(origin+'/api/e/espoo-oct-2026')).json(),m=old.meetings.find(m=>m.state==='agreed');
 if(m){await p.goto(origin+'/s/'+m.person.schedule_key);await p.waitForTimeout(800);await p.screenshot({path:`${out}/08-day-${tag}.png`,fullPage:true});await p.goto(origin+`/e/espoo-oct-2026/schedule?sel=${encodeURIComponent(m.id)}`);await p.locator('#main').waitFor();await shot('09-oct-why');}
 console.log(tag,'errors',errors);
 }finally{await c.request.delete(origin+'/api/session');await c.close();}}
await browser.close();
