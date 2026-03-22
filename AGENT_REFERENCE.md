# AGENT_REFERENCE — Visionary Wealth Sense

Technical reference for AI agents and developers working on this codebase. Read this before making any changes.

---

## Architecture Overview

VWS is a **single-page application** with no framework, no build step, and no component abstraction layer.

- **index.html** — Contains all markup for every view, modal, and overlay. Views are shown/hidden via CSS classes (`active`, `hidden`), not by routing or DOM replacement.
- **styles.css** — Pure CSS. All theming is done via CSS custom properties on `:root`. No preprocessor.
- **script.js** — All application state, event handling, business logic, API calls, and rendering live in one file. Functions are in the global scope.

### View Structure

```
index.html
├── Bottom navigation bar (4 tabs)
│   ├── Tab 0: Home (dashboard + transaction summary)
│   ├── Tab 1: Invest (fund browser)
│   ├── Tab 2: History (transactions + investment log)
│   └── Tab 3: Rewards (gamification + badges)
├── Overlay: Transaction Modal
├── Overlay: Nudge (non-essential spend)
├── Overlay: Essential Affirmation
└── Overlay: Recommendations Page (rendered dynamically)
```

Tabs are switched by toggling `active` class on `.view` sections. The Invest page has its own internal navigation stack (`navStack`) to drill from type → scheme list → scheme detail without changing the outer tab.

---

## Key Global State Variables

| Variable | Type | Description |
|---|---|---|
| `transactions` | `Array<Object>` | All logged transactions (loaded from localStorage on boot) |
| `gameData` | `Object` | Gamification state — streaks, badges, stats (see shape below) |
| `investmentLog` | `Array<Object>` | All investment actions ever taken (within gameData) |
| `investmentTypes` | `Array<Object>` | Static definition of all 7 SBI fund categories and their 40+ schemes |
| `navStack` | `Array<String>` | Navigation stack for the Invest tab (`['home']`, `['home','type']`, etc.) |
| `selectedCategory` | `String\|null` | Currently selected expense category in the transaction modal |
| `selectedType` | `String\|null` | `'essential'` or `'non-essential'` — set when user picks a category |
| `pendingTransaction` | `Object\|null` | The transaction object held in memory while the nudge is displayed |
| `currentScheme` | `Object\|null` | The scheme currently open in the scheme detail view |
| `currentTypeIndex` | `Number` | Index into `investmentTypes` for the currently visible type view |
| `liveNavData` | `Object` | Cache of fetched NAV data keyed by scheme code |

---

## Data Flow

### Transaction Recording

```
openTransactionModal()
  → User fills form → handleTransactionSubmit()
      → builds txn object { id, date, type, category, amount, note }
      → if income → recordTransaction(txn) → done
      → if essential → recordTransaction(txn) → openEssentialAffirm()
      → if non-essential && amount >= 500 → openNudge(txn)
      → if non-essential && amount < 500 → recordTransaction(txn) → done
```

`recordTransaction(txn)` pushes to the `transactions` array and calls `saveTransactions()`, which writes `JSON.stringify(transactions)` to `localStorage` under the key `vws_transactions`.

### gameData Persistence

`gameData` is the single object holding all gamification state. It is:
- Loaded on boot: `JSON.parse(localStorage.getItem('vws_game')) || defaultGameData()`
- Saved after every mutation: `localStorage.setItem('vws_game', JSON.stringify(gameData))`

The `localStorage` key is **`vws_game`**. Do not change this key without migrating existing data.

### investmentLog — Single Source of Truth

All investment records live inside `gameData.investmentLog` (an array). This is the only place investment history is stored. Functions that display investment history, calculate total invested, or compute badge progress all read from `gameData.investmentLog`.

