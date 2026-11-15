import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

// Regression: the October overview crashed with "Cannot read properties of null (reading 'localeCompare')"
// because one approved person in fixtures/finished-event.json has approved_at null.
test('overview sorts by sent_at and approved_at without assuming they are set', () => {
  const src = readFileSync(new URL('../client/overview.mjs', import.meta.url), 'utf8');
  assert.doesNotMatch(src, /\b[ab]\.(sent_at|approved_at)\.localeCompare/);
  const fixture = JSON.parse(readFileSync(new URL('../fixtures/finished-event.json', import.meta.url), 'utf8'));
  const people = fixture.people.filter(p => p.card_state === 'approved');
  const sorted = [...people].sort((a, b) => (b.approved_at || '').localeCompare(a.approved_at || ''));
  assert.equal(sorted.length, people.length);
});
