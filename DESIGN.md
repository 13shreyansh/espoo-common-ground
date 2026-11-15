# Design

Calm civic event-operations software. Rebuilt Sun 15 Nov 2026 after the owner judged the previous look bad; critique and direction are in `screenshots/fable/CRITIQUE.md`. Product decisions in DESIGN-DIRECTION.md section 17 still bind; its visual prescriptions do not.

## System
- Surfaces: white paper, `--desk` #f5f6f3 for quiet fills, hairline borders (`--line`, `--line-soft`). Panels are bordered, never grey-filled. Radius 8 for controls, 12 for panels, 16 for landing figures.
- Colour: ink #111613; one accent, spruce #0e5c4c, for the primary action, selection, agreed state and focus rings. One amber (`--proof`) reserved for proof lines: a person's own sentence, highlighted and underlined. Status dots use `--ok` and amber.
- Type: Atkinson Hyperlegible Next, self-hosted. Workspace 15/24 body, 13/20 meta, 24/32 page titles. Landing 56/60 display, 38/44 section titles. Digits and the time colon come from a Public Sans subset with a plain zero (`fonts/digits.woff2`, family `CG Figures`, unicode-range U+0030-003A, size-adjust 93.3%), listed ahead of Atkinson. Numerals are tabular where they align.
- Controls: one primary button per screen. Inputs are white with a border and a tinted focus ring. Segments are a sunk track with a raised selection. Tags and chips are pills. Hit targets 24px or more, 44px or more under 700px.
- Motion: 120 to 140 ms ease-out on hover and press; one authored entrance on the landing pairing card; the schedule build animation is the real round trace. Reduced motion removes animations and transitions.

## Files
- `styles.css`: tokens and everything the static day page needs (kept small; the day page loads only this).
- `client/app.css`: workspace layer, loaded by `index.html` after `styles.css`.
- `client/landing.css`: landing page and the comparison bars reused on Method.
- `client/route.js`: sets `landing` or `workspace` on the root element before first paint.

## Screens
Landing (`/`, static): problem, how it works in four steps, proof with the honest comparison, what it never does, one call to action. Workspace: overview with table first and a status rail; company and person pages with a four-step rail; schedule board with a detail rail; report; method. Day page: one bordered sheet, time large, table as a pill.
