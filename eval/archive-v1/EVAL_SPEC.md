# Frozen evaluation specification v1

The job is to propose a small synthetic event schedule from organiser-entered evidence tags, availability, capacity and two-sided opt-in. It is not to estimate hiring quality.

Impact and relevance, 45%: a concrete company task is paired with specific transferable work evidence; the meeting ends in a table/time/starter card after both parties agree.

Innovation and user experience, 35%: an organiser can inspect, propose, record agreement, cancel, reassign and print a practical introduction. A missing company need requires clarification. No person is rejected by the app.

Responsible and feasible execution, 20%: synthetic data only; zero eligibility, availability, capacity or double-booking violations in the proposed schedule; unchanged schedules under name/demographic removal, row reorder and wording-only changes with evidence tags held fixed; no hiring/legal/performance claims beyond evidence.

Before implementation audit rules: maximise meeting count among eligible, mutually opted-in pairs, then sum explicit preference rank points, then stable ID tie-break. One meeting per talent, one table per time, company capacity respected. Full coverage of all stated essential tags required. Unknown/missing evidence abstains. Structured tags are asserted fixture facts, not model-inferred competence. No stable-matching claim: global cardinality and preference maximisation can leave blocking pairs. Exact solver is limited to the small demonstration, not claimed to scale to a city event.

Evaluation split by whole scenario family. Dev: transferable skills, vocabulary traps, scarce capacity. Frozen held-out: availability conflict, declined opt-in, incomplete needs, cancellation/reassignment. Four variants per family. No held-out-directed policy changes after its first run. Keyword-CV greedy baseline is a deliberately weak comparator. Independent brute-force cardinality oracle checks the maximum, not an independently labelled relevance ceiling. Counterfactual group swaps and synthetic selection rates are diagnostic, not proof of fairness in a real population.

Binary graders: missing fixture-essential evidence; missing mutual opt-in; invalid time; double booking; capacity; cardinality gap; nuisance changed schedule; stale confirmation. Report denominators, fixture provenance, failures, and local runtime. Any reviewer sees only this specification, code and generated evidence. No user/domain-expert labels exist. Refuse to infer real relevance, legal compliance or adoption.