```js
// Shape of a single investment log entry
{
  id: String,           // uuid or timestamp-based unique id
  date: String,         // ISO date string
  schemeCode: String,   // mfapi.in scheme code
  schemeName: String,   // human-readable scheme name
  amount: Number,       // rupees invested
  mode: String,         // 'SIP' | 'One-Time'
  typeIndex: Number     // index into investmentTypes[]
}
```

---

## Key Functions Reference

### Navigation & Rendering

| Function | Description |
|---|---|
| `initNavigation()` | Attaches click handlers to bottom nav tabs; initialises default view |
| `renderTransactions(filter)` | Re-renders the transaction history list; accepts period and type filter objects |
| `calculateSummaries()` | Computes total income, total expenses (essential + non-essential), and net balance; updates the dashboard cards |

### Transaction Flow

| Function | Description |
|---|---|
| `openTransactionModal()` | Shows the transaction modal; resets form state |
| `handleTransactionSubmit()` | Reads the form, validates, builds the txn object, and routes to nudge / affirmation / direct record |
| `openNudge(txn)` | Stores `txn` in `pendingTransaction`; populates and shows the nudge overlay with spend-vs-invest comparison |
| `openEssentialAffirm()` | Shows the essential affirmation overlay with a randomly selected message |
| `proceedWithSpend()` | Called when user taps "Proceed" inside the nudge; records `pendingTransaction` and closes overlay |

### Investment

| Function | Description |
|---|---|
| `recordInvestment(entry)` | Unified recorder — pushes to `gameData.investmentLog`, updates `gameData` stats, saves to localStorage, triggers gamification refresh |
| `renderGamification()` | Re-renders the entire Rewards tab — streak card, badges grid, insights, tips |
| `calcStreak()` | Walks `gameData.investmentLog` sorted by date; computes current consecutive-day investment streak |
| `totalInvested()` | Sums all amounts in `gameData.investmentLog`; used by badges and dashboard |

### Invest Page Navigation

| Function | Description |
|---|---|
| `renderInvestmentsHome()` | Renders the 7 fund-type cards on the Invest tab landing screen |
| `renderTypeView(typeIndex)` | Renders the list of schemes for a given fund type; pushes `'type'` onto `navStack` |
| `buildSchemeCard(scheme, typeIndex)` | Returns an HTML string for a single scheme card with SIP/NAV summary |
| `renderSchemeView(scheme, typeIndex)` | Renders the full scheme detail — NAV, calculator, chart, invest button; pushes `'scheme'` onto `navStack` |

### API & Returns

| Function | Description |
|---|---|
| `loadLiveInvestmentData(schemeCode)` | Fetches NAV history from `https://api.mfapi.in/mf/{schemeCode}` and caches in `liveNavData` |
| `fetchSchemeReturns(schemeCode)` | Calls `loadLiveInvestmentData` and computes trailing 1Y / 3Y / 5Y returns |
| `calcAnnualizedReturn(navHistory, years)` | Given NAV history array and a year count, returns the CAGR as a percentage |

### Recommendations

| Function | Description |
|---|---|
| `analyzeSpending()` | Scans `transactions` to find monthly-recurring and yearly-recurring non-essential categories |
| `renderRecommendations()` | Builds and injects the recommendations overlay DOM — recurring spend cards + entrepreneur stories |
| `navigateToRecScheme(schemeCode, typeIndex)` | Closes the recommendations overlay and deep-links to the specified scheme in the Invest tab |

---

## Transaction Routing Logic

The routing decision tree in `handleTransactionSubmit()`:

```
txn.type === 'income'
  → recordTransaction(txn)

txn.type === 'expense' && selectedType === 'essential'
  → recordTransaction(txn)
  → openEssentialAffirm()

txn.type === 'expense' && selectedType === 'non-essential' && txn.amount >= 500
  → openNudge(txn)   // does NOT record yet — waits for user decision

txn.type === 'expense' && selectedType === 'non-essential' && txn.amount < 500
  → recordTransaction(txn)   // no nudge below ₹500
```

