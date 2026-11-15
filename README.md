# Common Ground

Plan a recruitment open house around demonstrated skills, available slots and mutual consent.

[Open Common Ground](https://espoo-common-ground.vercel.app) · [Evaluation protocol](eval/v2/PROTOCOL.md) · [Release notes](docs/RELEASE.md)

Built by Shreyansh, team The CS Guy, for Junction 2026's City of Espoo Rethinking Recruitment challenge.

## What people do

A participant describes work they have actually done and approves the resulting skill evidence. An employer describes a hiring need, answers follow-up questions and turns it into concrete work tasks. An organizer prepares employer slots. Common Ground uses skill evidence to propose an event schedule, then lets both sides consent before a connection becomes a follow-up.

The workspace includes event planning, schedules, reports and follow-up. Static schedules remain readable offline with JavaScript disabled. The current October overview crash is fixed and the November workspace works. Data is synthetic, so trying the product does not contact real candidates or employers.

## Implemented architecture

```mermaid
flowchart LR
    P[Participant story] --> G[Gemini evidence-span checks]
    N[Employer need] --> Q[Gemini questions and concrete work tasks]
    Q --> C
    G --> E[ESCO skill concepts and evidence spans]
    E --> M[Deferred acceptance and slot placement]
    C[Company slots] --> M
    M --> S[Event schedule]
    S --> B[Mutual consent]
    B --> F[Follow-up and organizer report]
    S --> O[Static offline schedule]
```

Gemini asks follow-up questions, generates small work tasks and checks whether claimed skills have supporting spans. Deterministic matching and scheduling code uses those outputs. Identity and audit-group inputs do not enter the matcher. That design choice does not by itself establish fairness.

The current service uses Node.js and SQLite on cloud-hosted infrastructure, reached through the Vercel entry point. It does not rely on the builder's Mac. The sponsor integration branch incorporates the repaired live application and the previously unpublished application commits. Cloud releases stage the exact Git archive on an isolated HTTPS canary before promotion.

## Sponsor and model roles

| Service | Current state and concrete role |
| --- | --- |
| Gemini API | Implemented. Follow-up questions, work tasks and evidence-span checks help participants describe skills. The model does not make a real hiring decision. |
| ESCO | Implemented. Shared skill concepts connect participant evidence and company needs. |
| Codex | Used to build, debug and verify the application. |
| CRACI | Implemented workflow configuration. `.github/workflows/sponsor-ci.yml` runs the tests and build with `runs-on: craci`. A completed runner execution is still required as prize evidence. |
| Context.dev | Implemented. Employer website lookup calls `/v1/brand/retrieve`, saves the returned public profile, and displays its logo, source website and description in onboarding. Matching remains based on skills and slots, without brand or identity inputs. |

Employers explicitly supply a public website. Fictional fixture companies start without a real brand profile. The application never invents a factual brand connection or feeds website details into skill matching. Provider failures preserve the brief and leave manual entry available.

## Run locally

Use Node.js 24. Supply `GEMINI_API_KEY` securely in the process environment for new model requests and `CONTEXT_DEV_API_KEY` for employer website lookup. Existing cached evaluation outputs can be inspected without billing new requests.

```bash
npm ci
npm run dev
```

The project includes synthetic company and participant fixtures. Keep real personal data out of public fixtures, screenshots and evaluation outputs. The configured daily model-request counter is an application control, not a verified provider spending guarantee.

## Validate

```bash
npm test
npm run build
npm run eval
```

The evaluation uses cached outputs. Use `E2E_URL=<deployed URL> EXPECTED_COMMIT=<commit> node scripts/fable-e2e.mjs` for the complete current flow, then `node scripts/brand-e2e.mjs` with the same environment to check website lookup, image loading, persistence and unchanged matching at desktop and phone widths. Both scripts delete their isolated visitor copies. The older `npm run test:e2e` targets an earlier flow. Browser tests that write must use an isolated visitor copy and clean up. Do not run write checks or deploy while an active recording uses the shared product.

## What the evaluation says

The synthetic fixture contains 15 companies, 120 people and three story templates. The reported held-out good-match rate was 72.1%, compared with 41.7% for a keyword baseline and 86.6% for an AI-polished CV baseline. The recorded group access gap was 11.1 percentage points.

These are measured results from author-labelled synthetic cases and 20 repeated runs. They are not field hiring outcomes, legal compliance evidence or proof that this method is fairer than polished CVs. The polished-CV baseline performed better on the reported fit measure. Read the [protocol](eval/v2/PROTOCOL.md) before citing a number.

Before a real participant pilot, the project needs authenticated invitations, privacy and retention controls, transport hardening, and the appropriate assessment of employment-related AI use. Current consent screens do not complete that work.

## Website enrichment and verification

```mermaid
flowchart LR
    D[Employer public website] --> C[Context.dev brand data]
    C --> O[Source-linked onboarding preview]
    O --> S[Existing company slots]
    S --> M[Existing skill and slot matcher]
    R[CRACI CI workflow] --> T[Tests and build]
```

`server/brand.mjs` validates public domains, calls Context.dev, caches the public profile for a day and limits daily lookup attempts. Only Context.dev-hosted `media.brand.dev` logo URLs can load. The provider key stays server-side; encrypted cloud credentials enter the container over stdin.

Measured verification includes a real Stripe lookup with the returned logo, wide and phone browser checks, persistence after reload, and unchanged rankings. `tests/brand.test.mjs` also proves brand fields cannot affect matcher input and a website lookup preserves unsaved task edits. CRACI qualification requires a successful real runner execution in addition to the configured workflow. [Integration code](server/brand.mjs) · [Browser check](scripts/brand-e2e.mjs).

## Repository guide

`server/server.mjs` serves the application; `server/ai.mjs` contains model integration. `src/` contains the browser workspace. `fixtures/` supplies synthetic data; `eval/v2/` defines the current evaluation. Documentation under `docs/` includes earlier handoffs, so compare its dates with the current behaviour described here.
