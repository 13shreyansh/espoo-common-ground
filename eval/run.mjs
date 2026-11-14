import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {dirname} from 'node:path';
import {createHash} from 'node:crypto';
import {performance} from 'node:perf_hooks';
import {schedule,keywordBaseline,meetingKey,approvalKey} from '../src/engine.mjs';
import {grade,allowed,cardinalityOracle} from './graders.mjs';
const fixtures=JSON.parse(await readFile('eval/fixtures.json','utf8'));
const hash=async path=>createHash('sha256').update(await readFile(path)).digest('hex');
const canonical=ms=>ms.map(meetingKey).sort().join('|');
const metrics=()=>({total:0,valid:0,baselineValid:0,optimal:0,meetings:0,baselineMeetings:0,eligibleBaselinePairs:0});
const results={auditNote:'Physical-table occupancy corrected after fresh review; original first audit/policy/grader preserved in eval/archive-v1. This is a known-set replay, not a newly untouched held-out audit.',version:'audit-v1.1-known-set-replay',at:new Date().toISOString(),provenance:fixtures.provenance,dev:metrics(),heldout:metrics(),nuisance:{total:0,passed:0},cancellation:{total:0,passed:0},fairness:{},traces:[],failures:[],timing:{policyMs:0,runs:0},hashes:{}};
const familySplits={};
for(const fixture of fixtures.scenarios){
  if(familySplits[fixture.family]&&familySplits[fixture.family]!==fixture.split)throw Error('Family leakage');
  familySplits[fixture.family]=fixture.split;
  const d=fixture.data,start=performance.now(),meetings=schedule(d);results.timing.policyMs+=performance.now()-start;results.timing.runs++;
  const baseline=keywordBaseline(d),failures=grade(d,meetings),baselineFailures=grade(d,baseline),oracle=cardinalityOracle(d);
  const slice=results[fixture.split];slice.total++;slice.valid+=Number(!failures.length);slice.baselineValid+=Number(!baselineFailures.length);slice.optimal+=Number(meetings.length===oracle);slice.meetings+=meetings.length;slice.baselineMeetings+=baseline.length;slice.eligibleBaselinePairs+=baseline.filter(m=>allowed(d,m)).length;
  const trace={id:fixture.id,family:fixture.family,split:fixture.split,meetings,baseline,oracle,failures,baselineFailures,nuisance:[]};
  for(const kind of ['rename','demographic-removal','reorder','rephrase','cv-polish','group-swap']){
    const clone=structuredClone(d);
    if(kind==='rename')for(const p of clone.people)p.name='Unrelated name '+p.id;
    if(kind==='demographic-removal')for(const p of clone.people){delete p.auditGroup;delete p.background;delete p.name;p.nationality='ignored fixture field';delete p.nationality;}
    if(kind==='reorder'){clone.people.reverse();clone.companies.reverse();clone.slots.reverse();for(const p of clone.people)p.evidence.reverse();}
    if(kind==='rephrase'){for(const c of clone.companies)c.task='Wording-only variant of the same structured needs.';for(const p of clone.people)for(const e of p.evidence){e.title='Equivalent sample wording';e.text='Same stated tags, different prose.';}}
    if(kind==='cv-polish')for(const p of clone.people)p.cv='Senior world-class analysis planning documentation task guide dashboard professional.'.repeat(4);
    if(kind==='group-swap')for(const p of clone.people)p.auditGroup=p.auditGroup==='career change'?'direct path':'career change';
    const pass=canonical(schedule(clone))===canonical(meetings);results.nuisance.total++;results.nuisance.passed+=Number(pass);trace.nuisance.push({kind,pass});if(!pass)results.failures.push(`${fixture.id}:${kind}`);
  }
  for(const p of d.people){const group=results.fairness[p.auditGroup]||={eligible:0,selected:0};
    if(d.companies.some(c=>allowed(d,{personId:p.id,companyId:c.id})&&d.slots.some(s=>p.slots.includes(s)&&c.slots.includes(s)))){group.eligible++;group.selected+=Number(meetings.some(m=>m.personId===p.id));}}
  if(fixture.cancellation){
    const unavailable=fixture.cancellation.unavailable;
    const locked=meetings.filter(m=>!unavailable.includes(m.personId)).slice(0,1);
    const next=schedule(d,{unavailable,locked});
    const original=meetings[0];const cancelledPair=original?[`${original.personId}:${original.companyId}`]:[];
    const replacement=schedule(d,{excluded:cancelledPair});
    const firstChecks={id:fixture.id,kind:'absence-and-lock',pass:!grade(d,next,{unavailable}).length&&locked.every(m=>next.some(n=>meetingKey(n)===meetingKey(m))),meetings:next,locked};
    const secondChecks={id:fixture.id,kind:'cancel-and-reassign',pass:!grade(d,replacement,{excluded:cancelledPair}).length&&replacement.length===cardinalityOracle(d,{excluded:cancelledPair}),meetings:replacement,excluded:cancelledPair};
    for(const check of [firstChecks,secondChecks]){results.cancellation.total++;results.cancellation.passed+=Number(check.pass);results.traces.push(check);if(!check.pass)results.failures.push(`${check.id}:${check.kind}`);}
    if(original){const moved={...original,slot:original.slot==='14:00'?'14:15':'14:00'};const changed=structuredClone(d);changed.companies.find(c=>c.id===original.companyId).task+=' changed';const pass=approvalKey(original,d)!==approvalKey(moved,d)&&approvalKey(original,d)!==approvalKey(original,changed);results.cancellation.total++;results.cancellation.passed+=Number(pass);if(!pass)results.failures.push(`${fixture.id}:stale-confirmation`);}
  }
  if(failures.length||meetings.length!==oracle)results.failures.push(fixture.id);
  results.traces.push(trace);
}
results.familySplits=familySplits;
results.timing.meanPolicyMs=results.timing.policyMs/results.timing.runs;
results.timing.environment=`Node ${process.version}; local ${process.platform}/${process.arch}; single pass; not a service latency benchmark`;
for(const p of ['src/engine.mjs','eval/fixtures.json','eval/graders.mjs','EVAL_SPEC.md'])results.hashes[p]=await hash(p);
const output='work/replay-results.json';
await mkdir(dirname(output),{recursive:true});
await writeFile(output,JSON.stringify(results,null,2)+'\n');
const sealed=JSON.parse(await readFile('eval/results.json','utf8'));
for(const key of ['dev','heldout','nuisance','cancellation','fairness','familySplits'])if(JSON.stringify(sealed[key])!==JSON.stringify(results[key]))throw Error(`Replay differs from sealed evidence: ${key}`);
console.log(`Known-set replay written to ${output}; sealed results were not overwritten.`);
console.log(JSON.stringify({dev:results.dev,heldout:results.heldout,nuisance:results.nuisance,cancellation:results.cancellation,fairness:results.fairness,failures:results.failures,timing:results.timing,hashes:results.hashes},null,2));
if(results.failures.length)process.exitCode=1;
