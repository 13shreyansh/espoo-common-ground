# Common Ground

An organiser tool for City of Espoo recruitment events. Companies turn a need into concrete tasks. People approve skills backed by exact quotes from their own work stories. The organiser builds ten-minute meetings, reviews the reason for each pair and sends proposals. A meeting is agreed only after both sides say yes.

**Live:** https://espoo-common-ground.vercel.app  
**Source:** https://github.com/13shreyansh/espoo-common-ground

The binding screen specification is [DESIGN-DIRECTION.md](DESIGN-DIRECTION.md). [STATUS.md](STATUS.md) distinguishes measured results, review status and remaining decisions. All people, companies and outcomes are synthetic. The venue is Keilaniemi, Espoo; no real employer is represented.

## What works

- Fifteen fictional companies, checked against PRH/YTJ, and 120 people with three work stories each. Public job-ad provenance is in `fixtures/job-ad-sources.json`.
- Live Gemini guided questions, task extraction and story-to-skill suggestions. Exact-input caches retain the model, prompt version and timestamp. A quotation must exist at verified offsets before a skill is kept. People can choose ESCO skills manually if the model fails or reaches its global daily cap.
- Official ESCO API labels, URIs and cached responses. Generated mappings choose reviewed API concepts; a fuzzy search result is never silently accepted as a task skill.
- Talent-proposing many-to-many deferred acceptance, followed by exact constrained edge colouring. The engine records proposals, holds and passes for each round. The independent checker evaluates the placed schedule. Infeasible or unstable rebuilds preserve the previous schedule and explain the failure.
- Fixed agreed meetings, respected human declines, separate consent endpoints, immutable meeting explanations and a company API that omits unagreed people’s names and keys.
- Static personal schedules with JavaScript-off rendering, an offline service-worker cache, individual calendar files and an IndexedDB outbox for follow-up answers.
- Separate October event, report CSV, meeting-access audit and a Method page with the actual benchmark, failure cases and limitations.

## The benchmark is weaker than hoped

Labels were committed in `ca410e3` before extraction or matching. The protocol, held-out results, both real model baselines and every run are in [eval/v2](eval/v2). Common Ground beats the keyword baseline on these synthetic labels, but **does not beat AI-polished CV ranking**. The Method page and STATUS report this directly. Repeated runs vary details within one synthetic population; they do not establish field accuracy, fairness or legal compliance.

Six initially empty draft story fields were completed from their original pre-labelled scenarios. Extraction and both baselines were rerun for all 120 people. The original result remains in the Phase A artifacts and git history. No label or scoring-rule tuning followed the held-out result.

## Run and verify

Requires Node 24 or newer.

```sh
npm ci
npm test
npm run build
npm run dev
```

The writing helper reads `GEMINI_API_KEY` from the process environment. Do not put a key in source, command output or a committed file. The local development store is in ignored `work/data/`. The default fixtures and cached model outputs work without a key; new model requests need the environment variable. ESCO search uses its public API.

```sh
npx playwright install chromium
npm run test:e2e
```

The E2E runner targets the deployed URL by default, at 1440×900 and 390×844, and checks that its frontend and backend commits equal HEAD. It creates an isolated visitor workspace and deletes it in `finally`. `E2E_URL` can select a local test server. Screenshots and receipts are in `artifacts/e2e/` and `screenshots/commonground/`.

`npm run eval` reruns the frozen evaluation using cached polished CVs and model rankings. It does not make model calls. `scripts/targeted-baseline.mjs` generates the primary advert-tailored baseline; `scripts/polish-baseline.mjs` retains the earlier generic control. Both are explicit model-calling steps. Existing engine tests remain; the retired UI test is archived under `tests/archive-v1/`.

## Hosting and data boundaries

The existing Vercel project routes the whole application to this entry’s isolated cloud service. The free daily build-deployment quota was exhausted, so a promoted project route updates the runtime without another static build. `/release.json` and `/health` identify the actual running source commit; the older Vercel gateway build metadata is not the runtime revision. SQLite, schedules and live caches are on the cloud host, so the Mac is not part of the runtime. The cloud key is transported over SSH stdin; only host-bound encrypted ciphertext is persisted, then decrypted into the process’s memory at startup. The API has a shared 500-call daily reservation counter. No email or text message leaves the system.

A silent cookie gives each visitor an independent copy of the fixtures. Link possession is the only actor authentication in this prototype. A real pilot needs authenticated, expiring invitations, transport hardening, operational monitoring and an EU AI Act assessment. The matcher’s closed input type excludes identity, story text and optional audit attributes. Group records are joined only for the audit; small groups are suppressed.

Approved cards and agreed meeting explanations are preserved while drafts change. Deleting a person clears their stories, evidence, relevant answers and cached extraction. Server event records and their static schedules expire 30 days after the event. Offline or printed copies on a person’s own device cannot be remotely recalled.