The nudge overlay then branches:
- **"Invest Instead"** → `recordInvestment(...)` + navigate to scheme
- **"Proceed with Spend"** → `proceedWithSpend()` → `recordTransaction(pendingTransaction)`

---

## Investment Navigation Stack (navStack Pattern)

The Invest tab uses a simple string stack to manage back-navigation within the tab without affecting the outer bottom-nav state.

```js
// navStack states
['home']                    // Invest landing — type cards
['home', 'type']            // Type view — scheme list
['home', 'type', 'scheme']  // Scheme detail
```

- Pushing: `navStack.push('type')` then call the render function
- Back button: `navStack.pop()` then render based on new top of stack
- The back button is hidden when `navStack.length === 1`

Never directly set `navStack = [...]` from outside the Invest tab logic — always push/pop to maintain history integrity.

---

## gameData Object Shape

```js
{
  investmentLog: Array,          // all investment records (see above)
  streak: {
    current: Number,             // current consecutive-day streak
    longest: Number,             // all-time longest streak
    lastInvestDate: String|null  // ISO date of most recent investment
  },
  badges: {
    [badgeId]: {
      earned: Boolean,
      earnedDate: String|null
    }
    // ... 12 badge entries
  },
  stats: {
    totalInvested: Number,
    investmentCount: Number,
    nudgesShown: Number,
    nudgesConverted: Number,     // user tapped "Invest Instead"
    spendsPrevented: Number      // synonym for nudgesConverted
  }
}
```

---

## Badge System

There are 12 badges. Each badge has:
- A unique `id` (string key in `gameData.badges`)
- A display name and icon (Font Awesome class)
- An earn condition checked by `isBadgeEarned(badgeId)`
- A progress value returned by `getBadgeProgress(badgeId)` (0–100)

| Badge ID | Earn Condition |
|---|---|
| `first_investment` | investmentCount >= 1 |
| `five_investments` | investmentCount >= 5 |
| `twenty_investments` | investmentCount >= 20 |
| `invested_1k` | totalInvested >= 1000 |
| `invested_10k` | totalInvested >= 10000 |
| `invested_1L` | totalInvested >= 100000 |
| `streak_3` | streak.current >= 3 |
| `streak_7` | streak.current >= 7 |
| `streak_30` | streak.current >= 30 |
| `nudge_converted` | stats.nudgesConverted >= 1 |
| `nudge_master` | stats.nudgesConverted >= 10 |
| `diversified` | Invested in 3+ distinct fund types |

`isBadgeEarned(badgeId)` returns a boolean. `getBadgeProgress(badgeId)` returns a 0–100 number for the progress bar. Both are called during `renderGamification()`.

When a badge is newly earned, `gameData.badges[badgeId].earned` is set to `true` and `earnedDate` is set to the current ISO date string, then `gameData` is saved.

---

## Recommendations Engine

### Monthly Recurring Detection

```
analyzeSpending() scans transactions where type === 'expense' && selectedType === 'non-essential'

For each category:
  → collect all distinct calendar months (YYYY-MM) that have at least one transaction
  → if distinct months >= 3 → flag as MONTHLY RECURRING
```

### Yearly Recurring Detection

```
For each category:
  → collect all distinct calendar years (YYYY) that have at least one transaction
  → if distinct years >= 2 → flag as YEARLY RECURRING
```

The function returns two arrays: `monthlyRecurring` and `yearlyRecurring`, each containing `{ category, totalSpent, occurrences, recommendedScheme }`.

`recommendedScheme` is determined by a lookup table that maps spending categories to specific SBI scheme codes. If no mapping exists for a category, a default balanced fund scheme is used.

---

## Known Patterns and Conventions

Follow these patterns when extending the code:

### Adding a New View or Overlay
1. Add the HTML markup in `index.html` with a unique `id` and a `hidden` class by default.
2. Write `openXxx()` and `closeXxx()` functions that toggle the `hidden` class.
3. If it is a full tab, add a `data-tab` attribute to the bottom nav and handle it in `initNavigation()`.

