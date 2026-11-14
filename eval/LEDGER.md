# Evaluation ledger

## Audit v1 and v1.1 replay

Policy, fixture and grader hashes are recorded in [results.json](results.json). The original first audit is preserved in [archive-v1](archive-v1/results.json), with its original policy, grader, runner and spec. A fresh reviewer subsequently found that physical tables were keyed by company ID. That defect was fixed in the policy and both graders, and an explicit shared-table regression was added. The current results are a known-set replay after that fix. Held-out scenarios were already observed; this replay is not new untouched evidence. Fixture and spec hashes stayed unchanged; policy and grader hashes changed. Archive runner source is provenance, not a standalone runnable entry point. Initial commit 6285396 reproduces the original layout. Reproducing the audit changes its timestamp and local runtime, not expected decisions.

The same builder authored the policy and synthetic scenario families. No independent human, recruiter or domain-expert labels exist. A fresh code reviewer may inspect spec and evidence separately; that is not external hiring-quality validation. No model inference or LLM grader was run, and no human agreement percentage is claimed.

| Version | Change | Dev | Held-out | Cost | Local policy runtime |
|---|---|---|---|---|---|
| keyword-v1 | Greedy CV substring hits with free time/capacity | 3/12 fully valid schedules, 15/32 eligible pairs | 8/16 fully valid schedules, 19/31 eligible pairs | No model/API calls | Not separately benchmarked |
| evidence-v1, archived | Explicit essential tags, mutual interest, exact schedule search | 12/12 valid, 12/12 oracle cardinality, 26 meetings | 16/16 valid, 16/16 oracle cardinality, 41 meetings | No model/API calls | First audit 1.5693 ms total / 28 policy runs, mean 0.0560 ms on Node 24.21, darwin/arm64; single pass |

| evidence-v1.1, known-set replay | Key occupancy by physical table; shared-table regression added | 12/12 valid, 12/12 oracle cardinality, 26 meetings | 16/16 valid, 16/16 oracle cardinality, 41 meetings | No model/API calls | 1.6076 ms total / 28 runs, mean 0.0574 ms; same local environment |

Timing covers policy calls only on tiny local fixtures. It excludes the browser, network, human review and the independent oracle. It is not a production latency or scale claim. The exact original first-run timing is in archive-v1/results.json; the corrected known-set replay timing is in results.json.

## Frozen split and checks

Dev families: transferable evidence, vocabulary traps, scarce capacity. Held-out families: availability conflict, declined opt-in, incomplete needs, cancellation/reassignment. Four constructed variants per family; no family appears in both partitions. These share a base toy event schema, so this split tests disruption-family variation, not generalisation across independent real events.

Each primary trace checks essential evidence, mutual interest, time availability, talent/table double booking and company capacity. A separate exhaustive enumerator walks table/time cells to verify cardinality. It shares the stated fixture specification but does not call the policy's eligibility or scheduling code. This is a feasibility oracle, not a human relevance ceiling.

168 nuisance checks: 28 fixtures × rename, removal of name/background/audit group, row/slot reorder, prose rephrasing with tags fixed, inflated CV prose, and group-label swap. 168/168 left the meeting allocation unchanged. The wording check holds structured meaning fixed; it does not test natural-language understanding. The policy performs no natural-language interpretation.

12 cancellation checks: four held-out cancellation variants × absence with one surviving meeting locked, pair cancellation with reassignment and maximum cardinality, and approval-key changes for time/task edits. 12/12 passed. The approval-key checks compare identifiers; complete interface gating is covered separately by DOM workflow tests.

## Trace review and taxonomy

The builder inspected all 28 primary trace summaries and eight cancellation/reassignment trace summaries. This is an AI builder review, not human annotation. No synthetic assertion is described as a human label.

| First observed issue | Trace evidence | Count | Disposition |
|---|---|---:|---|
| Keyword prose allocates an unsupported or non-mutually-selected pair | transfer-0 through transfer-3, vocabulary-0 through vocabulary-3, scarcity-3, opt-in-0 through opt-in-3, incomplete-0 through incomplete-3 | 17/28 baseline schedules; 29/63 baseline pairs | Evidence policy checks these explicitly; 0/28 violations observed |
| Scarce slots leave eligible talent without an introduction | Aggregate selection counts below | 13/80 eligible fixture entries without slots | Not solved by conformance; organiser follow-up required |
| Missing or unknown evidence leaves no eligible meeting | incomplete-2 | 1/28 empty schedules | Correct abstention under this policy; still a product limitation for a learner |
| Semantically repeated variants can overstate diversity | transfer/vocabulary and cancellation variants repeat decisions | Several variants | Publish family count and construction. Do not call the 28 rows independent events |

The original fixtures did not catch the physical-table collision. The fresh reviewer constructed two companies sharing one table/time; the original policy, validator and oracle all accepted the collision. This is a shared-specification blind spot. The corrected release prevents it and adds a regression checking the schedule, both validators, cardinality and conflicting locked meetings. Original fixture counts remain unchanged. No claim of completeness follows from either audit.

## Synthetic group diagnostic and unresolved failure

Denominator: each fixture person who has at least one mutually chosen company, complete required evidence and one shared time, before table capacity. The same constructed individual pattern appears in multiple fixtures. This is not a population estimate.

| Fixture group | Selected / eligible | Selection rate |
|---|---:|---:|
| Career change | 40/42 | 95.24% |
| Direct path | 27/38 | 71.05% |

Absolute gap 24.19 percentage points. Group swaps leave allocations unchanged, yet preference and stable-ID tie-breaking plus capacity create unequal synthetic selection rates. This is published as an unresolved allocation failure. Labels never enter the policy. No fairness, legal compliance or hiring-quality claim follows from this check. Language, nationality and other real-world fairness slices require consented, reviewed pilot evidence.

## Next evidence needed

Observe whether real, consented participants can describe samples and understand the why-you-two explanation. Validate essential tags with employers and domain experts. Test an organiser-reviewed allocation policy for scarce slots, including access for newcomers and incomplete evidence. Run independently authored events, larger performance tests, secure multi-user agreement, and privacy/legal review before a real pilot.

## Independent review provenance and resolution

[REVIEW.md](REVIEW.md) preserves the fresh-context review and its bounded follow-up. The reviewer received only the specification and project evidence, never the builder conversation. This is a same-model-family AI review because Fable was unavailable. It is not human or independent-domain validation. It reproduced primary traces and hashes, independently enumerated 100 small cases for the objective, discovered the shared physical-table blind spot, and checked the fix. It refused visual, live-deployment, real-hiring, fairness and legal conclusions without evidence. The owner corrected the timing reference and added the missing policy-validator regression assertion mentioned in its follow-up. The review's historical wording is preserved.

`npm run eval` now writes only to gitignored work/replay-results.json and checks summary counts against the sealed release. It does not overwrite this audit. `npm run verify:audit` checks FINAL_FREEZE.json's artifact hashes. Sealing proves file identity, not historical preregistration or absence of undisclosed experimentation.
