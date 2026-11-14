// Small-event exact scheduling. No CV text or demographic fields enter this module's policy.
export const pairId = (person, company) => `${person.id}:${company.id}`;
const compare = (a, b) => a < b ? -1 : a > b ? 1 : 0;
export function explanation(person, company) {
  return company.needs.map(need => ({
    need,
    evidence: person.evidence.filter(item => item.tags.includes(need))
  }));
}
export function eligible(person, company) {
  return company.needs.length > 0 && person.choices.includes(company.id) &&
    company.choices.includes(person.id) &&
    explanation(person, company).every(item => item.evidence.length > 0);
}
export function meetingKey(m) { return `${m.personId}:${m.companyId}:${m.slot}`; }
export function approvalKey(m, data) {
  const p = data.people.find(p => p.id === m.personId);
  const c = data.companies.find(c => c.id === m.companyId);
  return JSON.stringify([meetingKey(m), p.name, c.name, c.table, c.task, explanation(p, c), data.event]);
}
export function schedule(data, {excluded = [], unavailable = [], locked = []} = {}) {
  const people = [...data.people].sort((a,b) => compare(a.id,b.id));
  const companies = [...data.companies].sort((a,b) => compare(a.id,b.id));
  const excludedSet = new Set(excluded);
  const absent = new Set(unavailable);
  const occupied = new Set();
  const usedPeople = new Set();
  const counts = new Map();
  const initial = [];
  for (const m of locked) {
    const p = people.find(p => p.id === m.personId), c = companies.find(c => c.id === m.companyId);
    if (!p || !c || !eligible(p,c) || absent.has(p.id) || excludedSet.has(pairId(p,c)) ||
        !p.slots.includes(m.slot) || !c.slots.includes(m.slot) || !data.slots.includes(m.slot) ||
        occupied.has(`${c.id}:${m.slot}`) || usedPeople.has(p.id) || (counts.get(c.id) || 0) >= c.capacity) {
      throw new Error('A confirmed meeting conflicts with availability, capacity or current evidence. Review it before replanning.');
    }
    initial.push({...m}); occupied.add(`${c.id}:${m.slot}`); usedPeople.add(p.id);
    counts.set(c.id, (counts.get(c.id) || 0) + 1);
  }
  let best = null;
  function value(meetings) {
    let preference = 0;
    for (const m of meetings) {
      const p = people.find(p => p.id === m.personId), c = companies.find(c => c.id === m.companyId);
      preference += p.choices.length - p.choices.indexOf(c.id);
      preference += c.choices.length - c.choices.indexOf(p.id);
    }
    return preference;
  }
  function visit(index, meetings) {
    if (best && meetings.length + people.length - index < best.meetings.length) return;
    if (index === people.length) {
      const sorted = [...meetings].sort((a,b) => compare(meetingKey(a),meetingKey(b)));
      const score = value(sorted), signature = sorted.map(meetingKey).join('|');
      if (!best || sorted.length > best.meetings.length || sorted.length === best.meetings.length &&
          (score > best.preference || score === best.preference && signature < best.signature)) {
        best = {meetings: sorted, preference: score, signature};
      }
      return;
    }
    const p = people[index];
    if (usedPeople.has(p.id) || absent.has(p.id)) return visit(index + 1, meetings);
    for (const c of companies) {
      if (!eligible(p,c) || excludedSet.has(pairId(p,c)) || (counts.get(c.id) || 0) >= c.capacity) continue;
      for (const slot of [...data.slots].sort(compare)) {
        const key = `${c.id}:${slot}`;
        if (!p.slots.includes(slot) || !c.slots.includes(slot) || occupied.has(key)) continue;
        occupied.add(key); counts.set(c.id, (counts.get(c.id) || 0) + 1);
        meetings.push({personId:p.id, companyId:c.id, slot});
        visit(index + 1, meetings);
        meetings.pop(); occupied.delete(key); counts.set(c.id, counts.get(c.id) - 1);
      }
    }
    visit(index + 1, meetings);
  }
  visit(0, initial);
  return best.meetings.sort((a,b) => compare(a.slot,b.slot) || compare(a.companyId,b.companyId));
}
export function violations(data, meetings) {
  const errors = [], people = new Set(), tables = new Set(), counts = new Map();
  for (const m of meetings) {
    const p = data.people.find(p => p.id === m.personId), c = data.companies.find(c => c.id === m.companyId);
    if (!p || !c) { errors.push('unknown entity'); continue; }
    if (!eligible(p,c)) errors.push('missing evidence or mutual opt-in');
    if (!data.slots.includes(m.slot) || !p.slots.includes(m.slot) || !c.slots.includes(m.slot)) errors.push('availability');
    if (people.has(p.id)) errors.push('talent double booked');
    if (tables.has(`${c.id}:${m.slot}`)) errors.push('table double booked');
    people.add(p.id); tables.add(`${c.id}:${m.slot}`);
    counts.set(c.id, (counts.get(c.id) || 0) + 1);
    if (counts.get(c.id) > c.capacity) errors.push('capacity');
  }
  return errors;
}
export function keywordBaseline(data) {
  // Deliberately simple CV-keyword shortlist, allocated greedily to free slots.
  const options = [];
  for (const p of data.people) for (const c of data.companies) {
    const terms = `${c.task} ${c.needs.join(' ')}`.toLowerCase().match(/[a-z]{3,}/g) || [];
    const text = p.cv.toLowerCase();
    const hits = [...new Set(terms)].filter(t => text.includes(t)).length;
    if (hits) options.push({p,c,hits});
  }
  options.sort((a,b) => b.hits-a.hits || compare(pairId(a.p,a.c), pairId(b.p,b.c)));
  const meetings = [], used = new Set(), occupied = new Set(), counts = new Map();
  for (const {p,c} of options) {
    if (used.has(p.id) || (counts.get(c.id)||0) >= c.capacity) continue;
    const slot = data.slots.find(s => p.slots.includes(s) && c.slots.includes(s) && !occupied.has(`${c.id}:${s}`));
    if (!slot) continue;
    meetings.push({personId:p.id, companyId:c.id, slot});
    used.add(p.id); occupied.add(`${c.id}:${slot}`); counts.set(c.id,(counts.get(c.id)||0)+1);
  }
  return meetings;
}
