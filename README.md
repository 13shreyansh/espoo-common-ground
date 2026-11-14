# Common Ground

## Judge quick path

| Criterion | Try it | Inspect the proof |
|---|---|---|
| Impact & relevance, 45% | At the introduction desk, open Talent 01 + Loop Kitchen. Read the kitchen task beside the café waste-tracker sample. | [Synthetic event](src/data.mjs), [why-you-two policy](src/engine.mjs), video script 0:18–0:43 |
| Innovation & UX, 35% | Record talent's yes and company's yes, create a card, print it or save the calendar entry. Cancel a meeting and build a replacement proposal. | [Interface](src/app.mjs), [workflow tests](tests), video script 0:43–1:24 |
| Responsible & feasible execution, 20% | Open Audit & limits. Compare the CV keyword baseline, inspect the family split, read the selection-rate gap. | [Specification](EVAL_SPEC.md), [ledger and failures](eval/LEDGER.md), [fresh-context review](eval/REVIEW.md), [frozen traces](eval/results.json), [fixtures](eval/fixtures.json) |

An organiser's desk for a small Espoo recruitment event. Concrete company needs meet transferable work evidence, then both people agree to a practical in-person introduction. Built for Junction 2026 by Shreyansh, team The CS Guy. Independent prototype, no official City of Espoo affiliation implied.

The running demo contains fictional companies, fictional work samples, seven talent entries, three active tables and six available meeting slots. No real applicants, model API, CV upload or automatic employment decision. The numbers describe synthetic rule conformance, not hiring quality or observed real meetings.

## Run and reproduce

Node 24+ is required for the verified development workflow. Runtime has no third-party dependency. The development dependency is jsdom for DOM workflow verification.

```sh
npm ci
npm test
npm run eval
npm run build
npm run dev
```

Open `http://127.0.0.1:4173`. To serve the release build, use `node scripts/serve.mjs --dist`. Vercel uses `npm run build` and the `dist` directory. No environment variables or API keys are needed. `npm run eval` replays the known fixtures to gitignored `work/replay-results.json` and checks counts against the sealed results without overwriting them; local timing and timestamp differ. `npm run verify:audit` verifies the release evidence hashes. Fixture regeneration refuses to overwrite the existing file.

Release publication and live browser verification are tracked in [release status](docs/RELEASE.md). Do not infer deployment from this README.

## What to try

1. Start at the introduction desk. All meetings are proposals, with neither answer recorded.
2. Select a meeting. Inspect the exact company need, matching work sample and mutual interest.
3. Record each party's demo answer. The card becomes available only after both agree. Nothing is sent.
4. Create an introduction card. It has a table letter, time and a specific opening question. Print it, save a calendar entry, or record a simulated in-person introduction.
5. Cancel the meeting, then build a proposal. A replacement needs fresh agreement. Existing mutually agreed meetings stay fixed.
6. Open Work evidence and mark someone unavailable. Their meeting and confirmations are removed. Rebuild to suggest replacements.
7. Open Company needs. Harbour Works is deliberately vague and receives no meeting. Editing any task clears old confirmations. Select essential tags and explicitly record organiser review to save a new evidence mapping. Saving without review abstains for that company. Reset demo restores the prepared samples.
8. Open Audit & limits to compare the keyword baseline and read honest limitations.

Demo task edits, agreements and activity notes persist in local browser storage. Reset demo replaces that local state. CSV and calendar exports contain synthetic records only. There is no server-side participant database or shared confirmation state.

## How it works

The organiser-entered fixture declares evidence tags, essential company needs, ranked interest lists, availability and capacity. A pair is eligible only if both explicitly chose each other and its samples cover every essential tag. The policy enumerates feasible schedules for this small event, maximises meeting count, then explicit preference rank points, then uses stable IDs to break ties. It does not read names, CV text, nationality, education or audit-group labels. The interface shows evidence, not a candidate score.

This is not Gale-Shapley and makes no stable-matching guarantee. A maximum-cardinality allocation can leave blocking pairs. ID tie-breaking can allocate scarce slots unevenly; an organiser must help people who have no meeting. A real pilot would require a reviewed, participant-understandable allocation policy.

## Measured synthetic results

| Check | Development, 3 families / 12 variants | Held-out, 4 families / 16 variants |
|---|---:|---:|
| Valid evidence schedules | 12/12 | 16/16 |
| Valid keyword baseline schedules | 3/12 | 8/16 |
| Maximum feasible meeting count | 12/12 | 16/16 |
| Evidence-policy meetings | 26 | 41 |
| Baseline pairs meeting fixture evidence and opt-in rules | 15/32 | 19/31 |

All 168 nuisance checks and 12 cancellation/stale-confirmation checks passed. A fresh reviewer found a physical shared-table collision missing from the initial policy and graders. The corrected policy has an added shared-table regression; its displayed 16/16 is a known-set replay after that fix. The [original first audit](eval/archive-v1/results.json) is preserved. No new untouched held-out claim is made. The held-out incomplete-2 fixture correctly produced zero meetings; empty schedules count as valid, and cardinality is reported separately. These are 28 small fixtures from seven builder-authored scenario families, not independent sources or human relevance labels.

The synthetic aggregate selected 40/42 eligible career-change entries and 27/38 direct-path entries. That 24.19 percentage-point gap is a known allocation limitation, even though swapping the group labels changes no decisions. See [ledger](eval/LEDGER.md) for denominators, hashes, runtime and the failure taxonomy.

## What this does not establish

No real-world conversion, recruiter time saving, human hiring quality, calibrated confidence, model inference, large-event latency, equal access or legal compliance was measured. A false or misleading evidence tag can fool this policy. A real deployment needs consented evidence review, accessible workflows, participant authentication, privacy/retention/deletion controls, multi-user state and a legal assessment.

## Presentation material

[Public-video script, at most 2:00](docs/VIDEO_SCRIPT.md). [Combined peer-pitch segment and 5-minute notes](docs/PITCH.md). Recording, public video publication and final competition submission remain separate actions. Final submission deadline: Sunday 15 November 2026, 10:00 Helsinki.

MIT code. Public Sans retains its [font license](public/fonts/LICENSE.md). Challenge context is based on the organiser-provided local official brief; live official pages were not rechecked because this chat's inbuilt browser was unavailable. The saved Klick pattern inspired the practical in-person handoff; no Klick code or unverified performance claim was reused.
