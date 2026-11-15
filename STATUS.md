UI REBUILD / Sun 15 Nov 2026 04:25 Helsinki (02:25 UTC), polish pass included / https://espoo-common-ground.vercel.app

WHAT CHANGED (front end only; server/, src/, matching, ESCO and Gemini calls, persistence and the day-page renderer are untouched):
- New static landing page at `/`: problem at the top, how it works in four steps with real event fragments, honest proof, what it never does, one call to action "Open the Espoo event workspace", one footer line "Synthetic event data". No script or data fetch is needed to paint it. The workspace now starts at `/e/espoo-nov-2026`.
- One visual system across landing, workspace and day page: spruce accent replaces default blue, bordered white inputs and panels replace grey fills, proof lines keep the single amber highlight, mono numerals removed, pill tags, calmer board slips, themed focus rings and selection.
- Workspace structure: overview puts the working table first with "Where things stand" as a side rail; company and person pages get a four-step rail; Method leads the benchmark with stability and fit bars; the not-yet-built fairness table is one sentence instead of repeated cells; report columns align; the phone top bar has a labelled Menu.
- Benchmark wording, landing and Method: 0 blocking pairs against 179 and 223; 72% good meetings against 42% keyword and 87% AI-polished CV ranking, stated as a loss on that measure. Numbers are the held-out rows in the table below.

SPEED (measured, deployed URL, headless Playwright Chromium, cold context, 5 runs each, `scripts/fable-perf.mjs`, results in `screenshots/fable/perf.json`):
- Before: first paint median 200 ms but of an empty skeleton; no first-contentful-paint entry at load; real content visible at median 936 ms (854 to 1193).
- After, landing (with the figures subset): first contentful paint median 224 ms at 1440 wide and 268 ms at 390 wide (max 288). With Chromium network throttling (150 ms latency, 1.6 Mbit/s down): median 668 ms and 664 ms (max 724). 8 requests, 62.3 KB transferred including both fonts.

TESTS: `npm test` 47 of 47 pass, before and after (no assertion needed changing). `node scripts/fable-e2e.mjs` on the deployed URL passes at 1440x900 and 390x844 with no console errors: landing, call to action, company need to questions to three tasks, person stories to evidence card to approval, schedule build (160 meetings, 0 unplaced, 0 blocking pairs), both sides say yes, introduction card, day page saved and reloaded offline, JavaScript-off day page (50,328 bytes without fonts), Method, Report and follow-up. Each run uses an isolated visitor copy that is deleted in `finally`.

FIGURES: digits and the time colon now come from a 3.2 KB self-hosted Public Sans subset (`fonts/digits.woff2`, licence `fonts/OFL-public-sans.md`) with a plain zero, limited by unicode-range to U+0030-003A, scaled 93.3% to Atkinson's figure height, listed ahead of Atkinson in the stack. It applies on landing, workspace and the static day page, and is in the offline cache (cg-day-v5). Zoomed check at regular and bold: `screenshots/fable/figures-zoom-before.png`, `figures-zoom-after.png`.

OTHER RUNNERS on the deployed site (each in an isolated visitor copy deleted in `finally`): `node scripts/e2e-extras.mjs` passes unmodified, 11 checks, no console errors (manual brief fallback, live ESCO search, keyboard help/search/move/build/send, real drag-and-drop, open-slot rail, three agreed meetings fixed on refill, 200 concurrent day-page loads with zero database reads, offline follow-up queue, reduced motion). `node scripts/visual-audit.mjs` passes after being pointed at the new entry path, the figures face and the live palette. Contrast is computed from palette pairs, not sampled per element: text minimum 4.63:1 (success green on its tint); next lowest 5.18 (tertiary ink on sunk), 5.32, 5.58, 6.05; body ink on white 18.29; accent on white 7.91; white on accent 7.91. Graphical marks minimum 3.22:1 (slate on white); baseline comparison bars were darkened from 1.94 to 3.62.

SCREENSHOTS: `screenshots/fable/` (60 captures from the deployed site; `before/` holds the old UI; `CRITIQUE.md` is the critique and direction).
- Desktop first screen: `screenshots/fable/00-landing-desktop.png`
- 390px first screen: `screenshots/fable/00-landing-phone.png`
- Key moment: `screenshots/fable/15-schedule-agreed-desktop.png`