### Adding a New Badge
1. Add a default entry in `defaultGameData()` under `badges`.
2. Add the earn condition to `isBadgeEarned(badgeId)`.
3. Add the progress calculation to `getBadgeProgress(badgeId)`.
4. Add the display config (name, icon, description) to the badges config array in `renderGamification()`.
5. Call `checkAndAwardBadges()` inside `recordInvestment()` and `recordTransaction()` as appropriate.

### Adding a New SBI Scheme
1. Find the correct `schemeCode` from mfapi.in.
2. Add the scheme object to the correct type's `schemes` array in the `investmentTypes` definition.
3. The scheme card, detail view, and calculator will render automatically.

### Modifying the Nudge Threshold
The ₹500 threshold is a single constant. Search for `NUDGE_THRESHOLD` or `500` in `script.js` — it appears exactly once in the routing logic. Change the value there only.

### localStorage Keys — Do Not Change
| Key | Contents |
|---|---|
| `vws_game` | Full `gameData` object |
| `vws_transactions` | Full `transactions` array |

If you need to rename a key, implement a migration function that reads the old key, writes to the new key, and deletes the old one — run it once on app boot before any other localStorage reads.

### Async / API Calls
All mfapi.in calls use `fetch()` with `async/await`. Wrap every call in try/catch. On failure, display a graceful fallback (e.g., show "NAV unavailable" instead of crashing). Do not let API errors propagate to the top level.

```js
// Pattern to follow
async function loadLiveInvestmentData(schemeCode) {
  try {
    const res = await fetch(`https://api.mfapi.in/mf/${schemeCode}`);
    const data = await res.json();
    liveNavData[schemeCode] = data;
    return data;
  } catch (e) {
    console.warn('NAV fetch failed for', schemeCode, e);
    return null;
  }
}
```

---

## CSS Variable Reference (Light Theme)

All colour and spacing tokens are defined on `:root` in `styles.css`. Modify values here to retheme the entire app.

| Variable | Default Value | Usage |
|---|---|---|
| `--primary` | `#2563eb` | Primary action buttons, active tab, links |
| `--primary-light` | `#eff6ff` | Button hover backgrounds, card tints |
| `--primary-dark` | `#1d4ed8` | Button pressed state |
| `--accent` | `#10b981` | Positive values, income, success states |
| `--accent-light` | `#ecfdf5` | Income card background |
| `--danger` | `#ef4444` | Non-essential spend, negative values |
| `--danger-light` | `#fef2f2` | Expense card background |
| `--warning` | `#f59e0b` | Streak indicators, nudge highlights |
| `--warning-light` | `#fffbeb` | Warning card backgrounds |
| `--bg` | `#f8fafc` | App background |
| `--surface` | `#ffffff` | Card and modal surfaces |
| `--surface-2` | `#f1f5f9` | Secondary surfaces, input backgrounds |
| `--border` | `#e2e8f0` | Card borders, dividers |
| `--text` | `#0f172a` | Primary body text |
| `--text-2` | `#475569` | Secondary / muted text |
| `--text-3` | `#94a3b8` | Placeholder text, disabled states |
| `--radius` | `12px` | Default border radius for cards |
| `--radius-sm` | `8px` | Smaller elements — inputs, chips |
| `--radius-lg` | `16px` | Modals, overlays |
| `--shadow` | `0 1px 3px rgba(0,0,0,.08)` | Default card shadow |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,.12)` | Elevated modals |
| `--font` | `'Outfit', sans-serif` | App-wide font family |
| `--max-w` | `480px` | Mobile-first max content width |
| `--nav-h` | `64px` | Bottom navigation bar height |

Never hardcode colour hex values in component CSS. Always reference these variables. This ensures a future dark theme can be added by overriding the `:root` block inside a `@media (prefers-color-scheme: dark)` or a `.dark` class.
