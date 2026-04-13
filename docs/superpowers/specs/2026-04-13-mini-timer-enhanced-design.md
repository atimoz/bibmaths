# Mini-timer enhanced — Spec

## Goal

Upgrade the floating mini-timer widget to show task time remaining, expand on click to reveal current + next task details, and be draggable to 4 corner positions.

## Current state

The widget is a fixed `<a>` element in bottom-right corner. Two modes:
- **Pomodoro running**: shows "Focus 24:39" countdown
- **Clock mode active**: shows "09:39" + current parcours slot name with colored dot

Located in `main.js` (initMiniTimer IIFE, lines 1116-1237) and `style.css` (lines 5073-5134).

---

## Design

### 1. Collapsed state (pill)

Layout: `[clock-icon] [time] | [dot] [slot-label] [schedule] [remaining]`

- **time**: `09:39` (clock mode) or `Focus 24:39` (pomodoro)
- **dot**: colored by type (rose=math, bleu=physics, etc.)
- **slot-label**: truncated source or label (e.g., "E3A 2010 — Exo 2")
- **schedule**: the slot's time range from the calendar (e.g., "9h00 – 9h50") in `--ink-faint` color
- **remaining**: time until slot ends, in amber (e.g., "11min"), computed from slot end time minus current time

When no slot is active (between slots or outside programme hours), schedule and remaining are hidden. Only clock is shown.

### 2. Expanded state (vertical card)

Click toggles expanded/collapsed. Expanded state is a card that grows upward (or downward if widget is at top) from the pill.

Structure:
```
+-----------------------------------+
| [clock-icon] 09:39      Jour 1/7  |  <- header
|-----------------------------------|
| EN COURS                          |
| [dot] Exo maths 1        11:24   |
|       E3A 2010 — Maths 2  restant |
|       9h00 – 9h50                 |
| [============================--]  |  <- progress bar
|-----------------------------------|
| SUIVANT                           |
| [dot] 9h50 — Exo maths 2         |
|       E3A 2013 — Maths 2 Exo 1   |
+-----------------------------------+
```

- **Header**: clock icon (teal) + time (large, mono, bold) + "Jour N/7" right-aligned
- **En cours section**: label "EN COURS" (uppercase, muted), colored dot, task name (bold), source (muted), schedule time, time remaining in amber (mono, bold), progress bar (colored by type, 3px)
- **Suivant section**: label "SUIVANT" (uppercase, muted), colored dot, start time, task label, source
- **Card background**: `rgba(24,24,27,.95)`, border `rgba(255,255,255,.08)`, radius 14px, backdrop-filter blur
- **Animation**: scale+opacity in, 150ms ease-out

When no current slot (between tasks), show "Pas de tache en cours" in the current section and the next upcoming slot in the Suivant section. When no programme day matches (weekend or day > 7), hide parcours info entirely and show only the clock.

### 3. Drag to 4 corners

The widget is draggable. On mousedown/touchstart, the user can freely move it. On release, it snaps to the nearest of 4 positions:

| Position | CSS |
|----------|-----|
| bottom-right (default) | `bottom: 20px; right: 20px;` |
| bottom-left | `bottom: 20px; left: 20px;` |
| top-right | `top: 20px; right: 20px;` |
| top-left | `top: 20px; left: 20px;` |

Snap logic: compute distance from widget center to each corner, pick the closest. Animate transition with `transition: top .3s, bottom .3s, left .3s, right .3s`.

Position is saved to `localStorage` key `omni-timer-pos` (value: `"br"`, `"bl"`, `"tr"`, `"tl"`). Restored on page load.

When in a top position, the expanded card grows downward. When in a bottom position, it grows upward.

Drag visual feedback: while dragging, widget gets `opacity: .8` and `cursor: grabbing`. No drag ghost (use `e.preventDefault()` on dragstart).

### 4. Interaction details

- **Click** (without drag): toggle expanded/collapsed. Expanded state saved to `localStorage` key `omni-timer-expanded` (`"1"` or removed).
- **Drag threshold**: 5px movement before entering drag mode (prevents accidental drag on click)
- **Click on expanded card links**: "En cours" and "Suivant" sections are clickable, navigating to `parcours.html`
- **Escape key**: close expanded state
- **Click outside**: close expanded state
- **Page navigation**: expanded state is NOT restored on page load (always starts collapsed)

### 5. Files to modify

- `bibmaths/main.js` — rewrite `initMiniTimer` IIFE: add `createExpanded()`, `updateExpanded()`, drag handlers, snap logic, remaining time computation
- `bibmaths/style.css` — add `.mini-timer--expanded`, `.mini-timer__card`, `.mini-timer__card-header`, `.mini-timer__card-section`, `.mini-timer__progress`, drag state classes, position classes (`.mini-timer--tl`, `.mini-timer--tr`, `.mini-timer--bl`), light theme overrides

### 6. No new files or dependencies

Everything is vanilla JS + CSS. No libraries needed. The drag uses pointer events (mousedown/mousemove/mouseup + touchstart/touchmove/touchend).
