# Timer Clock Mode Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a "Clock" mode tab to the timer page that displays the current time (HH:MM:SS) adapted to the user's local timezone, alongside the existing Focus/Short Break/Long Break modes.

**Architecture:** Add a 4th tab "Horloge" to the mode-tabs bar. When active, the timer display shows the live local time (via `Intl.DateTimeFormat` + `toLocaleTimeString`), session dots and Start/Pause/Reset controls are hidden, and the date + timezone name are shown below. Switching to any other tab restores the normal Pomodoro timer behavior.

**Tech Stack:** Vanilla JS (`Intl.DateTimeFormat`, `Date.toLocaleTimeString`), CSS in `<style>` block of `timer.html`

---

## File Structure

- **Modify:** `bibmaths/timer.html` — the only file. All HTML, CSS, and JS for the timer live here in a single self-contained page.

No new files needed. No test files (this is a static HTML page with no test framework).

---

### Task 1: Add the "Horloge" tab button in HTML

**Files:**
- Modify: `bibmaths/timer.html:1025-1029` (mode-tabs div)

- [ ] **Step 1: Add the 4th tab button**

In the `.mode-tabs` div (line ~1025-1029), add a new button after `longBreak`:

```html
<div class="mode-tabs">
  <button class="mode-tab mode-tab--active" data-mode="focus">Focus</button>
  <button class="mode-tab" data-mode="shortBreak">Short Break</button>
  <button class="mode-tab" data-mode="longBreak">Long Break</button>
  <button class="mode-tab" data-mode="clock">Horloge</button>
</div>
```

- [ ] **Step 2: Add a date/timezone subtitle element**

Below the `<div class="timer" id="timer">25:00</div>` (line ~1038), add a subtitle div that will show the date and timezone in clock mode. It starts hidden:

```html
<div class="timer" id="timer">25:00</div>
<div class="clock-info" id="clockInfo"></div>
```

- [ ] **Step 3: Verify the tab appears in the browser**

Open `http://localhost:8000/timer.html` and confirm 4 tabs are visible: Focus, Short Break, Long Break, Horloge.

- [ ] **Step 4: Commit**

```bash
git add bibmaths/timer.html
git commit -m "feat(timer): add Horloge tab button and clock-info element"
```

---

### Task 2: Add CSS for clock mode

**Files:**
- Modify: `bibmaths/timer.html` — in the `<style>` block, before the `</style>` closing tag (line ~919)

- [ ] **Step 1: Add clock-info styles**

Insert before the `</style>` tag (line ~919), right after the responsive media query block:

```css
/* ============================================
   Clock Mode
   ============================================ */
.clock-info {
  display: none;
  font-family: var(--font-body);
  font-size: 15px;
  color: var(--t-text-muted);
  text-align: center;
  margin-top: -16px;
  margin-bottom: 28px;
  letter-spacing: 0.3px;
}

.clock-info__date {
  font-weight: 500;
  color: var(--t-text-soft);
}

.clock-info__tz {
  font-size: 12px;
  margin-top: 4px;
  font-family: var(--font-display);
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

/* When clock mode is active */
body.clock-mode .session-dots { display: none; }
body.clock-mode .controls { display: none; }
body.clock-mode .clock-info { display: block; }
body.clock-mode .fire-count { display: none; }
body.clock-mode .stats-pill { display: none; }
body.clock-mode .timer { letter-spacing: -4px; }

/* Clock tab uses a distinct teal accent */
.mode-tab--clock-active {
  background: #0ea5e9;
  border-color: #0ea5e9;
  color: #fff;
  box-shadow: 0 4px 28px rgba(14, 165, 233, 0.35);
}

.mode-tab--clock-active:hover {
  background: #38bdf8;
  border-color: #38bdf8;
}
```

- [ ] **Step 2: Verify in browser**

Reload timer.html. The Horloge tab should look like a normal inactive tab. Session dots, controls, and stats pill should still be visible (clock mode not active yet).

- [ ] **Step 3: Commit**

```bash
git add bibmaths/timer.html
git commit -m "style(timer): add CSS for clock mode (hidden elements, clock-info, tab color)"
```

---

### Task 3: Implement the clock mode JS logic

**Files:**
- Modify: `bibmaths/timer.html` — in the `<script>` block at the bottom

- [ ] **Step 1: Add clockInterval variable**

After the existing `let interval = null;` (line ~1308), add:

```javascript
let clockInterval = null;
```

- [ ] **Step 2: Add enterClockMode and exitClockMode functions**

After the `switchMode()` function (line ~1346), add these two functions:

```javascript
function enterClockMode() {
  // Stop any running pomodoro timer
  if (interval) { clearInterval(interval); interval = null; }
  state.status = 'idle';
  saveLiveState();

  document.body.classList.add('clock-mode');

  // Build clock-info content
  const clockInfo = $('clockInfo');
  const now = new Date();
  const dateFmt = new Intl.DateTimeFormat(undefined, {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  });
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
  clockInfo.innerHTML = '<div class="clock-info__date">' + dateFmt.format(now) + '</div>'
    + '<div class="clock-info__tz">' + tz.replace(/_/g, ' ') + '</div>';

  // Update time display immediately, then every second
  updateClock();
  clockInterval = setInterval(updateClock, 1000);
}

function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  timer.textContent = h + ':' + m + ':' + s;
  document.title = h + ':' + m + ' — Omniscience';

  // Update date at midnight
  if (h === '00' && m === '00' && s === '00') {
    const dateFmt = new Intl.DateTimeFormat(undefined, {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    });
    const dateEl = $('clockInfo').querySelector('.clock-info__date');
    if (dateEl) dateEl.textContent = dateFmt.format(now);
  }
}

function exitClockMode() {
  if (clockInterval) { clearInterval(clockInterval); clockInterval = null; }
  document.body.classList.remove('clock-mode');
}
```

