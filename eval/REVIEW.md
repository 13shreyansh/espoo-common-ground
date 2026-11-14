# Independent code and evidence review

Reviewed 14 November 2026 in a fresh agent context. The reviewer received the specification and inspectable project files, not the builder conversation. This is a same-model-family AI review. Fable was not available in the tool model list. It is not external human or domain-expert validation. I used the unslop writing skill. I did not open a browser, access accounts, modify project source or evaluation artifacts, or edit the coordination bridge.

Initial evidence read: EVAL_SPEC.md, README.md, eval/LEDGER.md, eval/results.json, eval/fixtures.json, src/engine.mjs, src/app.mjs, tests/engine.test.mjs and tests/workflow.test.mjs. I also inspected the independent grader and audit runner to check the measurement claims.

## Finding recorded before remediation

**P2: Physical table collisions pass the scheduler and both audits.** Original locations: src/engine.mjs:34, :37, :66, :87, :88; eval/graders.mjs:17, :19, :25. Occupancy uses company ID and time. The public specification requires one table per time. Two distinct companies can therefore share table A at 14:00 and each receive a meeting. The scheduler returns two meetings; `violations` and `grade` both return `[]`; the supposedly independent cardinality oracle returns `2`.

This does not affect the prepared demo or the 28 frozen fixtures, which use distinct company table labels. It is a missed constraint and a shared grader blind spot. Fix by tracking physical table and time separately from company identity and capacity, or explicitly reject duplicate physical table assignments before scheduling. Check locked meetings and the baseline too. Add a fixture with two companies sharing one physical table and only one available slot. The optimum must be one and an externally supplied two-meeting schedule must fail grading.

Exact read-only reproduction from the project root, before remediation:

```sh
node --input-type=module <<'EOF'
import {schedule, violations} from './src/engine.mjs';
import {grade, cardinalityOracle} from './eval/graders.mjs';
const d={
  event:{name:'table collision',synthetic:true},slots:['14:00'],
  companies:[
    {id:'c0',table:'A',needs:['x'],choices:['p0'],slots:['14:00'],capacity:1},
    {id:'c1',table:'A',needs:['x'],choices:['p1'],slots:['14:00'],capacity:1}
  ],
  people:[
    {id:'p0',choices:['c0'],slots:['14:00'],evidence:[{tags:['x']}]},
    {id:'p1',choices:['c1'],slots:['14:00'],evidence:[{tags:['x']}]}
  ]
};
const meetings=schedule(d);
console.log({meetings,violations:violations(d,meetings),grade:grade(d,meetings),oracle:cardinalityOracle(d)});
EOF
```

Observed output contained p0/c0/14:00 and p1/c1/14:00, with empty violation arrays and oracle 2. Both meetings use physical table A.

## Checks and limits

- `npm test` passed all 7 tests. After the task-mapping UI update, I reread the changed app and workflow test and reran the suite. All 7 still passed. These are Node and jsdom checks, not real-browser evidence.
- A read-only replay reproduced all 28 saved primary schedules, keyword-baseline schedules and oracle counts. All four recorded SHA-256 hashes matched the inspected policy, fixture, grader and specification files. I did not run `npm run eval`, because it overwrites the frozen results.
- A separate small enumerator agreed with the scheduler's full cardinality, preference-points and stable-ID objective in 100 deterministic, generated four-person/two-company cases with distinct tables. This supports the objective implementation for those small cases. It does not establish scale.
- The app gates card creation on both exact-key approvals, and gates calendar and check-in on issuance. The exact approval key includes meeting identity/time, names, table, task, matched evidence and event. Cancel deletes approvals, issuance and check-in for that meeting, removes it from the proposal and excludes the pair from replanning. Absence removes the person's meeting and approvals. Replanning locks mutually approved meetings. Source and the passing DOM flow support these local simulated behaviors.
- The changed task-mapping form requires a fresh organiser-review checkbox to use its selected essential tags. Saving without review empties that company's mapping. Any task/mapping change clears prior approvals, issued cards and check-ins. This avoids reusing approval for edited task meaning. I found no additional consent-gating defect in the inspected supported flows.
- The ledger accurately identifies builder-authored synthetic assertions, a weak baseline, no LLM inference, no human labels, repeated family constructions, one empty schedule and the unequal synthetic selection rates. The reported aggregate denominators match the saved evidence. Hash agreement and replay establish file/result consistency; they cannot independently prove the historical first-run freeze or absence of earlier held-out tuning.
- The independent oracle only checks cardinality, as disclosed. Its separate implementation did not prevent the shared physical-table assumption above. No real relevance ceiling follows from the oracle.

Visual quality, responsive layout, accessibility in an actual browser, print layout, browser downloads/calendar import and live deployment are **unassessed**. I refuse to assess those without actual browser evidence. jsdom does not render a usable browser interface. Release status explicitly left public deployment and browser verification unconfirmed when inspected.

Real hiring relevance, employment outcomes, adoption, fairness in a population, legal compliance, consent authenticity, participant authentication and multi-user operation are **unassessed**. The synthetic fixtures cannot establish them. This review does not authorize making those claims.

The policy fix proposed in response to this review will use known held-out material. Preserve the original audit and finding, label any changed-policy rerun as a replay, and avoid describing that rerun as an untouched held-out result.

## Bounded follow-up after remediation

The owner requested a second read-only check of the physical-table fix. I inspected the changed policy, graders, regression test, README, ledger, UI audit copy and video script. I did not rerun the full audit or overwrite either results file. I did not repeat the broad test round or use a browser.

The exact original two-company, one-table, one-slot reproduction now returns only p0/c0/14:00. The oracle returns 1. Supplying both colliding meetings produces `table-double-booking` from the independent grader and `table double booked` from the policy validator. Supplying them as locked meetings throws the confirmed-meeting conflict error. A keyword-baseline variant with matching CV/task prose also returns only one meeting. The fix covers normal allocation, locked allocation, both validators, the baseline and the oracle. The original P2 finding is resolved for this reproduction.

The original archived policy, grader and specification match the SHA-256 hashes in eval/archive-v1/results.json. The unchanged fixtures also match that archive. All recorded current release hashes match the current files. The original finding and evidence above remain preserved.

The current result identifies itself as `audit-v1.1-known-set-replay` and explicitly states that it follows reviewer-discovered remediation. README.md:60, eval/LEDGER.md:5, the audit note rendered by src/app.mjs:129 and docs/VIDEO_SCRIPT.md:11 all disclose that known held-out cases were replayed. They do not claim a new untouched held-out audit. The unchanged historical specification is understandable alongside that disclosure.

Two small evidence-description corrections were reported to the owner. At inspection, eval/LEDGER.md:16 still pointed to current results.json for the exact original first-run timing; the original timing now belongs to archive-v1/results.json. At eval/LEDGER.md:39 the ledger said the new regression checks both validators, but the regression in tests/engine.test.mjs asserted `grade` and did not import or assert `violations`. My independent probe checked both successfully. Correct the wording or add that missing assertion. Neither issue blocks the demonstrated local prototype behavior.

No release-blocking code concern was found in this bounded follow-up. This is not a general release approval. The original unassessed areas, including real-browser behavior and live deployment, remain unassessed.
