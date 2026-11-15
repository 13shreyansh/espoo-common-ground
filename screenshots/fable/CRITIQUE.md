# Common Ground UI critique (deployed ec462b6, Sun 15 Nov 02:15 UTC)

Captured with headless Playwright Chromium at 1440x900 and 390x844 from https://espoo-common-ground.vercel.app. Screenshots: `screenshots/fable/before/`.

## Ten problems

1. There is no landing page: `/` drops a stranger straight into an organiser table, so nobody learns what problem this solves or why a city would buy it.
2. The overview has no hierarchy: page title, "Where things stand", three 20px column headlines and a 15-row table all carry similar weight, so the eye has no first stop.
3. The "three sides" band is three equal columns of headline plus fragment plus link, which reads as a template card row and pushes the real working list below the fold.
4. The palette is default browser blue (#1d4ed8-style) on pure white with grey-filled inputs; nothing says Espoo, events or a considered brand, and filled grey fields look disabled.
5. Numerals are set in a monospace with slashed zeros ("13:00", "104 of 120"), a technical costume that makes plain counts and times harder to read.
6. The schedule board is 160 identical heavy-outlined boxes with no state colour, no row rhythm and truncated company names ("Vellamo Mari..."), so the product's central screen looks like a spreadsheet.
7. Company and person pages float a 680px form in a 1440px canvas with a grey side panel; no step indicator, so a participant cannot tell where they are in a four-step flow.
8. Method is a 7,300px single column of 13px text; the benchmark, the one thing a judge needs, is buried mid-page in a dense table with a dot plot that has no clear reading.
9. On 390px the top bar truncates the event name beside two unlabeled chevrons, link rows wrap onto orphan arrows, and the primary button sits above the explanation it depends on.
10. First paint is an empty skeleton: the page is blank until JavaScript fetches the event (about 0.85 to 1.2 s to real content), so there is nothing to read while it loads and nothing at all without JS.

## Direction

Calm civic event-ops software: white working surface, ink text, one deep spruce green for the primary action and selection, and one warm amber reserved for the product's signature, the proof line (a person's own sentence, underlined). Type stays Atkinson Hyperlegible Next (self-hosted, legible, fits a public-sector buyer) but with proportional tabular numerals instead of slashed-zero mono, a tighter scale (workspace 14px body, 13px meta, 22px page titles; landing 56px display) and real weight contrast. Layout: hairline borders and row rhythm instead of filled grey panels; white inputs with a visible border; one primary button per screen. The workspace gets a compact top bar, an overview whose first stop is a single status line and the working table, a schedule board with quiet tinted slips and state marks, and participant pages with a visible step rail. A new static landing page at `/` (HTML and CSS only, no data fetch): problem statement in the hero with a real "why you two" pairing as the visual; then how it works as four alternating rows each showing the actual interface fragment (need to three tasks; stories to ESCO skills with proof lines; stable matching builds the day; the offline day page); then honest proof (0 blocking pairs against 179 and 223; 72% good meetings against 42% keyword and 87% AI-polished CV ranking, stated as a loss on that measure); then what it never does; a single CTA, "Open the Espoo event workspace"; one quiet footer line, "Synthetic event data".

## Baseline timings (measured, deployed URL, headless Chromium, cold context, 5 runs, no throttling, from Singapore)

| Run | TTFB ms | First paint ms (empty skeleton) | Real content visible ms |
|---|---|---|---|
| 1 | 117 | 324 | 1193 |
| 2 | 47 | 172 | 1034 |
| 3 | 113 | 244 | 936 |
| 4 | 56 | 200 | 854 |
| 5 | 51 | 176 | 889 |

Median first paint 200 ms, but it paints two grey skeleton bars; no first-contentful-paint entry exists at load. Median time to real content 936 ms. Method: `performance.getEntriesByType('paint')` and wall clock from `page.goto` to non-skeleton text, script `scripts/fable-baseline.mjs`.
