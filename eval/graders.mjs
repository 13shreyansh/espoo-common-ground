// These graders intentionally do not import eligibility or scheduling from the policy.
export function allowed(data,m) {
  const p=data.people.find(p=>p.id===m.personId),c=data.companies.find(c=>c.id===m.companyId);
  if(!p||!c||!c.needs.length||!p.choices.includes(c.id)||!c.choices.includes(p.id))return false;
  const tags=new Set(p.evidence.flatMap(e=>e.tags));
  return c.needs.every(n=>tags.has(n));
}
export function grade(data,meetings,{unavailable=[],excluded=[]}={}) {
  const failures=[];const seenPeople=new Set(),seenSlots=new Set(),counts={};
  for(const m of meetings){
    const p=data.people.find(p=>p.id===m.personId),c=data.companies.find(c=>c.id===m.companyId);
    if(!allowed(data,m))failures.push('evidence-or-opt-in');
    if(!p||!c)continue;
    if(unavailable.includes(p.id)||excluded.includes(`${p.id}:${c.id}`))failures.push('cancelled-pair-or-absence');
    if(!data.slots.includes(m.slot)||!p.slots.includes(m.slot)||!c.slots.includes(m.slot))failures.push('availability');
    if(seenPeople.has(p.id))failures.push('talent-double-booking');
    if(seenSlots.has(`${c.table}:${m.slot}`))failures.push('table-double-booking');
    counts[c.id]=(counts[c.id]||0)+1;if(counts[c.id]>c.capacity)failures.push('capacity');
    seenPeople.add(p.id);seenSlots.add(`${c.table}:${m.slot}`);
  }
  return failures;
}
export function cardinalityOracle(data,{unavailable=[],excluded=[]}={}) {
  // Independent exhaustive enumeration by table/time cells rather than talent recursion.
  const cells=data.companies.flatMap(c=>data.slots.filter(s=>c.slots.includes(s)).map(slot=>({c,slot})));
  let best=0;
  function walk(i,people,counts,occupied){
    if(i===cells.length){best=Math.max(best,people.size);return;}
    walk(i+1,people,counts,occupied);
    const {c,slot}=cells[i];if((counts[c.id]||0)>=c.capacity||occupied.has(`${c.table}:${slot}`))return;
    for(const p of data.people){
      if(people.has(p.id)||unavailable.includes(p.id)||excluded.includes(`${p.id}:${c.id}`)||!p.slots.includes(slot)||!allowed(data,{personId:p.id,companyId:c.id}))continue;
      const next=new Set(people);next.add(p.id);const taken=new Set(occupied);taken.add(`${c.table}:${slot}`);walk(i+1,next,{...counts,[c.id]:(counts[c.id]||0)+1},taken);
    }
  }
  walk(0,new Set(),{},new Set());return best;
}