NOT DONE / FRAGILE:
- `scripts/e2e.mjs` (old runner) now opens `/e/espoo-nov-2026` directly; it was not rerun (`scripts/fable-e2e.mjs` is the same flow plus the landing page).
- A returning browser that cached the old stylesheet through the day-page service worker gets the new one after the worker updates (cache name bumped to cg-day-v5); one stale load is possible.
- DESIGN-DIRECTION.md visual prescriptions (colours, sizes, placement) are superseded by this rebuild; its product decisions still hold.

---- Previous status (Job 02) follows ----

NEEDS CHIEF: benchmark weak

ENTRY: Espoo / Job 02 / Sun 15 Nov 2026 02:57 Helsinki / commit HEAD, verified by release.json and health / https://espoo-common-ground.vercel.app

DONE:
- Rebuilt every specified screen around 15 fictional companies, 120 synthetic people, approved proof lines and mutual consent. Retained compatible old engine tests.
- Implemented deferred acceptance, exact slot placement, real Gemini and ESCO calls, persistent state, offline schedules and follow-up syncing. Test workspaces clean up after themselves.
- Deployed through the existing Vercel project; desktop, 390px, offline and independent review pass. The cloud runtime works with this Mac off.

NUMBERS: measured on frozen synthetic scenarios, 20 runs per split. Good means hidden label 4 or 5; wasted means 1 or 2. Gap is the mean largest difference in meeting access between audit groups, in percentage points.

| Split | Method | Good meetings | Wasted meetings | Mean blocking pairs | Mean group gap |
|---|---|---|---|---|---|
| dev | Common Ground | 63.5% (791/1246) | 30.3% (377/1246) | 0.0 | 0.0 |
| dev | Keyword CV matching | 25.0% (318/1272) | 56.8% (723/1272) | 22.6 | 0.0 |
| dev | AI-polished CV ranking | 67.5% (858/1272) | 24.3% (309/1272) | 30.1 | 0.0 |
| held-out | Common Ground | 72.1% (2581/3579) | 17.4% (622/3579) | 0.0 | 11.1 |
| held-out | Keyword CV matching | 41.7% (1501/3600) | 45.6% (1641/3600) | 178.8 | 4.8 |
| held-out | AI-polished CV ranking | 86.6% (3116/3600) | 10.7% (385/3600) | 222.8 | 7.1 |

Common Ground beats keyword matching here, but loses to both the advert-tailored AI baseline and the retained generic control, which measured 84.7%. Labels were frozen in ca410e3 before matching. No label-driven tuning followed. Repeated scenarios and author-written labels do not establish field performance or fairness.

Measured deployed video path: 160 meetings, 0 unplaced, 0 blocking pairs. Café manager Daniela Rojas meets Ruska Health at 14:20, Table 11, for “Document the measurement setup so the team can repeat it.” Her proof includes: “I compared the totals each week and found that most waste came from sandwiches prepared after lunch.” The earlier Phase A fixture build also matched her to Merituuli Grid’s delivery tracker, supported by “I built a spreadsheet that logged everything we threw away, by day and by reason.” These are actual engine results, not fixed pairings.

Verification: 47 tests pass, including 200 random stability fixtures and 150 small strategy-proofness instances. Both deployed viewport flows have no console errors. Static schedules render without JavaScript and reload offline; HTML and stylesheet transfer under 60KB excluding fonts. All 200 concurrent schedule requests returned 200 with zero database reads. Offline follow-up answers synced on reconnect. Text contrast is at least 4.63:1 across the checked pairs; chart marks are at least 3.11:1.

Gemini/ESCO calls used: gemini-3.8-flash for guided questions, three tasks, exact-span evidence, polished CVs and baseline rankings. The committed archive contains 128 successful Gemini responses and 81 official ESCO responses, including request provenance. Prompts are cg-2.1 and cg-evidence-2.2; every output retains model, prompt version and timestamp. The tailored baseline contains 1,800 CVs. The live server has 93 cached ESCO responses, including acceptance-search calls. Live responses are also cached on the server. Failed or timed-out historical attempts are not reconstructed as a precise call total. Three uncached production calls were separately verified for a new brief, tasks and edited story, with fresh timestamps and exact proof spans. Keys are absent from source and logs.

