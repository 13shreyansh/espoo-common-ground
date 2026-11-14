# Common Ground: exact screen spec (Fable for Claude, Sat 14 Nov 2026)

For Codex. Build exactly this. Read `/mnt/project-files/Junction/plan/DESIGN-FLOOR.md` as the floor under it. Where this file and your habit disagree, this file wins. Where a value is missing, ask, do not invent.

This replaces the old Common Ground build. The name stays. The old look is banned in full: no editorial serif or italic headline, no tilted paper calendar card, no dark-green sidebar, no "SYNTHETIC DATA ONLY" or "Reset demo" badges, no "Talent 01" labels.

Mode: Operate (the organiser's event tool, and two short guided tasks for a company and a person). The day schedule and Method are Read. Colour strategy: Restrained.

**Placeholder convention.** Every figure, date, name, quote, skill label and id written inside `‹ ›` is an example of shape only. It is replaced by the value in the event store, the ESCO API response, the engine output or the benchmark file. Nothing inside `‹ ›` may be hard-coded in a component. All people and companies are synthetic and live in fixtures. Counts are always computed from the store at request time.

---

## 0. The product in one line

Common Ground runs the matching for a City of Espoo recruitment event. Companies say what they need done, people show what they have done in their own words, and the organiser gets a schedule of ten-minute meetings where every pair comes with its reason. Nothing is booked until both sides say yes.

Who leads: an event organiser in the City of Espoo International Working Life Services team, at a desk, two weeks before an event, with 15 companies and 120 registered people. Job: "get clear needs out of companies early, see what people can really do, and hand everyone a short list of meetings worth having."

The two sides: a company contact (ten spare minutes, doubts the city's pool) and a registered person (on a phone, not a native English speaker, has skills a CV hides).

The unit of work is a **meeting**: one person, one company table, one ten-minute slot, with a "Why you two". A meeting is *proposed* by the matcher, *sent* by the organiser, and *agreed* only when both sides say yes. An agreed meeting has an **introduction card**.

One event ships built deeply: **Espoo Tech & Talent Meetup, Thu 26 Nov 2026, 13:00–15:00, Dipoli, Otaniemi, Espoo** (15 companies, 18 tables, 10 slots, 120 people). One smaller finished event exists so the "after" screens show real stored answers: **Espoo Tech & Talent Meetup, Thu 29 Oct 2026** (6 companies, 6 tables, 40 people).

---

## 1. Direction contract

**Thesis.** At these events both sides now talk through AI: a polished CV meets a screener. Common Ground refuses both. A skill counts only if the person's own sentence proves it, and a need counts only as a task someone could do. So the interface never shows a match without the two real sentences side by side: what the company needs done, and what the person did.

**The world.** The run sheet on an events desk, in office daylight: a table plan, a list of names, a pen and a highlighter. White working surface, a cool pale grey for chrome, black ink for anything settled, one yellow highlighter for proof, one blue for anything you can press. Light theme, chosen from the scene: an organiser at a desk by day, a person reading a phone in a bright hall, and a schedule that gets printed. HR tech is tempted toward purple gradients, sparkle icons, avatars and a "92% match" ring. All refused: they are the machine-made gloss this product exists to get past.

**Signature element: the proof line.** A sentence from the person's own story, shown in a quote slab with the proving words under yellow highlighter. It appears wherever a skill or a match is claimed: on the evidence card, in "Why you two", on the introduction card, on the company's page (without a name) and on Method. No proof line, no skill. Beside it sits the **task line** (the company's need as one concrete sentence). "Why you two" is always a task line on the left joined to a proof line on the right.

**Second structure: the board.** Tables are rows, ten-minute slots are columns, each meeting is a small **slip** with a first name on it. A slip's fill is its state: outlined is proposed, solid ink is agreed.

**The one authored motion: the schedule settling.** Pressing "Build schedule" replays the real rounds of the matching: slips appear on the board as dashed holds, a few are swapped out as better-ranked people arrive, then every slip slides along its row to its time and turns solid-outlined. About 3.5 seconds, calm, skippable. A ticker counts the true rounds. Nothing else in the product animates beyond state changes.

**Who is speaking.** Common Ground's own words are set plain. A person's words and a company's words always sit in a quote slab with a source line. Clock times, table codes and ESCO codes are set in mono.

**What we borrow, by name.**
- Luma event manage page (Mobbin): event title, one meta line, a short tab row, guests as plain rows with a status word at the right. This is Overview.
- Luma check-in page (Mobbin): one narrow centred column, nothing else. This is the day schedule.
- Cal.com bookings list (Mobbin): rows with date and time at the left, who and what in the middle, row actions at the right, and a filter row "Upcoming / Unconfirmed / Past / Canceled". This is the proposals list on both sides' pages ("Waiting for you / Agreed / Declined").
- Cal.com weekly availability grid (Mobbin): unavailable time shown as fine diagonal hatching. This is the break column and blocked cells on the board.
- Square Workday timeline (Mobbin): people as rows with a fixed label column, hours as columns under a sticky head. This is the board's frame.
- incident.io schedules view (Mobbin): small named chips placed on a timeline. This is the slip.
- n8n guided question card (Mobbin): one question at a time, three or four numbered answers, a "Something else" row, keys 1–4. This is the guided brief.
- Wix marketing-plan setup (Mobbin): generated text lands in ordinary editable fields. Borrowed for the three tasks. Its sparkle badge and agent avatar are refused.
- incident.io incident page (Mobbin, as in Signal Fire): one main column, one fixed rail of facts on the right. This is Schedule and its "Why you two" rail.
- Brella 1:1 meetings (product, not Mobbin): meetings at numbered tables in fixed slots that both sides accept. Kept: tables, slots, mutual accept. Dropped: the open marketplace where anyone can request anyone, which is what floods companies.
- NRMP rank-order lists (product, not Mobbin): each side's choices as a plain numbered list. This is "Where each ranked the other".
- Readwise and Medium highlights: yellow highlighter over the reader's chosen words. This is the proof mark.
- Linear: J / K through lists, Enter to open, `/` to search.

**Risk taken.** No avatars, no photos, no match percentage, no AI character, and the company cannot see a name until both have said yes. On video that can look plain for a recruitment product. The counterweight: the highlighter is the only warm colour on screen and it always sits on a real sentence, and the build is the one moment that moves.

**Never.** "Candidate", "applicant", "talent" as a label for a person, "rejected", "match score", "AI-powered", "top talent", "ranked #1". A person is "a person" or their name. A table "passes on" a proposal, it never "rejects" a person. No percentage of fit. No verdict about a person anywhere.

---

## 2. Tokens

### 2.1 Fonts (self-hosted, never fall back visibly)

| Role | Face | Package | Why |
|---|---|---|---|
| Interface, stories, quotes | **Atkinson Hyperlegible Next** variable, 400 to 700 | `@fontsource-variable/atkinson-hyperlegible-next` | Drawn by the Braille Institute so that similar letters cannot be confused. Right for a public service, for readers in their second or third language, and for a phone held in a noisy hall. Full Finnish and Swedish (ä, ö, å) and Latin Extended for the names in the fixtures. Plain, not on the banned list. |
| Measured values | **Atkinson Hyperlegible Mono** variable, 400 and 500 | `@fontsource-variable/atkinson-hyperlegible-mono` | Clock times, table codes, ESCO codes. Only there. Never for labels, headings or buttons. |

`font-family: "Atkinson Hyperlegible Next Variable", system-ui, sans-serif`. Load Latin and Latin-ext. Preload the Latin subset of the text face. If either package is missing on npm, self-host the OFL files from the Braille Institute release; do not substitute another face. Counts in tables: `font-variant-numeric: tabular-nums lining-nums`; if figures do not hold width, right-align and fix the column width.

### 2.2 Type scale (fixed px, no fluid type)

| Token | Size / line | Weight | Used for |
|---|---|---|---|
| `t-page` | 26 / 34 | 600 | page H1 |
| `t-title` | 20 / 28 | 600 | finding sentences, task lines on the brief result, benchmark sentences, table number on the day schedule |
| `t-head` | 16 / 24 | 600 | section and panel headings, names in the rail, question text |
| `t-body` | 15 / 24 | 400 | body, table cells, buttons (600), quoted text in slabs, story text |
| `t-small` | 13 / 20 | 400 | secondary lines, meta lines, skill tags (500) |
| `t-micro` | 12 / 16 | 500 | table column heads, slips, axis notes |
| `m-time` | 13 / 20 | 500 mono | times and table codes in rows and board heads |
| `m-large` | 24 / 30 | 500 mono | the meeting time on the day schedule and the introduction card |
| `m-micro` | 11 / 16 | 400 mono | ESCO codes, axis ticks |

Letter-spacing `-0.01em` on `t-page` and `t-title`, `0` elsewhere. Sentence case everywhere. No uppercase labels. No label above a heading. Headings `text-wrap: balance`, paragraphs `text-wrap: pretty`, prose max 68ch.

### 2.3 Colour (every colour, with its job)

| Token | Hex | Job |
|---|---|---|
| `paper` | `#FFFFFF` | page, tables, panels, proposed slips |
| `desk` | `#F4F5F7` | quote slabs, the rail, table head rows, toolbars |
| `sunk` | `#ECEEF1` | inputs, skeletons, empty mini-board cells, hover of an empty board cell |
| `line` | `#D6DAE0` | 1px borders of panels and inputs |
| `line-soft` | `#E6E9ED` | row and column dividers, hatching |
| `ink` | `#14181F` | text, icons, **agreed** slips and marks |
| `ink-2` | `#454D59` | secondary text |
| `ink-3` | `#5E6875` | tertiary text, placeholders, the outline of a proposed slip (5:1 on `desk`) |
| `cobalt` | `#1D4ED8` | the primary button, links, focus ring, selection |
| `cobalt-hover` | `#1A3FA8` | primary and link hover |
| `cobalt-tint` | `#E8EEFC` | selected row, selected option, selected chip ground |
| `proof` | `#FFE680` | **highlighter only:** ground of proving words, the 8px proof mark |
| `proof-strong` | `#FFD21F` | the highlighted words of the skill being hovered or focused |
| `proof-edge` | `#8A6500` | 1px border of the proof mark (3:1 on white) |
| `slate` | `#8A93A0` | marks only: baseline methods in charts, proposed cells in the mini board |
| `ok` | `#1F7A4D` | "Saved", "Copied", "Sent" confirmations |
| `ok-tint` | `#E3F3EA` | ground of those confirmations |
| `err` | `#A8201A` | system and validation errors only, always with an icon and words |

Rules. Yellow means "these are the person's own words that prove it" and nothing else: never a button, badge, card ground, warning or border. Ink fill means "agreed by both" on any mark or slip. Cobalt means "you can press this" or "this is selected" and is never decoration. Common Ground's result in a chart is `ink`, other methods are `slate` with a different shape. No green-for-good or red-for-bad about a person or a group. Text on any tint or on `proof` is `ink`. No gradients, no glow, no dark panels.

Browser surfaces: `::selection { background:#CFDBFA; color:#14181F }`, `caret-color:#1D4ED8`, `:focus-visible { outline:2px solid #1D4ED8; outline-offset:2px }`, link underline offset 3px, `scrollbar-color:#C4CAD3 transparent; scrollbar-width:thin`. `<mark>` is restyled (2.6); the browser default yellow never shows.

### 2.4 Spacing, radii, elevation

- Spacing steps: 4, 8, 12, 16, 24, 32, 48. Page side padding 24 (16 under 700px).
- Radii: 2 (highlighted words), 4 (slips, skill tags), 6 (buttons, inputs, chips, quote slabs), 8 (panels, the rail, dropdowns, the introduction card), 12 (phone sheet top corners).
- Elevation: flat with 1px lines. Only floating things cast a shadow: dropdowns, tooltips and a slip being dragged `0 8px 24px rgba(20,24,31,.12), 0 1px 2px rgba(20,24,31,.08)`; the phone sheet `0 -8px 32px rgba(20,24,31,.16)`.
- Hit targets at least 32 x 32 on desktop, 44 x 44 under 700px.

### 2.5 Marks (authored SVG, one vocabulary for state)

**Pair mark** (20 x 10 box, two circles of 8px; left is the company, right is the person). Always followed by the state words.

| State (exact words) | Drawing |
|---|---|
| "Proposed" | two hollow circles, 1.5px `ink-3`, 2px apart |
| "‹Routa Logistics› said yes" / "‹Daniela› said yes" | the side that said yes filled `ink`, the other hollow |
| "Both said yes" | both filled `ink`, overlapping by 3px, centred in the box |
| "Declined" | two hollow circles with a 1.5px `ink-3` line through the side that declined |
| "Cancelled by the organiser" | two hollow circles, 1.5px dashed `ink-3` |

**Proof mark** (8 x 8 square, radius 2). Filled `proof` with a 1px `proof-edge` border: this skill has a proof line. Hollow with a 1.5px `ink-3` border: this task skill has no proof in the person's stories.

**Slip** (the meeting on the board; 72 x 28, radius 4, `t-micro`, text centred, one line, ellipsis). Text is the person's first name; if two people at the event share it, first name and last initial ("‹Anna K.›").

| State | Drawing |
|---|---|
| held (during the build only) | `paper`, 1px dashed `ink-3`, text `ink-2` |
| proposed | `paper`, 1px solid `ink-3`, text `ink` |
| one yes | `paper`, 1.5px solid `ink`, text `ink` 600, a 6px `ink` dot 6px from the right edge |
| agreed | `ink` ground, text `#FFFFFF` 600 |
| selected (any state) | plus a 2px `cobalt` outline, offset 1 |
| dimmed by search | opacity 0.3 |

**Skill tag:** height 24, radius 4, `paper`, 1px `line`, padding 0 8, `t-small` 500 `ink`, with the proof mark 6px left of the label. The label is the ESCO preferred label exactly as the API returns it (‹use spreadsheets software›). It is a link to the skill's ESCO page; the tooltip shows the ESCO URI's last segment in `m-micro`. Never an invented skill name.

**Common Ground mark:** authored SVG 22 x 14: two circles of 14px diameter overlapping by 6px, each a 1.5px `ink` outline, the lens where they overlap filled `ink`. It is the agreed pair mark, larger. Beside it "Common Ground" in the text face, 600, 16px, `ink`.

**Icons:** Lucide, stroke 1.5, 16px (14px in chips and meta lines). Used: `search`, `chevron-down`, `chevron-right`, `chevron-left`, `arrow-up-right`, `x`, `check`, `minus`, `plus`, `copy`, `download`, `calendar-plus`, `map-pin`, `clock`, `coffee`, `printer`, `pencil`, `trash-2`, `undo-2`, `grip-vertical`, `list`, `layout-grid`, `wifi-off`, `triangle-alert`, `rotate-cw`, `play`. Not allowed: `sparkles`, `wand`, `bot`, `brain`, `zap`, `star`, `heart`, `trophy`, `medal`, `award`, `rocket`, `handshake`, `user-circle`, any avatar or face. No emoji. No photos of people.

### 2.6 Controls (one vocabulary)

- **Primary button:** height 40, radius 6, `cobalt` ground, white `t-body` 600, padding 0 16. Hover `cobalt-hover`. Pressed `#163489`. Disabled `sunk` ground, `ink-3` text. Loading: label stays, 14px ring spinner left of it. **At most one on any screen.**
- **Quiet button:** height 32 (40 beside a primary and for the Yes / No row actions), `paper`, 1px `line`, `ink` `t-small` 500 (`t-body` 600 at 40), padding 0 12. Hover border `ink-3`. Pressed `desk`.
- **Text button:** `cobalt` `t-small` 500, no ground, underline on hover, 32 high hit area.
- **Link:** `cobalt`, underlined on hover in UI, always underlined in prose. Links that leave Common Ground (ESCO, espoo.fi) end with a 12px `arrow-up-right`.
- **Segmented control:** height 32, 1px `line`, radius 6, 1px `line` between segments. Selected: `cobalt-tint` ground, `cobalt` text 600. Others `ink-2`.
- **Toggle chip:** height 28, radius 6, 1px `line`, padding 0 10, `t-small` 500. On: `cobalt-tint`, `cobalt` border and text, a 14px `check` before the label. `aria-pressed`.
- **Text field:** height 36, radius 6, `sunk`, no border, `t-body`. Focus: `paper`, 1px `cobalt` border plus the ring. Error: 1px `err` border, message under it in `err` `t-small`.
- **Text area:** as text field, min height 96, padding 10 12, grows with content, no resize handle.
- **Option row** (guided brief): height 44, radius 6, `paper`, 1px `line`, padding 0 12; at the left a 22 x 22 key box (radius 4, `desk`, `t-micro` 600 `ink-2`) holding "1"–"4"; then the answer in `t-body`. Hover border `ink-3`. Selected: `cobalt-tint`, 1px `cobalt`, key box `cobalt` with white digit.
- **Tooltip:** `ink` ground, white `t-small`, radius 6, padding 6 8, after 400ms hover or on focus.
- **Quote slab:** `desk`, radius 6, padding 12 14, no border, never a coloured edge. Source line above it in `t-small` `ink-2`: who is speaking ("‹Daniela Rojas›, story 2" / "A person registered for this event" / "‹Routa Logistics›, in their own words"). Text in `t-body` `ink` with its `lang` attribute.
- **Highlighted words** (`<mark>`): `proof` ground, 1px dotted `ink-2` underline at offset 3 (so it survives greyscale and print), radius 2, padding 1px 2px, `box-decoration-break: clone`, text `ink`. The active one: `proof-strong` and a solid underline.
- **Inline confirm** (used for cancel, delete, decline): the row swaps in place to a question in `t-small` 600, then a quiet button with the action's name and a text button "Keep it". Never a modal.

### 2.7 Motion

| Token | Value | Used for |
|---|---|---|
| `ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | everything |
| `d-press` | 120ms | pressed states, chip toggles |
| `d-state` | 180ms | row selection, question collapse, slip state change, content swap (cross-fade) |
| `d-panel` | 240ms | disclosure rows, phone sheet |
| `d-round` | 420ms | **the build:** one step of rounds |
| `d-fit` | 800ms | **the build:** slips travelling to their time |

No page-load choreography, no entrance animation on rows or sections, no pulsing dot. With `prefers-reduced-motion: reduce` every animation is an instant state change and the build shows its end state at once with the final ticker sentence.

### 2.8 Formats

Times are Helsinki time, 24-hour, "13:20". A slot is "13:20–13:30". Dates "Thu 26 Nov 2026"; with time "18 Nov 2026, 10:42". Relative time only under 24 hours old, absolute time in a tooltip. Tables are "Table ‹7›" in text and "T‹07›" in `m-time` on the board. Thousands comma. Percentages are whole numbers and always carry their count: "‹78›% (‹134› of ‹172›)". Differences between percentages are "‹4› points", never "%".

---

## 3. Shared shell

### 3.1 Organiser top bar (Overview, Schedule, Report, Method; 52 high, `paper`, 1px `line-soft` bottom border, sticky, above everything)

- Left, x=24: the mark and wordmark. Link to the current event's Overview.
- 24 gap. **Event switcher:** a quiet button, 32 high: "‹Espoo Tech & Talent Meetup · Thu 26 Nov 2026›" with `chevron-down`, truncated at 380 wide. Dropdown (380 wide, `paper`, radius 8, shadow): one row per event (48 high: name and date, then `t-small` `ink-3` "in ‹12› days · ‹120› people · ‹15› companies" or "finished · ‹40› people · ‹6› companies"). Arrow keys move, Enter picks, Esc closes. There is no "new event" row in this build.
- 24 gap. Four links, `ink-2` `t-body` 500, 24 apart: **"Overview"**, **"Schedule"**, **"Report"**, **"Method"**. Current page: `ink` 600 with a 2px `ink` line under the word at the bar's bottom edge.
- Right, x=24 from the edge, `t-small` `ink-2`: "City of Espoo · International Working Life Services". Plain text, no logo, no crest.

### 3.2 Side top bar (company page, person page; 52 high, same surface)

- Left, x=24: the mark only, then `t-body` 600 `ink`: the event name, then `t-small` `ink-2` "Thu 26 Nov 2026 · Dipoli, Otaniemi".
- Right: `t-small` `ink-2` the company or person name.
- When the page was opened from the organiser's screens (`?from=overview|schedule`): directly under the bar a 36-high row on `desk`, padding 0 24, with a text link `chevron-left` "Back to the organiser's view". Nothing else in it.

The day schedule (`/s/…`) has no top bar at all.

### 3.3 Routes (all state in the URL)

| Route | Screen |
|---|---|
| `/` | redirects to `/e/<default event>` |
| `/e/<event>?list=companies\|people&state=&q=` | Overview |
| `/e/<event>/schedule?view=board\|list&sel=<meeting or cell>&q=#<section>` | Schedule |
| `/e/<event>/c/<company key>?step=need\|questions\|tasks\|meetings` | Company page |
| `/e/<event>/p/<person key>?step=stories\|card\|tasks\|meetings` | Person page |
| `/s/<key>` | Day schedule (a person's or a company's), static |
| `/e/<event>/report` | Report |
| `/method?event=<event>` | Method and benchmark |

Keys are unguessable strings. There is no login in this build (see Method, limits).

### 3.4 Page footer (every page, including the day schedule)

One line, `t-small` `ink-3`, 24 above the bottom, left aligned at the content edge: **"Synthetic event data"**. On Overview, Schedule and Method it continues: " · People choose whether to meet. Common Ground proposes, the organiser sends, both sides answer." That is the only place the word "synthetic" appears in the UI outside Method.

---

## 4. Screen 1: Overview `/e/<event>`

Purpose: a judge with no context understands the product in 5 seconds; the organiser sees who is ready and who needs a nudge.

**Frame at 1440 x 900.** Content box 1392 wide. Vertical budget: top bar 52, then 28, H1 34, 4, meta line 20, 8, paragraph 48, 24, three-sides band 236, 24, controls row 36, 12, table head 36, then seven rows of 48 above the fold.

### 4.1 Intro (left 920 wide; the primary button sits at the right end of the H1 line)

1. H1 `t-page`: **"‹Espoo Tech & Talent Meetup›"**.
2. Meta line `t-small` `ink-2`: `clock` "‹Thu 26 Nov 2026›, ‹13:00–15:00› · " `map-pin` "‹Dipoli, Otaniemi, Espoo› · ‹18› tables · ‹10› meeting slots of 10 minutes".
3. Paragraph `t-body` `ink-2`, max 68ch: "Companies say what they need done. People show what they have done, in their own words, with no CV. Common Ground proposes ten-minute meetings between the two and shows why. Nothing is booked until both sides say yes."
4. Right end of the H1 line: primary button **"Open the schedule"**.

### 4.2 The three sides (band)

`t-head`: "Where things stand". 12 below, three columns of 432 with 48 gaps and a 1px `line-soft` vertical rule centred in each gap. No boxes, no icons, no big numbers. Each column is one real record shown through a different kind of evidence.

| Column | Sentence (`t-title`, stored, at most 110 characters) | Fragment (104 high) |
|---|---|---|
| A need | "‹Routa Logistics› asked for “‹a full-stack dev›”. That became ‹3› tasks." | The three task lines as rows of 32, `t-small` `ink`, one line each with ellipsis; right aligned in each row `t-small` `ink-2` tabular "about ‹9› people". |
| Evidence | "‹Daniela Rojas› ran a café. Her own words prove ‹5› skills." | One quote slab, three lines max, with one highlighted span, and under it one skill tag. |
| The schedule | "‹172› meetings proposed, ‹64› agreed by both sides. ‹0› blocking pairs." | The **mini board**: 432 x 89. One row per table (18 rows of 4px with 1px gaps), ten columns of 41px with 2px gaps and a 4px gap at the break. Cell fill: empty `sunk`, proposed `slate`, agreed `ink`. Under it `t-micro` `ink-3`: "rows are tables, columns are 10-minute slots". |

Under each fragment, 12 gap, one row: left `t-small` `ink-2` a count line ("‹12› of ‹15› briefs in · closes ‹Thu 19 Nov›" / "‹104› of ‹120› evidence cards approved · closes ‹Mon 23 Nov›" / "built ‹18 Nov 2026, 10:31›, sent ‹10:40›"); right a text button with `chevron-right`: "Open this company's page" / "Open this person's page" / "Open the schedule".

**Which records are shown (a rule, not a choice):** A need: the brief sent most recently. Evidence: the card approved most recently. Sentences are stored when the brief is sent or the card approved, to the fixed patterns above ("ran a café" comes from the person's own one-line description of their last work, which they type; see 7.1).
- No brief sent yet: sentence "No company has sent a brief yet." fragment: `t-body` `ink-2` "A brief takes a company about three minutes. Open any company's page to see it." and the text button opens the first company in the list.
- No card approved yet: "Nobody has approved an evidence card yet." with the same shape.
- Schedule not built: sentence "The schedule is not built yet." mini board all `sunk`, count line "‹104› people and ‹13› companies are ready".

### 4.3 The lists

Controls row (36 high): left, segmented control **"Companies ‹15›" | "People ‹120›"** (`?list=`), then 12 gap, toggle chips for state. Companies: "Brief sent ‹12›", "Started ‹1›", "Not started ‹2›". People: "Approved ‹104›", "Stories written ‹9›", "Not started ‹7›". None on by default (all rows shown). Right: a text field 240 wide with `search`, placeholder "Find a company" / "Find a person" (key `/`).

Table. No card around it. Head row 36 on `desk`, `t-micro` `ink-2`. Body rows 48, 1px `line-soft` between, no zebra. The whole row is a link to that side's page with `?from=overview`. Hover `desk`. J / K move a `cobalt-tint` cursor row, Enter opens.

**Companies**

| Column | Width | Align | Content |
|---|---|---|---|
| Company | flex (about 440) | left | Line 1 `t-body` 600: name. Line 2 `t-small` `ink-3`: their first words in quotes, one line: "“‹we need a full-stack dev›”". Before any input: "nothing written yet". |
| Brief | 168 | left | `t-small`: "Sent ‹17 Nov›" `ink` · "Started" `ink-2` · "Not started" `ink-3` |
| Tasks | 72 | right | count, tabular; "–" never: an empty cell when there are none |
| People who have done this | 200 | right | `t-small` `ink-2` "about ‹23›" (people who match at least one of its tasks by the rule in 6.3) |
| Tables | 72 | right | count |
| Meetings | 200 | left | `t-small` `ink-2`: "‹6› agreed · ‹4› waiting", or `ink-3` "none proposed yet" |
| Link | 96 | right | text button `copy` "Copy link" (copies the page URL; reads "Copied" in `ok` for 2s). Stops the row click. |

**People**

| Column | Width | Align | Content |
|---|---|---|---|
| Person | flex (about 400) | left | Line 1 `t-body` 600: full name. Line 2 `t-small` `ink-3`: their own one-line description, "‹ran a café in Tapiola for four years›". |
| Evidence | 168 | left | "Approved ‹18 Nov›" · "Stories written" · "Not started" |
| Skills with proof | 128 | right | count |
| Tasks marked | 112 | right | count of tasks they marked "Interested" |
| Wants at most | 104 | right | "‹3› meetings" |
| Meetings | 200 | left | "‹2› agreed · ‹1› waiting" or "none proposed yet" |
| Link | 96 | right | "Copy link" |

No column, filter or sort anywhere in the product shows nationality, language, school, age, gender or a photo.

Under the table, `t-small` `ink-3`: "‹13› companies and ‹104› people are ready for matching. A company is ready when its brief is sent. A person is ready when they have approved their evidence card." Right: "Show ‹25› more".

### 4.4 States

- **Loading:** H1, meta and paragraph render from the event record at once. Band: three columns of `sunk` blocks. Table: head real, seven skeleton rows (opacity pulse 1.2s).
- **Filters hide everything:** "No one matches these filters." and text button "Clear filters".
- **Finished event:** the primary button reads **"Open the report"**. The band's third sentence becomes "‹58› meetings took place. ‹21› led to a next step, by both sides' answers." The Meetings columns read "‹3› met · ‹1› next step".
- **Store unreachable:** in place of band and table: `triangle-alert` 20px `err`, `t-head` "The event data did not load.", `t-body` `ink-2` "Nothing is shown from memory. Try again in a moment.", quiet button "Try again".

---

## 5. Screen 2: Schedule `/e/<event>/schedule`

Purpose: build the schedule in one click, see why each pair exists, change what needs changing, and see who gets meetings.

### 5.1 Frame at 1440 x 900

Top bar 52. Header 88 (scrolls away). Section bar 44 (sticky at 52, full width, `paper`, 1px `line-soft` bottom border). Below: **main column 952** (x=24) and **the rail 416** (x=1000, `desk`, radius 8, padding 20, sticky at top 112, max height `calc(100vh - 128px)`, own scroll). 24 between them. The page scrolls, the rail stays.

### 5.2 Header (padding 20 24 16)

- Line 1: H1 `t-page` "Schedule". Right end: the primary button, by state.
- Line 2, 6 below, `t-body` `ink-2`, one sentence by state:

| State | Sentence | Primary button |
|---|---|---|
| not built | "‹18› tables, ‹10› slots of 10 minutes. ‹104› people and ‹13› companies are ready. Nothing reaches anyone until you build and then send." | **"Build schedule"** |
| draft (built, not sent) | "‹172› meetings drafted in ‹11› rounds. ‹0› blocking pairs. Nobody has been told yet." | **"Send ‹172› proposals"** |
| sent | "‹172› proposed: ‹70› waiting for both, ‹38› waiting for one, ‹64› agreed. ‹0› blocking pairs." | none |
| sent, with open slots that someone could fill | same sentence, plus " ‹9› slots are open." | **"Fill ‹9› open slots"** |
| finished event | "‹58› of ‹64› agreed meetings took place." | none |

"‹0› blocking pairs" is a link to Method, section "Is it stable?". If the organiser's own changes created any, it reads "‹2› blocking pairs after your changes" in `ink` 600 with a `triangle-alert` 14px in `ink`, and the rail's default view lists them (5.6).

**After "Send":** the button shows the spinner and "Sending…", then the header line updates and a confirmation appears in the button's place for 4s: `check` "Sent to ‹104› people and ‹13› companies" on `ok-tint`. In this build "sending" makes each proposal visible on both sides' pages; no email or message leaves the system, and Method says so.

### 5.3 Section bar

Left, x=24: anchor tabs, `t-small` 500 `ink-2`, 24 apart; the one in view is `ink` 600 with a 2px `ink` line: **Board · Without a meeting ‹8› · Who gets meetings**. Then, 24 gap, a 1px `line` divider 20 high, then the legend: a proposed slip, a one-yes slip and an agreed slip drawn at 40 x 18 with no text, each followed by `t-small` `ink-2` "proposed", "one yes", "both said yes".
Right end: a text field 220 wide with `search`, placeholder "Find a person or company" (key `/`; matching slips stay, others dim, and the rows that hold a match keep full-strength labels), then a segmented control with icons and tooltips: `layout-grid` "Board" | `list` "List".

### 5.4 The board (952 wide, `paper`, 1px `line`, radius 8, overflow hidden)

- **Columns:** a label column 160, then five slot columns of 76, a break column of 32, five slot columns of 76. 160 + 380 + 32 + 380 = 952.
- **Head row** 32 on `desk`, 1px `line-soft` bottom border, sticky at 96 under the section bar: label head `t-micro` `ink-2` "Table"; each slot head the start time in `m-time` `ink-2`, centred ("13:00" … "13:40", "14:10" … "14:50"); the break head a 14px `coffee` in `ink-3` with tooltip "Break ‹13:50–14:10›".
- **Rows** 36 high, 1px `line-soft` between, one per table, ordered by table number. Label cell, padding 0 12: the table code in `m-time` `ink-2` ("T‹07›", 36 wide), then the company name in `t-small` 600 `ink`, one line with ellipsis. A company's second table repeats the name in `ink-3`. A company that has not sent a brief: name in `ink-3` and the row's cells hatched, tooltip "No brief yet, so nothing can be matched here."
- **Cells** 76 x 36 with 1px `line-soft` between columns. A slip sits centred (72 x 28). The break column and any blocked cell is hatched: `repeating-linear-gradient(135deg, #E6E9ED 0 1px, transparent 1px 6px)`.
- 18 rows: the whole board is 32 + 18 x 36 = 680 high and fits above the fold.
- Under the board, `t-micro` `ink-3`: "Each slip is one 10-minute meeting. Helsinki time."

**Interaction.**
- Click a slip: selects it (`?sel=`), the rail shows its "Why you two" (5.5). Hover: tooltip "‹Daniela Rojas› · ‹Routa Logistics› · ‹13:20–13:30› · Table ‹7›" and every other slip of the same person gets a 1.5px `cobalt` outline, so the organiser sees their whole afternoon.
- Click an empty cell: selects the cell, the rail shows "Open slot" (5.7). Hover: `sunk` ground and a 14px `plus` in `ink-3`.
- **Move:** drag a slip (cursor `grab`, the slip lifts with the floating shadow) to another empty cell in a row of the same company. While dragging, cells where this person or this table is busy are hatched and refuse the drop; tooltip on refusal: "‹Daniela› is at Table ‹4› at ‹13:20›." Drop is immediate (no animation beyond `d-state`). Keyboard: with a slip selected press `M`, arrow keys move a dashed `cobalt` target through the valid cells, Enter drops, Esc cancels.
- Moving a proposed or one-yes meeting keeps its answers only if the time did not change (table change within the company keeps them; a new time clears them). Moving an **agreed** meeting first asks in the rail by inline confirm: "Moving this needs a new yes from both. Move it?" with quiet button "Move and ask again" and text button "Keep it". Their pages then show "The time changed. Is ‹14:20› still good?".
- Arrow keys move the selection cell by cell. Enter opens the selection in the rail. Esc clears.
- The board is `role="grid"`, each cell labelled "Table ‹7›, ‹Routa Logistics›, ‹13:20›, ‹Daniela Rojas›, proposed". The **List** view is the same data as a real table (5.8).

### 5.5 The build (the one authored motion)

Pressing "Build schedule" (or "Fill open slots") runs the engine once and stores the result with its **trace**: for every round, which person proposed to which table, which proposals each table held, and which it passed on. The animation replays that stored trace. It never shows anything the engine did not do.

1. The primary button is disabled and reads "Building…". The legend in the section bar is replaced by the **ticker** (`t-small` `ink`, tabular, with the round number 600): "Round ‹1› of ‹11› · ‹288› proposals · ‹164› held · ‹124› passed to their next choice".
2. **Rounds, shown in at most six steps of `d-round` each.** If the engine took six rounds or fewer, one step per round. If more, steps 1 to 3 are rounds 1 to 3 and the remaining rounds are split evenly over steps 4 to 6; the ticker always shows the true number of the last round in the step and that step's summed counts. In each step:
   - every newly held proposal appears as a **held slip** in its table's row, in the leftmost free slot cell (holds have no time yet, so a row fills from the left in the order the table ranks them): opacity 0 to 1 and a 4px rise, 160ms;
   - every held slip that the table now passes on (because someone it ranks higher arrived) fades out in 160ms, and the slips to its right close the gap in 200ms;
   - nothing else moves. No lines are drawn between people and tables. No sound.
3. A 240ms hold on the last round. The ticker reads "Fitting ‹172› meetings into times so nobody is in two places…".
4. **Fit, `d-fit`:** every held slip travels along its own row to the slot the time step gave it (a transform on a single canvas or a FLIP on transforms, never layout animation), and its border turns from dashed to solid as it lands. All slips move together, no stagger.
5. The ticker settles to one sentence and stays until the next page load, when the legend returns: "Settled in ‹11› rounds. ‹172› meetings proposed. ‹0› blocking pairs. ‹8› people have no meeting yet." The header updates to the draft state. Focus moves to the primary button, now "Send ‹172› proposals".

Total: 6 x 420 + 240 + 800 = 3,560ms. Any click, key press or Esc during it jumps to the end state. **Agreed slips never move** in a "Fill open slots" build: they are on the board, solid ink, from the first frame, and holds fill only the free cells.

If the engine cannot place anyone ("No one is ready"), no animation: the header line reads "Nobody is ready to match. A person is ready when they approve their evidence card, a company when it sends its brief." and the button stays.
If the engine fails: the button returns, `err` `t-small` beside it: "The schedule was not built. Nothing was changed. Try again."

### 5.6 The rail, nothing selected: "How this schedule was built"

1. `t-head`: "How this schedule was built". Before a build: `t-body` `ink-2` "Press Build schedule. Every person asks for the tables that best fit what they have shown they can do. Every table keeps the people that best fit what it needs done. It repeats until nobody has anyone left to ask." and a link "The method in full".
2. After a build, a table of rounds (rows 32, 1px `line-soft`): "Round ‹1›" · "‹288› asked" · "‹164› held" · "‹124› passed on", `t-small` tabular. Six rows, then "Show all ‹11› rounds".
3. 16 below, `t-small` `ink`: "‹0› blocking pairs: there is no person and company who would both rather meet each other than a meeting they were given." If there are some after manual changes, each is a row: "‹Farhan Ahmed› and ‹Kuura Cloud› would both prefer each other to a meeting they have." with a text button "Show" that selects the slip to swap.
4. 16 below, text button `play` "Play the build again" (replays the stored trace on the board without changing data; absent with reduced motion).
5. 16 below, `t-small` `ink-2`: "The matcher reads tasks, skills with proof, marked interest and free times. It never reads a name, nationality, language or school." Link "What it sees".

### 5.7 The rail, a meeting selected: "Why you two"

Top to bottom, 16 between blocks, 1px `line-soft` between the numbered groups below:

1. **State row:** the pair mark, then the state words in `t-head` (2.5). Right end: a 32 x 32 `x` button (clears the selection).
2. **When and where:** `m-large` `ink` "‹13:20›" then `t-head` `ink` " Table ‹7›", and under it `t-small` `ink-2` "‹13:20–13:30› · ‹Thu 26 Nov›".
3. **Who:** two rows of 44. Row 1: the person's full name `t-head`, under it `t-small`: "not answered yet" `ink-3` / "said yes ‹18 Nov, 10:42›" `ink` / "said no ‹…›" `ink-2`; right end text button "Open page" with `chevron-right` (to `/p/<key>?from=schedule&step=meetings`). Row 2: the company, same shape. **There is no control here that answers for either side.**
4. **`t-head` "Why you two".** One block per task skill that the person has proof for, at most three, most important task first:
   - `t-small` `ink-2`: "‹Routa Logistics› needs"
   - the task line in `t-body` 600 `ink`: "‹Find out each week why deliveries arrive late, from the driver app's export.›"
   - 8 below, the skill tag (filled proof mark): ‹perform data analysis›
   - 8 below, `t-small` `ink-2`: "‹Daniela› did", then a quote slab with her sentence and the proving words highlighted: "‹I built a spreadsheet that logged everything we threw away, by day and by reason. After three months our waste was down by about a third.›"
   Then one line, `t-small` `ink`: "‹3› of this task's ‹4› skills have proof in ‹Daniela›'s stories." and, if any are missing, the missing ones as skill tags with the hollow proof mark, introduced by `ink-2` "No proof for:". Missing proof is shown, never hidden.
5. **`t-head` "A question to start with".** `t-body` `ink`: "‹What made you start tracking waste, and what did you change first?›" (stored when the meeting is created; built from the task and the proof line).
6. **`t-head` "Where each ranked the other".** Two lines `t-small` `ink`: "‹Routa Logistics› was ‹Daniela›'s ‹2nd› choice of ‹6›." "‹Daniela› was ‹4th› of ‹23› on ‹Routa Logistics›' list." Under them `ink-3`: "‹Daniela› marked this task as interesting." / "‹Routa Logistics› asked to meet the person behind this evidence." when true. Organiser only: neither side ever sees a rank.
7. **`t-head` "Practical"** (only what the company stated; nothing about the person): rows of 28, label `ink-2`, value `ink`: "Working language" "‹English›" · "Can hire from abroad" "‹Yes›" · "Help with relocation" "‹Yes›". Then `t-small` `ink-2`: "Permits, relocation and Finnish courses: the Espoo desk is at the entrance all afternoon."
8. Actions row: text button `grip-vertical` "Move" (starts keyboard move) and text button "Cancel this meeting". Cancel is an inline confirm with three radio rows (40 high): "The company can't make it", "The person can't make it", "Other reason", then quiet button "Cancel the meeting" and text button "Keep it". After: the slip leaves the board, the cell is open, both pages show "The organiser cancelled this meeting." and the rail shows the open slot (5.8). Save failure: `err` `t-small` "Could not save. Nothing was changed. Try again."

**When both have said yes** the rail's blocks 1 to 3 are replaced by the **introduction card** (5.9) and blocks 4 to 8 remain under it. Under the card two text links: "‹Daniela›'s day schedule" and "‹Routa Logistics›' day schedule" (to `/s/<key>`).

### 5.8 The rail, an empty cell selected: "Open slot"

`t-head`: "Open slot". `m-large` "‹14:30›" `t-head` " Table ‹7›", `t-small` `ink-2` "‹Routa Logistics›". Then `t-head` "People who could take it" and up to five rows (56 high): name `t-body` 600, under it `t-small` `ink-2` "‹2› of ‹4› skills with proof · free at ‹14:30› · has ‹1› of ‹3› meetings", right a quiet button "Propose". The list is the table's own ranking, filtered to people who are free then and under their maximum. Proposing creates a proposed meeting (a slip appears, `d-state`) that both sides must still accept. None: "Nobody who is free at ‹14:30› has proof for this company's tasks."

**List view** (`?view=list`): a table in place of the board. Columns: Time `m-time` (72) · Table `m-time` (56) · Company (220) · Person (220) · State (pair mark and words, 220) · Proof (`t-small` "‹3› of ‹4› skills", 120). Rows 44, grouped under slot headings ("‹13:00›", 32 high on `desk`). Click a row: same rail. This view is the default under 900px wide.

### 5.9 The introduction card (one component, used in the rail, on both sides' pages and on the day schedule)

`paper`, 1px `ink` border (the only ink-bordered panel in the product), radius 8, padding 20.
- Row 1: the agreed pair mark, `t-small` 600 `ink` "Both said yes", right aligned `t-small` `ink-2` "‹18 Nov 2026›".
- Row 2, 12 below: `m-large` "‹13:20›", then `t-title` " Table ‹7›".
- Row 3, 4 below: `t-head`: "‹Daniela Rojas› and ‹Routa Logistics›".
- 12 below: `t-small` `ink-2` "‹Routa Logistics› needs", the task line in `t-body` 600; 8 below `t-small` `ink-2` "‹Daniela› did", the proof line in a quote slab with its highlight. One pair only (the strongest).
- 12 below: `t-small` `ink-2` "Start with", then the question in `t-body`.
- 12 below: the "Practical" rows.
- 16 below: quiet button `calendar-plus` "Add to calendar" (downloads a real `.ics` for that slot with the table and the question in the description).

The card does not exist in any form, on any screen, until both answers are stored. Before that the company sees no name (6.5).

### 5.10 Without a meeting

H2 `t-head` "Without a meeting", 40 above. Sentence `t-small` `ink-2`: "‹8› people who are ready have no meeting. Each has a reason, and nobody is left off for who they are."
Rows 48: name `t-body` 600 (240) · the stored reason `t-small` `ink` (flex): "Every table that fits this evidence is full." / "No task at this event matches this evidence yet." / "Marked only ‹1› task, and that table is full." · right, text button "Find a slot" (selects the best open cell for them, if one exists; else `ink-3` "no open slot fits").
Under the rows, a second group `t-small` `ink-2`: "‹16› people are not ready: ‹9› have written stories but not approved a card, ‹7› have not started." with text button "Show them" (the Overview list, filtered).
None: "Everyone who is ready has at least one meeting."

### 5.11 Who gets meetings (the fairness panel)

H2 `t-head` "Who gets meetings", 40 above. Paragraph `t-small` `ink-2`, max 68ch: "The matcher never reads a name, nationality, language or school. The groups below come from a separate, optional form. They are joined to the schedule only here, to count. A group of fewer than 10 people is not shown."

A table, 952 wide. Head row 36 on `desk`. Rows 40. Grouped by attribute, each attribute introduced by a 32-high row with its name in `t-small` 600 `ink`: **Nationality** (‹Finnish›, ‹Other EU or EEA›, ‹Outside the EU›) · **First language** (‹Finnish or Swedish›, ‹Another language›) · **Education** (‹Degree from Finland›, ‹Degree from abroad›, ‹No degree›) · **Career path** (‹Same field as before›, ‹Changing field›).

| Column | Width | Content |
|---|---|---|
| Group | 240 | name `t-body` |
| People ready | 96, right | count |
| With a meeting | 144, right | "‹52› (‹91›%)" |
| Meetings each | 112, right | mean to one decimal "‹1.6›" |
| Share with a meeting | flex (360) | a dot chart: a 1px `line` axis from 0 to 100% across the cell, ticks at 0, 50 and 100 drawn once in the head row in `m-micro` `ink-3`; one 8px `ink` circle at the group's share. In the last row of each attribute, a 1px `ink-3` bracket under the axis spanning the lowest to the highest dot of that attribute, labelled `t-micro` `ink` "gap ‹4› points". |

Under the table, one sentence `t-body` `ink`: "The largest gap between any two groups is ‹6› points (‹Education›)." Then `t-small` `ink-2`: "A gap is not proof of bias and a small gap is not proof of fairness. With ‹104› people, a difference of a few points can be chance." Link "How this is measured".
Before a build: the table shows the People ready column only, the rest reads "after the schedule is built" in `ink-3`.

### 5.12 States

- **Loading:** header as `sunk` bars, section bar real, board as its frame with head row and row labels and empty cells, rail as five `sunk` rows. No spinner.
- **Not built:** board empty, rows and labels real, a centred line inside the board at row 9, `t-body` `ink-2`: "No meetings yet. Build schedule fills this board."
- **Draft:** all slips are proposed. A `desk` strip under the header, radius 6, padding 8 12, `t-small` `ink`: "This is a draft. Move or cancel anything, then send. Nobody has been told yet."
- **Answers arriving** (the page polls every 15s): a slip changes state in place with `d-state`. Header counts update. Nothing else moves.
- **A person or company declines:** the slip leaves the board, the cell is open, the header line gains "‹9› slots are open." and the primary becomes "Fill ‹9› open slots".
- **A company marked as not attending** (Overview row menu is out of scope; the action lives here: select any of its slips, rail, "Cancel this meeting", then a text button "Cancel all ‹8› meetings at this company's tables"): its rows are hatched and labelled `ink-3`.
- **Finished event:** the board is read-only (no drag, no cancel). Agreed meetings that took place stay solid.

### 5.13 Keyboard

`/` search. `B` build or fill (when the primary shows it). `S` send (when the primary shows it). Arrows move the cell selection. Enter opens it in the rail. `M` move. `V` toggles board and list. `1`–`3` jump to the three sections. `Esc` clears. Off while a field is focused. `?` opens a small popover listing them, bottom left, not a modal.

---

## 6. Screen 3: Company page `/e/<event>/c/<key>`

Purpose: a company's vague need becomes three concrete tasks in about three minutes, and the company sees at once that people registered for this event have done that work.

**Frame at 1440 x 900.** Side top bar 52. One centred pair 1128 wide: main column 680, gap 48, side column 400 (sticky at top 76). The page is one document that grows downward as steps complete; earlier steps stay visible in collapsed form. `?step=` scrolls to and focuses the current step.

### 6.1 Step "need"

1. H1 `t-page`: "What do you need help with?"
2. `t-body` `ink-2`, max 60ch: "Say it the way you would to a colleague. A job title is fine. A few questions will turn it into the work itself."
3. A text area (680 wide, min height 96), label visually hidden "Your need", placeholder "for example: we need a full-stack dev". Limit 400 characters, counter `t-micro` `ink-3` at the bottom right only past 320.
4. 16 below: the primary button **"Continue"**. Disabled until 8 characters are typed. Enter with Cmd or Ctrl submits.

Side column, from the first load: `desk`, radius 8, padding 20. `t-head` "Who is registered". `t-body` `ink`: "‹104› people have shown what they can do, each with their own account of work they did." Then three anonymised proof lines as quote slabs (source line "A person registered for this event"), picked by rule: the three most recently approved cards, one sentence each (the proof line of their first skill). Under them `t-small` `ink-2`: "You see names after you and the person have both said yes." This panel is the answer to "the city's pool has nobody for us", so it is there before the company types anything.

### 6.2 Step "questions"

After "Continue" the need collapses to a one-line row (44 high, 1px `line-soft` bottom): `t-small` `ink-2` "You asked for", `t-body` `ink` "“‹we need a full-stack dev›”", right text button `pencil` "Change". Below it, one question at a time.

**Question block:** `t-micro` `ink-3` "Question ‹1› of ‹3›" is not used (no label above a heading). Instead the question in `t-head` `ink` with the count after it in `t-small` `ink-3`: "‹What would this person build or fix in their first month?›  ‹1› of ‹3›". 12 below, three or four option rows (2.6), 8 apart, then a last row "Something else", which on selection becomes a text field (placeholder "Say it in a sentence") with a quiet button "Use this". Keys `1`–`4` pick, `5` or `E` opens "Something else". Picking an answer collapses the block (`d-state`) to a one-line row "‹question›" `ink-2` / "‹answer›" `ink` / "Change", and the next question appears. 3 questions as a rule, a 4th only if the first three leave the work unclear.

The questions and their options are written by the model from the need, in one call, and stored. They are always about the work (what gets built or fixed, who uses it, what it touches each day, what must be done alone from day one), never about the person (no years of experience, degree, age, language or nationality questions; the prompt forbids them and a server check drops any question containing those words).

- **While the questions load** (after "Continue"): three skeleton option rows under a `sunk` bar. No spinner, no typing dots, no streamed text. If it takes over 6s: `t-small` `ink-2` "Still working on your questions."
- **Failure:** `err` `t-small` "The questions did not load. Your text is saved." and quiet button "Try again".
- Text button under the block, `t-small`: "Skip the questions" (goes to tasks built from the need alone; the tasks step then says "These are rough. Answering the questions makes them sharper.").

### 6.3 Step "tasks"

H2 `t-page` (this is the page's new headline; the old H1 scrolled away): **"Three things you need done"**. `t-body` `ink-2`: "Edit anything. People are matched to these tasks, not to a job title."

Three task blocks, divided by 1px `line-soft`, padding 20 0. Each:
- The **task line**, `t-title` `ink`, in an in-place editable field (looks like text; on focus it gets the text-field surface). One sentence, at most 140 characters, starting with a verb: "‹Find out each week why deliveries arrive late, from the driver app's export.›"
- 8 below: its ESCO skills as skill tags (hollow proof mark here, since a task has no proof), 2 to 5 of them, each with a 14px `x` to remove, then a text button `plus` "Add a skill" which opens a text field that searches the live ESCO API as you type (debounced 300ms) and lists up to 6 results (label, and under it `t-small` `ink-3` the ESCO description's first clause). Only ESCO results can be added.
- 12 below, the **count line**, `t-body` 600 `ink`: **"About ‹9› people registered for this event have done work like this."** Right of it a text button `chevron-down` "See what they did".
  - Rule (printed on Method): a person counts when they have an approved proof line for at least half of the task's skills, where a skill also counts if ESCO lists it as narrower than, or the same as, the task's skill. "About" because cards are still being approved.
  - "See what they did" expands (`d-panel`) up to five rows, best fit first. Each row: source line "A person registered for this event · ‹3› of ‹4› skills with proof", a quote slab with one proof line and its highlight, and at the right a toggle chip **"Ask to meet"**. No name, no initials, no description of the person. Under the rows `t-small` `ink-3`: "Asking to meet raises this person on your list. The organiser's schedule still needs a yes from both of you."
  - Zero: `t-body` `ink` "Nobody registered so far has shown this." `t-small` `ink-2` "‹104› of ‹120› people have finished their evidence. The organiser sees this gap and can invite for it."
- A text button `trash-2` "Remove this task" at the block's right end (inline confirm). Under the third block: text button `plus` "Add a task" (max 5).

Counts recompute when a skill is added or removed (debounced 500ms; the number cross-fades in `d-state`; while computing it is a 24-wide `sunk` bar).

Below the tasks, H3 `t-head` "At the event", four rows (label 200 `t-body` `ink-2`, control right):
- "Tables" segmented "1" | "2".
- "Working language" toggle chips "English", "Finnish", "Swedish" (at least one).
- "Can hire someone living abroad" segmented "Yes" | "No" | "Not sure".
- "Help with relocation" segmented "Yes" | "No" | "Not sure".
`t-small` `ink-3` under them: "These are shown to the people you meet. They are not used to rank anyone."

32 below: the primary button **"Send brief to the organiser"**, and beside it `t-small` `ink-3`: "You can change it until ‹Thu 19 Nov›."
- Validation: "Write at least one task." "Each task needs at least two skills." "Pick a working language." The page scrolls to the first problem and focuses it.
- After sending: the button's place shows `check` "Sent ‹17 Nov 2026, 09:12›" on `ok-tint`, the tasks stay editable until the deadline with a quiet button "Save changes" appearing on edit, and the step "meetings" appears below.

Side column on this step: `t-head` "Your brief". Rows: "Asked for" the original words in quotes · "Tasks" ‹3› · "Skills" ‹11› · "People who have done this" "about ‹23›" · "Asked to meet" ‹4› · "Tables" ‹1›. Then `t-small` `ink-2`: "At the event you get at most ‹10› ten-minute meetings per table, each with someone whose own account covers one of these tasks. No queue at your stand."

### 6.4 Step "meetings" (after the brief is sent)

H2 `t-page` "Your meetings". Filter row (segmented, as Cal.com's): **"Waiting for you ‹4›" | "Agreed ‹6›" | "Declined ‹1›"**.

Before the organiser has sent proposals: `t-body` `ink-2` "The organiser builds the schedule after ‹Mon 23 Nov›. Proposals appear here. You say yes or no to each."

Each proposal is a row block, 1px `line-soft` between, padding 20 0, three columns:
- Left 120: `m-large` "‹13:20›", under it `t-small` `ink-2` "Table ‹7›".
- Middle (flex): `t-small` `ink-2` "For your task", the task line `t-body` 600. 8 below `t-small` `ink-2` "A person registered for this event did", then the proof line in a quote slab with its highlight. Then `t-small` `ink`: "‹3› of this task's ‹4› skills have proof." and missing skills as hollow tags after "No proof for:".
- Right 200, stacked 8 apart: quiet button (40 high) `check` **"Yes, meet"**; quiet button (40 high) **"No thanks"**.
- After Yes: the buttons are replaced by the pair mark and `t-small` `ink` "You said yes ‹18 Nov, 11:05›. Waiting for the other side." and a text button `undo-2` "Undo". After No (inline confirm "Decline this meeting?" / "Decline" / "Keep it"): "You declined ‹…›." with "Undo" until the organiser refills the slot.
- **When both have said yes** the row block is replaced by the introduction card (5.9), now with the person's name, and moves to "Agreed".

No name, description, nationality, language, school or photo of the person is shown on this page before both answers are yes.

Under the list: a link "Your day schedule" (to `/s/<key>`), `t-small` `ink-2` "One page with your tables and times. It works without a connection."

### 6.5 States

- **Returning with a brief in progress:** the page opens at the furthest step, earlier steps collapsed.
- **Deadline passed, brief not sent:** the need and tasks steps still work; a `desk` strip under the bar: "Briefs closed on ‹Thu 19 Nov›. Send yours and the organiser can still add you by hand."
- **Unknown key:** `t-page` "This link does not match a company at this event." `t-body` `ink-2` "Ask the organiser for a new one."
- **Leaving with unsaved edits:** the browser's own confirm.

---

## 7. Screen 4: Person page `/e/<event>/p/<key>`

Purpose: a person shows what they can do without a CV, sees exactly which of their own words count as proof, corrects it, and approves it. Then they say which meetings they want.

**Frame at 1440 x 900.** Side top bar 52. Centred pair 1128: main column 680, gap 48, side column 400 (sticky at top 76). Same growing-document pattern as the company page. This page is used mostly on a phone (section 10).

### 7.1 Step "stories"

1. H1 `t-page`: "What did you actually do?"
2. `t-body` `ink-2`, max 60ch: "Three short stories about work you did. No CV, no titles. Write the way you would tell a friend, in English, Finnish or Swedish. Paid or unpaid work both count."
3. A one-line text field, label `t-small` 600 "In a few words, what was your last work?", placeholder "for example: ran a café in Tapiola for four years". This is shown to the organiser beside the name. It is not read by the matcher.
4. Three story blocks, 24 apart. Each: the prompt as a `t-head` label, a text area (min height 120), and under it `t-micro` `ink-3` "‹62› words" (turns `ink` 600 with "a little more helps" under 40 words; no hard block under 40, a hard limit at 250).
   - "Tell us about something you built, fixed or changed."
   - "Tell us about a time you solved a problem with numbers, a tool or a system."
   - "Tell us about something you organised, or taught someone to do."
5. 24 below: the primary button **"Find my skills"**. Disabled until at least one story has 40 words. Beside it `t-small` `ink-3`: "Nothing is shared until you approve it."

Side column: `desk`, radius 8, padding 20. `t-head` "Why no CV". `t-body` `ink`: "A CV says what you were called. Companies here ask for work they need done. Your own story of doing that work is the only thing that counts." Then `t-head` "What happens to your words": three lines `t-small` `ink`, each with a 14px `check`: "A model reads them once to find skills." "You see every skill and the sentence behind it, and you can change or remove any of them." "Companies see one sentence, without your name, until you both say yes." Then a text button `trash-2` "Delete everything about me" (inline confirm; removes stories, card and answers and returns the page to its first state).

### 7.2 Step "card" (the evidence card)

After "Find my skills" (loading: the stories stay readable, the button reads "Reading your stories…" with the spinner, and the right column shows five skeleton rows; no streamed text. Failure: `err` `t-small` "Your stories are saved, but the skills did not load." quiet button "Try again").

H2 `t-page`: **"Your evidence card"**. `t-body` `ink-2`: "Each skill is here because of a sentence you wrote. Change anything that is wrong. A skill without a sentence does not count."

The main column widens for this step: the pair becomes **story column 540, gap 48, skills column 540** (1128 total; the side column is hidden until the step is approved).

**Story column.** The three stories as read-only text, each under its prompt in `t-small` `ink-2`, text `t-body` `ink`, 24 apart. Every sentence that is the proof line of a skill carries the highlight on its proving words. A text button `pencil` "Edit my stories" at the top right returns to 7.1 (the card is rebuilt afterwards; approved skills whose sentences are unchanged are kept).

**Skills column.** `t-head` "‹5› skills with proof". Rows, 1px `line-soft` between, padding 14 0. Each row:
- Line 1: the skill tag (filled proof mark, ESCO label, link). Right end: text button "Change sentence" and a 32 x 32 `x` button (tooltip "Remove this skill").
- Line 2, 8 below: the proof line in a quote slab, `t-small` source line "Story ‹2›".
- Hover or focus a row: its words in the story column switch to `proof-strong` and the story scrolls into view if needed; every other highlight drops to 40% opacity. Hover a highlight in the story: its row gets a `cobalt-tint` ground. This two-way link is the heart of the screen.
- **"Change sentence":** the row gets a 1px `cobalt` border and reads `t-small` 600 "Pick the sentence that shows this." Every sentence in the story column becomes a button (hover: `sunk` ground, cursor pointer). Clicking one sets it as the proof line (the whole sentence is highlighted) and ends the mode. Esc cancels.
- **Remove:** the row collapses (`d-state`) and a line at the bottom of the list reads "Removed: ‹maintain customer service›." with `undo-2` "Undo".
- Under the rows: text button `plus` "Add a skill": an ESCO search field (as 6.3), then the pick-a-sentence mode. A skill cannot be saved without a sentence: the row stays in pick mode and reads "Pick the sentence that shows this, or remove the skill."
- Under that, when it applies, `t-small` `ink-3`: "‹2› more skills were suggested but no sentence backed them, so they were left out."
- None found: `t-body` `ink` "No skills were found in these stories." `t-small` `ink-2` "Stories with what you did, with what, and what changed work best. Edit a story, or add a skill and pick its sentence."

Under both columns, 32 above, centred to the pair's left edge: the primary button **"Approve my evidence card"**, beside it `t-small` `ink-3`: "After this, companies can see these sentences without your name, and you can be matched." After approving: `check` "Approved ‹18 Nov 2026, 10:12›" on `ok-tint`, and a text button "Change my card" (reopens the step; approval is needed again).

### 7.3 Step "tasks" (after approval)

The layout returns to main 680 and side 400. H2 `t-page`: "Work at this event that fits what you have done". `t-body` `ink-2`: "Mark what you would like to talk about. It raises those companies on your list. You can be offered others too."

Rows, 1px `line-soft` between, padding 16 0: line 1 `t-small` `ink-2` the company name; line 2 the task line `t-body` 600; line 3 `t-small` `ink`: "Your proof: " then the first words of the matching proof line in quotes with the highlight, one line, ellipsis; then `t-small` `ink-2` "‹3› of ‹4› skills". Right: toggle chip **"Interested"**. Ordered by fit. Ten rows, "Show ‹14› more". Tasks with no proven skill in common are not listed; a line under the list says "‹31› other tasks at this event ask for things your stories do not show yet."

Below: `t-head` "At the event". Rows: "Meetings you want, at most" segmented "1" | "2" | "3" (default 3) · "Times you can't make" toggle chips, one per slot in `m-time` ("13:00" … "14:50"), none on by default.

Side column: `t-head` "Your card", the count of skills, the date approved, text button "Change my card"; then `t-small` `ink-2`: "The matcher reads your skills, their sentences, what you marked here and your free times. It does not read your name, nationality, language or school. There is nowhere on this page to enter them."

No primary button on this step: every control saves as it changes (`t-small` `ok` "Saved" beside the changed control for 2s).

### 7.4 Step "meetings" (after the organiser sends)

Same structure as 6.4, from the person's side. H2 `t-page` "Your meetings", the same three-way filter, each proposal a row block:
- Left 120: `m-large` time, `t-small` `ink-2` "Table ‹7›".
- Middle: `t-head` the company name (the person always sees who the company is). `t-small` `ink-2` "They need", the task line `t-body` 600. 8 below `t-small` `ink-2` "You did", the proof line in a slab. Then the company's "Practical" facts as one `t-small` `ink-2` line: "Working language: ‹English› · can hire from abroad: ‹yes› · relocation help: ‹yes›".
- Right 200: quiet buttons **"Yes, meet"** and **"No thanks"**, same behaviour as 6.4.
- Both yes: the introduction card.

Before proposals exist: "The organiser builds the schedule after ‹Mon 23 Nov›. Proposals appear here and you say yes or no to each." Then the link "Your day schedule".

### 7.5 States

- **Stories written, card not built:** the page opens at 7.1 with the stories filled and the primary button enabled. (This is the state of ‹9› people in the fixtures, including the person the video uses.)
- **Card built, not approved:** opens at 7.2.
- **A story edited after approval:** the card step reopens with a `desk` strip "Your stories changed. Check the card and approve it again." Until then the old approved card stays in use.
- **Unknown key:** "This link does not match a person at this event." "Ask the organiser for a new one."
- **Deleted:** the page shows 7.1 empty and a 4s confirmation `check` "Everything about you was deleted."

---

## 8. Screen 5: Day schedule `/s/<key>`

Purpose: on the day, everyone opens one link and sees where to be. It must not be able to fail when 135 people open it in the same minute.

**How it is built (a design requirement, not a suggestion).** One HTML document per person and per company. All its data is in the document. It renders fully with JavaScript off. It makes no request after the document, its one stylesheet and its fonts. A service worker caches it on first visit so it opens with no connection. No login, no session, no API call, no database read at view time: the server sends a cached file. Total transfer on first load under 60 KB plus fonts. The only script handles the calendar file, the "next step" tap and the offline line.

**Frame.** One column, 480 wide, centred on desktop (page ground `desk`, the column `paper`, 1px `line`, radius 8, padding 32, 32 above and below). At 390 the column is the page, padding 20 16, no border. No top bar.

Content, top to bottom:
1. The mark (no wordmark), 20 below it `t-small` `ink-2`: "‹Espoo Tech & Talent Meetup›".
2. H1 `t-page`: the person's full name, or the company's name.
3. `t-small` `ink-2`: `clock` "‹Thu 26 Nov 2026›, ‹13:00–15:00›" and on the next line `map-pin` "‹Dipoli, Otakaari 24, Espoo›".
4. 24 below, `t-head`: "Your ‹3› meetings". (A company: "Table ‹7›: ‹9› meetings".)
5. One block per agreed meeting in time order, 1px `line-soft` between, padding 20 0:
   - `m-large` `ink` "‹13:20›" and right aligned on the same line `t-title` `ink` "Table ‹7›".
   - `t-head`: the other side's name (the company for a person; the person's full name for a company, since both have said yes).
   - `t-small` `ink-2` "They need" / "‹Daniela› did", then the task line or the proof line, `t-body`, at most three lines.
   - `t-small` `ink-2` "Start with", then the question, `t-body`.
   - Between two meetings more than one slot apart: a 28-high row, `t-small` `ink-3`: "free ‹13:30–14:10›" (the break is named: "break ‹13:50–14:10›").
6. Proposed meetings that are still waiting are **not** listed. One line under the list when there are some: `t-small` `ink-2` "‹1› more is waiting for an answer." with a link "Answer it" to the person or company page.
7. 24 below: quiet button `calendar-plus` "Add all to calendar" and quiet button `printer` "Print". Print stylesheet: black on white, no buttons, one page for up to six meetings.
8. 24 below, the status line, `t-small` `ink-2`: `check` "Saved on this device at ‹18 Nov, 11:06›. It opens without a connection." When the browser is offline: `wifi-off` "No connection. This is the schedule saved at ‹18 Nov, 11:06›."
9. `t-small` `ink-2`: "Questions about permits, relocation or Finnish courses: the Espoo desk is at the entrance all afternoon."
10. The footer line "Synthetic event data".

**After the event has ended** (the finished event; decided by the event's end time against the device clock), each meeting block gains, 12 below the question, one row: `t-body` 600 `ink` **"Did this lead to a next step?"** and two quiet buttons (44 high, equal width) **"Yes"** and **"Not yet"**. One tap stores the answer and the row becomes `t-small` `ink`: `check` "You answered: yes. Thank you." with `undo-2` "Change". With no connection the tap is kept on the device and the row reads "Saved here. It will be sent when you are back online." and is sent by the service worker later. The heading in item 4 changes to "Your ‹3› meetings on ‹Thu 29 Oct›". Each side answers for itself and never sees the other side's answer.

States: **no agreed meetings yet:** "You have no agreed meetings yet." and the link to answer proposals. **Unknown key:** "This link does not match anyone at this event." **A meeting cancelled after the page was cached:** on the next online load the block is replaced by one line "The ‹13:20› meeting at Table ‹7› was cancelled by the organiser." for 24 hours.

---

## 9. Screen 6: Report `/e/<event>/report`

Purpose: the organiser's proof to their own managers and to doubtful companies that the event produced something.

**Frame.** Organiser top bar. One column 952 wide at x=24, plus a right column 416 (not sticky) holding the notes. Read-leaning Operate.

- H1 `t-page`: "Report". Right end of the line: primary button `download` **"Download report (.csv)"**.
- **Before the event has ended:** `t-head` "The event is on ‹Thu 26 Nov 2026›." `t-body` `ink-2` "After it, each person and each company is asked one question per meeting on their day schedule: did this lead to a next step? Their answers appear here." No primary button. Nothing else.
- **After:** two sentences in `t-title` `ink`: "**‹58› of ‹64› agreed meetings took place. ‹21› led to a next step according to both sides, and ‹13› more according to one.**" Under them `t-small` `ink-2`: "‹96› of ‹116› possible answers are in (‹83›%). Meetings with no answer are counted as unanswered, never as no."
- H2 `t-head` "By company", 40 above. Table (head 36 on `desk`, rows 44): Company (flex) · Tasks (72, right) · Meetings held (112, right) · Next step, both say (144, right) · Next step, one says (144, right) · Not yet (96, right) · No answer (96, right). Sorted by meetings held. Each row links to the company page.
- H2 `t-head` "By task", 40 above: the ten tasks with the most next steps: the task line, company, meetings, next steps. This tells the organiser which kinds of need work at these events.
- H2 `t-head` "Who got next steps", 40 above: the table and dot chart of 5.11 with the columns People who met · With a next step · Share, and the same gap sentence and caution.
- Right column: `t-head` "What this is". `t-small` `ink`: "A next step is whatever either side calls one: an interview, a second talk, a trial task. It is their own answer, one tap each, not a hiring result." Then `t-head` "For the next event" and up to three stored sentences computed from this event: "‹4› tasks had nobody with proof. They were all about ‹embedded software›." "‹6› agreed meetings did not take place." "‹2› companies sent their brief after the deadline."

States: loading as `sunk` bars; a count that cannot be computed is not rendered.

---

## 10. Screen 7: Method `/method`

Purpose: explain the algorithm so a city official can repeat it, prove it with a benchmark, show the fairness numbers, and state the limits. Read mode: organiser top bar, one column 760 wide, a sticky section list (200 wide, `t-small`, links, current one `ink` 600) in the left margin. Body `t-body` 15 / 26, max 68ch. Section headings `t-title`, 48 above, 12 below. Tables may run the full 760.

1. H1 `t-page`: "How Common Ground matches, and how well". Under it `t-body` `ink-2`: "What the matcher reads, how a schedule is built, a benchmark against two common ways of matching, who gets meetings, and where it fails."

2. **"What the matcher reads"**. Two lists side by side (368 each, 24 gap), each under a `t-head`: **"Reads"**: "The tasks a company wrote, and their ESCO skills" · "The skills a person approved, each with its sentence" · "Tasks a person marked as interesting" · "Evidence a company asked to meet" · "Free times and the number of meetings wanted". Each with a 14px `check`. **"Never reads"**: "Name" · "Nationality or country of birth" · "Language" · "School or degree" · "Age, gender, photo" · "A CV or a job title". Each with a 14px `minus`. Under both, `t-body`: "A skill counts only if a sentence the person wrote proves it and the person approved it. Skill names come from ESCO, the European classification of skills, so a café manager and a data analyst are described in the same words."

3. **"How a schedule is built"**. Six numbered steps (the order is the information), `t-body`:
   1. "Every person gets a list of tables, best first: how many of a task's skills they have proof for, then the tasks they marked as interesting."
   2. "Every table gets a list of people, built the same way from the company's side."
   3. "Round one. Each person asks for their first choice. Each table holds the people highest on its list, up to its number of slots, and passes on the rest."
   4. "Next round. Anyone passed on asks their next choice. A table may let go of someone it was holding for someone higher on its list."
   5. "This repeats until nobody has anyone left to ask. Nothing is final until the last round, which is why the method is called deferred acceptance."
   6. "Then the meetings are fitted into times so that nobody is in two places at once."
   - Beside the steps, a **small worked example** (a panel 760 wide, `paper`, 1px `line`, radius 8, padding 16): a board of three tables and four slots with six first names from the fixtures, and a segmented control above it: **"Round 1" | "Round 2" | "Round 3" | "Fitted into times"**. Each segment shows that state with the slip vocabulary of 2.5 (held, then proposed) and one sentence under the board saying what changed ("‹Table 2› let go of ‹Farhan› for ‹Oksana›, who is higher on its list. ‹Farhan› asks his next choice."). The example is computed by the real engine from a six-person fixture, not drawn. Changing segment cross-fades in `d-state`; no travel animation here.
   - Then `t-body`: "Gale and Shapley published this method in 1962. Lloyd Shapley and Alvin Roth received the 2012 Nobel memorial prize in economics for the work that followed it. A version of it places tens of thousands of new doctors in US hospitals every year."
   - Then `t-body`: "People do the asking, on purpose. In this method the side that asks gets the best schedule that is still stable for it." (The truthfulness sentence is held back until the Chief rules on open question 1.)
   - Then the three rules in a table (label, value, both live from config): "A person counts for a task when" "they have proof for at least ‹half› of its skills" · "Meetings per person" "at most ‹3›, chosen by the person" · "Meetings per table" "‹10›, one per slot".

4. **"Is it stable?"** `t-body`: "A blocking pair is a person and a company who would both rather meet each other than a meeting they were given. If one exists, the schedule let both of them down." Then one sentence in `t-title` `ink`, computed on load from the current schedule of the event in `?event=`: "**‹0› blocking pairs in the schedule of ‹Espoo Tech & Talent Meetup, 26 Nov›.**" Under it `t-small` `ink-2`: "Checked ‹just now› over ‹172› meetings and ‹1,560› possible pairs." and a quiet button `rotate-cw` "Check again". If the schedule is not built: "No schedule is built for this event yet." If the organiser's changes created some: the true number, and "‹2› came from changes made by hand."

5. **"The benchmark"**. Paragraph: "A synthetic event of ‹120› people and ‹15› companies. Before any matching, each possible pair was given a hidden label from 1 to 5 for how well the person's real experience fits the task. The same event was then scheduled three ways, ‹20› times with different random details. No method saw the labels."
   - Three short definitions, `t-body`, each starting with the method's name in 600: "**Keyword CV matching** ranks people by how many words their CV shares with the job advert." "**AI-polished CV ranking** first has a model rewrite every CV for the advert, as people now do, then has a model rank them, as companies now do." "**Common Ground** uses tasks, proof lines and deferred acceptance, as above."
   - The result as two sentences in `t-title` `ink`: "**With Common Ground, ‹78›% of meetings were good ones. With keyword CV matching, ‹41›%. With AI-polished CVs, ‹36›%.**"
   - The table (head 36 on `desk`, rows 56, 1px `line`; no colour fills; Common Ground's row first and its numbers in 600):

     | Method | Good meetings | Wasted meetings | Blocking pairs | Largest gap between groups |
     |---|---|---|---|---|
     | Common Ground | ‹78›% | ‹6›% | ‹0› | ‹4› points |
     | Keyword CV matching | ‹41›% | ‹29›% | ‹212› | ‹19› points |
     | AI-polished CV ranking | ‹36›% | ‹33›% | ‹240› | ‹23› points |

     Each cell: the value in `t-head` tabular and under it `t-small` `ink-3` the range across runs "‹74›–‹82›". Under the table four `t-small` `ink-2` lines defining the columns: "Good: the hidden label is ‹4› or ‹5›." "Wasted: the hidden label is ‹1› or ‹2›." "Blocking pairs: counted with each method's own schedule against the evidence-based lists." "Largest gap: the widest difference in the share of people with a meeting between two groups of the same kind."
   - A chart, 760 wide, titled in `t-head` "Share of meetings that were good, by run": three rows of 40 (method name at the left, 220 wide), a shared axis 0 to 100% with ticks at 0, 25, 50, 75, 100 in `m-micro`. One mark per run: Common Ground 6px `ink` circles, the two others 6px hollow `slate` squares and hollow `slate` triangles. A 2px tick at each method's mean. Legend above. Hover a mark: "run ‹7›: ‹79›% (‹135› of ‹171›)".
   - `t-small` `ink-2`: "The benchmark files, the labels and the code are in the repository: " link.

6. **"Who gets meetings"**. The table and dot chart of 5.11 for the benchmark event, with three marks per group row instead of one (the chart marks above) so the three methods can be compared, and under it per method one sentence: "Common Ground: largest gap ‹4› points (‹Education›)." Then the live version for the current event, as on Schedule.

7. **"One it got wrong"**. Two real cases from the benchmark, picked by rule (the Common Ground meeting with the lowest hidden label; the highest-label pair that Common Ground did not schedule although both had room). Each: a `t-head` sentence ("Scheduled, but a poor fit: ‹…›" / "Missed: ‹…›"), the task line and the proof line as on a "Why you two", and two sentences on why. Omitted only if none exists.

8. **"Where it fails"**. A plain list: "A person who writes well in English gets clearer proof lines than one who does not. Stories can be written in Finnish or Swedish; other languages are not supported yet." · "A proof line shows that someone says they did the work. Nobody has checked that they did. The meeting is where that happens." · "A model suggests skills and can be wrong. That is why the person edits and approves the card, and why a skill with no sentence is dropped." · "A task with rare skills may match nobody. The page says so instead of loosening the rule." · "The benchmark is synthetic. Its labels were written by us, not by employers. It shows the method beats the two baselines on this data, not that it would in Espoo." · "Group sizes at one event are small. A gap of a few points can be chance." · "In this build anyone with a link can act as that person or company. A real service would use Suomi.fi sign-in or one-time links by email." · "Sending a proposal only shows it on a page here. No email or text message is sent."

9. **"Data and the EU AI Act"**. `t-body`: "Software that helps decide who gets recruited is a high-risk use under Annex III of the EU AI Act. This prototype has not been assessed against it. This is how it is built with that in mind." Then a two-column table (requirement, what Common Ground does): "A person decides" / "The organiser sends every proposal. Both sides answer each one. Nothing is accepted or refused by the system." · "People can see and correct what is used" / "The evidence card shows every skill and its sentence, and the person approves it." · "Data is kept to what is needed" / "No CV, no date of birth, no photo, no nationality in the matcher. Stories and the card are deleted on request and ‹30› days after the event." · "Fairness is measured" / "Meeting rates by group are shown to the organiser for every schedule. Group data is optional, kept apart and only counted." · "A record is kept" / "Every build stores its rounds, lists and result, so any meeting can be explained afterwards." · "People know a model is involved" / "The person page says a model reads the stories, before they are sent."

10. **"What Common Ground never does"**: "It does not rank people for a job. It does not reject anyone. It does not show a company a name before both have said yes. It does not read a CV."

11. End of page: the primary button **"Open the schedule"**.

States: every number loading as a 56-wide `sunk` bar. A benchmark not yet run: the cell reads "not measured" in `ink-3` and the result sentences are not rendered. Never a guess.

---

## 11. Phone (390 wide; everything under 700px)

- **Organiser top bar** 52: mark only, the event switcher truncated to the remaining width, then a 44 x 44 `chevron-down` menu holding "Overview", "Schedule", "Report", "Method". **Side top bar:** mark, event name on one line with ellipsis; the person or company name moves under the bar as a `t-small` `ink-2` line.
- **Overview:** H1 22 / 28. Meta line wraps to two lines. Primary button full width. The band stacks, each column separated by a 1px `line-soft` rule; the mini board is full width (358). Chips in one horizontally scrollable row (the only horizontal scroll allowed, right edge faded by a 24px mask). Tables become rows of 72: line 1 the name with the state word right aligned; line 2 the second line; line 3 `t-small` `ink-3` the meetings text.
- **Schedule:** the List view is the only view (the segmented control is hidden). Header stacks, primary full width. During a build the mini board (358 x 89) is shown above the list and animates the same trace: cells fill `slate` by round, then settle; the ticker sits under it on two lines. The rail becomes a sheet from the bottom (max 85% height, radius 12 at the top, drag handle, `x`), opened by tapping a row. "Without a meeting" and "Who gets meetings" follow the list; the dot chart keeps its axis and moves under each group's row, full width.
- **Company page:** one column. The "Who is registered" panel moves under the Continue button. Option rows are 48 high. Task lines wrap. Proposal row blocks stack: time and table on one line, then the middle content, then "Yes, meet" and "No thanks" side by side, each half width, 44 high.
- **Person page:** one column, text areas full width, primary full width and pinned to the bottom of the viewport on the stories step once enabled (`paper` ground, 1px `line-soft` top border, padding 12 16). **Evidence card:** the two columns become one: each skill row is followed by its story sentence in the slab (already there), and the full stories sit under the list behind a disclosure "Read my stories with the proof marked". "Change sentence" opens that story in a bottom sheet with tappable sentences.
- **Day schedule:** as section 8; this is its home size. Times and table numbers stay at `m-large` and `t-title`.
- **Report and Method:** one column, no section list. Tables with more than four columns become stacked rows (label left, value right). The benchmark table becomes three blocks, one per method. The worked example keeps its board (3 x 4 fits at 358).

---

## 12. The 2:00 video (every beat is a real click on the live site, 1440 x 900; the day schedule beat is recorded in a 390 x 844 window)

Before recording, open the site in a fresh private window so the event is in its starting state, and check this list. If a check fails, use the pair the engine actually produced and say its real names. Never stage data.
- **Company A** (fixture: ‹Routa Logistics›): brief "Not started".
- **Person A** (fixture: ‹Daniela Rojas›, who ran a café): stories written, card not built. Her second story is about a waste tracker she built.
- After beats 2 and 3, the build must give Person A a meeting. If it is with another company than Company A, the rest of the video follows that meeting.
- Warm the model calls once with the exact text typed in the video, so no loading state lasts over 1s on the recording (answers are stored by exact input; a stored answer is one a real call gave).

| Time | Voice | Screen | Action | What the viewer learns |
|---|---|---|---|---|
| 0:00–0:08 | "At a recruitment event, both sides now speak through AI. Polished CVs meet AI screeners," | Overview | Pointer rests on the H1, then on the paragraph. The band shows "No company has sent a brief yet" beside real evidence and an empty mini board. | What this is: a city's event, companies, people, a schedule. |
| 0:08–0:15 | "and nobody learns what anyone can actually do. Common Ground starts from the work." | Overview | Click "Companies", click the row ‹Routa Logistics›. | The organiser opens a company's page. |
| 0:15–0:24 | "A company arrives with a job title." | Company page, need | Type "we need a full-stack dev". Click "Continue". Press `2`, `1`, `3` to answer the three questions; each collapses. | A vague need, three quick questions. |
| 0:24–0:40 | "Three questions later it is three tasks, in the EU's own skill vocabulary. And about nine people coming to this event have already done one of them." | Company page, tasks | The three task lines with their skill tags and count lines. Click "See what they did" on the second task: unnamed proof lines open. Click "Send brief to the organiser". | Tasks, ESCO skills, and the hook: the pool is real. |
| 0:40–0:47 | "On the other side, no CV. Three short stories." | Person page, stories | Click "Back to the organiser's view", click "People", click ‹Daniela Rojas›. Her three stories are on screen. Click "Find my skills". | A person's own words. |
| 0:47–1:05 | "‹Daniela› ran a café. She also built a tracker that cut its waste by a third. That sentence is her proof of data analysis. She checks every skill, removes what is wrong, and approves it." | Person page, card | Hover the row ‹perform data analysis›: her sentence lights up in the story. Click `x` on one skill she would not claim. Click "Approve my evidence card". On the tasks step click "Interested" on ‹Routa Logistics›' task. | The proof line. The person is in control. A café manager fits a data task. |
| 1:05–1:14 | "The organiser builds the whole afternoon in one click, with deferred acceptance: the same Nobel-prize algorithm that matches doctors to hospitals." | Schedule | Click "Back to the organiser's view", click "Schedule", click "Build schedule". The rounds play and settle. Ticker: "Settled in ‹11› rounds … ‹0› blocking pairs." | The authored moment. Stable by construction. |
| 1:14–1:20 | "Every pair comes with its reason." | Schedule | Press `/`, type "dan", click her slip. The rail shows "Why you two": task line, proof line, the question. Click "Send ‹172› proposals". | Task joined to evidence. A human sends. |
| 1:20–1:30 | "And nothing is booked until both say yes." | Person page, then company page, then Schedule | In the rail click "Open page" beside her name, click "Yes, meet". Back. Click "Open page" beside the company, click "Yes, meet". Back: her slip is solid ink and the rail shows the introduction card. | Mutual consent. Names appear only now. |
| 1:30–1:45 | "On the day, everyone's schedule is one plain page. No login to queue for, so nothing to crash. It even opens with no connection." | Day schedule (390 window) | Click "‹Daniela›'s day schedule". Scroll once. Turn the computer's Wi-Fi off from the menu bar. Reload: the same page, with the line "No connection. This is the schedule saved at ‹…›." Turn Wi-Fi on. | The login rush cannot happen. |
| 1:45–1:56 | "Against keyword matching and AI-polished CVs, on the same synthetic event: more good meetings, fewer wasted ones, and the gap between groups stays small. The matcher never sees a name, a nationality or a school." | Method | Click "Method" (desktop window). Click "The benchmark" in the section list: the two result sentences and the table. Click "Who gets meetings": the dot chart. | Measured, with fairness numbers and limits. |
| 1:56–2:00 | "Common Ground. Meet over the work." | Overview | Click the wordmark. The band now reads the real sentences for the brief, the card and the schedule. Title added in the edit. | |

Recording rules: no cut may hide a loading state longer than 1s. Every number on screen is the live value. The names are synthetic and stay unblurred. If "about nine" is not the live number, the voice says the live number.

---

## 13. Data the screens need (so no copy is invented in the browser)

**Event:** `slug`, `name`, `date`, `start`, `end`, `venue_name`, `venue_address`, `timezone`, `slots[]` (start, end), `break` (start, end), `brief_deadline`, `evidence_deadline`, `max_meetings_per_person`, `status` (upcoming / finished), `schedule_state` (not_built / draft / sent), `built_at`, `sent_at`.
**Company:** `key`, `name`, `need_text`, `questions[]` (text, options[], answer, answered_at), `tasks[]` (`id`, `line`, `skills[]` as ESCO `uri` and `label`, `people_count`), `tables[]` (number), `working_languages[]`, `hires_from_abroad`, `relocation_help`, `brief_state` (not_started / started / sent), `sent_at`, `asked_to_meet[]` (evidence ids), `finding_sentence`.
**Person:** `key`, `first_name`, `last_name`, `display_first` (unique at the event), `last_work_line`, `stories[3]` (prompt id, text, lang, word count), `evidence[]` (`id`, ESCO `uri` and `label`, `story_index`, `sentence_start`, `sentence_end`, `mark_start`, `mark_end`, `source` (suggested / added), `state` (kept / removed)), `dropped_suggestions` (count), `card_state` (none / built / approved), `approved_at`, `interested_task_ids[]`, `max_meetings`, `unavailable_slots[]`, `finding_sentence`. Names are used by the screens only; the engine's input type has no name field at all.
**Audit groups** (a separate file and table, never joined into engine input): `person_key`, `nationality_group`, `first_language_group`, `education_group`, `career_path_group`.
**Fit:** per person and task: `skills_total`, `skills_with_proof`, `pairs[]` (task skill uri, evidence id, relation: same / narrower), `missing_skills[]`.
**Meeting:** `id`, `person_key`, `company_key`, `task_id`, `table`, `slot`, `state` (proposed / agreed / declined / cancelled), `company_answer` and `person_answer` (yes / no / none, at), `why[]` (task line, skill, evidence id, up to 3), `question`, `rank_of_company_for_person`, `of`, `rank_of_person_for_company`, `of`, `created_by` (build id / organiser), `cancel_reason`, `took_place`, `next_step_company` and `next_step_person` (yes / not_yet / none, at).
**Build:** `id`, `at`, `kind` (full / fill), `rounds[]` (number, proposals, held, passed, and per proposal: person, table, outcome), `fit_moves[]` (meeting id, hold position, slot), `meetings_count`, `blocking_pairs` (count and list), `without_meeting[]` (person key, reason sentence).
**Fairness:** per attribute and group: `people_ready`, `with_meeting`, `meetings_mean`, `shown` (false under 10); per attribute `gap_points`; `largest_gap`.
**Report:** computed from meetings at request time, plus stored `next_event_notes[]`.
**Benchmark:** read from eval files at request time: per method and run: good, wasted, total meetings, blocking pairs, per-group meeting rates; the label thresholds; the two "got wrong" cases with their task line, proof line and reason sentences; the six-person worked example's trace.
**Day schedule:** a rendered document per key, rebuilt whenever one of its meetings changes, with `rendered_at`.

If a field is missing the element that needs it is not rendered. Never a blank label, "undefined", "N/A" or a zero standing in for "not measured". Every stored sentence is written at the moment its record changes, to the fixed patterns in this file, and never generated in the browser. ESCO labels are stored exactly as the ESCO API returned them, with their URIs.

**Fixtures.** 120 people and 15 companies for the main event, 40 and 6 for the finished one. Names are believable for people living in Finland today, from many backgrounds, for example: Daniela Rojas, Aino Korhonen, Farhan Ahmed, Oksana Kovalenko, Mikael Nyström, Li Wei, Priya Nair, Abdi Hassan, Sofia Virtanen, Tuan Pham, Ines Ferreira, Kwame Mensah, Petra Mäkinen, Samir Khalil, Anna Kowalska, Jonas Eklund, Yuki Tanaka, Rahul Mehta, Elif Demir, Tomás Herrera. A name never predicts a group, a skill or an outcome in the fixtures (assign audit groups and stories independently of names). Companies are invented, for example: Routa Logistics, Kuura Cloud, Havu Robotics, Vellamo Marine Systems, Sirkka Analytics, Lakka Payments, Tyrsky Games, Ruska Health, Merituuli Grid, Sarastus Software, Kelo Sensors, Louhi Security, Nuotio Learning, Pilke Mobility, Pohjanvalo Energy. Check each against the Finnish business register and rename any that exists. No real company, no real person.

---

## 14. Do not

- No editorial serif, no italic display, no tilted or paper-textured cards, no dark sidebar, no dark top bar, no green identity. Nothing from the old build's look.
- No "SYNTHETIC DATA ONLY" badge, no "Demo" badge, no "Reset demo", no role switcher, no tour, no autoplay, no "next step" key. The only words are the footer's "Synthetic event data".
- No "Talent 01", "Candidate A", "Company X" or numbered stand-ins. People have names; on the company's side before a yes they are "A person registered for this event".
- No match percentage, score, star rating, ring, gauge, "top match", "best fit" badge or ranking shown to a company or a person. Fit is "‹3› of ‹4› skills with proof", with the missing ones named.
- No sparkle, wand, robot or brain icon, no "AI" badge, no "Generated by" label, no assistant avatar, no chat bubble, no typing dots, no streamed text. Where a model reads something, a plain sentence says so.
- No avatars, initials in circles, photos or flags. No nationality, language, school, age or gender field, column, filter or chip anywhere outside the fairness tables' group names.
- No "rejected", "declined by the algorithm", "not selected", "unsuccessful". Tables "pass on" a proposal during the build; only a human "declines".
- No control that lets the organiser answer yes or no for a person or a company. No introduction card before both answers are stored. No name on the company's side before that.
- No CV upload, file drop zone or LinkedIn import anywhere.
- No skill that is not an ESCO label returned by the API. No skill without a proof line on any card.
- No gradients, glow, glass, coloured card grounds or coloured left or right borders. Yellow only as the highlighter (2.3). Cobalt only for things you can press or have selected.
- No hero-metric tiles, big-number cards, sparklines, progress rings or donut charts. Counts are sentences and tables. The only charts are the board, the mini board, the dot chart and the benchmark run chart, each with an axis or a legend and real units.
- No cards on Overview. No nested panels anywhere. No label above a heading, no uppercase tracked labels, no mono for labels or headings.
- No modal dialogs. Confirms are inline, details open in the rail or as disclosures.
- No lines, arrows, particles or confetti in the build animation. No sound. Nothing animates on page load. No second authored motion.
- No Nobel medal, portrait, laurel or "award-winning" badge. The Nobel is one sentence on Method and one line of voice-over.
- No City of Espoo logo, crest or brand colour. The city is named in text.
- No login wall, cookie banner theatre or account menu in this build. The day schedule makes no request after its document, stylesheet and fonts.
- No second primary button on any screen. No dead buttons, placeholder pages or "coming soon".
- No hard-coded figure, name, quote, skill, date or count. No number on Method that is not read from the benchmark files or computed live.
- No horizontal page scroll at 390 or 1440. `overflow-wrap: anywhere` on stories and quotes, `hyphens: auto` with the correct `lang` on every quoted element. Long Finnish compound words must not break the layout.
- No font other than the two named, and no fluid type.

---

## 15. Acceptance: screenshots Codex must produce and check

Save to `screenshots/commonground/` as PNG from the deployed site. Desktop is 1440 x 900, phone is 390 x 844.

1. `01-overview-desktop.png`: Overview in the starting state, companies list, seven rows.
2. `02-overview-people-desktop.png`: the People list after a brief is sent and the schedule built (all three band sentences real).
3. `03-company-need-desktop.png`: the need typed, the "Who is registered" panel beside it.
4. `04-company-questions-desktop.png`: question 2 open, question 1 collapsed.
5. `05-company-tasks-desktop.png`: three tasks with skill tags and count lines, one "See what they did" open.
6. `06-company-zero-desktop.png`: a task for which nobody has proof.
7. `07-person-stories-desktop.png`: three stories written.
8. `08-person-card-desktop.png`: the evidence card, one skill row hovered and its sentence in strong highlight.
9. `09-person-card-change-desktop.png`: "Change sentence" mode with a sentence hovered.
10. `10-person-tasks-desktop.png`: matching tasks with one "Interested" on.
11. `11-schedule-empty-desktop.png`: not built.
12. `12-schedule-build-round-desktop.png`: mid-build, held slips stacked from the left, ticker on round ‹3›.
13. `13-schedule-draft-desktop.png`: settled draft, ticker sentence, "Send ‹N› proposals".
14. `14-schedule-why-desktop.png`: a proposed slip selected, the full "Why you two" rail.
15. `15-schedule-agreed-desktop.png`: the same meeting after both said yes: solid slip, introduction card in the rail.
16. `16-schedule-move-desktop.png`: a slip mid-drag with refused cells hatched.
17. `17-schedule-open-slot-desktop.png`: an empty cell selected, "People who could take it".
18. `18-schedule-fairness-desktop.png`: "Without a meeting" and "Who gets meetings".
19. `19-schedule-list-desktop.png`: List view.
20. `20-company-meetings-desktop.png`: a waiting proposal with no name, and an agreed one as an introduction card with the name.
21. `21-report-desktop.png`: the finished event's report.
22. `22-method-how-desktop.png`: the worked example at "Round 2". `23-method-benchmark-desktop.png`: result sentences, table, run chart. `24-method-groups-desktop.png`: who gets meetings by method.
23. `25-day-phone.png`: a person's day schedule. `26-day-offline-phone.png`: the same with the connection off. `27-day-after-phone.png`: the finished event with one "next step" answered.
24. `28-person-card-phone.png`, `29-company-tasks-phone.png`, `30-schedule-phone.png` (list with the rail sheet open).

Checks to run and report with the screenshots:
- **5-second test:** on 01 the event name, the date and place, "what they need done", "what they have done", "no CV" and "until both sides say yes" are visible above the fold, with one quoted, highlighted sentence.
- **One primary:** count the `cobalt` filled buttons on every screenshot. The answer is 1, or 0 where this file says none.
- **Real data:** no `‹` or `›` anywhere in the rendered site. Every count on Overview, Schedule, Report and Method equals a direct count over the store or the benchmark files run at the same moment (attach both).
- **Proof is exact:** for every evidence row of 20 random people, the proof line is a substring of that person's story at the stored offsets, and the highlighted words lie inside it. For every "Why you two", each proof line belongs to that person and each task line to that company.
- **ESCO is real:** every skill label on screen resolves at its stored URI in the ESCO API with the same preferred label.
- **The count is a count:** for 10 random tasks, "About N people" equals the number of people passing the rule in 6.3, recomputed independently.
- **The build is the trace:** the round numbers and counts in the ticker and the rail equal the stored trace, and running the engine again on the same input gives the same trace and schedule.
- **Stable:** an independent checker (not the engine's own code path) finds exactly the number of blocking pairs the header shows; on a fresh build it is 0, or the true number is shown and the Chief is told.
- **No clashes:** no person and no table appears twice in one slot; nobody exceeds their own maximum; no meeting sits in the break or in a slot the person marked.
- **Agreed stays fixed:** agree three meetings, press "Fill open slots": those three have the same table and slot afterwards.
- **Blind matcher:** the engine's input type contains no name, group or story text, proved by a test that fails if such a field is added. Shuffling all names and all audit groups among people leaves the schedule identical.
- **Blind company:** with a proposal waiting, the company page's HTML and network responses contain neither the person's name nor their key. After both say yes they do.
- **No proxy consent:** no organiser route or control can set an answer; verify by API and by screen.
- **Day schedule offline:** load `/s/<key>` once, cut the network, reload: the page renders with the offline line. With JavaScript off the meetings still render. First load transfers under 60 KB plus fonts and makes no request after the document, stylesheet and fonts. 200 concurrent loads return 200 with no database query (attach the load test).
- **Next step:** answer "Yes" on the finished event's day schedule; the Report's counts rise by one for that side only. Answer offline, reconnect: it arrives.
- **Benchmark is real:** the Method table and chart equal the eval files; the labels file's commit predates the first matching run.
- **Fairness is real:** the group table equals an independent count; groups under 10 are hidden.
- **Keyboard only:** from Overview open the schedule, build with `B`, find a person with `/`, open the rail with Enter, move the slip with `M`, send with `S`.
- **Marks without colour:** in a greyscale 13 and 15, held, proposed, one-yes and agreed slips are told apart; in a greyscale 08 the proof words are still marked (the dotted underline).
- **Contrast:** every text pair 4.5:1 or better (check `ink-3` on `desk`, `ink` on `proof` and `proof-strong`, white on `cobalt`, `cobalt` on `cobalt-tint`). Every mark 3:1 or better (`proof-edge` on `paper`, `slate` on `paper`).
- **Fonts:** body text computes to Atkinson Hyperlegible Next and times to Atkinson Hyperlegible Mono, with no fallback glyph in "Mäkinen", "Nyström", "Tomás" or "Kovalenko".
- **Reduced motion:** the build shows its end state and final ticker at once; nothing else moves.
- **No overflow:** at 390 and 1440, no horizontal page scroll and no clipped text with the longest name, the longest task line and the longest ESCO label in the data.

---

## 16. Open questions for the Chief

1. **The truthfulness claim.** The brief says "talent can't gain by lying about their preferences". That is proven for one-to-one matching and when each proposer wants one match. Here a person can have up to three meetings, and in many-to-many matching the guarantee does not hold in general (nor does "best stable schedule for the proposing side" without assuming each side judges meetings one by one). This spec leaves the sentence off Method and says only that people do the asking on purpose. Options: (a) keep it off, (b) state it with the limit ("with one meeting each, nobody gains by misstating; with several, the guarantee is weaker"), (c) cap everyone at one meeting, which makes it true and the event worse. Recommended: (b).
2. **"Nobel-prize algorithm" in the voice-over.** The prize (2012, Roth and Shapley) was for the theory of stable allocations and market design, built on Gale and Shapley's 1962 method; the doctor match uses the Roth–Peranson variant. The line is fair as speech. Method uses the careful wording. Confirm that is acceptable, or change the voice to "the Nobel-winning method behind the doctor match".
3. **Blocking pairs after the time step.** Stability is exact for the matching. Fitting into slots can fail to place a matched pair if their free times never line up. Should such a pair be dropped (and counted honestly in "Without a meeting" and in the blocking-pair check), or should the matcher only consider pairs with a common free slot from the start? Recommended: the second, so the shown number is 0 by construction and still independently checked.
4. **The old engine.** The handoff says the kept engine made no stable-matching claim. Deferred acceptance, the trace and the independent stability checker are new work. Confirm Codex has time for them; without them the build animation and the "0 blocking pairs" number must both be cut, not faked.
5. **Where state lives.** The video needs a company, a person and the organiser to act on the same event across pages, and judges will click too. Recommended: a small server store, with each visitor silently given their own copy of the fixtures (a cookie), so nobody's clicks spoil another visitor's event and there is no reset control. Confirm, or choose one shared event that resets nightly.
6. **Model calls on a public site.** The guided brief and "Find my skills" are live model calls plus live ESCO lookups. Need: which model and key, a daily cap, and the wording when the cap is hit (proposed: "The reading service is paused until tomorrow. Your text is saved."). Answers are stored by exact input; confirm that counts as "live" for the video.
7. **The finished October event.** It exists only so the "next step" tap and the Report show stored answers instead of an empty state. It costs a second, smaller fixture set and simulated answers. Keep it, or cut it and show the Report only in its "before the event" state?
8. **Venue and date.** "Dipoli, Otakaari 24, Otaniemi, Espoo" is a real venue (Aalto University's, not the city's). Is a real venue name wanted on a synthetic event, or should it read "Espoo, Keilaniemi"? Is Thu 26 Nov 2026, 13:00–15:00 with ten slots and one break right?
9. **Company names.** The fifteen invented names need a check against the Finnish business register. If any exists, Codex renames it. Confirm nobody wants real Espoo companies shown.
10. **The fairness groups.** Four attributes are proposed (nationality, first language, education, career path), held in a separate synthetic file. Showing nationality groups at all, even only as counts, may be more than the sponsor wants. Keep all four, or drop nationality and keep the other three?
11. **Names on the company's side.** This spec hides the person's name from the company until both say yes, and never hides the company from the person. It is the strongest anti-bias choice but Espoo's team may want companies to see first names earlier. Confirm.
12. **Languages.** The interface is English only. Stories are accepted in English, Finnish and Swedish. Does the sponsor need a Finnish interface for the demo, and should stories in other languages be accepted with the proof line shown in the original?
13. **Fonts.** Atkinson Hyperlegible Next and Mono are assumed to be on npm as Fontsource variable packages. If not, Codex self-hosts the OFL files. Confirm no objection to a face chosen for legibility over polish.
14. **"About nine".** The voice-over number must be the live count. If the live count for the video's task is under 5, should the video use another task, or say the true small number?

## 17. Chief decisions (Sun 00:55, binding; these settle section 16)
1. **Truthfulness.** Method doesn't claim "can't gain by lying". It may say: "With one meeting each, nobody can gain by misstating their preferences. With several meetings, that guarantee is weaker, so we also let people review every proposal."
2. **Voice line.** "The same Nobel-prize algorithm that matches doctors to hospitals" is approved for the video. Method uses the careful wording.
3. **Stability with time slots.** The matcher considers only pairs that share at least one free slot. The live "blocking pairs" number is computed by an independent checker over the final, placed schedule.
4. **The engine is new work.** Deferred acceptance, its round trace and the independent stability checker are required. If time runs out, cut the build animation and the number. Never fake them.
5. **State.** A small server store, with a silent per-visitor copy of the event fixtures. There is no reset control, and visitors never see each other's changes. The organiser's shipped event is identical for every new visitor.
6. **Live model calls.** gemini-3.8-flash on the existing key, with a global daily cap of 500 calls. An answer stored by exact input is a cache hit, and that's fine. At the cap: "The writing helper has reached today's limit. You can still type tasks and skills yourself." ESCO calls are cached; on failure the ESCO search box says "Skill search is unavailable right now."
7. **The October event.** Keep it, so the Report and the next-step answers have stored data.
8. **Venue and time.** "Keilaniemi, Espoo" (no named building), Thu 26 Nov 2026, 13:00–15:00, ten 10-minute slots with one break.
9. **Company names.** Codex checks all 15 against the Finnish business register (PRH/YTJ open data API) and renames any that match a real company.
10. **Fairness groups.** Keep nationality (EU / non-EU), first language, education level and career path. They are held in a separate audit file and are never an input to scoring. A test enforces this.
11. **Company sees no name until both say yes.** Confirmed.
12. **Languages.** The interface is English. Stories may be written in English, Finnish or Swedish.
13. **Fonts.** Use Fontsource if it has them; otherwise self-host the OFL files. Never fall back visibly.
14. **"About nine".** The voice says the live count. The video uses a task whose live count is 5 or more.
