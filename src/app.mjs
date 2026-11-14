import {demo} from './data.mjs';
import {schedule, explanation, eligible, meetingKey, approvalKey, violations, keywordBaseline} from './engine.mjs';
const $ = s => document.querySelector(s);
const esc = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const icons = {
  arrow:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h12m-5-5 5 5-5 5"/></svg>',
  check:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m4 10 4 4 8-8"/></svg>',
  print:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 7V2h10v5M5 15H2V7h16v8h-3M5 12h10v6H5z"/></svg>'
};
let data=structuredClone(demo);
let state={meetings:schedule(data), approvals:{}, excluded:[], unavailable:[], issued:[], checked:[], log:[]};
let selected=state.meetings[0] && meetingKey(state.meetings[0]);
let noticeTimer, auditResults;
try {
  const saved=JSON.parse(localStorage.getItem('common-ground-v1'));
  if(saved && saved.version===1 && Array.isArray(saved.state.meetings)) {
    data=saved.data;state=saved.state;
    if(violations(data,state.meetings).length) throw Error('Invalid saved schedule');
    selected=state.meetings[0] && meetingKey(state.meetings[0]);
  }
} catch { data=structuredClone(demo);state={meetings:schedule(data),approvals:{},excluded:[],unavailable:[],issued:[],checked:[],log:[]}; }
function save(){try{localStorage.setItem('common-ground-v1',JSON.stringify({version:1,data,state}));}catch{notify('Browser storage is unavailable. Keep this tab open; changes will last for this session.');}}
function notify(text){$('#notice').textContent=text;$('#notice').classList.add('visible');clearTimeout(noticeTimer);noticeTimer=setTimeout(()=>$('#notice').classList.remove('visible'),6500);}
function approval(m){return state.approvals[approvalKey(m,data)]||{};}
function both(m){const a=approval(m);return a.talent&&a.company;}
function issued(m){return both(m)&&state.issued.includes(approvalKey(m,data));}
function person(m){return data.people.find(p=>p.id===m.personId);}
function company(m){return data.companies.find(c=>c.id===m.companyId);}
function badge(m){if(state.checked.includes(approvalKey(m,data))&&issued(m))return '<span class="status checked">Introduced</span>';if(issued(m))return '<span class="status confirmed">Card ready</span>';if(both(m))return '<span class="status confirmed">Both agreed</span>';if(approval(m).talent||approval(m).company)return '<span class="status partial">One reply recorded</span>';return '<span class="status">Awaiting both</span>';}
function addLog(text){state.log.unshift(text);state.log=state.log.slice(0,12);}
function render(){
  const route=location.hash.slice(1)||'desk';
  document.querySelectorAll('[data-route]').forEach(a=>{a.classList.toggle('active',a.dataset.route===route);if(a.dataset.route===route)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
  if(route==='needs')renderNeeds();else if(route==='evidence')renderEvidence();else if(route==='audit')renderAudit();else renderDesk();
}
function renderDesk(){
  const ready=state.meetings.filter(issued).length;
  if(!state.meetings.some(m=>meetingKey(m)===selected))selected=state.meetings[0]&&meetingKey(state.meetings[0]);
  const m=state.meetings.find(m=>meetingKey(m)===selected);
  $('#main').innerHTML=`<section class="intro"><div><h1>Make room for a<br><em>good conversation.</em></h1><p>You’re the event organiser. Start with what a company needs<br class="desktop-break"> and what someone has done. Then help them say hello.</p></div><div class="event-stamp"><span>Thursday</span><strong>19</strong><span>November 2026</span><small>Illustrative event</small></div></section>
    <div class="desk-heading"><div><h2>Your introduction desk</h2><p>${state.meetings.length} proposed meetings · 3 active tables · ${ready} introduction cards ready</p></div><button class="primary" id="replan">Build meeting proposal ${icons.arrow}</button></div>
    <div class="help-strip">This is a local demo. Record each party’s answer separately. No invitation is sent, and no hiring decision is made.</div>
    <div class="desk-grid"><section class="schedule-panel" aria-label="Meeting proposal"><div class="list-head"><span>Time / table</span><span>The introduction</span><span>Agreement</span></div>${state.meetings.length?state.meetings.map(row=>`<button class="meeting ${meetingKey(row)===selected?'selected':''}" data-meeting="${meetingKey(row)}" aria-pressed="${meetingKey(row)===selected}"><span class="meeting-time">${esc(row.slot)}<small>Table ${esc(company(row).table)}</small></span><span class="meeting-pair"><strong>${esc(person(row).name)}</strong><span>${esc(company(row).name)}</span><small>${esc(person(row).background)}</small></span><span class="meeting-state">${badge(row)}${icons.arrow}</span></button>`).join(''):'<div class="empty"><h3>No eligible introductions yet</h3><p>Check company needs, work evidence and mutual interest before proposing meetings.</p></div>'}
      <div class="schedule-foot"><span>10-minute conversations · 5-minute changeover</span><button class="text-button" id="export">Export schedule</button></div>
      <section class="waiting"><h3>Keep the door open</h3>${waitingHtml()}<a href="#needs" class="needs-warning">Harbour Works needs a clearer task ${icons.arrow}</a></section>
    </section><aside class="match-detail" aria-label="Introduction details">${m?detailHtml(m):'<h2>Review a meeting here</h2><p>Your proposal needs an eligible pair first.</p>'}</aside></div>
    <section class="activity"><h2>Desk notes</h2>${state.log.length?`<ol>${state.log.map(x=>`<li>${esc(x)}</li>`).join('')}</ol>`:'<p>No changes yet. Confirm an introduction, or cancel one meeting to try reassignment.</p>'}</section>`;
  $('[id="replan"]').onclick=()=>replan();
  $('#export').onclick=exportSchedule;
  document.querySelectorAll('[data-meeting]').forEach(el=>el.onclick=()=>{selected=el.dataset.meeting;renderDesk();document.querySelector('.match-detail h2')?.focus();});
  bindDetail(m);
}
function waitingHtml(){
  const waiting=data.people.filter(p=>!state.meetings.some(m=>m.personId===p.id));
  return waiting.length?waiting.map(p=>`<div class="waiting-row"><span class="initials small">${esc(p.id.slice(1).padStart(2,'0'))}</span><div><strong>${esc(p.name)}</strong><p>${state.unavailable.includes(p.id)?'Unavailable for this demo event.':data.companies.some(c=>eligible(p,c)&&!state.excluded.includes(`${p.id}:${c.id}`))?'No free slot in the current proposal. An organiser can help with another introduction.':'Needs a clearer work sample or a mutually chosen company. No rejection is issued.'}</p></div></div>`).join(''):'<p>Everyone has one proposed introduction.</p>';
}
function detailHtml(m){
  const p=person(m),c=company(m),a=approval(m),isIssued=issued(m),isChecked=state.checked.includes(approvalKey(m,data));
  return `<div class="detail-top"><span class="table-token">${esc(c.table)}</span><span>${esc(m.slot)} · 10 minutes</span>${badge(m)}</div><h2 tabindex="-1">Why you two?</h2><p class="detail-pair">${esc(p.name)} <span>&</span> ${esc(c.name)}</p>
    <div class="task-block"><h3>They need to</h3><p>${esc(c.task)}</p></div><div class="evidence-block"><h3>You’ve already tried something related</h3>${explanation(p,c).map(x=>`<div class="evidence-line"><span class="mini-check">${icons.check}</span><div><strong>${esc(x.need)}</strong>${x.evidence.map(e=>`<p>${esc(e.title)} <span class="evidence-ref">[${esc(e.id)}]</span></p>`).join('')}</div></div>`).join('')}<a href="#evidence">Read the full work sample ${icons.arrow}</a></div>
    <div class="teach"><h3>They can teach</h3><p>${esc(c.teach)}</p></div><div class="mutual"><span class="mini-check">${icons.check}</span> Both included each other in their demo interest list.</div>
    <div class="agreement"><h3>Let the people decide</h3><p>Simulate recording their answer. Each confirmation applies to this exact table, time, task and evidence.</p><button class="consent ${a.talent?'agreed':''}" id="talent-yes" ${a.talent?'disabled':''}>${a.talent?icons.check: '<span class="checkbox"></span>'}${a.talent?'Talent’s yes recorded':'Record talent’s yes'}</button><button class="consent ${a.company?'agreed':''}" id="company-yes" ${a.company?'disabled':''}>${a.company?icons.check:'<span class="checkbox"></span>'}${a.company?'Company’s yes recorded':'Record company’s yes'}</button><button class="primary wide" id="issue" ${!both(m)||isIssued?'disabled':''}>${isIssued?'Introduction card ready':'Create introduction card'} ${icons.arrow}</button></div>
    ${isIssued?`<section class="intro-card"><span class="card-label">Bring this to the welcome desk</span><h3>${esc(p.name)}<br>${esc(c.name)}</h3><div class="card-location"><strong>Table ${esc(c.table)}</strong><span>${esc(m.slot)} · 19 November</span></div><p><strong>Start with this</strong><br>${esc(c.prompt)}</p><p class="fine">Demo hall. Ask the welcome desk for table ${esc(c.table)}. Text and table letters identify the meeting without relying on colour.</p><div class="card-actions"><button id="print">${icons.print} Print card</button><button id="calendar">Save calendar</button></div><button class="primary wide" id="checkin" ${isChecked?'disabled':''}>${isChecked?'Introduction recorded':'Record in-person introduction'}</button></section>`:''}
    <button class="cancel" id="cancel">Cancel this meeting & free the slot</button><p class="fine">Cancellation removes both confirmations and the card. Replacements need fresh agreement.</p>`;
}
function bindDetail(m){
  if(!m)return;
  for(const party of ['talent','company'])$(`#${party}-yes`).onclick=()=>{const key=approvalKey(m,data);state.approvals[key]={...approval(m),[party]:true};addLog(`${person(m).name} + ${company(m).name}: ${party}’s yes recorded for ${m.slot}, table ${company(m).table}.`);save();renderDesk();notify('Demo answer recorded for this exact introduction.');};
  $('#issue').onclick=()=>{if(!both(m))return;state.issued.push(approvalKey(m,data));addLog(`Introduction card created for ${person(m).name} at table ${company(m).table}.`);save();renderDesk();notify('Card ready. Nothing has been sent to either party.');};
  $('#cancel').onclick=()=>{
    state.excluded.push(`${m.personId}:${m.companyId}`);const key=approvalKey(m,data);delete state.approvals[key];state.issued=state.issued.filter(x=>x!==key);state.checked=state.checked.filter(x=>x!==key);state.meetings=state.meetings.filter(x=>meetingKey(x)!==meetingKey(m));
    addLog(`${person(m).name} + ${company(m).name} cancelled. Table ${company(m).table} at ${m.slot} is free. Build a proposal for a replacement.`);save();renderDesk();notify('Meeting cancelled. Build a meeting proposal to suggest a replacement.');
  };
  if(issued(m)){
    $('#print').onclick=()=>{document.body.classList.add('printing-card');window.print();document.body.classList.remove('printing-card');};
    $('#calendar').onclick=()=>downloadCalendar(m);
    $('#checkin').onclick=()=>{if(!issued(m))return;state.checked.push(approvalKey(m,data));addLog(`Demo in-person introduction recorded: ${person(m).name} + ${company(m).name}.`);save();renderDesk();notify('Demo introduction recorded. This is not an observed real-world meeting.');};
  }
}
function replan(){
  try{
    const locked=state.meetings.filter(both), old=state.meetings.map(meetingKey).join('|');
    const meetings=schedule(data,{excluded:state.excluded,unavailable:state.unavailable,locked});
    const kept=new Set(locked.map(m=>approvalKey(m,data)));
    state.approvals=Object.fromEntries(Object.entries(state.approvals).filter(([key])=>kept.has(key)));
    state.issued=state.issued.filter(key=>kept.has(key));state.checked=state.checked.filter(key=>kept.has(key));
    state.meetings=meetings;
    addLog(`Proposal rebuilt: ${meetings.length} meetings, ${locked.length} mutually agreed meetings kept. All other replies reset for review.`);
    save();renderDesk();notify(old===meetings.map(meetingKey).join('|')?'Proposal checked. Existing mutually agreed meetings were kept. Other replies need review.':'New proposal ready. Existing mutually agreed meetings were kept; replacements need fresh agreement.');
  }catch(error){notify(error.message);}
}
function renderNeeds(){
  $('#main').innerHTML=`<section class="route-intro"><h1>Start with the work.</h1><p>A useful introduction starts with a task someone can picture doing. Review the synthetic company brief and the evidence you need to discuss it.</p></section><div class="needs-list">${data.companies.map(c=>`<article class="company-brief"><div class="company-title"><span class="company-mark">${esc(c.initials)}</span><div><h2>${esc(c.name)}</h2><p>${esc(c.sector)} · Table ${esc(c.table)}</p></div><span class="status ${c.needs.length?'confirmed':'partial'}">${c.needs.length?'Ready for introductions':'Needs clarification'}</span></div><form data-company="${c.id}"><label for="task-${c.id}">The concrete task</label><textarea id="task-${c.id}" name="task" required maxlength="400" rows="3">${esc(c.task)}</textarea><div class="brief-columns"><div><h3>Evidence to discuss</h3>${c.needs.length?c.needs.map(n=>`<span class="tag">${esc(n)}</span>`).join(''):'<p>Ask what someone should accomplish in their first month. No meeting is proposed yet.</p>'}</div><div><h3>What they can teach</h3><p>${esc(c.teach)}</p></div></div><details><summary>Mutual interest & availability</summary><p>Company’s explicit demo interest, in preference order: ${c.choices.map(id=>esc(data.people.find(p=>p.id===id)?.name||id)).join(', ')}.</p><p>Available ${c.slots.join(', ')}. Capacity ${c.capacity} meeting${c.capacity===1?'':'s'}. Talent must also choose this company.</p></details><button class="secondary" type="submit">Save demo task & rebuild proposal</button><p class="fine">A changed task clears meeting confirmations. These fields edit fictional fixtures only.</p></form></article>`).join('')}</div>`;
  document.querySelectorAll('[data-company]').forEach(form=>form.onsubmit=e=>{
    e.preventDefault();const c=data.companies.find(c=>c.id===form.dataset.company),task=new FormData(form).get('task').trim();
    if(!task){notify('Describe the task before saving.');return;}
    if(task===c.task){notify('The task has not changed.');return;}
    c.task=task;
    // Prose can change the actual meaning. Require a new human evidence mapping, never reuse stale tags.
    c.needs=[];state.approvals={};state.issued=[];state.checked=[];
    state.meetings=schedule(data,{excluded:state.excluded,unavailable:state.unavailable});
    addLog(`${c.name} task changed. Its evidence mapping needs organiser review; no introductions proposed for it. All old confirmations cleared.`);
    save();renderNeeds();notify('Task saved. Review its evidence mapping before proposing introductions. Reset demo restores the prepared fixture.');
  });
}
function renderEvidence(){
  $('#main').innerHTML=`<section class="route-intro"><h1>Good work travels.</h1><p>A job title does not tell the whole story. These fictional work samples make transferable experience concrete. Tags were written into the fixture by the builder, not inferred or verified by AI.</p></section><div class="evidence-roster">${data.people.map(p=>`<article class="person-evidence"><div class="person-header"><span class="initials">${p.id.slice(1).padStart(2,'0')}</span><div><h2>${esc(p.name)}</h2><p>${esc(p.background)}</p></div><button class="text-button unavailable" data-person="${p.id}" ${state.unavailable.includes(p.id)?'disabled':''}>${state.unavailable.includes(p.id)?'Unavailable recorded':'Mark unavailable'}</button></div>${p.evidence.map(e=>`<h3>${esc(e.title)} <span class="evidence-ref">[${esc(e.id)}]</span></h3><p>${esc(e.text)}</p><div>${e.tags.map(tag=>`<span class="tag">${esc(tag)}</span>`).join('')}</div>`).join('')}<p class="availability">Available ${p.slots.map(esc).join(' / ')} · Wants to meet ${p.choices.map(id=>esc(data.companies.find(c=>c.id===id).name)).join(', ')}</p><details><summary>CV text used by the keyword baseline</summary><p>${esc(p.cv)}</p><p class="fine">CV prose does not enter the evidence scheduler.</p></details></article>`).join('')}</div>`;
  document.querySelectorAll('.unavailable').forEach(el=>el.onclick=()=>{
    const id=el.dataset.person;state.unavailable.push(id);
    for(const m of state.meetings.filter(m=>m.personId===id)){const key=approvalKey(m,data);delete state.approvals[key];state.issued=state.issued.filter(k=>k!==key);state.checked=state.checked.filter(k=>k!==key);}
    state.meetings=state.meetings.filter(m=>m.personId!==id);addLog(`${data.people.find(p=>p.id===id).name} unavailable. Their meetings and confirmations removed.`);save();renderEvidence();notify('Demo absence recorded. Return to the desk and build a proposal for replacements.');
  });
}
async function renderAudit(){
  $('#main').innerHTML=`<section class="route-intro"><h1>Show the working.</h1><p>These are measured synthetic checks, not hiring outcomes. Open the fixtures, compare the baseline, and inspect the failures before making any claim.</p></section><section class="audit-summary" id="audit-summary"><p>Loading the frozen synthetic audit…</p></section>
    <section class="audit-section"><h2>A simple policy you can inspect</h2><p>The organiser supplies explicit task and work-sample tags. Each proposed pair needs all required tags, mutual opt-in, a shared time and a free table. The solver maximises introductions first, then the parties’ stated preference points. It keeps already agreed meetings fixed when rebuilding.</p><p>The keyword baseline searches CV prose for task words and fills slots greedily. It is deliberately simple. This comparison does not establish superiority to a commercial event platform or a recruiter.</p><button class="secondary" id="baseline-toggle">Compare keyword shortlist on this demo</button><div id="baseline-result"></div></section>
    <section class="audit-section"><h2>Known limits, without the small print</h2><ul><li>All people, companies, samples and outcomes are constructed. There are no domain-expert relevance labels or real hiring outcomes.</li><li>Tags are a human-entered representation. A false tag or an unsupported work sample can produce a misleading explanation. A real pilot needs consented evidence review.</li><li>Whole scenario families are held out, but the same builder wrote the policy and fixtures. This is a regression audit, not external validation.</li><li>Global capacity optimisation does not guarantee stable matching, equal access or fairness. Full required-tag coverage can miss a promising learner. Human organisers must help people without a slot.</li><li>This exact search is for a small event desk. Large-event performance, concurrency, authentication and multi-user confirmation are untested. This browser records simulated answers only.</li><li>Removing irrelevant fields and swapping synthetic groups tests invariance. It does not prove fairness or independently establish EU AI Act or GDPR compliance.</li></ul></section>
    <section class="audit-section"><h2>Privacy in this prototype</h2><p>No upload, applicant intake, model API or analytics. Demo task edits and meeting state stay in this browser’s local storage. Reset demo replaces that local state. Export and calendar buttons download synthetic data locally. No invitations are sent.</p><p>A real deployment needs accessible consent, purpose and retention controls, secure participant authentication, deletion workflows, human evidence review and a legal assessment before handling personal data.</p></section>
    <section class="audit-section"><h2>Inspect the evidence</h2><div class="proof-links"><a href="/EVAL_SPEC.md" target="_blank" rel="noopener">Evaluation specification ${icons.arrow}</a><a href="/eval/LEDGER.md" target="_blank" rel="noopener">Run ledger & failures ${icons.arrow}</a><a href="/eval/results.json" target="_blank" rel="noopener">Results & traces JSON ${icons.arrow}</a><a href="/eval/fixtures.json" target="_blank" rel="noopener">Frozen fixtures ${icons.arrow}</a><a href="/docs/VIDEO_SCRIPT.md" target="_blank" rel="noopener">Two-minute demo script ${icons.arrow}</a><a href="/README.md" target="_blank" rel="noopener">Judge quick path ${icons.arrow}</a></div></section>`;
  $('#baseline-toggle').onclick=()=>{
    const baseline=keywordBaseline(data),bad=violations(data,baseline);
    $('#baseline-result').innerHTML=`<div class="baseline-comparison"><div><h3>CV keyword baseline</h3><p>${baseline.length} allocated meetings; ${bad.length} constraint violations.</p><ul>${baseline.map(m=>`<li>${esc(person(m).name)} → ${esc(company(m).name)} · ${m.slot}</li>`).join('')}</ul></div><div><h3>Evidence & mutual interest</h3><p>${state.meetings.length} proposed meetings; ${violations(data,state.meetings).length} constraint violations in current state.</p><ul>${state.meetings.map(m=>`<li>${esc(person(m).name)} → ${esc(company(m).name)} · ${m.slot}</li>`).join('')}</ul></div></div><p class="fine">One constructed demo. Baseline eligibility failures include missing essential evidence or mutual interest. This is not precision against human labels.</p>`;
  };
  try{if(!auditResults){const response=await fetch('/eval/results.json');if(!response.ok)throw Error('missing');auditResults=await response.json();}if(!$('#audit-summary'))return;
    const r=auditResults;
    $('#audit-summary').innerHTML=`<h2>Frozen synthetic audit · ${esc(r.version)}</h2><table><thead><tr><th scope="col">Check</th><th scope="col">Development</th><th scope="col">Held-out families</th></tr></thead><tbody><tr><th scope="row">Valid evidence schedules</th><td>${r.dev.valid}/${r.dev.total}</td><td>${r.heldout.valid}/${r.heldout.total}</td></tr><tr><th scope="row">Keyword baseline valid schedules</th><td>${r.dev.baselineValid}/${r.dev.total}</td><td>${r.heldout.baselineValid}/${r.heldout.total}</td></tr><tr><th scope="row">Maximum meeting count reached</th><td>${r.dev.optimal}/${r.dev.total}</td><td>${r.heldout.optimal}/${r.heldout.total}</td></tr></tbody></table><p>${r.nuisance.passed}/${r.nuisance.total} nuisance checks unchanged · ${r.cancellation.passed}/${r.cancellation.total} cancellation checks passed. <a href="/eval/LEDGER.md">Read denominators and failures</a>.</p><p class="fine">Synthetic rule conformance, not measured hiring quality. Local runtime and hashes are in the ledger.</p>`;
  }catch{if($('#audit-summary'))$('#audit-summary').innerHTML='<h2>Audit results unavailable</h2><p>Run npm run eval before building. No result is claimed here until its evidence file exists.</p>';}
}
function download(name,text,type){const blob=new Blob([text],{type});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
function exportSchedule(){
  const quote=x=>'"'+String(x).replaceAll('"','""')+'"';
  const rows=[['SYNTHETIC DEMO','Talent','Company','Table','Time Helsinki','Status'],...state.meetings.map(m=>['SYNTHETIC',person(m).name,company(m).name,company(m).table,m.slot,issued(m)?'card ready':both(m)?'both agreed':'proposal, agreement pending'])];
  download('common-ground-synthetic-schedule.csv',rows.map(r=>r.map(quote).join(',')).join('\r\n'),'text/csv');notify('Synthetic schedule downloaded. Proposals are labelled as pending.');
}
function downloadCalendar(m){
  if(!issued(m))return;const time=m.slot.replace(':','');const end=String(Number(time.slice(0,2))*60+Number(time.slice(2))+10);const minutes=Number(end);const endTime=String(Math.floor(minutes/60)).padStart(2,'0')+String(minutes%60).padStart(2,'0');
  // 19 Nov 2026 Helsinki is UTC+2. Use UTC timestamps to keep the exported time unambiguous.
  const utc=t=>String(Number(t.slice(0,2))-2).padStart(2,'0')+t.slice(2)+'00Z';
  const clean=x=>x.replace(/\\/g,'\\\\').replace(/\n/g,'\\n').replace(/[,;]/g,' ');
  download('synthetic-introduction.ics',['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Common Ground//Synthetic Demo//EN','BEGIN:VEVENT',`UID:synthetic-${meetingKey(m).replaceAll(':','-')}@common-ground.invalid`,'DTSTAMP:20261114T160000Z',`DTSTART:20261119T${utc(time)}`,`DTEND:20261119T${utc(endTime)}`,`SUMMARY:${clean('SYNTHETIC '+person(m).name+' + '+company(m).name)}`,`LOCATION:Demo hall - Table ${company(m).table}`,`DESCRIPTION:${clean('Synthetic introduction. '+company(m).prompt)}`,'END:VEVENT','END:VCALENDAR'].join('\r\n')+'\r\n','text/calendar');
}
$('#reset').onclick=()=>{data=structuredClone(demo);state={meetings:schedule(data),approvals:{},excluded:[],unavailable:[],issued:[],checked:[],log:[]};selected=meetingKey(state.meetings[0]);save();render();notify('Synthetic workspace reset. Local demo confirmations cleared.');};
window.addEventListener('hashchange',()=>{render();$('#main').focus();});
render();