SCREENSHOTS:
- [Desktop](/Users/shreyansh/Documents/ChatGPT/Junction/espoo/artifacts/e2e/01-overview-desktop.png)
- [390px](/Users/shreyansh/Documents/ChatGPT/Junction/espoo/artifacts/e2e/01-overview-phone.png)
- [Both said yes](/Users/shreyansh/Documents/ChatGPT/Junction/espoo/artifacts/e2e/15-schedule-agreed-desktop.png)

All required captures and receipts are in artifacts/e2e/ and screenshots/commonground/.

Spec gaps I filled:
- The overview’s stated vertical budget totals 998px before its actual text wrapping, exceeding the 900px viewport. Fixed readable tokens and ordinary scrolling take precedence over seven full rows above the fold. Astra accepts this documented exception.
- Waiting and Agreed are mutually exclusive tabs. Screenshot 20 has separate anonymous and agreed captures. Likewise, screenshot 18 has separate without-a-meeting and fairness captures because the real list exceeds one viewport.
- The binding event workspace replaces the shared kit’s older “Try the demo account” entry. There is no demo or reset control.
- Sharing one free slot does not guarantee globally feasible placement. Unplaced pairs are counted; an unstable placed result is refused while preserving the previous schedule. All shipped fresh-build fixtures pass.
- Offline caching needs one service-worker installation request. The saved schedule is static, with inline behaviour, local assets and no load-time database query or polling.
- Vercel’s free daily deployment quota was exhausted. A promoted route on the existing project serves the complete isolated cloud release. Runtime release.json and health match HEAD; the older gateway build metadata is distinct.

TASTE-GATE: yes on each item within the binding decisions and explicit exceptions above. Evidence filenames below are in artifacts/e2e/.

| Item | Result | Screenshot evidence |
|---|---|---|
| 1. Professional product | Yes | 01-overview-desktop.png |
| 2. Real working video screens | Yes | 05-company-tasks-desktop.png, 15-schedule-agreed-desktop.png |
| 3. Unstaged entry | Yes, binding direct workspace | 01-overview-desktop.png |
| 4. Working controls and navigation | Yes | 16-schedule-move-desktop.png, 17-schedule-open-slot-desktop.png |
| 5. Real computed numbers | Yes | 18-schedule-fairness-desktop.png, 23-method-benchmark-desktop.png |
| 6. Spec fit | Yes, exceptions listed above | 01-overview-desktop.png, 20-company-meetings-agreed-desktop.png |
| 7. One specified primary action | Yes | 03-company-need-desktop.png, 13-schedule-draft-desktop.png |
| 8. Plain domain wording | Yes | 07-person-stories-desktop.png |
| 9. Clear in five seconds | Yes | 01-overview-desktop.png |
| 10. Calm layout | Yes | 22-method-how-desktop.png |
| 11. No banned visual treatments | Yes | 08-person-card-desktop.png |
| 12. Themed surfaces, no overflow | Yes | 09-person-card-change-desktop.png, 30-schedule-phone.png |
| 13. Full deployed video at both widths | Yes | 01-overview-desktop.png, 01-overview-phone.png; results.json |
| 14. Visible proof and introduction | Yes | 08-person-card-desktop.png, 15-schedule-agreed-desktop.png |
| 15. Smooth, loaded flow | Yes | 12-schedule-build-round-desktop.png |
| 16. Fresh data, no test leftovers | Yes | 01-overview-desktop.png; isolated cleanup receipts |
| 17. No raw internals on screen | Yes | 20-company-meetings-anonymous-desktop.png |
| 18. Content loaded before capture | Yes | 06-company-zero-desktop.png |
| 19. Works with Mac off | Yes, cloud hosted | 26-day-offline-phone.png; deployment.json |

REVIEW: Independent gpt-6-astra passes spec-fit and build-quality review. Earlier consent, privacy, persistence, editing, reporting and cloud credential defects are fixed and regression-tested. Benchmark remains weak; literal screenshot conflicts are documented. Phone acceptance is Chromium at 390px, not a physical-device claim. Real deployment still needs authenticated invitations, encrypted origin transport and an AI Act assessment before a pilot.

NEXT: propose an independently human-labelled evaluation before making a superiority claim or starting a real participant pilot.
NEEDS DECISION: none.
BLOCKED: none.
