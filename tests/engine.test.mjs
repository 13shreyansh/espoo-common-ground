import {test} from 'node:test';
import assert from 'node:assert/strict';
import {demo} from '../src/data.mjs';
import {schedule,meetingKey,approvalKey,eligible,violations} from '../src/engine.mjs';
import {grade,cardinalityOracle} from '../eval/graders.mjs';
test('all six demo table slots are used with independent validity check',()=>{
  const meetings=schedule(demo);assert.equal(meetings.length,6);assert.deepEqual(grade(demo,meetings),[]);assert.equal(cardinalityOracle(demo),6);
});
test('candidate absence preserves a mutually agreed meeting and needs no double booking',()=>{
  const original=schedule(demo),locked=[original[0]],absent=original[1].personId;
  const next=schedule(demo,{locked,unavailable:[absent]});assert.deepEqual(grade(demo,next,{unavailable:[absent]}),[]);assert(next.some(m=>meetingKey(m)===meetingKey(locked[0])));
});
test('cancelled pair cannot return and a waiting talent can take the slot',()=>{
  const original=schedule(demo),cancel=original.find(m=>m.companyId==='c1');
  const excluded=[`${cancel.personId}:${cancel.companyId}`],next=schedule(demo,{excluded});
  assert(!next.some(m=>m.personId===cancel.personId&&m.companyId===cancel.companyId));assert(next.some(m=>m.personId==='p7'));assert.equal(next.length,6);
});
test('a time or task edit invalidates exact-meeting agreement key',()=>{
  const m=schedule(demo)[0],d=structuredClone(demo),original=approvalKey(m,d);
  assert.notEqual(original,approvalKey({...m,slot:'15:00'},d));d.companies.find(c=>c.id===m.companyId).task='Different task';assert.notEqual(original,approvalKey(m,d));
});
test('vague needs and one-sided opt-in abstain',()=>{
  const d=structuredClone(demo),p=d.people[0],c=d.companies[0];c.needs=[];assert(!eligible(p,c));c.needs=['data analysis'];p.choices=[];assert(!eligible(p,c));
});
test('infeasible confirmed meeting is refused rather than silently moved',()=>{
  const m=schedule(demo)[0];assert.throws(()=>schedule(demo,{locked:[m],unavailable:[m.personId]}),/confirmed meeting/);
});
test('different companies cannot use the same physical table at the same time',()=>{
  const d=structuredClone(demo);d.companies[1].table=d.companies[0].table;
  const meetings=schedule(d),seen=new Set();
  for(const m of meetings){const c=d.companies.find(c=>c.id===m.companyId);const key=`${c.table}:${m.slot}`;assert(!seen.has(key));seen.add(key);}
  assert.equal(meetings.length,4);assert.equal(cardinalityOracle(d),4);assert.deepEqual(grade(d,meetings),[]);
  const invalid=[{personId:'p1',companyId:'c1',slot:'14:00'},{personId:'p2',companyId:'c2',slot:'14:00'}];
  assert(grade(d,invalid).includes('table-double-booking'));
  assert(violations(d,invalid).includes('table double booked'));
  assert.throws(()=>schedule(d,{locked:invalid}),/confirmed meeting/);
});