- [ ] **Step 3: Modify switchMode to handle clock exit**

Change the existing `switchMode()` function from:

```javascript
function switchMode(mode) {
  if (state.status === 'running') { clearInterval(interval); interval = null; }
  state.mode = mode;
  state.status = 'idle';
  state.timeLeft = getDur(mode);
  saveLiveState();
  render();
}
```

To:

```javascript
function switchMode(mode) {
  // Exit clock mode if we were in it
  exitClockMode();

  if (state.status === 'running') { clearInterval(interval); interval = null; }

  if (mode === 'clock') {
    state.mode = mode;
    enterClockMode();
    // Update tab highlighting
    modeTabs.forEach(t => {
      t.classList.remove('mode-tab--active', 'mode-tab--break-active', 'mode-tab--clock-active');
      if (t.dataset.mode === 'clock') t.classList.add('mode-tab--clock-active');
    });
    return;
  }

  state.mode = mode;
  state.status = 'idle';
  state.timeLeft = getDur(mode);
  saveLiveState();
  render();
}
```

- [ ] **Step 4: Update the render function to skip clock mode**

At the top of the `render()` function (line ~1274), add an early return if in clock mode:

```javascript
function render() {
  if (state.mode === 'clock') return;
  // ... rest of existing render code
```

- [ ] **Step 5: Update keyboard handler to add clock shortcut**

In the keyboard handler (line ~1477), add a case for 'c' to toggle clock mode:

```javascript
case 'c': switchMode(state.mode === 'clock' ? 'focus' : 'clock'); break;
```

- [ ] **Step 6: Add keyboard hint for clock**

In the `.kbd-hints` div (line ~1172), add:

```html
<div class="kbd-hint"><span class="kbd">C</span> Horloge</div>
```

- [ ] **Step 7: Verify in browser**

1. Click the "Horloge" tab — timer should show current time (e.g., `09:25:14`), session dots and controls should be hidden, date and timezone should appear below
2. Click "Focus" — normal timer should restore
3. Press `C` key — should toggle clock mode
4. In clock mode, the seconds should tick live

- [ ] **Step 8: Commit**

```bash
git add bibmaths/timer.html
git commit -m "feat(timer): implement clock mode with live local time and timezone display"
```

---

### Task 4: Handle edge cases and polish

**Files:**
- Modify: `bibmaths/timer.html`

- [ ] **Step 1: Prevent Start/Reset actions in clock mode**

In the `start()` function, add an early return at the top:

```javascript
function start() {
  if (state.mode === 'clock') return;
  if (state.status === 'running') return;
  // ...
```

In the `reset()` function, add:

```javascript
function reset() {
  if (state.mode === 'clock') return;
  // ...
```

- [ ] **Step 2: Handle Space key in clock mode**

In the keyboard handler, update the space case:

```javascript
case ' ': e.preventDefault(); if (state.mode !== 'clock') { state.status==='running' ? pause() : start(); } break;
```

- [ ] **Step 3: Ensure clock mode persists across page reload**

In the init section at the bottom (the `restoreLive` IIFE), add after the restore logic, before the final `render()`:

```javascript
// Check if clock mode was active
if (localStorage.getItem('omni-timer-clock') === '1') {
  switchMode('clock');
  return;
}
```

And in `enterClockMode()`, add:

```javascript
localStorage.setItem('omni-timer-clock', '1');
```

And in `exitClockMode()`, add:

```javascript
localStorage.removeItem('omni-timer-clock');
```

- [ ] **Step 4: Update mini-timer widget to show clock icon when in clock mode**

In `main.js`, in the `modeLabel()` function inside `initMiniTimer`, update to handle clock:

```javascript
function modeLabel(mode) {
  return mode === 'focus' ? 'Focus' : mode === 'shortBreak' ? 'Pause' : mode === 'longBreak' ? 'Pause longue' : mode === 'clock' ? 'Horloge' : mode;
}
```

Note: The mini-timer only shows for running pomodoro timers (status === 'running'), and clock mode sets status to 'idle', so the mini-timer will naturally hide in clock mode. This is correct behavior — no mini-timer needed for clock mode.

- [ ] **Step 5: Verify edge cases**

1. In clock mode, press Space — nothing should happen
2. In clock mode, press R — nothing should happen
3. Reload the page while in clock mode — clock mode should restore
4. Switch from clock to Focus, start timer, navigate away — mini-timer should show on other pages
5. Navigate back to timer — pomodoro timer should resume, not clock

- [ ] **Step 6: Commit**

```bash
git add bibmaths/timer.html bibmaths/main.js
git commit -m "fix(timer): handle clock mode edge cases, persist across reload"
```

---

## Self-Review Checklist

1. **Spec coverage:** Clock mode that adapts to user's region — covered via `Intl.DateTimeFormat` and `toLocaleTimeString` which automatically use the browser's locale and timezone. Tab UI, keyboard shortcut, date display, timezone display — all covered.

2. **Placeholder scan:** No TBD/TODO/placeholders found. All code blocks are complete.

3. **Type consistency:** `state.mode` values: `'focus'`, `'shortBreak'`, `'longBreak'`, `'clock'` — consistent across `switchMode()`, `render()`, `enterClockMode()`, keyboard handler, and tab click handler. `clockInterval` named consistently. `$('clockInfo')` matches the HTML `id="clockInfo"`.
