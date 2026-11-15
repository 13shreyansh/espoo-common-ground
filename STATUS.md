NEEDS CHIEF: benchmark weak

Common Ground is being rebuilt as an organiser tool for Espoo recruitment events.
Phase A has frozen scenario labels, real Gemini extraction and cached ESCO mappings.
Deferred acceptance is checked independently after the meetings are placed into times.
Phase B screens are implemented; deployed desktop, phone, offline and independent review corrections are in progress.
This session is the only writer, and every visitor gets an isolated event.

ENTRY: Espoo / Job 02 / Phase B verification in progress
DONE: measured engine, data and baselines before the replacement frontend.

## NUMBERS

All values below are measured on synthetic scenario fixtures, not field outcomes. Twenty runs per split; counts pool the meetings across runs.

| Split | Method | Good meetings | Wasted meetings | Mean blocking pairs | Mean group gap |
|---|---|---|---|---|---|
| dev | Common Ground | 63.5% (791/1246) | 30.3% (377/1246) | 0.0 | 0.0 points |
| dev | Keyword CV matching | 25.0% (318/1272) | 56.8% (723/1272) | 22.6 | 0.0 points |
| dev | AI-polished CV ranking | 67.5% (858/1272) | 24.3% (309/1272) | 30.1 | 0.0 points |
| held-out | Common Ground | 72.1% (2581/3579) | 17.4% (622/3579) | 0.0 | 11.1 points |
| held-out | Keyword CV matching | 41.7% (1501/3600) | 45.6% (1641/3600) | 178.8 | 4.8 points |
| held-out | AI-polished CV ranking | 86.6% (3116/3600) | 10.7% (385/3600) | 222.8 | 7.1 points |

Main event after café-card approval: 140 matched and placed, 0 unplaced, 0 blocking pairs. Largest live group gap: 13.5 points.

Café-manager match: Daniela Rojas with Merituuli Grid. Task: Build a simple tracker for late deliveries using the driver export..
perform data analysis: "I compared the totals each week and found that most waste came from sandwiches prepared after lunch."
use spreadsheets software: "I built a spreadsheet that logged everything we threw away, by day and by reason."

Gemini: gemini-3.8-flash, prompt cg-2.1, exact-input and prompt-digest caches. 62 cached outputs so far. Model outputs retain model, prompt version and timestamp. ESCO responses are cached at their official request URLs in cache/esco/. PRH company-name checks are in fixtures/company-name-checks.json.

Spec gaps I filled: shared free time is necessary but insufficient for global placement. The engine reports unplaced pairs, and the product refuses a rebuild if the independent placed-schedule checker finds instability. See eval/v2/PROTOCOL.md. The footer remains the only synthetic-data notice outside Method.

SCREENSHOTS: first deployed captures are in artifacts/e2e/; acceptance is not claimed until the corrected commit passes.
REVIEW: Astra initial review requested changes. Reproducing regression tests now pass; final independent verification is pending.
NEXT: deploy the review corrections, complete both video-path tests, then obtain the final Astra verdict.
NEEDS DECISION: none.
BLOCKED: none.
