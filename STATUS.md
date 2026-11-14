NEEDS CHIEF: benchmark weak

Common Ground is being rebuilt as an organiser tool for Espoo recruitment events.
Phase A has frozen scenario labels, real Gemini extraction and cached ESCO mappings.
Deferred acceptance is checked independently after the meetings are placed into times.
Phase B must replace every screen and prove the deployed desktop, phone and offline flows.
This session is the only writer, and every visitor gets an isolated event.

ENTRY: Espoo / Job 02 / Phase A complete, UI pending
DONE: measured engine, data and baselines before the replacement frontend.

## NUMBERS

All values below are measured on synthetic scenario fixtures, not field outcomes. Twenty runs per split; counts pool the meetings across runs.

| Split | Method | Good meetings | Wasted meetings | Mean blocking pairs | Mean group gap |
|---|---|---|---|---|---|
| dev | Common Ground | 63.0% (751/1193) | 30.5% (364/1193) | 0.0 | 0.0 points |
| dev | Keyword CV matching | 26.1% (318/1219) | 55.0% (670/1219) | 20.6 | 0.0 points |
| dev | AI-polished CV ranking | 69.9% (852/1219) | 25.8% (315/1219) | 21.0 | 0.0 points |
| held-out | Common Ground | 70.6% (2508/3551) | 18.6% (661/3551) | 0.0 | 10.8 points |
| held-out | Keyword CV matching | 40.1% (1427/3558) | 46.1% (1640/3558) | 187.3 | 8.1 points |
| held-out | AI-polished CV ranking | 85.4% (3069/3593) | 8.6% (308/3593) | 206.0 | 12.2 points |

Main event after café-card approval: 140 matched and placed, 0 unplaced, 0 blocking pairs. Largest live group gap: 13.5 points.

Café-manager match: Daniela Rojas with Merituuli Grid. Task: Build a simple tracker for late deliveries using the driver export..
perform data analysis: "I compared the totals each week and found that most waste came from sandwiches prepared after lunch."
use spreadsheets software: "I built a spreadsheet that logged everything we threw away, by day and by reason."

Gemini: gemini-3.8-flash, prompt cg-2.1, exact-input and prompt-digest caches. 47 cached outputs so far. Model outputs retain model, prompt version and timestamp. ESCO responses are cached at their official request URLs in cache/esco/. PRH company-name checks are in fixtures/company-name-checks.json.

Spec gaps I filled: shared free time is necessary but insufficient for global placement. The engine reports unplaced pairs, and the product refuses a rebuild if the independent placed-schedule checker finds instability. See eval/v2/PROTOCOL.md. The footer remains the only synthetic-data notice outside Method.

SCREENSHOTS: replacement UI not built yet.
REVIEW: pending independent Astra review after deployed acceptance.
NEXT: replace the UI to the binding spec, deploy and run the full video path.
NEEDS DECISION: none.
BLOCKED: none.
