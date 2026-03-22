# Visionary Wealth Sense

> A mobile-first fintech web app that nudges users to invest instead of spending on non-essentials — turning everyday spending decisions into wealth-building moments.

---

## What Is This?

Visionary Wealth Sense (VWS) is a single-page, zero-dependency-build progressive fintech app built with vanilla HTML, CSS, and JavaScript. Every time a user logs a non-essential transaction above ₹500, VWS intercepts the flow with a behavioural nudge overlay — showing exactly what that money could become if invested instead. The app integrates live NAV data from [mfapi.in](https://www.mfapi.in/) and features SBI mutual fund recommendations tailored to the user's spending profile.

The philosophy: **awareness changes behaviour**. VWS doesn't block spending — it makes the trade-off visible.

---

## Features

### Transaction Flow
- Log income or expenses through a clean modal form
- Every expense is classified as **Essential** or **Non-Essential**
- A live preview summarises the transaction before submission
- Transactions are stored locally and shown in a filterable history view

### Behavioural Nudge Overlay (Non-Essential ≥ ₹500)
- Triggered automatically when a non-essential spend meets or exceeds ₹500
- Displays a side-by-side comparison: *spend now* vs *invest instead*
- Calculates projected returns using real compound-growth logic
- Recommends a specific SBI mutual fund scheme based on amount and pattern
- User can proceed with the spend or pivot to invest — no guilt, just clarity

### Essential Affirmation Overlay
- When a user logs an essential expense, a warm affirmation message appears
- Reinforces responsible financial behaviour with encouraging copy
- Rotates through a set of unique messages to stay fresh

### Invest Page
- **7 SBI Investment Types**: Equity, Debt, Hybrid, ELSS, Index, Liquid, and International funds
- **40+ SBI schemes** organised by type
- **SIP / One-Time calculator** for each scheme with configurable amount and tenure
- **Live NAV** fetched from mfapi.in API with calculated annualised returns
- Scheme detail view with fund facts and projected value chart (Chart.js)

### Transaction History
- Full paginated list of all logged transactions
- Filter by **period** (this week, this month, this year, all time)
- Filter by **type** (all, income, essential, non-essential)

### Investment History
- Chronological log of every investment action taken via the app
- Shows scheme name, amount, SIP/one-time flag, and date

### Gamification
- **Streak Tracker** — 5 levels (Spark → Flame → Blaze → Inferno → Legend) based on consecutive investment days
- **12 Unique Achievement Badges** — each with a progress bar showing how close the user is
- **Behaviour Insights** — auto-generated text insights about spending and investing patterns
- **Wealth Tips** — rotating curated tips that evolve with the user's financial journey

### Recommendations Page
- **Monthly Recurring Spends** — automatically detects categories spent in 3+ distinct months and flags them as habits
- **Yearly Recurring Spends** — detects categories appearing across 2+ distinct years
- **Entrepreneur Stories** — rotating wisdom from Warren Buffett, Azim Premji, Rakesh Jhunjhunwala, Robert Kiyosaki, Radhakishan Damani, and N. R. Narayana Murthy
- Each detected recurring spend links directly to a recommended SBI scheme

### Design & UX
- **Light theme** with a clean, professional palette
- **Mobile-first layout** — capped at 480px max-width, optimised for thumb navigation
- **Bottom navigation bar** with 4 tabs: Home, Invest, History, Rewards
- Smooth overlays and transitions throughout

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | Vanilla HTML5 |
| Styling | Vanilla CSS3 (custom properties, flexbox, grid) |
| Logic | Vanilla JavaScript (ES6+) |
| Charts | [Chart.js](https://www.chartjs.org/) (CDN) |
| Icons | [Font Awesome 6](https://fontawesome.com/) (CDN) |
| Typography | [Google Fonts — Outfit](https://fonts.google.com/specimen/Outfit) |
| Live NAV Data | [mfapi.in](https://www.mfapi.in/) public REST API |
| Persistence | Browser `localStorage` |

No build tools. No bundlers. No frameworks. No install step.

---

## File Structure

```
Project_3/
├── index.html          # Single HTML file — all views, modals, and overlays
├── styles.css          # All styling — CSS variables, components, responsive layout
├── script.js           # All application logic — state, routing, API calls, gamification
├── README.md           # This file
└── AGENT_REFERENCE.md  # Technical reference for developers and AI agents
```

---

## How to Run

1. Clone or download this repository.
2. Open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari).
3. That's it — no terminal, no `npm install`, no build step required.

```
# Literally just this:
open index.html
```

All data is stored in the browser's `localStorage` under the key `vws_game`. Clearing site data resets the app.

For live NAV data, the browser must have internet access (mfapi.in is a free public API — no key needed).

---

## How the Nudge Works

The transaction flow branches based on the expense classification and amount:

```
User submits transaction
         |
         v
   Is it INCOME?
   /           \
 YES            NO (Expense)
  |              |
  v              v
Record       Is it ESSENTIAL?
directly     /             \
           YES              NO
            |                |
            v                v
      Show Essential    Amount >= ₹500?
      Affirmation       /           \
      Overlay         YES            NO
            |          |              |
            v          v              v
         Record    Show NUDGE      Record
         directly  Overlay         directly
                    |
                    v
            User chooses:
            /           \
      INVEST           PROCEED
         |                |
         v                v
   Navigate to       Record spend
   scheme view       directly
```

The nudge overlay shows:
- The amount the user is about to spend
- What that amount grows to in 1, 3, 5, and 10 years if invested in the recommended SBI fund
- A one-tap path to invest it instead

---

## Screenshots

> Screenshots to be added once the UI is finalised.

| View | Screenshot |
|---|---|
| Home / Dashboard | _coming soon_ |
| Transaction Modal | _coming soon_ |
| Nudge Overlay | _coming soon_ |
| Invest Page | _coming soon_ |
| Scheme Detail | _coming soon_ |
| Rewards / Gamification | _coming soon_ |
| Recommendations | _coming soon_ |

---

## License

MIT License

Copyright (c) 2026 Visionary Wealth Sense

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
