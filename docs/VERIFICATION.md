# Public browser verification

The Chief Codex verified [the public deployment](https://espoo-common-ground.vercel.app/) using only Codex's inbuilt browser on 14 November 2026, approximately 18:27–18:30 Helsinki. This project chat's IAB was unavailable, so the project owner reads and preserves the Chief's observed evidence rather than claiming to have run those browser interactions personally.

Tested code: `9575f5ac79dc5544ff9041785b3fae8b3440801a`. Vercel production deployment: `dpl_5uHtDNj5UmMgr2RGmhBDUJ28cJ8W`. Framework Other, build `npm run build`, output `dist`, no environment variables. The IAB report observed production readiness after eight seconds; this is one deployment observation, not an app performance benchmark. Documentation-only commits are recorded separately in release status.

| Public flow | Observed result |
|---|---|
| First screen | Six proposed meetings, three tables, synthetic disclosure, concrete Loop Kitchen task and Talent 01 café sample |
| Separate agreement | Talent yes alone kept card creation disabled; company yes enabled it |
| Card and handoff | Table A, 14:00, opening question and welcome-desk directions visible |
| Calendar | Download parsed as 19 Nov 12:00–12:10 UTC, equivalent to 14:00–14:10 Helsinki; synthetic talent/company and table correct; no invitation sent |
| Demo introduction | Status became Introduced with explicit synthetic-demo wording |
| Cancellation and replacement | Talent 01 cancelled, Talent 07 replacement at 14:15/Table A had fresh unanswered consent; unrelated agreed Talent 02 at 14:00/Table B stayed fixed |
| Absence | Marking Talent 02 unavailable removed its meeting and confirmations; next proposal had five meetings |
| Task and mapping edits | Reviewed change to research/prototyping cleared old approvals and removed stale Loop Kitchen eligibility; four meetings remained |
| Audit and baseline | Results, known-set replay disclosure, archived bug, unresolved 24.19 percentage-point access gap and current-state baseline comparison visible |
| CSV | Download parsed with six synthetic rows, correct table/time and card-ready versus pending statuses |
| Persistence and reset | State persisted in a new IAB tab; reset persisted through reload and returned zero cards |
| Desktop and mobile | 1440×1000 desktop and 390×844 mobile inspected; mobile document width and scroll width both 390, with navigation scrolling inside its row |

## Print/PDF limitation

The Print card click invoked a blocking IAB print interaction and the click timed out. Escape produced no observable print UI. The Chief closed only the temporary test tab and resumed in a fresh IAB tab. Print/PDF output is **not verified**, and no physical print job was submitted. This is a verification limitation; it proves neither that printing works nor that it is broken. The passing jsdom check only establishes that the code invokes `window.print`, not that browser print output is correct.

## Captures and scope

[Desktop capture](proof/desktop.jpg), [mobile capture](proof/mobile.jpg), [mobile audit capture](proof/audit-mobile.jpg). These are synthetic demo screens captured by the Chief. The project owner inspected the desktop/mobile captures in a bounded final review and found no new release-blocking visual issue. No further live features, policy changes or audit tuning followed.

Viewport overrides and synthetic workspace were reset at the end. No applicant data, final competition form, Discord message, public video publication, purchase or account-setting change was involved. This evidence does not establish real hiring quality, fairness, legal compliance, participant-authenticated consent, scale or concurrent multi-user behavior.
