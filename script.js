// Mock Data for Transactions
const transactions = [
    // ── March 2026 (this month) ──────────────────────────────────────────────
    { id: 1,  title: 'Zara',              category: 'Fashion',      amount: 4500,  date: '2026-03-20', type: 'non-essential', icon: 'fa-shirt' },
    { id: 2,  title: 'Big Bazaar',        category: 'Groceries',    amount: 3200,  date: '2026-03-19', type: 'essential',     icon: 'fa-cart-shopping' },
    { id: 3,  title: 'Electricity Board', category: 'Utility Bill', amount: 1800,  date: '2026-03-18', type: 'essential',     icon: 'fa-bolt' },
    { id: 4,  title: 'Netflix',           category: 'Lifestyle',    amount: 649,   date: '2026-03-15', type: 'non-essential', icon: 'fa-film' },
    { id: 5,  title: 'H&M',              category: 'Fashion',      amount: 2100,  date: '2026-03-12', type: 'non-essential', icon: 'fa-shirt' },
    { id: 6,  title: 'D-Mart',           category: 'Groceries',    amount: 4800,  date: '2026-03-10', type: 'essential',     icon: 'fa-cart-shopping' },
    { id: 7,  title: 'Swiggy',           category: 'Outside Food Order',         amount: 740,   date: '2026-03-09', type: 'non-essential', icon: 'fa-utensils' },
    { id: 8,  title: 'Water Bill',       category: 'Utility Bill', amount: 500,   date: '2026-03-08', type: 'essential',     icon: 'fa-droplet' },
    { id: 9,  title: 'Gym Membership',   category: 'Lifestyle',    amount: 1500,  date: '2026-03-01', type: 'non-essential', icon: 'fa-dumbbell' },
    { id: 10, title: 'Spotify',          category: 'Lifestyle',    amount: 179,   date: '2026-03-01', type: 'non-essential', icon: 'fa-music' },

    // ── February 2026 ────────────────────────────────────────────────────────
    { id: 11, title: 'Myntra',           category: 'Fashion',      amount: 3200,  date: '2026-02-22', type: 'non-essential', icon: 'fa-shirt' },
    { id: 12, title: 'Big Bazaar',       category: 'Groceries',    amount: 3500,  date: '2026-02-18', type: 'essential',     icon: 'fa-cart-shopping' },
    { id: 13, title: 'Electricity Board',category: 'Utility Bill', amount: 1950,  date: '2026-02-17', type: 'essential',     icon: 'fa-bolt' },
    { id: 14, title: 'Netflix',          category: 'Lifestyle',    amount: 649,   date: '2026-02-15', type: 'non-essential', icon: 'fa-film' },
    { id: 15, title: 'Zomato',          category: 'Outside Food Order',         amount: 920,   date: '2026-02-14', type: 'non-essential', icon: 'fa-utensils' },
    { id: 16, title: 'Gym Membership',  category: 'Lifestyle',    amount: 1500,  date: '2026-02-01', type: 'non-essential', icon: 'fa-dumbbell' },
    { id: 17, title: 'Spotify',         category: 'Lifestyle',    amount: 179,   date: '2026-02-01', type: 'non-essential', icon: 'fa-music' },
    { id: 18, title: 'Amazon',          category: 'Shopping',     amount: 2800,  date: '2026-02-10', type: 'non-essential', icon: 'fa-box' },

    // ── January 2026 ─────────────────────────────────────────────────────────
    { id: 19, title: 'Zara',            category: 'Fashion',      amount: 5100,  date: '2026-01-25', type: 'non-essential', icon: 'fa-shirt' },
    { id: 20, title: 'D-Mart',          category: 'Groceries',    amount: 4200,  date: '2026-01-20', type: 'essential',     icon: 'fa-cart-shopping' },
    { id: 21, title: 'Netflix',         category: 'Lifestyle',    amount: 649,   date: '2026-01-15', type: 'non-essential', icon: 'fa-film' },
    { id: 22, title: 'Amazon',          category: 'Shopping',     amount: 3500,  date: '2026-01-15', type: 'non-essential', icon: 'fa-box' },
    { id: 23, title: 'Swiggy',          category: 'Outside Food Order',         amount: 850,   date: '2026-01-12', type: 'non-essential', icon: 'fa-utensils' },
    { id: 24, title: 'Electricity Board',category: 'Utility Bill',amount: 2100,  date: '2026-01-10', type: 'essential',     icon: 'fa-bolt' },
    { id: 25, title: 'Gym Membership',  category: 'Lifestyle',    amount: 1500,  date: '2026-01-01', type: 'non-essential', icon: 'fa-dumbbell' },
    { id: 26, title: 'Spotify',         category: 'Lifestyle',    amount: 179,   date: '2026-01-01', type: 'non-essential', icon: 'fa-music' },

    // ── December 2025 ────────────────────────────────────────────────────────
    { id: 27, title: 'H&M',             category: 'Fashion',      amount: 2900,  date: '2025-12-26', type: 'non-essential', icon: 'fa-shirt' },
    { id: 28, title: 'Amazon',          category: 'Shopping',     amount: 6400,  date: '2025-12-20', type: 'non-essential', icon: 'fa-box' },
    { id: 29, title: 'Netflix',         category: 'Lifestyle',    amount: 649,   date: '2025-12-15', type: 'non-essential', icon: 'fa-film' },
    { id: 30, title: 'Zomato',         category: 'Outside Food Order',         amount: 1100,  date: '2025-12-12', type: 'non-essential', icon: 'fa-utensils' },
    { id: 31, title: 'Big Bazaar',      category: 'Groceries',    amount: 5100,  date: '2025-12-10', type: 'essential',     icon: 'fa-cart-shopping' },
    { id: 32, title: 'Insurance Premium',category: 'Insurance',   amount: 8500,  date: '2025-12-05', type: 'essential',     icon: 'fa-shield-halved' },
    { id: 33, title: 'Gym Membership',  category: 'Lifestyle',    amount: 1500,  date: '2025-12-01', type: 'non-essential', icon: 'fa-dumbbell' },
    { id: 34, title: 'Spotify',         category: 'Lifestyle',    amount: 179,   date: '2025-12-01', type: 'non-essential', icon: 'fa-music' },

    // ── November 2025 ────────────────────────────────────────────────────────
    { id: 35, title: 'Flipkart',        category: 'Shopping',     amount: 5200,  date: '2025-11-15', type: 'non-essential', icon: 'fa-bag-shopping' },
    { id: 36, title: 'Netflix',         category: 'Lifestyle',    amount: 649,   date: '2025-11-15', type: 'non-essential', icon: 'fa-film' },
    { id: 37, title: 'Myntra',          category: 'Fashion',      amount: 1800,  date: '2025-11-12', type: 'non-essential', icon: 'fa-shirt' },
    { id: 38, title: 'D-Mart',          category: 'Groceries',    amount: 3900,  date: '2025-11-08', type: 'essential',     icon: 'fa-cart-shopping' },
    { id: 39, title: 'Swiggy',          category: 'Outside Food Order',         amount: 670,   date: '2025-11-05', type: 'non-essential', icon: 'fa-utensils' },
    { id: 40, title: 'Gym Membership',  category: 'Lifestyle',    amount: 1500,  date: '2025-11-01', type: 'non-essential', icon: 'fa-dumbbell' },
    { id: 41, title: 'Spotify',         category: 'Lifestyle',    amount: 179,   date: '2025-11-01', type: 'non-essential', icon: 'fa-music' },

    // ── October 2025 ─────────────────────────────────────────────────────────
    { id: 42, title: 'Netflix',         category: 'Lifestyle',    amount: 649,   date: '2025-10-15', type: 'non-essential', icon: 'fa-film' },
    { id: 43, title: 'Phone Bill',      category: 'Utility Bill', amount: 999,   date: '2025-10-05', type: 'essential',     icon: 'fa-mobile-screen' },
    { id: 44, title: 'Zara',            category: 'Fashion',      amount: 3600,  date: '2025-10-10', type: 'non-essential', icon: 'fa-shirt' },
    { id: 45, title: 'Amazon',          category: 'Shopping',     amount: 2200,  date: '2025-10-08', type: 'non-essential', icon: 'fa-box' },
    { id: 46, title: 'Zomato',         category: 'Outside Food Order',         amount: 880,   date: '2025-10-06', type: 'non-essential', icon: 'fa-utensils' },
    { id: 47, title: 'Gym Membership',  category: 'Lifestyle',    amount: 1500,  date: '2025-10-01', type: 'non-essential', icon: 'fa-dumbbell' },
    { id: 48, title: 'Spotify',         category: 'Lifestyle',    amount: 179,   date: '2025-10-01', type: 'non-essential', icon: 'fa-music' },

    // ── September 2025 ───────────────────────────────────────────────────────
    { id: 49, title: 'Netflix',         category: 'Lifestyle',    amount: 649,   date: '2025-09-15', type: 'non-essential', icon: 'fa-film' },
    { id: 50, title: 'Myntra',          category: 'Fashion',      amount: 2400,  date: '2025-09-12', type: 'non-essential', icon: 'fa-shirt' },
    { id: 51, title: 'Big Bazaar',      category: 'Groceries',    amount: 4100,  date: '2025-09-10', type: 'essential',     icon: 'fa-cart-shopping' },
    { id: 52, title: 'Swiggy',          category: 'Outside Food Order',         amount: 760,   date: '2025-09-07', type: 'non-essential', icon: 'fa-utensils' },
    { id: 53, title: 'Gym Membership',  category: 'Lifestyle',    amount: 1500,  date: '2025-09-01', type: 'non-essential', icon: 'fa-dumbbell' },
    { id: 54, title: 'Spotify',         category: 'Lifestyle',    amount: 179,   date: '2025-09-01', type: 'non-essential', icon: 'fa-music' },

    // ── August 2025 ──────────────────────────────────────────────────────────
    { id: 55, title: 'Netflix',         category: 'Lifestyle',    amount: 649,   date: '2025-08-15', type: 'non-essential', icon: 'fa-film' },
    { id: 56, title: 'Flipkart',        category: 'Shopping',     amount: 4800,  date: '2025-08-10', type: 'non-essential', icon: 'fa-bag-shopping' },
    { id: 57, title: 'H&M',            category: 'Fashion',      amount: 1900,  date: '2025-08-08', type: 'non-essential', icon: 'fa-shirt' },
    { id: 58, title: 'Zomato',         category: 'Outside Food Order',         amount: 990,   date: '2025-08-05', type: 'non-essential', icon: 'fa-utensils' },
    { id: 59, title: 'Gym Membership',  category: 'Lifestyle',    amount: 1500,  date: '2025-08-01', type: 'non-essential', icon: 'fa-dumbbell' },
    { id: 60, title: 'Spotify',         category: 'Lifestyle',    amount: 179,   date: '2025-08-01', type: 'non-essential', icon: 'fa-music' },

    // ── July 2025 ────────────────────────────────────────────────────────────
    { id: 61, title: 'Netflix',         category: 'Lifestyle',    amount: 649,   date: '2025-07-15', type: 'non-essential', icon: 'fa-film' },
    { id: 62, title: 'Zara',            category: 'Fashion',      amount: 4200,  date: '2025-07-10', type: 'non-essential', icon: 'fa-shirt' },
    { id: 63, title: 'Amazon',          category: 'Shopping',     amount: 3100,  date: '2025-07-08', type: 'non-essential', icon: 'fa-box' },
    { id: 64, title: 'Swiggy',          category: 'Outside Food Order',         amount: 820,   date: '2025-07-05', type: 'non-essential', icon: 'fa-utensils' },
    { id: 65, title: 'Gym Membership',  category: 'Lifestyle',    amount: 1500,  date: '2025-07-01', type: 'non-essential', icon: 'fa-dumbbell' },
    { id: 66, title: 'Spotify',         category: 'Lifestyle',    amount: 179,   date: '2025-07-01', type: 'non-essential', icon: 'fa-music' },

    // ── June 2025 ────────────────────────────────────────────────────────────
    { id: 67, title: 'Flight Tickets',  category: 'Travel',       amount: 12000, date: '2025-06-15', type: 'non-essential', icon: 'fa-plane' },
    { id: 68, title: 'Netflix',         category: 'Lifestyle',    amount: 649,   date: '2025-06-15', type: 'non-essential', icon: 'fa-film' },
    { id: 69, title: 'Myntra',          category: 'Fashion',      amount: 2700,  date: '2025-06-10', type: 'non-essential', icon: 'fa-shirt' },
    { id: 70, title: 'Gym Membership',  category: 'Lifestyle',    amount: 1500,  date: '2025-06-01', type: 'non-essential', icon: 'fa-dumbbell' },
    { id: 71, title: 'Spotify',         category: 'Lifestyle',    amount: 179,   date: '2025-06-01', type: 'non-essential', icon: 'fa-music' },

    // ── April–May 2025 ───────────────────────────────────────────────────────
    { id: 72, title: 'Annual Gym Plan', category: 'Lifestyle',    amount: 9000,  date: '2025-04-01', type: 'non-essential', icon: 'fa-dumbbell' },
    { id: 73, title: 'Netflix',         category: 'Lifestyle',    amount: 649,   date: '2025-05-15', type: 'non-essential', icon: 'fa-film' },
    { id: 74, title: 'H&M',            category: 'Fashion',      amount: 3300,  date: '2025-05-10', type: 'non-essential', icon: 'fa-shirt' },
    { id: 75, title: 'Amazon Prime',    category: 'Lifestyle',    amount: 1499,  date: '2025-04-15', type: 'non-essential', icon: 'fa-crown' },
    { id: 76, title: 'Flipkart',        category: 'Shopping',     amount: 3800,  date: '2025-04-10', type: 'non-essential', icon: 'fa-bag-shopping' },

    // ── Older (>1 year) ───────────────────────────────────────────────────────
    { id: 77, title: 'Insurance Premium',category: 'Insurance',   amount: 8500,  date: '2024-12-01', type: 'essential',     icon: 'fa-shield-halved' },
    { id: 78, title: 'Laptop',           category: 'Electronics', amount: 65000, date: '2024-08-20', type: 'non-essential', icon: 'fa-laptop' },
    { id: 79, title: 'Netflix',          category: 'Lifestyle',   amount: 499,   date: '2024-12-15', type: 'non-essential', icon: 'fa-film' },
    { id: 80, title: 'Annual Gym Plan',  category: 'Lifestyle',   amount: 8500,  date: '2024-04-01', type: 'non-essential', icon: 'fa-dumbbell' },
    { id: 81, title: 'Flight Tickets',   category: 'Travel',      amount: 18000, date: '2024-10-10', type: 'non-essential', icon: 'fa-plane' },
];

// ─── Investment Data ───────────────────────────────────────────────────────────

const investmentTypes = [
    {
        id: 'equity-funds',
        name: 'Equity Funds',
        icon: '<i class="fa-solid fa-chart-line"></i>',
        color: '#60a5fa',
        bgColor: 'rgba(96, 165, 250, 0.12)',
        schemes: [
            { id: 'eq-1',  name: 'SBI Bluechip Fund',                category: 'Large Cap',          returns1Y: 18.4, returns3Y: 14.2, returns5Y: 16.8, risk: 'Moderate',   minAmount: 500,  nav: 72.35,  fundHouse: 'SBI Mutual Fund', description: 'Invests in top 100 companies by market cap. Ideal for stable long-term growth with moderate risk.' },
            { id: 'eq-2',  name: 'SBI Magnum Midcap Fund',           category: 'Mid Cap',            returns1Y: 28.6, returns3Y: 21.4, returns5Y: 22.1, risk: 'High',       minAmount: 500,  nav: 198.42, fundHouse: 'SBI Mutual Fund', description: 'Focuses on mid-sized companies with high growth potential. Suited for investors with a 5+ year horizon.' },
            { id: 'eq-3',  name: 'SBI Small Cap Fund',               category: 'Small Cap',          returns1Y: 34.2, returns3Y: 26.8, returns5Y: 28.4, risk: 'Very High',  minAmount: 500,  nav: 145.67, fundHouse: 'SBI Mutual Fund', description: 'Invests in small-cap companies with high growth potential. Best suited for aggressive investors with long horizons.' },
            { id: 'eq-4',  name: 'SBI Contra Fund',                  category: 'Contra',             returns1Y: 22.8, returns3Y: 18.6, returns5Y: 19.2, risk: 'High',       minAmount: 500,  nav: 318.45, fundHouse: 'SBI Mutual Fund', description: 'Follows a contrarian strategy by investing in out-of-favour stocks with strong recovery potential.' },
            { id: 'eq-5',  name: 'SBI Focused Equity Fund',          category: 'Focused',            returns1Y: 20.1, returns3Y: 16.4, returns5Y: 17.8, risk: 'High',       minAmount: 500,  nav: 312.78, fundHouse: 'SBI Mutual Fund', description: 'Concentrated portfolio of up to 30 high-conviction stocks across market caps.' },
            { id: 'eq-6',  name: 'SBI Flexicap Fund',                category: 'Flexi Cap',          returns1Y: 19.8, returns3Y: 15.6, returns5Y: 16.4, risk: 'Moderate',   minAmount: 500,  nav: 28.45,  fundHouse: 'SBI Mutual Fund', description: 'Dynamic allocation across large, mid and small caps based on market conditions.' },
            { id: 'eq-7',  name: 'SBI Magnum Multicap Fund',         category: 'Multi Cap',          returns1Y: 21.3, returns3Y: 17.2, returns5Y: 18.1, risk: 'High',       minAmount: 500,  nav: 98.32,  fundHouse: 'SBI Mutual Fund', description: 'Maintains a minimum 25% each in large, mid and small caps for diversified exposure.' },
            { id: 'eq-8',  name: 'SBI Healthcare Opportunities Fund', category: 'Sectoral/Healthcare',returns1Y: 35.8, returns3Y: 22.4, returns5Y: 24.6, risk: 'Very High',  minAmount: 500,  nav: 382.15, fundHouse: 'SBI Mutual Fund', description: 'Sectoral fund focused on pharma, hospitals, diagnostics and healthcare companies.' },
            { id: 'eq-9',  name: 'SBI Technology Opportunities Fund', category: 'Sectoral/IT',       returns1Y: 28.4, returns3Y: 19.8, returns5Y: 21.3, risk: 'Very High',  minAmount: 500,  nav: 178.92, fundHouse: 'SBI Mutual Fund', description: 'Invests in technology and IT companies benefiting from India\'s digital transformation.' },
            { id: 'eq-10', name: 'SBI PSU Fund',                     category: 'Thematic/PSU',       returns1Y: 42.1, returns3Y: 24.6, returns5Y: 22.8, risk: 'Very High',  minAmount: 500,  nav: 32.45,  fundHouse: 'SBI Mutual Fund', description: 'Thematic fund investing in Public Sector Undertakings riding the government capex wave.' },
        ]
    },
    {
        id: 'elss',
        name: 'ELSS & Tax Saving',
        icon: '<i class="fa-solid fa-piggy-bank"></i>',
        color: '#f472b6',
        bgColor: 'rgba(244, 114, 182, 0.12)',
        schemes: [
            { id: 'elss-1', name: 'SBI Long Term Equity Fund',        category: 'ELSS',               returns1Y: 24.6, returns3Y: 18.4, returns5Y: 19.2, risk: 'High',       minAmount: 500,  nav: 328.45, fundHouse: 'SBI Mutual Fund', description: 'ELSS fund offering tax deduction up to ₹1.5L under Sec 80C with the shortest 3-year lock-in among tax-saving options.' },
        ]
    },
    {
        id: 'hybrid',
        name: 'Hybrid Funds',
        icon: '<i class="fa-solid fa-scale-balanced"></i>',
        color: '#a78bfa',
        bgColor: 'rgba(167, 139, 250, 0.12)',
        schemes: [
            { id: 'hy-1', name: 'SBI Balanced Advantage Fund',       category: 'Dynamic Asset Alloc.',returns1Y: 14.2, returns3Y: 11.8, returns5Y: 12.4, risk: 'Moderate',   minAmount: 500,  nav: 32.45,  fundHouse: 'SBI Mutual Fund', description: 'Dynamically manages equity-debt allocation based on market valuations to reduce downside risk.' },
            { id: 'hy-2', name: 'SBI Equity Hybrid Fund',            category: 'Aggressive Hybrid',  returns1Y: 16.8, returns3Y: 13.4, returns5Y: 14.2, risk: 'Moderate',   minAmount: 500,  nav: 248.67, fundHouse: 'SBI Mutual Fund', description: 'Maintains 65–80% in equity and 20–35% in debt, offering growth with some stability.' },
            { id: 'hy-3', name: 'SBI Arbitrage Opportunities Fund',  category: 'Arbitrage',          returns1Y: 7.8,  returns3Y: 6.4,  returns5Y: 6.2,  risk: 'Low',        minAmount: 5000, nav: 28.32,  fundHouse: 'SBI Mutual Fund', description: 'Exploits price differences between cash and derivatives markets. Taxed like equity with low risk.' },
            { id: 'hy-4', name: 'SBI Magnum Children\'s Benefit Fund',category: 'Solution Oriented', returns1Y: 18.6, returns3Y: 14.8, returns5Y: 15.6, risk: 'High',       minAmount: 500,  nav: 32.45,  fundHouse: 'SBI Mutual Fund', description: 'Designed for long-term wealth creation for children\'s education and future goals with a 5-year lock-in.' },
            { id: 'hy-5', name: 'SBI Retirement Benefit Fund',       category: 'Solution Oriented',  returns1Y: 15.4, returns3Y: 12.6, returns5Y: 13.2, risk: 'Moderate',   minAmount: 500,  nav: 24.18,  fundHouse: 'SBI Mutual Fund', description: 'Tailored for retirement planning with a mix of equity and debt for long-term wealth accumulation.' },
        ]
    },
    {
        id: 'debt',
        name: 'Debt Funds',
        icon: '<i class="fa-solid fa-building-columns"></i>',
        color: '#34d399',
        bgColor: 'rgba(52, 211, 153, 0.12)',
        schemes: [
            { id: 'db-1', name: 'SBI Liquid Fund',                   category: 'Liquid',             returns1Y: 7.2,  returns3Y: 6.4,  returns5Y: 6.1,  risk: 'Low',        minAmount: 500,  nav: 3842.56, fundHouse: 'SBI Mutual Fund', description: 'Invests in money market instruments with maturity up to 91 days. Ideal for parking surplus funds with better returns than savings accounts.' },
            { id: 'db-2', name: 'SBI Overnight Fund',                category: 'Overnight',          returns1Y: 6.8,  returns3Y: 5.8,  returns5Y: 5.6,  risk: 'Low',        minAmount: 500,  nav: 1248.92, fundHouse: 'SBI Mutual Fund', description: 'Invests in overnight securities — the safest debt fund category with near-zero credit and interest rate risk.' },
            { id: 'db-3', name: 'SBI Savings Fund',                  category: 'Low Duration',       returns1Y: 7.4,  returns3Y: 6.6,  returns5Y: 6.4,  risk: 'Low',        minAmount: 500,  nav: 42.67,  fundHouse: 'SBI Mutual Fund', description: 'Invests in low-duration debt instruments with portfolio maturity of 6–12 months. Good savings account alternative.' },
            { id: 'db-4', name: 'SBI Short Duration Fund',           category: 'Short Duration',     returns1Y: 7.8,  returns3Y: 7.1,  returns5Y: 6.8,  risk: 'Low',        minAmount: 500,  nav: 32.45,  fundHouse: 'SBI Mutual Fund', description: 'Portfolio duration of 1–3 years. Balances yield with moderate interest rate sensitivity.' },
            { id: 'db-5', name: 'SBI Corporate Bond Fund',           category: 'Corporate Bond',     returns1Y: 8.2,  returns3Y: 7.4,  returns5Y: 7.1,  risk: 'Low-Moderate', minAmount: 500,  nav: 18.92,  fundHouse: 'SBI Mutual Fund', description: 'Invests at least 80% in AA+ and above rated corporate bonds, offering better yield than bank FDs with low risk.' },
            { id: 'db-6', name: 'SBI Banking & PSU Fund',            category: 'Banking & PSU',      returns1Y: 8.1,  returns3Y: 7.2,  returns5Y: 6.9,  risk: 'Low-Moderate', minAmount: 5000, nav: 24.56,  fundHouse: 'SBI Mutual Fund', description: 'Invests in bonds of banks, PSUs and public financial institutions — high quality with good liquidity.' },
            { id: 'db-7', name: 'SBI Magnum Gilt Fund',              category: 'Gilt',               returns1Y: 8.6,  returns3Y: 7.8,  returns5Y: 7.4,  risk: 'Low-Moderate', minAmount: 500,  nav: 62.34,  fundHouse: 'SBI Mutual Fund', description: 'Invests in government securities across maturities. Zero credit risk, ideal during rate cut cycles.' },
            { id: 'db-8', name: 'SBI Dynamic Bond Fund',             category: 'Dynamic Bond',       returns1Y: 8.9,  returns3Y: 7.6,  returns5Y: 7.2,  risk: 'Moderate',    minAmount: 500,  nav: 32.18,  fundHouse: 'SBI Mutual Fund', description: 'Actively manages duration across market cycles to capitalise on interest rate movements.' },
        ]
    },
    {
        id: 'index-etf',
        name: 'Index Funds & ETFs',
        icon: '<i class="fa-solid fa-chart-bar"></i>',
        color: '#2dd4bf',
        bgColor: 'rgba(45, 212, 191, 0.12)',
        schemes: [
            { id: 'idx-1', name: 'SBI Nifty 50 ETF',                 category: 'ETF / Large Cap',    returns1Y: 15.3, returns3Y: 12.8, returns5Y: 13.4, risk: 'Moderate',   minAmount: 100,  nav: 248.56, fundHouse: 'SBI Mutual Fund', description: 'Largest ETF in India by AUM, tracking the Nifty 50. Ultra-low expense ratio with high liquidity on NSE & BSE.' },
            { id: 'idx-2', name: 'SBI Sensex ETF',                   category: 'ETF / Large Cap',    returns1Y: 14.8, returns3Y: 12.4, returns5Y: 13.1, risk: 'Moderate',   minAmount: 100,  nav: 812.34, fundHouse: 'SBI Mutual Fund', description: 'Tracks the BSE Sensex — India\'s oldest index of 30 blue-chip companies. Minimal tracking error and very low cost.' },
            { id: 'idx-3', name: 'SBI Nifty Next 50 ETF',            category: 'ETF / Mid-Large Cap',returns1Y: 21.4, returns3Y: 16.2, returns5Y: 17.8, risk: 'High',       minAmount: 100,  nav: 62.45,  fundHouse: 'SBI Mutual Fund', description: 'Invests in companies ranked 51–100 by market cap — the next set of future blue-chips at lower valuations.' },
            { id: 'idx-4', name: 'SBI Nifty Bank ETF',               category: 'ETF / Sectoral',     returns1Y: 12.6, returns3Y: 10.4, returns5Y: 11.2, risk: 'High',       minAmount: 100,  nav: 456.78, fundHouse: 'SBI Mutual Fund', description: 'Tracks the Nifty Bank index of 12 most liquid banking stocks. Direct play on India\'s banking sector growth.' },
            { id: 'idx-5', name: 'SBI IT ETF',                       category: 'ETF / Sectoral',     returns1Y: 28.4, returns3Y: 19.6, returns5Y: 21.3, risk: 'Very High',  minAmount: 100,  nav: 324.56, fundHouse: 'SBI Mutual Fund', description: 'Tracks the Nifty IT index of top IT companies. Exposure to India\'s $250B IT export industry at low cost.' },
            { id: 'idx-6', name: 'SBI Nifty Midcap 150 ETF',         category: 'ETF / Mid Cap',      returns1Y: 24.6, returns3Y: 18.9, returns5Y: 19.8, risk: 'High',       minAmount: 100,  nav: 45.23,  fundHouse: 'SBI Mutual Fund', description: 'Tracks Nifty Midcap 150 — broadest passive midcap exposure available through a low-cost ETF structure.' },
            { id: 'idx-7', name: 'SBI Nifty Index Fund',             category: 'Index Fund',         returns1Y: 15.1, returns3Y: 12.6, returns5Y: 13.2, risk: 'Moderate',   minAmount: 500,  nav: 178.92, fundHouse: 'SBI Mutual Fund', description: 'Passively managed index fund tracking Nifty 50 — ideal for SIP investors who don\'t need a demat account.' },
            { id: 'idx-8', name: 'SBI Consumption ETF',              category: 'ETF / Thematic',     returns1Y: 22.4, returns3Y: 16.8, returns5Y: 18.1, risk: 'High',       minAmount: 100,  nav: 98.34,  fundHouse: 'SBI Mutual Fund', description: 'Tracks companies in the consumption sector — FMCG, retail, auto, consumer durables benefiting from rising incomes.' },
        ]
    },
    {
        id: 'gold',
        name: 'Gold',
        icon: '<i class="fa-solid fa-coins"></i>',
        color: '#fbbf24',
        bgColor: 'rgba(251, 191, 36, 0.12)',
        schemes: [
            { id: 'gld-1', name: 'SBI Gold ETF',                     category: 'Gold ETF',           returns1Y: 14.2, returns3Y: 12.4, returns5Y: 11.8, risk: 'Low',        minAmount: 100,  nav: 68.42,  fundHouse: 'SBI Mutual Fund', description: 'Each unit represents 1 gram of 99.5% pure gold. Stored in SEBI-approved custodians with no making charges.' },
            { id: 'gld-2', name: 'SBI Gold Fund',                    category: 'Fund of Fund',       returns1Y: 13.8, returns3Y: 12.1, returns5Y: 11.4, risk: 'Low-Moderate', minAmount: 500,  nav: 24.56,  fundHouse: 'SBI Mutual Fund', description: 'Invests in SBI Gold ETF units. Allows SIP into gold without a demat account — most convenient gold SIP option.' },
        ]
    },
    {
        id: 'fixed-deposits',
        name: 'Fixed Deposits',
        icon: '<i class="fa-solid fa-vault"></i>',
        color: '#4ade80',
        bgColor: 'rgba(74, 222, 128, 0.12)',
        schemes: [
            { id: 'fd-1', name: 'SBI Regular FD',                    category: 'Bank FD',            returns1Y: 6.80, returns3Y: 6.75, returns5Y: 6.50, risk: 'Low',        minAmount: 1000,  nav: null,  fundHouse: 'State Bank of India', description: 'India\'s most trusted FD with DICGC insurance cover up to ₹5 lakh. Tenures from 7 days to 10 years with premature withdrawal.' },
            { id: 'fd-2', name: 'SBI Tax Saving FD',                 category: 'Tax Saving FD',      returns1Y: 6.50, returns3Y: 6.50, returns5Y: 6.50, risk: 'Low',        minAmount: 1000,  nav: null,  fundHouse: 'State Bank of India', description: 'Fixed 5-year lock-in FD eligible for ₹1.5L deduction under Sec 80C. Guaranteed returns with no market risk.' },
            { id: 'fd-3', name: 'SBI Senior Citizen FD',             category: 'Senior Citizen FD',  returns1Y: 7.30, returns3Y: 7.25, returns5Y: 7.00, risk: 'Low',        minAmount: 1000,  nav: null,  fundHouse: 'State Bank of India', description: 'Extra 0.50% interest for senior citizens (60+ years) over and above regular FD rates on all tenures.' },
            { id: 'fd-4', name: 'SBI We-Care Deposit',               category: 'Senior Citizen FD',  returns1Y: 7.50, returns3Y: 7.50, returns5Y: 7.25, risk: 'Low',        minAmount: 1000,  nav: null,  fundHouse: 'State Bank of India', description: 'Special scheme for senior citizens offering 0.80% extra interest, designed exclusively for customers aged 60 and above.' },
            { id: 'fd-5', name: 'SBI Amrit Kalash FD',              category: 'Special FD',         returns1Y: 7.10, returns3Y: 7.10, returns5Y: 6.50, risk: 'Low',        minAmount: 1000,  nav: null,  fundHouse: 'State Bank of India', description: 'Limited period special FD scheme with a 400-day tenure offering higher interest than regular term deposits.' },
            { id: 'fd-6', name: 'SBI Recurring Deposit',             category: 'Recurring Deposit',  returns1Y: 6.50, returns3Y: 6.50, returns5Y: 6.50, risk: 'Low',        minAmount: 500,   nav: null,  fundHouse: 'State Bank of India', description: 'Monthly SIP-like fixed deposit. Invest a fixed amount each month and earn compound interest over your chosen tenure.' },
        ]
    },
];

// ─── NavStack for investments sub-page navigation ─────────────────────────────

let navStack = [];

// ─── Existing state variables ──────────────────────────────────────────────────

let currentFilter = 'all';
let currentTypeFilter = 'all';
let spendChart = null;
let selectedSliceIndex = null;
let homePeriodFilter = 'this-year';
let activeCardFilter = 'all';

// ─── Investment form state ─────────────────────────────────────────────────────

let investMode = 'sip';       // 'sip' | 'onetime'
let investAmount = 5000;
let investTenure = 3;         // years

// ─── Formatting utilities ──────────────────────────────────────────────────────

const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(amount);
};

const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const now = new Date();
    const opts = { month: 'short', day: 'numeric' };
    if (date.getFullYear() !== now.getFullYear()) opts.year = 'numeric';
    return date.toLocaleDateString('en-IN', opts);
};

// ─── Initialize App ────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initHomePeriodFilter();
    initFilter();
    initTypeFilter();
    initCardFilters();
    renderTransactions();
    calculateSummaries();
    initChart();
    initBackButton();
    renderInvestmentsHome();
    initTransactionModal();
    initHistoryToggle();
    renderGamification();
});

// ─── Home period filter helpers ────────────────────────────────────────────────

const HOME_PERIODS = [
    { id: 'last-1m',  label: 'Last Month',   summaryLabel: "Last Month's Spend"  },
    { id: 'this-year',label: 'This Year',    summaryLabel: "This Year's Spend"   },
    { id: 'last-1y',  label: 'Last Year',    summaryLabel: "Last Year's Spend"   },
    { id: 'last-5y',  label: 'Last 5 Years', summaryLabel: 'Last 5 Years Spend'  },
];

function getPeriodTransactions() {
    const now = new Date();
    const daysAgo = (n) => new Date(now.getTime() - n * 24 * 60 * 60 * 1000);
    const start = homePeriodFilter === 'last-1m'   ? daysAgo(30)
                : homePeriodFilter === 'this-year'  ? new Date(now.getFullYear(), 0, 1)
                : homePeriodFilter === 'last-1y'    ? daysAgo(365)
                : daysAgo(5 * 365);
    return transactions.filter(tx => new Date(tx.date) >= start);
}

function initHomePeriodFilter() {
    const bar = document.getElementById('home-period-filter');
    HOME_PERIODS.forEach(p => {
        const btn = document.createElement('button');
        btn.className = 'filter-pill' + (p.id === homePeriodFilter ? ' active' : '');
        btn.textContent = p.label;
        btn.addEventListener('click', () => {
            homePeriodFilter = p.id;
            bar.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById('summary-label').textContent = p.summaryLabel;
            calculateSummaries();
            updateChartFilter(activeCardFilter);
            renderBehaviorInsight();
        });
        bar.appendChild(btn);
    });
    // Set initial label
    document.getElementById('summary-label').textContent = HOME_PERIODS.find(p => p.id === homePeriodFilter).summaryLabel;
}

// ─── Navigation Logic ──────────────────────────────────────────────────────────

function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const views = document.querySelectorAll('.view');
    const pageTitle = document.getElementById('page-title');
    const backBtn = document.getElementById('back-btn');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            // Clear navStack and hide back button whenever a main nav tab is clicked
            navStack = [];
            backBtn.style.display = 'none';

            navItems.forEach(nav => nav.classList.remove('active'));
            views.forEach(view => view.classList.remove('active'));
            item.classList.add('active');
            const targetId = item.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
            pageTitle.textContent = item.getAttribute('data-title');

            // If investments tab, render home and load live data
            if (targetId === 'investments-view') {
                renderInvestmentsHome();
                loadLiveInvestmentData();
            }

            // If recommendations tab, render insights
            if (targetId === 'recommendations-view') {
                renderRecommendations();
            }
        });
    });
}

// ─── Back Button ──────────────────────────────────────────────────────────────

function initBackButton() {
    const backBtn = document.getElementById('back-btn');
    backBtn.addEventListener('click', () => {
        if (navStack.length === 0) return;
        const prev = navStack.pop();
        document.getElementById('page-title').textContent = prev.title;
        updateBackBtnVisibility();

        if (prev.view === 'investments-home') {
            showInvestmentsSubView('investments-home-view');
        } else if (prev.view === 'investment-type') {
            showInvestmentsSubView('investment-type-view');
            renderTypeView(prev.typeId);
        }
    });
}

function updateBackBtnVisibility() {
    const backBtn = document.getElementById('back-btn');
    backBtn.style.display = navStack.length > 0 ? 'flex' : 'none';
}

function showInvestmentsSubView(subViewId) {
    const subViews = ['investments-home-view', 'investment-type-view', 'investment-scheme-view'];
    subViews.forEach(id => {
        document.getElementById(id).style.display = id === subViewId ? 'block' : 'none';
    });
}

// ─── Render Investments Home ───────────────────────────────────────────────────

function renderInvestmentsHome() {
    const container = document.getElementById('investments-home-view');
    container.innerHTML = '';

    investmentTypes.forEach(type => {
        const section = document.createElement('div');
        section.className = 'invest-section';

        const header = document.createElement('div');
        header.className = 'invest-section-header';

        const titleDiv = document.createElement('div');
        titleDiv.className = 'invest-section-title';
        titleDiv.innerHTML = `
            <div class="invest-icon" style="background:${type.bgColor}; color:${type.color};">${type.icon}</div>
            <h3>${type.name}</h3>
        `;

        const viewAllBtn = document.createElement('button');
        viewAllBtn.className = 'view-all-btn';
        viewAllBtn.innerHTML = `View All <i class="fa-solid fa-arrow-right" style="font-size:10px;"></i>`;
        viewAllBtn.addEventListener('click', () => {
            navStack.push({ view: 'investments-home', title: 'Invest' });
            updateBackBtnVisibility();
            document.getElementById('page-title').textContent = type.name;
            renderTypeView(type.id);
            showInvestmentsSubView('investment-type-view');
        });

        header.appendChild(titleDiv);
        header.appendChild(viewAllBtn);
        section.appendChild(header);

        // Show only first 2 schemes
        type.schemes.slice(0, 2).forEach(scheme => {
            const card = buildSchemeCard(scheme, type);
            section.appendChild(card);
        });

        container.appendChild(section);
    });

    showInvestmentsSubView('investments-home-view');
}

// ─── Render Type View ──────────────────────────────────────────────────────────

function renderTypeView(typeId) {
    const type = investmentTypes.find(t => t.id === typeId);
    const container = document.getElementById('investment-type-view');
    container.innerHTML = '';

    type.schemes.forEach(scheme => {
        const card = buildSchemeCard(scheme, type);
        container.appendChild(card);
    });
}

// ─── Build Scheme Card ─────────────────────────────────────────────────────────

function buildSchemeCard(scheme, type) {
    const card = document.createElement('div');
    card.className = 'scheme-card';

    card.innerHTML = `
        <div class="scheme-card-left">
            <div class="scheme-icon" style="background:${type.bgColor}; color:${type.color};">${type.icon}</div>
            <div>
                <div class="scheme-name">${scheme.name}</div>
                <div class="scheme-meta">${scheme.category} &middot; Min ₹${scheme.minAmount.toLocaleString('en-IN')}</div>
            </div>
        </div>
        <div>
            <div class="scheme-return">+${scheme.returns1Y}%</div>
            <div class="scheme-return-label">1Y Return</div>
        </div>
    `;

    card.addEventListener('click', () => {
        // Determine current sub-view to push to stack
        const typeViewVisible = document.getElementById('investment-type-view').style.display !== 'none';
        if (typeViewVisible) {
            navStack.push({ view: 'investment-type', typeId: type.id, title: type.name });
        } else {
            navStack.push({ view: 'investments-home', title: 'Invest' });
        }
        updateBackBtnVisibility();
        document.getElementById('page-title').textContent = scheme.name;
        renderSchemeView(scheme, type);
        showInvestmentsSubView('investment-scheme-view');
    });

    return card;
}

// ─── Risk helpers ──────────────────────────────────────────────────────────────

const riskColors = {
    'Low': '#34d399',
    'Low-Moderate': '#a3e635',
    'Moderate': '#fbbf24',
    'High': '#f97316',
    'Very High': '#f87171'
};

const riskLevels = {
    'Low': 1,
    'Low-Moderate': 2,
    'Moderate': 3,
    'High': 4,
    'Very High': 5
};

function buildRiskDots(risk) {
    const level = riskLevels[risk] || 3;
    const color = riskColors[risk] || '#fbbf24';
    let dots = '';
    for (let i = 1; i <= 5; i++) {
        dots += i <= level
            ? `<span style="color:${color};font-size:14px;">●</span>`
            : `<span style="color:rgba(255,255,255,0.2);font-size:14px;">○</span>`;
    }
    return dots;
}

// ─── SIP / One-Time Estimate Calculator ───────────────────────────────────────

function calcEstimate(mode, amount, tenureYears, rate1Y, rate3Y) {
    const r = rate3Y / 100;
    if (mode === 'sip') {
        // SIP Future Value formula: P × [((1+i)^n − 1) / i] × (1+i)
        // monthly rate
        const i = Math.pow(1 + r, 1 / 12) - 1;
        const n = tenureYears * 12;
        const fv = amount * (Math.pow(1 + i, n) - 1) / i * (1 + i);
        const invested = amount * n;
        const returns = fv - invested;
        return { invested, returns, value: fv };
    } else {
        // One-Time compound: P × (1+r)^n
        const fv = amount * Math.pow(1 + r, tenureYears);
        const returns = fv - amount;
        return { invested: amount, returns, value: fv };
    }
}

// ─── Render Scheme View ────────────────────────────────────────────────────────

function renderSchemeView(scheme, type) {
    const container = document.getElementById('investment-scheme-view');

    // Reset form state for new scheme
    investMode = 'sip';
    investAmount = Math.max(scheme.minAmount, 1000);
    investTenure = 3;

    function buildHTML() {
        const est = calcEstimate(investMode, investAmount, investTenure, scheme.returns1Y, scheme.returns3Y);
        const presets = [500, 1000, 5000, 10000];
        const tenures = [1, 3, 5, 10];

        return `
            <div class="scheme-detail-header">
                <div class="scheme-detail-icon" style="background:${type.bgColor}; color:${type.color};">${type.icon}</div>
                <div>
                    <div class="scheme-detail-name">${scheme.name}</div>
                    <div class="scheme-detail-meta">${scheme.category} &middot; ${scheme.fundHouse}</div>
                </div>
            </div>

            <p class="scheme-description">${scheme.description}</p>

            <div class="returns-card">
                <h4>Historical Returns</h4>
                <div class="returns-row">
                    <div class="return-item">
                        <div class="return-value">+${scheme.returns1Y}%</div>
                        <div class="return-label">1 Year</div>
                    </div>
                    <div class="return-divider"></div>
                    <div class="return-item">
                        <div class="return-value">+${scheme.returns3Y}%</div>
                        <div class="return-label">3 Years</div>
                    </div>
                    <div class="return-divider"></div>
                    <div class="return-item">
                        <div class="return-value">+${scheme.returns5Y}%</div>
                        <div class="return-label">5 Years</div>
                    </div>
                </div>
            </div>

            <div class="risk-card">
                <span class="risk-label">Risk Level</span>
                <div class="risk-right">
                    <div>${buildRiskDots(scheme.risk)}</div>
                    <span class="risk-text" style="color:${riskColors[scheme.risk] || '#fbbf24'};">${scheme.risk}</span>
                </div>
            </div>

            ${scheme.nav !== null ? `
            <div class="nav-card">
                <span>Current NAV</span>
                <span class="nav-value">₹${scheme.nav.toFixed(2)}</span>
            </div>
            ` : ''}

            <div class="invest-form">
                <h4>Start Investing</h4>

                <div class="invest-type-toggle">
                    <button class="toggle-btn${investMode === 'sip' ? ' active' : ''}" data-mode="sip">SIP</button>
                    <button class="toggle-btn${investMode === 'onetime' ? ' active' : ''}" data-mode="onetime">One-Time</button>
                </div>

                <div class="form-group">
                    <label>${investMode === 'sip' ? 'Monthly Investment' : 'Investment Amount'}</label>
                    <div class="amount-presets">
                        ${presets.map(p => `<button class="preset-btn${investAmount === p ? ' active' : ''}" data-preset="${p}">₹${p.toLocaleString('en-IN')}</button>`).join('')}
                    </div>
                    <input class="amount-input" type="number" id="invest-amount-input" value="${investAmount}" min="${scheme.minAmount}" placeholder="Enter amount">
                    <div class="min-amount-note">Minimum investment: ₹${scheme.minAmount.toLocaleString('en-IN')}</div>
                </div>

                <div class="form-group">
                    <label>Investment Duration</label>
                    <div class="tenure-options">
                        ${tenures.map(t => `<button class="tenure-btn${investTenure === t ? ' active' : ''}" data-tenure="${t}">${t}Y</button>`).join('')}
                    </div>
                </div>

                <div class="estimate-card">
                    <div class="estimate-row">
                        <span>${investMode === 'sip' ? 'Monthly Investment' : 'Lumpsum Amount'}</span>
                        <span>${formatCurrency(est.invested / (investMode === 'sip' ? investTenure * 12 : 1))}</span>
                    </div>
                    <div class="estimate-row">
                        <span>Total Invested</span>
                        <span>${formatCurrency(est.invested)}</span>
                    </div>
                    <div class="estimate-row">
                        <span>Est. Returns</span>
                        <span class="positive">+${formatCurrency(Math.round(est.returns))}</span>
                    </div>
                    <div class="estimate-row total">
                        <span>Est. Value</span>
                        <span class="positive">${formatCurrency(Math.round(est.value))}</span>
                    </div>
                </div>

                <button class="invest-now-btn">
                    <i class="fa-solid fa-seedling"></i>
                    Invest Now
                </button>
            </div>
        `;
    }

    function mount() {
        container.innerHTML = buildHTML();
        bindFormEvents();
    }

    function bindFormEvents() {
        // Mode toggle
        container.querySelectorAll('.toggle-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                investMode = btn.dataset.mode;
                mount();
            });
        });

        // Preset buttons
        container.querySelectorAll('.preset-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                investAmount = parseInt(btn.dataset.preset, 10);
                const input = container.querySelector('#invest-amount-input');
                if (input) input.value = investAmount;
                container.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                refreshEstimate();
            });
        });

        // Amount input
        const amountInput = container.querySelector('#invest-amount-input');
        if (amountInput) {
            amountInput.addEventListener('input', () => {
                const val = parseInt(amountInput.value, 10);
                if (!isNaN(val) && val > 0) {
                    investAmount = val;
                    container.querySelectorAll('.preset-btn').forEach(b => {
                        b.classList.toggle('active', parseInt(b.dataset.preset, 10) === investAmount);
                    });
                    refreshEstimate();
                }
            });
        }

        // Tenure buttons
        container.querySelectorAll('.tenure-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                investTenure = parseInt(btn.dataset.tenure, 10);
                container.querySelectorAll('.tenure-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                refreshEstimate();
            });
        });

        // Invest now button (placeholder toast)
        const investBtn = container.querySelector('.invest-now-btn');
        if (investBtn) {
            investBtn.addEventListener('click', () => {
                if (investBtn.dataset.placed) return;
                investBtn.dataset.placed = 'true';
                investBtn.innerHTML = '<i class="fa-solid fa-check"></i> Order Placed!';
                investBtn.style.background = 'linear-gradient(135deg, #059669, #10b981)';
                investBtn.style.color = '#ffffff';
                investBtn.style.opacity = '0.85';
                investBtn.style.cursor = 'default';
                recordInvestment(investAmount, scheme, type, investMode, 'order-placed');
            });
        }
    }

    function refreshEstimate() {
        const est = calcEstimate(investMode, investAmount, investTenure, scheme.returns1Y, scheme.returns3Y);
        const estimateCard = container.querySelector('.estimate-card');
        if (!estimateCard) return;
        estimateCard.innerHTML = `
            <div class="estimate-row">
                <span>${investMode === 'sip' ? 'Monthly Investment' : 'Lumpsum Amount'}</span>
                <span>${formatCurrency(investMode === 'sip' ? investAmount : investAmount)}</span>
            </div>
            <div class="estimate-row">
                <span>Total Invested</span>
                <span>${formatCurrency(est.invested)}</span>
            </div>
            <div class="estimate-row">
                <span>Est. Returns</span>
                <span class="positive">+${formatCurrency(Math.round(est.returns))}</span>
            </div>
            <div class="estimate-row total">
                <span>Est. Value</span>
                <span class="positive">${formatCurrency(Math.round(est.value))}</span>
            </div>
        `;
    }

    mount();
}

// ─── Filter Logic ──────────────────────────────────────────────────────────────

function initFilter() {
    const filters = [
        { id: 'all',      label: 'All' },
        { id: 'last-10d', label: 'Last 10 Days' },
        { id: 'last-1m',  label: 'Last Month' },
        { id: 'last-3m',  label: 'Last 3 Months' },
        { id: 'last-6m',  label: 'Last 6 Months' },
        { id: 'last-1y',  label: 'Last Year' },
        { id: 'older',    label: '1+ Year Ago' },
    ];

    const filterBar = document.getElementById('filter-bar');
    filters.forEach(f => {
        const btn = document.createElement('button');
        btn.className = 'filter-pill' + (f.id === 'all' ? ' active' : '');
        btn.dataset.filter = f.id;
        btn.textContent = f.label;
        btn.addEventListener('click', () => {
            currentFilter = f.id;
            document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            renderTransactions();
        });
        filterBar.appendChild(btn);
    });
}

function initTypeFilter() {
    const types = [
        { id: 'all',           label: 'All' },
        { id: 'essential',     label: 'Essentials' },
        { id: 'non-essential', label: 'Non-Essentials' },
    ];

    const filterBar = document.getElementById('filter-bar-type');
    types.forEach(t => {
        const btn = document.createElement('button');
        btn.className = 'filter-pill' + (t.id === 'all' ? ' active' : '');
        btn.dataset.type = t.id;
        btn.textContent = t.label;
        btn.addEventListener('click', () => {
            currentTypeFilter = t.id;
            filterBar.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            renderTransactions();
        });
        filterBar.appendChild(btn);
    });
}

function getFilteredTransactions() {
    const now = new Date();
    const daysAgo = (n) => new Date(now.getTime() - n * 24 * 60 * 60 * 1000);

    return transactions.filter(tx => {
        const txDate = new Date(tx.date);

        const passesTime = (() => {
            switch (currentFilter) {
                case 'all':      return true;
                case 'last-10d': return txDate >= daysAgo(10);
                case 'last-1m':  return txDate >= daysAgo(30);
                case 'last-3m':  return txDate >= daysAgo(90);
                case 'last-6m':  return txDate >= daysAgo(180);
                case 'last-1y':  return txDate >= daysAgo(365);
                case 'older':    return txDate < daysAgo(365);
                default:         return true;
            }
        })();

        const passesType = currentTypeFilter === 'all' || tx.type === currentTypeFilter;

        return passesTime && passesType;
    });
}

// ─── Render Transactions List ──────────────────────────────────────────────────

function renderTransactions() {
    const listContainer = document.getElementById('transactions-list');
    listContainer.innerHTML = '';

    const filtered = getFilteredTransactions();

    if (filtered.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'empty-state';
        empty.innerHTML = '<i class="fa-solid fa-receipt"></i><p>No transactions found</p>';
        listContainer.appendChild(empty);
        return;
    }

    filtered.forEach(tx => {
        let iconColor = 'var(--primary-blue)';
        let bgColor = 'rgba(59, 130, 246, 0.1)';

        if (tx.type === 'essential') {
            iconColor = 'var(--success)';
            bgColor = 'rgba(16, 185, 129, 0.1)';
        } else if (tx.category === 'Fashion') {
            iconColor = 'var(--accent-pink)';
            bgColor = 'rgba(236, 72, 153, 0.1)';
        }

        const txElement = document.createElement('div');
        txElement.className = 'transaction-item';
        txElement.innerHTML = `
            <div class="tx-left">
                <div class="tx-icon" style="color: ${iconColor}; background: ${bgColor}">
                    <i class="fa-solid ${tx.icon}"></i>
                </div>
                <div class="tx-details">
                    <div class="tx-title">${tx.title}</div>
                    <div class="tx-category">${tx.category}</div>
                </div>
            </div>
            <div class="tx-right">
                <div class="tx-amount">-${formatCurrency(tx.amount)}</div>
                <div class="tx-date">${formatDate(tx.date)}</div>
            </div>
        `;
        listContainer.appendChild(txElement);
    });
}

// ─── Calculate and Display Summaries ──────────────────────────────────────────

function calculateSummaries() {
    let total = 0, essentials = 0, nonEssentials = 0;

    getPeriodTransactions().forEach(tx => {

        total += tx.amount;
        if (tx.type === 'essential') {
            essentials += tx.amount;
        } else {
            nonEssentials += tx.amount;
        }
    });

    document.getElementById('total-spend').textContent = formatCurrency(total);
    document.getElementById('total-spend').style.animation = 'fadeIn 0.5s ease-out';
    document.getElementById('essentials-spend').textContent = formatCurrency(essentials);
    document.getElementById('non-essentials-spend').textContent = formatCurrency(nonEssentials);
}

// ─── Build chart data for a given type filter ──────────────────────────────────

function buildChartData(typeFilter) {
    const essentialCats = {};
    const nonEssentialCats = {};
    getPeriodTransactions().forEach(tx => {
        if (tx.type === 'essential') {
            essentialCats[tx.category] = (essentialCats[tx.category] || 0) + tx.amount;
        } else {
            nonEssentialCats[tx.category] = (nonEssentialCats[tx.category] || 0) + tx.amount;
        }
    });

    const essentialShades    = ['#34d399', '#2dd4bf', '#4ade80', '#38bdf8'];
    const nonEssentialShades = ['#a78bfa', '#f472b6', '#60a5fa', '#fbbf24', '#f87171'];

    const essentialLabels = Object.keys(essentialCats);
    const essentialData   = Object.values(essentialCats);
    const essentialColors = essentialLabels.map((_, i) => essentialShades[i % essentialShades.length]);

    const nonEssentialLabels = Object.keys(nonEssentialCats);
    const nonEssentialData   = Object.values(nonEssentialCats);
    const nonEssentialColors = nonEssentialLabels.map((_, i) => nonEssentialShades[i % nonEssentialShades.length]);

    let allLabels, allData, allColors;
    if (typeFilter === 'essential') {
        allLabels = [...essentialLabels]; allData = [...essentialData]; allColors = [...essentialColors];
    } else if (typeFilter === 'non-essential') {
        allLabels = [...nonEssentialLabels]; allData = [...nonEssentialData]; allColors = [...nonEssentialColors];
    } else {
        allLabels = [...essentialLabels, ...nonEssentialLabels];
        allData   = [...essentialData,   ...nonEssentialData];
        allColors = [...essentialColors, ...nonEssentialColors];
    }

    return { allLabels, allData, allColors, essentialLabels, essentialColors, nonEssentialLabels, nonEssentialColors };
}

// ─── Center text plugin ────────────────────────────────────────────────────────

const centerTextPlugin = {
    id: 'centerText',
    afterDraw(chart) {
        const state = chart._centerState;
        if (!state) return;
        const { ctx: c, chartArea: { left, top, width, height } } = chart;
        const cx = left + width / 2, cy = top + height / 2;
        c.save();
        c.textAlign = 'center'; c.textBaseline = 'middle';
        c.font = '500 11px Outfit, sans-serif'; c.fillStyle = '#64748b';
        c.fillText(state.label, cx, cy - 13);
        c.font = 'bold 14px Outfit, sans-serif'; c.fillStyle = '#0f172a';
        c.fillText(state.amount, cx, cy + 9);
        c.restore();
    }
};

const dim = (color) => color + '33';

function applySliceHighlight(idx) {
    const ds = spendChart.data.datasets[0];
    if (selectedSliceIndex === idx) {
        selectedSliceIndex = null;
        ds.backgroundColor = [...ds._origColors];
        spendChart._centerState = null;
    } else {
        selectedSliceIndex = idx;
        ds.backgroundColor = ds._origColors.map((c, i) => i === idx ? c : dim(c));
        spendChart._centerState = { label: ds._allLabels[idx], amount: formatCurrency(ds._allData[idx]) };
    }
    spendChart.update('none');
}

// ─── Initialize Chart.js ───────────────────────────────────────────────────────

function initChart() {
    const ctx = document.getElementById('spendChart').getContext('2d');
    const data = buildChartData('all');

    Chart.defaults.color = '#64748b';
    Chart.defaults.font.family = "'Outfit', sans-serif";

    spendChart = new Chart(ctx, {
        type: 'doughnut',
        plugins: [centerTextPlugin],
        data: {
            datasets: [{
                data: data.allData,
                backgroundColor: [...data.allColors],
                borderColor: '#0f111a',
                borderWidth: 2,
                hoverOffset: 8,
                _origColors: [...data.allColors],
                _allLabels: data.allLabels,
                _allData: data.allData,
                _essentialLabels: data.essentialLabels,
                _essentialColors: data.essentialColors,
                _nonEssentialLabels: data.nonEssentialLabels,
                _nonEssentialColors: data.nonEssentialColors,
                _typeFilter: 'all',
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '58%',
            onClick: (event, elements) => {
                if (elements.length) applySliceHighlight(elements[0].index);
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    onClick: (e, legendItem) => {
                        if (legendItem.index !== -1) applySliceHighlight(legendItem.index);
                    },
                    labels: {
                        padding: 12,
                        font: { size: 11 },
                        usePointStyle: true,
                        pointStyleWidth: 8,
                        generateLabels: (chart) => {
                            const ds = chart.data.datasets[0];
                            const tf = ds._typeFilter;
                            const items = [];
                            if (tf !== 'non-essential') {
                                if (tf === 'all') items.push({ text: 'ESSENTIALS', fillStyle: 'transparent', strokeStyle: 'transparent', lineWidth: 0, fontColor: '#34d399', hidden: false, index: -1, datasetIndex: 0 });
                                ds._essentialLabels.forEach((label, i) => items.push({ text: label, fillStyle: ds._essentialColors[i], strokeStyle: '#f1f5f9', lineWidth: 1, hidden: false, index: i, datasetIndex: 0 }));
                            }
                            if (tf !== 'essential') {
                                if (tf === 'all') items.push({ text: 'NON-ESSENTIALS', fillStyle: 'transparent', strokeStyle: 'transparent', lineWidth: 0, fontColor: '#a78bfa', hidden: false, index: -1, datasetIndex: 0 });
                                const offset = tf === 'non-essential' ? 0 : ds._essentialLabels.length;
                                ds._nonEssentialLabels.forEach((label, i) => items.push({ text: label, fillStyle: ds._nonEssentialColors[i], strokeStyle: '#f1f5f9', lineWidth: 1, hidden: false, index: offset + i, datasetIndex: 0 }));
                            }
                            return items;
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(15, 17, 26, 0.9)',
                    titleColor: '#f8fafc', bodyColor: '#f8fafc',
                    borderColor: 'rgba(255, 255, 255, 0.1)', borderWidth: 1,
                    padding: 12, displayColors: false,
                    callbacks: {
                        title: (items) => spendChart.data.datasets[0]._allLabels[items[0].dataIndex],
                        label: (context) => {
                            const total = context.dataset._allData.reduce((a, b) => a + b, 0);
                            const pct = ((context.parsed / total) * 100).toFixed(1);
                            const val = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(context.parsed);
                            return ` ${val} (${pct}%)`;
                        }
                    }
                }
            },
            animation: { duration: 800, easing: 'easeOutQuart' }
        }
    });
}

function updateChartFilter(typeFilter) {
    const data = buildChartData(typeFilter);
    selectedSliceIndex = null;
    spendChart._centerState = null;
    const ds = spendChart.data.datasets[0];
    ds.data = data.allData;
    ds.backgroundColor = [...data.allColors];
    ds._origColors = [...data.allColors];
    ds._allLabels = data.allLabels;
    ds._allData = data.allData;
    ds._typeFilter = typeFilter;
    spendChart.update();
}

function initCardFilters() {
    const summaryCard = document.getElementById('summary-card');
    const essentialCards = document.querySelectorAll('.essential-card');

    const clearAll = () => {
        summaryCard.classList.remove('active');
        essentialCards.forEach(c => c.classList.remove('active'));
    };

    summaryCard.addEventListener('click', () => {
        if (activeCardFilter === 'all') return;
        activeCardFilter = 'all';
        clearAll();
        summaryCard.classList.add('active');
        updateChartFilter('all');
    });

    essentialCards.forEach(card => {
        card.addEventListener('click', () => {
            const type = card.dataset.filter;
            if (activeCardFilter === type) {
                activeCardFilter = 'all';
                clearAll();
                updateChartFilter('all');
            } else {
                activeCardFilter = type;
                clearAll();
                card.classList.add('active');
                updateChartFilter(type);
            }
        });
    });
}

// ─── Transaction Modal & Nudge ────────────────────────────────────────────────

const NUDGE_THRESHOLD = 500; // nudge for non-essential spend ≥ ₹500

const TRANSACTION_CATEGORIES = [
    { name: 'Groceries',     icon: 'fa-cart-shopping',  type: 'essential'     },
    { name: 'Utility Bill',  icon: 'fa-bolt',           type: 'essential'     },
    { name: 'Healthcare',    icon: 'fa-kit-medical',    type: 'essential'     },
    { name: 'Insurance',     icon: 'fa-shield-halved',  type: 'essential'     },
    { name: 'Outside Food Order', icon: 'fa-utensils',  type: 'non-essential' },
    { name: 'Fashion',       icon: 'fa-shirt',          type: 'non-essential' },
    { name: 'Shopping',      icon: 'fa-bag-shopping',   type: 'non-essential' },
    { name: 'Travel',        icon: 'fa-plane',          type: 'non-essential' },
    { name: 'Lifestyle',     icon: 'fa-dumbbell',       type: 'non-essential' },
    { name: 'Electronics',   icon: 'fa-laptop',         type: 'non-essential' },
    { name: 'Entertainment', icon: 'fa-film',           type: 'non-essential' },
    { name: 'Other',         icon: 'fa-ellipsis',       type: 'essential'     },
];

let selectedCategory = null;
let selectedType = null;
let pendingTransaction = null;
let pendingNudgeRec = null;

// Auto-generated title based on category + user classification
const TX_TITLE_MAP = {
    'Groceries':           { essential: 'Household Groceries',     nonEssential: 'Extra Groceries'         },
    'Utility Bill':        { essential: 'Utility Bill',            nonEssential: 'Utility Bill'            },
    'Healthcare':          { essential: 'Medical Expense',         nonEssential: 'Wellness Spend'          },
    'Insurance':           { essential: 'Insurance Premium',       nonEssential: 'Insurance Premium'       },
    'Outside Food Order':  { essential: 'Family Meal',             nonEssential: 'Food Delivery'           },
    'Fashion':             { essential: 'Essential Clothing',      nonEssential: 'Fashion Splurge'         },
    'Shopping':            { essential: 'Household Necessity',     nonEssential: 'Impulse Purchase'        },
    'Travel':              { essential: 'Essential Travel',        nonEssential: 'Leisure Trip'            },
    'Lifestyle':           { essential: 'Fitness & Wellness',      nonEssential: 'Lifestyle Splurge'       },
    'Electronics':         { essential: 'Work Equipment',          nonEssential: 'Electronics Purchase'    },
    'Entertainment':       { essential: 'Entertainment',           nonEssential: 'Entertainment Splurge'   },
    'Other':               { essential: 'Other Expense',           nonEssential: 'Other Spend'             },
};

function getAutoTitle(categoryName, type) {
    const map = TX_TITLE_MAP[categoryName];
    if (!map) return categoryName;
    return type === 'essential' ? map.essential : map.nonEssential;
}

function updateTxPreview() {
    if (!selectedCategory || !selectedType) return;
    const title = getAutoTitle(selectedCategory.name, selectedType);
    const isEssential = selectedType === 'essential';
    const color = isEssential ? '#059669' : '#f97316';
    const bg = isEssential ? 'rgba(5,150,105,0.1)' : 'rgba(249,115,22,0.1)';
    const badgeBg = isEssential ? 'rgba(5,150,105,0.12)' : 'rgba(249,115,22,0.12)';
    const badgeLabel = isEssential ? 'Essential' : 'Non-Essential';

    document.getElementById('tx-preview-card').innerHTML = `
        <div class="tx-preview-icon" style="background:${bg};color:${color}">
            <i class="fa-solid ${selectedCategory.icon}"></i>
        </div>
        <div>
            <div class="tx-preview-label">${title}</div>
            <div class="tx-preview-sub">${selectedCategory.name}</div>
        </div>
        <span class="tx-preview-badge" style="background:${badgeBg};color:${color}">${badgeLabel}</span>
    `;
}

const ESSENTIAL_MESSAGES = {
    'Groceries':    { icon: 'fa-heart',              msg: 'Nourishing your family is the best investment you can make. A well-fed home is a happy home.' },
    'Utility Bill': { icon: 'fa-house',              msg: 'A comfortable home is a happy home. Keeping the essentials running is always money well spent.' },
    'Healthcare':   { icon: 'fa-hand-holding-heart', msg: 'Health is your greatest wealth. Taking care of yourself and your loved ones always comes first.' },
    'Insurance':    { icon: 'fa-shield-halved',      msg: 'Smart move! Protecting your family\'s future is one of the wisest financial decisions you can make.' },
    'Other':        { icon: 'fa-circle-check',       msg: 'Taking care of essentials keeps your life balanced and your family secure. Well done!' },
};

function getNudgeRecommendation(amount) {
    if (amount < 2000) {
        const gold = investmentTypes.find(t => t.id === 'gold');
        return { scheme: gold.schemes[1], type: gold }; // SBI Gold Fund (no demat needed)
    } else if (amount < 10000) {
        const hybrid = investmentTypes.find(t => t.id === 'hybrid');
        return { scheme: hybrid.schemes[0], type: hybrid }; // SBI Balanced Advantage
    } else {
        const equity = investmentTypes.find(t => t.id === 'equity-funds');
        return { scheme: equity.schemes[0], type: equity }; // SBI Bluechip Fund
    }
}

function calcNudgeProjection(amount, scheme) {
    const rate = (scheme.returns5Y || 12) / 100;
    return Math.round(amount * Math.pow(1 + rate, 5));
}

function applyTypeSelection(type) {
    const essBtn = document.getElementById('tx-type-essential-btn');
    const nonBtn = document.getElementById('tx-type-nonessential-btn');
    essBtn.classList.remove('active-essential', 'active-nonessential');
    nonBtn.classList.remove('active-essential', 'active-nonessential');
    if (type === 'essential') {
        essBtn.classList.add('active-essential');
    } else {
        nonBtn.classList.add('active-nonessential');
    }
}

function openTransactionModal() {
    const modal = document.getElementById('transaction-modal');
    modal.classList.add('open');
    document.getElementById('tx-amount').value = '';
    selectedCategory = null;
    selectedType = null;
    document.querySelectorAll('.tx-cat-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('tx-classify-section').classList.remove('visible');
    document.getElementById('tx-preview-card').innerHTML = '';
    document.getElementById('tx-type-essential-btn').classList.remove('active-essential', 'active-nonessential');
    document.getElementById('tx-type-nonessential-btn').classList.remove('active-essential', 'active-nonessential');
    setTimeout(() => document.getElementById('tx-amount').focus(), 380);
}

function closeTransactionModal() {
    document.getElementById('transaction-modal').classList.remove('open');
}

function openNudge(txData) {
    const rec = getNudgeRecommendation(txData.amount);
    const projected = calcNudgeProjection(txData.amount, rec.scheme);

    document.getElementById('nudge-amount').textContent = formatCurrency(txData.amount);
    document.getElementById('nudge-on').textContent = `on ${txData.category}`;
    document.getElementById('nudge-spend-val').textContent = formatCurrency(txData.amount);
    document.getElementById('nudge-invest-val').textContent = formatCurrency(projected);

    document.getElementById('nudge-fund-card').innerHTML = `
        <div class="nudge-fund-icon" style="background:${rec.type.bgColor};color:${rec.type.color}">${rec.type.icon}</div>
        <div class="nudge-fund-info">
            <p class="nudge-fund-label">Recommended for you</p>
            <p class="nudge-fund-name">${rec.scheme.name}</p>
            <p class="nudge-fund-meta">${rec.scheme.returns5Y}% 5Y returns &bull; ${rec.scheme.risk} risk</p>
        </div>
    `;

    pendingTransaction = txData;
    pendingNudgeRec = rec;
    document.getElementById('nudge-overlay').classList.add('open');
}

function closeNudge() {
    document.getElementById('nudge-overlay').classList.remove('open');
}

function openEssentialAffirm(txData) {
    const info = ESSENTIAL_MESSAGES[txData.category] || ESSENTIAL_MESSAGES['Other'];
    document.getElementById('essential-icon').className = `fa-solid ${info.icon}`;
    document.getElementById('essential-amount').textContent = formatCurrency(txData.amount);
    document.getElementById('essential-category').textContent = `on ${txData.category}`;
    document.getElementById('essential-msg').textContent = info.msg;
    pendingTransaction = txData;
    document.getElementById('essential-overlay').classList.add('open');
}

function closeEssentialAffirm() {
    document.getElementById('essential-overlay').classList.remove('open');
}

function handleTransactionSubmit() {
    const amount = parseFloat(document.getElementById('tx-amount').value);

    let valid = true;

    if (!amount || amount <= 0) {
        const row = document.querySelector('.tx-amount-row');
        row.classList.add('error');
        setTimeout(() => row.classList.remove('error'), 600);
        valid = false;
    }

    if (!selectedCategory) {
        const grid = document.getElementById('tx-category-grid');
        grid.classList.add('error');
        setTimeout(() => grid.classList.remove('error'), 600);
        valid = false;
    }

    if (!selectedType) {
        const classify = document.getElementById('tx-classify-section');
        classify.classList.add('error');
        setTimeout(() => classify.classList.remove('error'), 600);
        valid = false;
    }

    if (!valid) return;

    const txData = {
        amount,
        title: getAutoTitle(selectedCategory.name, selectedType),
        category: selectedCategory.name,
        type: selectedType,
        icon: selectedCategory.icon,
        date: new Date().toISOString().split('T')[0],
    };

    if (txData.type === 'non-essential' && txData.amount >= NUDGE_THRESHOLD) {
        closeTransactionModal();
        openNudge(txData);
    } else if (txData.type === 'essential') {
        closeTransactionModal();
        openEssentialAffirm(txData);
    } else {
        proceedWithSpend(txData);
        closeTransactionModal();
        showPaymentToast(txData.amount, txData.title);
    }
}

function showPaymentToast(amount, title) {
    const existing = document.getElementById('payment-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'payment-toast';
    toast.className = 'payment-toast';
    toast.innerHTML = `
        <div class="payment-toast-icon"><i class="fa-solid fa-circle-check"></i></div>
        <div>
            <div class="payment-toast-title">Payment Successful</div>
            <div class="payment-toast-sub">${formatCurrency(amount)} paid for ${title}</div>
        </div>
    `;
    document.querySelector('.app-container').appendChild(toast);

    // Animate in
    requestAnimationFrame(() => toast.classList.add('show'));

    // Auto dismiss after 3s
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 350);
    }, 3000);
}

function proceedWithSpend(txData) {
    const newId = transactions.length ? Math.max(...transactions.map(t => t.id)) + 1 : 1;
    transactions.unshift({
        id: newId,
        title: txData.title,
        category: txData.category,
        amount: txData.amount,
        date: txData.date,
        type: txData.type,
        icon: txData.icon,
    });
    renderTransactions();
    calculateSummaries();
    updateChartFilter(activeCardFilter);
}

function initTransactionModal() {
    // FAB
    document.getElementById('fab-btn').addEventListener('click', openTransactionModal);

    // Close modal on backdrop or X
    document.getElementById('modal-close').addEventListener('click', closeTransactionModal);
    document.getElementById('transaction-modal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeTransactionModal();
    });

    // Category grid
    const grid = document.getElementById('tx-category-grid');
    TRANSACTION_CATEGORIES.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'tx-cat-btn';
        btn.dataset.name = cat.name;
        btn.innerHTML = `<i class="fa-solid ${cat.icon}"></i><span>${cat.name}</span>`;
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tx-cat-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedCategory = cat;
            // Pre-select the category's default type
            selectedType = cat.type;
            applyTypeSelection(selectedType);
            document.getElementById('tx-classify-section').classList.add('visible');
            updateTxPreview();
        });
        grid.appendChild(btn);
    });

    // Type classification toggle
    document.getElementById('tx-type-essential-btn').addEventListener('click', () => {
        selectedType = 'essential';
        applyTypeSelection('essential');
        updateTxPreview();
    });
    document.getElementById('tx-type-nonessential-btn').addEventListener('click', () => {
        selectedType = 'non-essential';
        applyTypeSelection('non-essential');
        updateTxPreview();
    });

    // Submit
    document.getElementById('tx-submit').addEventListener('click', handleTransactionSubmit);

    // Nudge buttons
    document.getElementById('nudge-invest-btn').addEventListener('click', () => {
        const rec = pendingNudgeRec;
        const savedAmount = pendingTransaction ? pendingTransaction.amount : 0;
        closeNudge();
        pendingTransaction = null;
        pendingNudgeRec = null;

        // Switch to Invest tab and navigate to scheme — investment only recorded on "Invest Now"
        document.querySelector('[data-target="investments-view"]').click();
        setTimeout(() => {
            navStack.push({ view: 'investments-home', title: 'Invest' });
            navStack.push({ view: 'investment-type', title: rec.type.name, typeId: rec.type.id });
            document.getElementById('page-title').textContent = rec.scheme.name;
            investAmount = savedAmount || Math.max(rec.scheme.minAmount, 1000);
            renderSchemeView(rec.scheme, rec.type);
            showInvestmentsSubView('investment-scheme-view');
            updateBackBtnVisibility();
        }, 50);
    });

    document.getElementById('nudge-proceed-btn').addEventListener('click', () => {
        if (pendingTransaction) {
            proceedWithSpend(pendingTransaction);
            pendingTransaction = null;
        }
        closeNudge();
    });

    // Essential affirmation buttons
    document.getElementById('essential-confirm-btn').addEventListener('click', () => {
        if (pendingTransaction) {
            proceedWithSpend(pendingTransaction);
            pendingTransaction = null;
        }
        closeEssentialAffirm();
    });

    document.getElementById('essential-cancel-btn').addEventListener('click', () => {
        pendingTransaction = null;
        closeEssentialAffirm();
    });
}

// ─── Gamification & Streaks ───────────────────────────────────────────────────

const GAME_KEY = 'vws_game';

const BADGES = [
    // Milestone
    { id: 'first-invest',  icon: 'fa-seedling',     color: '#059669', bg: 'rgba(5,150,105,0.15)',   label: 'First Step',       desc: 'Place your very first investment'         },
    // Streak
    { id: 'streak-3',      icon: 'fa-fire',          color: '#f97316', bg: 'rgba(249,115,22,0.15)',  label: '3-Day Streak',     desc: 'Invest 3 days in a row'                   },
    { id: 'streak-7',      icon: 'fa-trophy',        color: '#eab308', bg: 'rgba(234,179,8,0.15)',   label: 'Week Warrior',     desc: 'Invest 7 days in a row'                   },
    { id: 'streak-14',     icon: 'fa-bolt',          color: '#8b5cf6', bg: 'rgba(139,92,246,0.15)',  label: 'Fortnight Force',  desc: 'Invest 14 days in a row'                  },
    { id: 'streak-30',     icon: 'fa-crown',         color: '#f59e0b', bg: 'rgba(245,158,11,0.15)',  label: 'Monthly Master',   desc: 'Invest 30 days in a row'                  },
    // Behaviour (early unlocks — before wealth milestones)
    { id: 'nudge-3',       icon: 'fa-brain',         color: '#ec4899', bg: 'rgba(236,72,153,0.15)',  label: 'Nudge Ninja',      desc: 'Choose Invest Instead 3+ times'           },
    { id: 'multi-type',    icon: 'fa-layer-group',   color: '#14b8a6', bg: 'rgba(20,184,166,0.15)',  label: 'Diversified',      desc: 'Invest across 2+ different fund types'    },
    // Wealth milestones
    { id: 'invested-1k',   icon: 'fa-coins',         color: '#3b82f6', bg: 'rgba(59,130,246,0.15)',  label: '₹1K Club',         desc: 'Total investment crosses ₹1,000'          },
    { id: 'invested-5k',   icon: 'fa-gem',           color: '#8b5cf6', bg: 'rgba(139,92,246,0.15)',  label: '₹5K Milestone',    desc: 'Total investment crosses ₹5,000'          },
    { id: 'invested-10k',  icon: 'fa-rocket',        color: '#06b6d4', bg: 'rgba(6,182,212,0.15)',   label: '₹10K Legend',      desc: 'Total investment crosses ₹10,000'         },
    { id: 'elss-invest',   icon: 'fa-shield-halved', color: '#059669', bg: 'rgba(5,150,105,0.15)',   label: 'Tax Saver',        desc: 'Invest in an ELSS tax-saving fund'        },
    { id: 'gold-invest',   icon: 'fa-star',          color: '#f59e0b', bg: 'rgba(245,158,11,0.15)',  label: 'Gold Buyer',       desc: 'Invest in Gold'                           },
];

const WEALTH_TIPS = [
    { icon: 'fa-seedling',   text: 'A SIP of ₹500/month for 20 years at 12% returns can grow to over ₹50 lakhs. Time is your biggest asset.' },
    { icon: 'fa-brain',      text: 'The average person spends ₹3,000+/month on non-essentials. Redirecting just half could build serious wealth.' },
    { icon: 'fa-chart-line', text: 'Compounding rewards consistency. Small amounts invested regularly beat large lump sums invested late.' },
    { icon: 'fa-mug-hot',    text: 'A daily ₹100 coffee adds up to ₹36,500/year. Invested at 12%, that\'s over ₹2.6 lakhs in 5 years.' },
    { icon: 'fa-trophy',     text: 'Financial freedom isn\'t about earning more — it\'s about keeping more of what you earn and making it grow.' },
    { icon: 'fa-piggy-bank', text: 'Invest before you spend. Pay yourself first — even ₹200/month invested today builds the habit that matters.' },
];

function loadGameData() {
    try {
        const raw = localStorage.getItem(GAME_KEY);
        if (raw) {
            const data = JSON.parse(raw);
            if (!data.investmentLog) data.investmentLog = [];
            // Always derive investDates from the log so streak stays in sync
            data.investDates = data.investmentLog.map(e => e.date);
            return data;
        }
    } catch (e) {}
    return { investDates: [], savedFromSpending: 0, investedAmount: 0, investmentLog: [] };
}

function saveGameData() {
    try { localStorage.setItem(GAME_KEY, JSON.stringify(gameData)); } catch (e) {}
}

let gameData = loadGameData();

function calcStreak(dates) {
    if (!dates.length) return 0;
    const unique = [...new Set(dates)].sort().reverse();
    let streak = 0;
    let cursor = new Date(new Date().toISOString().split('T')[0]);
    for (const d of unique) {
        const day = new Date(d);
        const diff = Math.round((cursor - day) / 86400000);
        if (diff === 0 || diff === 1) { streak++; cursor = day; }
        else break;
    }
    return streak;
}

function getLevelInfo(streak) {
    if (streak >= 30) return { level: 5, name: 'Wealth Master',  icon: 'fa-crown',    color: '#eab308' };
    if (streak >= 14) return { level: 4, name: 'Dedicated',      icon: 'fa-bolt',     color: '#8b5cf6' };
    if (streak >= 7)  return { level: 3, name: 'Consistent',     icon: 'fa-fire',     color: '#f97316' };
    if (streak >= 3)  return { level: 2, name: 'Growing',        icon: 'fa-leaf',     color: '#22c55e' };
    return               { level: 1, name: 'Beginner',       icon: 'fa-seedling', color: '#059669' };
}

function getNextMilestone(streak) {
    return [3, 7, 14, 30, 60].find(m => m > streak) || 90;
}

function totalInvested() {
    return (gameData.investmentLog || []).reduce((s, e) => s + e.amount, 0);
}

function isBadgeEarned(badge) {
    const streak = calcStreak(gameData.investDates);
    const total = totalInvested();
    const log = gameData.investmentLog || [];
    switch (badge.id) {
        case 'first-invest':  return log.length > 0;
        case 'streak-3':      return streak >= 3;
        case 'streak-7':      return streak >= 7;
        case 'streak-14':     return streak >= 14;
        case 'streak-30':     return streak >= 30;
        case 'invested-1k':   return total >= 1000;
        case 'invested-5k':   return total >= 5000;
        case 'invested-10k':  return total >= 10000;
        case 'nudge-3':       return log.filter(e => e.source === 'invest-instead').length >= 3;
        case 'multi-type':    return new Set(log.map(e => e.typeName)).size >= 2;
        case 'elss-invest':   return log.some(e => e.typeName === 'ELSS & Tax Saving');
        case 'gold-invest':   return log.some(e => e.typeName === 'Gold');
        default: return false;
    }
}

function getBadgeProgress(badge) {
    const streak = calcStreak(gameData.investDates);
    const total = totalInvested();
    const log = gameData.investmentLog || [];
    switch (badge.id) {
        case 'streak-3':     return { current: Math.min(streak, 3),   max: 3   };
        case 'streak-7':     return { current: Math.min(streak, 7),   max: 7   };
        case 'streak-14':    return { current: Math.min(streak, 14),  max: 14  };
        case 'streak-30':    return { current: Math.min(streak, 30),  max: 30  };
        case 'invested-1k':  return { current: Math.min(total, 1000),  max: 1000  };
        case 'invested-5k':  return { current: Math.min(total, 5000),  max: 5000  };
        case 'invested-10k': return { current: Math.min(total, 10000), max: 10000 };
        case 'nudge-3':      return { current: Math.min(log.filter(e => e.source === 'invest-instead').length, 3), max: 3 };
        case 'multi-type':   return { current: Math.min(new Set(log.map(e => e.typeName)).size, 2), max: 2 };
        default: return null;
    }
}

// Single unified recorder — both "Invest Instead" and "Order Placed" flow here
function recordInvestment(amount, scheme, type, mode, source) {
    if (!gameData.investmentLog) gameData.investmentLog = [];
    if (!gameData.investDates) gameData.investDates = [];
    const today = new Date().toISOString().split('T')[0];
    gameData.investmentLog.unshift({
        id: Date.now(),
        schemeName: scheme.name,
        typeName: type.name,
        typeColor: type.color,
        typeBgColor: type.bgColor,
        typeIcon: type.icon,
        mode: mode,
        amount: amount,
        date: today,
        source: source, // 'invest-instead' | 'order-placed'
    });
    // Keep investDates derived from the log
    gameData.investDates = gameData.investmentLog.map(e => e.date);
    saveGameData();
    renderGamification();
}

function renderGamification() {
    renderStreakCard();
    renderInvestSummary();
    renderBehaviorInsight();
    renderBadges();
    renderWealthTip();
}

function renderStreakCard() {
    const streak = calcStreak(gameData.investDates);
    const level = getLevelInfo(streak);
    const next = getNextMilestone(streak);
    const progress = streak === 0 ? 0 : Math.min((streak / next) * 100, 100);
    const msg = streak === 0
        ? 'Click "Invest Instead" to start your streak!'
        : streak === 1 ? 'Great start! Keep it going tomorrow.'
        : `${streak} days of choosing wealth over spending!`;

    document.getElementById('streak-card').innerHTML = `
        <div class="streak-card">
            <div class="streak-top">
                <div class="streak-left">
                    <div class="streak-flame" style="background:${level.color}20;color:${level.color}">
                        <i class="fa-solid ${level.icon}"></i>
                    </div>
                    <div class="streak-info">
                        <h4>${streak}-Day Streak</h4>
                        <p>${msg}</p>
                    </div>
                </div>
                <div class="streak-level-badge" style="color:${level.color}">
                    <i class="fa-solid ${level.icon}"></i>
                    Lv.${level.level} ${level.name}
                </div>
            </div>
            <div class="streak-progress-wrap">
                <div class="streak-progress-bar">
                    <div class="streak-progress-fill" style="width:${progress}%;background:${level.color}"></div>
                </div>
                <span class="streak-progress-label" style="color:${level.color}">${streak}/${next} days</span>
            </div>
        </div>
    `;
}

function renderInvestSummary() {
    const amt = totalInvested();
    const fv = (y) => formatCurrency(Math.round(amt * Math.pow(1.12, y)));

    const projectionHTML = amt > 0 ? `
        <div class="invest-projection-card">
            <p class="invest-projection-title">
                <i class="fa-solid fa-chart-line"></i>
                If invested at 12% CAGR
            </p>
            <div class="invest-projection-row">
                <div class="invest-proj-item">
                    <span class="invest-proj-value">${fv(1)}</span>
                    <span class="invest-proj-label">1 Year</span>
                </div>
                <div class="invest-proj-divider"></div>
                <div class="invest-proj-item">
                    <span class="invest-proj-value">${fv(3)}</span>
                    <span class="invest-proj-label">3 Years</span>
                </div>
                <div class="invest-proj-divider"></div>
                <div class="invest-proj-item">
                    <span class="invest-proj-value">${fv(5)}</span>
                    <span class="invest-proj-label">5 Years</span>
                </div>
                <div class="invest-proj-divider"></div>
                <div class="invest-proj-item">
                    <span class="invest-proj-value">${fv(10)}</span>
                    <span class="invest-proj-label">10 Years</span>
                </div>
            </div>
        </div>
    ` : `
        <div class="invest-projection-empty">
            <i class="fa-solid fa-seedling"></i>
            <p>Place an order or choose <strong>Invest Instead</strong> on a non-essential purchase to see your financial future here.</p>
        </div>
    `;

    document.getElementById('invest-summary').innerHTML = `
        <div class="invest-summary-card invest-summary-full">
            <div class="invest-summary-top">
                <div class="invest-summary-icon" style="background:rgba(59,130,246,0.1);color:#3b82f6">
                    <i class="fa-solid fa-arrow-trend-up"></i>
                </div>
                <div>
                    <div class="invest-summary-amount">${formatCurrency(amt)}</div>
                    <div class="invest-summary-label">Total committed to invest</div>
                </div>
            </div>
        </div>
        ${projectionHTML}
    `;
}

function renderBehaviorInsight() {
    const txs = getPeriodTransactions();
    const total = txs.reduce((s, t) => s + t.amount, 0);
    const nonEssential = txs.filter(t => t.type === 'non-essential').reduce((s, t) => s + t.amount, 0);
    const ratio = total > 0 ? nonEssential / total : 0;
    const streak = calcStreak(gameData.investDates);

    let icon, color, bg, title, msg;

    if (ratio > 0.6) {
        icon = 'fa-triangle-exclamation'; color = '#f97316'; bg = 'rgba(249,115,22,0.08)';
        title = 'High non-essential spending';
        msg = `${Math.round(ratio * 100)}% of your spend this period is non-essential. Redirecting even 20% to investments could make a big difference.`;
    } else if (totalInvested() > 0) {
        const inv = totalInvested();
        const projected = Math.round(inv * Math.pow(1.12, 5));
        icon = 'fa-chart-line'; color = '#059669'; bg = 'rgba(5,150,105,0.08)';
        title = 'Your choices are paying off!';
        msg = `The ${formatCurrency(inv)} you've committed to invest could grow to ${formatCurrency(projected)} in 5 years at 12% returns.`;
    } else if (streak >= 3) {
        icon = 'fa-fire'; color = '#f97316'; bg = 'rgba(249,115,22,0.08)';
        title = `${streak}-day streak — keep it up!`;
        msg = 'Consistency is the key to wealth. You\'re building a powerful habit — one smart choice at a time.';
    } else {
        icon = 'fa-lightbulb'; color = '#3b82f6'; bg = 'rgba(59,130,246,0.08)';
        title = 'Start your wealth journey today';
        msg = 'Next time you make a non-essential purchase, tap "Invest Instead" — see how quickly your wealth can grow!';
    }

    document.getElementById('behavior-insight').innerHTML = `
        <div class="behavior-insight-card" style="background:${bg};border-color:${color}25">
            <div class="insight-icon-wrap" style="background:${color}18;color:${color}">
                <i class="fa-solid ${icon}"></i>
            </div>
            <div class="insight-text">
                <h5>${title}</h5>
                <p>${msg}</p>
            </div>
        </div>
    `;
}

function renderBadges() {
    const earned = BADGES.filter(isBadgeEarned);
    const locked = BADGES.filter(b => !isBadgeEarned(b));
    const all = [...earned, ...locked];

    const cards = all.map(b => {
        const isEarned = isBadgeEarned(b);
        const progress = !isEarned ? getBadgeProgress(b) : null;
        const pct = progress ? Math.round((progress.current / progress.max) * 100) : 0;

        const progressHtml = progress ? `
            <div class="badge-progress-wrap">
                <div class="badge-progress-bar">
                    <div class="badge-progress-fill" style="width:${pct}%;background:${b.color}"></div>
                </div>
                <span class="badge-progress-label">${progress.current}/${progress.max}</span>
            </div>
        ` : '';

        return `
            <div class="badge-card ${isEarned ? 'badge-earned' : 'badge-locked'}">
                ${isEarned ? '' : '<div class="badge-lock-overlay"><i class="fa-solid fa-lock"></i></div>'}
                <div class="badge-card-icon" style="${isEarned ? `background:${b.bg};color:${b.color};box-shadow:0 4px 16px ${b.bg}` : ''}">
                    <i class="fa-solid ${b.icon}"></i>
                </div>
                <div class="badge-card-body">
                    <div class="badge-card-label" style="${isEarned ? `color:${b.color}` : ''}">${b.label}</div>
                    <div class="badge-card-desc">${b.desc}</div>
                    ${progressHtml}
                </div>
                ${isEarned ? '<div class="badge-earned-check"><i class="fa-solid fa-circle-check"></i></div>' : ''}
            </div>
        `;
    }).join('');

    document.getElementById('badges-section').innerHTML = `
        <div class="badges-wrap">
            <div class="badges-header">
                <p class="badges-title">Achievements</p>
                <span class="badges-count">${earned.length} / ${BADGES.length}</span>
            </div>
            <div class="badges-grid">${cards}</div>
        </div>
    `;
}

function renderInvestmentHistory() {
    const list = document.getElementById('investment-history-list');
    if (!list) return;
    const log = gameData.investmentLog || [];

    if (!log.length) {
        list.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-seedling"></i>
                <p>No investments placed yet.</p>
                <p style="font-size:12px;margin-top:4px;">Go to the Invest tab and place your first order.</p>
            </div>`;
        return;
    }

    list.innerHTML = log.map(entry => {
        const sourceLabel = entry.source === 'invest-instead' ? 'Invest Instead' : 'Order Placed';
        const sourceBg    = entry.source === 'invest-instead' ? 'rgba(59,130,246,0.1)' : 'rgba(5,150,105,0.1)';
        const sourceColor = entry.source === 'invest-instead' ? '#3b82f6' : '#059669';
        return `
        <div class="inv-history-item">
            <div class="inv-history-icon" style="background:${entry.typeBgColor};color:${entry.typeColor}">
                ${entry.typeIcon}
            </div>
            <div class="inv-history-details">
                <p class="inv-history-name">${entry.schemeName}</p>
                <p class="inv-history-meta">${entry.typeName} &bull; ${entry.mode === 'sip' ? 'SIP / month' : 'One-Time'}</p>
                <span class="inv-history-source" style="background:${sourceBg};color:${sourceColor}">${sourceLabel}</span>
            </div>
            <div class="inv-history-right">
                <p class="inv-history-amount">${formatCurrency(entry.amount)}</p>
                <p class="inv-history-date">${formatDate(entry.date)}</p>
            </div>
        </div>
    `}).join('');
}

function initHistoryToggle() {
    const btnTx = document.getElementById('toggle-transactions');
    const btnInv = document.getElementById('toggle-investments');
    const spendContent = document.getElementById('spending-history-content');
    const invContent = document.getElementById('investment-history-content');

    btnTx.addEventListener('click', () => {
        btnTx.classList.add('active');
        btnInv.classList.remove('active');
        spendContent.style.display = 'block';
        invContent.style.display = 'none';
    });

    btnInv.addEventListener('click', () => {
        btnInv.classList.add('active');
        btnTx.classList.remove('active');
        invContent.style.display = 'block';
        spendContent.style.display = 'none';
        renderInvestmentHistory();
    });
}

function renderWealthTip() {
    const tip = WEALTH_TIPS[new Date().getDate() % WEALTH_TIPS.length];
    document.getElementById('wealth-tip').innerHTML = `
        <div class="wealth-tip-card">
            <div class="tip-icon"><i class="fa-solid ${tip.icon}"></i></div>
            <div class="tip-content">
                <h5>Wealth Tip</h5>
                <p>${tip.text}</p>
            </div>
        </div>
    `;
}

// ─── Live Investment Data (mfapi.in) ──────────────────────────────────────────

let liveDataLoaded = false;

async function loadLiveInvestmentData() {
    if (liveDataLoaded) return;

    const fetchable = [];
    investmentTypes.forEach(type => {
        if (type.id === 'fixed-deposits') return; // FDs have no AMFI codes
        type.schemes.forEach(scheme => fetchable.push(scheme));
    });

    await Promise.allSettled(fetchable.map(scheme => fetchSchemeReturns(scheme)));
    liveDataLoaded = true;
    // Only re-render if user is still on the investments home view, not a scheme/type detail
    const homeVisible = document.getElementById('investments-home-view').style.display !== 'none';
    if (homeVisible) renderInvestmentsHome();
}

async function fetchSchemeReturns(scheme) {
    try {
        const query = encodeURIComponent(scheme.name.replace(/[()]/g, ''));
        const searchRes = await fetch(`https://api.mfapi.in/mf/search?q=${query}`);
        if (!searchRes.ok) return;
        const results = await searchRes.json();
        if (!results.length) return;

        // Prefer Direct Growth plan
        const match = results.find(r =>
            r.schemeName.toLowerCase().includes('direct') &&
            r.schemeName.toLowerCase().includes('growth')
        ) || results[0];

        const navRes = await fetch(`https://api.mfapi.in/mf/${match.schemeCode}`);
        if (!navRes.ok) return;
        const navData = await navRes.json();
        if (!navData.data?.length) return;

        scheme.nav = parseFloat(parseFloat(navData.data[0].nav).toFixed(2));

        const r1 = calcAnnualizedReturn(navData.data, 1);
        const r3 = calcAnnualizedReturn(navData.data, 3);
        const r5 = calcAnnualizedReturn(navData.data, 5);
        if (r1 !== null) scheme.returns1Y = r1;
        if (r3 !== null) scheme.returns3Y = r3;
        if (r5 !== null) scheme.returns5Y = r5;
    } catch (e) {
        // keep static fallback values on any error
    }
}

function calcAnnualizedReturn(navHistory, years) {
    const currentNav = parseFloat(navHistory[0].nav);
    const cutoff = new Date();
    cutoff.setFullYear(cutoff.getFullYear() - years);

    const parseNavDate = (s) => {
        const [d, m, y] = s.split('-').map(Number);
        return new Date(y, m - 1, d);
    };

    const past = navHistory.find(e => parseNavDate(e.date) <= cutoff);
    if (!past) return null;
    const pastNav = parseFloat(past.nav);
    if (!pastNav) return null;

    return parseFloat(((Math.pow(currentNav / pastNav, 1 / years) - 1) * 100).toFixed(1));
}

// ─── Recommendations / Insights Page ──────────────────────────────────────────

// Map spend categories to a recommended SBI fund type + scheme
const CAT_FUND_MAP = {
    'Fashion':     { typeId: 'equity-funds', schemeId: 'eq-1',   rationale: 'Channel fashion spend into long-term equity growth.' },
    'Lifestyle':   { typeId: 'equity-funds', schemeId: 'eq-6',   rationale: 'Replace lifestyle spend with a flexicap SIP.' },
    'Shopping':    { typeId: 'index-etf',    schemeId: 'idx-7',  rationale: 'Low-cost index fund beats impulse shopping.' },
    'Outside Food Order': { typeId: 'debt',  schemeId: 'db-1',   rationale: 'Park daily food savings in a liquid fund.' },
    'Travel':      { typeId: 'equity-funds', schemeId: 'eq-5',   rationale: 'Invest travel funds in focused equity for bigger future trips.' },
    'Electronics': { typeId: 'index-etf',    schemeId: 'idx-1',  rationale: 'Instead of electronics spend, own a slice of top 50 companies.' },
    'Entertainment': { typeId: 'hybrid',     schemeId: 'hy-1',   rationale: 'Balance fun spend with a balanced advantage fund.' },
};

// Rotating story pool for recurring spend cards (ensures each card gets a unique story)
const RECURRING_STORIES = [
    {
        quote: `"Do not save what is left after spending, but spend what is left after saving."`,
        person: 'Warren Buffett',
        role: 'CEO, Berkshire Hathaway · Net worth $130B',
        avatar: 'fa-user-tie',
        context: `Buffett started investing at age 11 with pocket money. He avoided lifestyle creep his entire life — still living in the same $31,500 house he bought in 1958. That discipline turned small, recurring savings into the world's greatest fortune.`,
    },
    {
        quote: `"The best thing a human being can do is to help another human being know more. Spend less, invest in knowledge and assets."`,
        person: 'Charlie Munger',
        role: 'Vice Chairman, Berkshire Hathaway · Buffett\'s lifelong partner',
        avatar: 'fa-user-tie',
        context: `Munger accumulated most of his $2.6B net worth after age 65 — proof that consistency beats speed. He famously said compound interest is the eighth wonder of the world, but only if you don't interrupt it with unnecessary spending.`,
    },
    {
        quote: `"I have not seen a man who earns a lot and still stays broke — until I saw those who spent first and invested last."`,
        person: 'Vijay Kedia',
        role: 'Ace Investor · Turned ₹1L into ₹1000 Cr over 30 years',
        avatar: 'fa-user-tie',
        context: `Vijay Kedia grew up in a modest Kolkata trading family. By curbing lifestyle expenses and patiently holding quality stocks for decades, he built a portfolio that multiplied 10,000x. His rule: recurring expenses are the enemy of wealth.`,
    },
];

function sipFutureValue(monthly, years, rate = 0.12) {
    const r = rate / 12;
    const n = years * 12;
    return Math.round(monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r));
}

function analyzeSpending() {
    const recs = [];
    const now = new Date();
    const daysAgo = (n) => new Date(now.getTime() - n * 86400000);

    const last365 = transactions.filter(tx => new Date(tx.date) >= daysAgo(365));
    const allNonEss = transactions.filter(t => t.type === 'non-essential');

    // ── 1a. Monthly recurring — category appears in 3+ distinct calendar months ──
    const catMonthMap = {};
    allNonEss.forEach(tx => {
        const monthKey = tx.date.substring(0, 7); // "YYYY-MM"
        if (!catMonthMap[tx.category]) catMonthMap[tx.category] = {};
        if (!catMonthMap[tx.category][monthKey]) catMonthMap[tx.category][monthKey] = 0;
        catMonthMap[tx.category][monthKey] += tx.amount;
    });

    let monthlyRecIdx = 0;
    Object.entries(catMonthMap)
        .map(([cat, months]) => {
            const monthCount = Object.keys(months).length;
            const totalAmt = Object.values(months).reduce((s, v) => s + v, 0);
            const monthlyAvg = Math.round(totalAmt / monthCount);
            return { cat, monthCount, monthlyAvg };
        })
        .filter(({ monthCount }) => monthCount >= 3)
        .sort((a, b) => b.monthlyAvg - a.monthlyAvg)
        .forEach(({ cat, monthCount, monthlyAvg }) => {
            const fv5 = sipFutureValue(monthlyAvg, 5);
            const fundMap = CAT_FUND_MAP[cat];
            let fundSuggestion = null;
            if (fundMap) {
                const fType = investmentTypes.find(t => t.id === fundMap.typeId);
                const fScheme = fType?.schemes.find(s => s.id === fundMap.schemeId);
                if (fType && fScheme) fundSuggestion = { type: fType, scheme: fScheme, rationale: fundMap.rationale };
            }
            recs.push({
                type: 'recurring-monthly',
                priority: 'high',
                icon: 'fa-calendar-xmark',
                color: '#f97316',
                bg: 'rgba(249,115,22,0.08)',
                title: `Monthly ${cat} Habit`,
                detail: `You spend on ${cat.toLowerCase()} every month — averaging ${formatCurrency(monthlyAvg)}/month across ${monthCount} months. That's ${formatCurrency(monthlyAvg * 12)}/year on just this category.`,
                insight: `Redirecting ${formatCurrency(monthlyAvg)}/month to a SIP for 5 years could grow to ${formatCurrency(fv5)} at 12% CAGR.`,
                insightBg: 'rgba(249,115,22,0.06)',
                story: RECURRING_STORIES[monthlyRecIdx % RECURRING_STORIES.length],
                cta: 'Start a SIP',
                ctaColor: '#f97316',
                ctaBg: 'rgba(249,115,22,0.1)',
                ctaNav: 'investments-view',
                fundSuggestion,
            });
            monthlyRecIdx++;
        });

    // ── 1b. Yearly recurring — same title appears in 2+ distinct calendar years ──
    const titleYearMap = {};
    allNonEss.forEach(tx => {
        const year = tx.date.substring(0, 4);
        if (!titleYearMap[tx.title]) titleYearMap[tx.title] = { category: tx.category, icon: tx.icon, years: {} };
        if (!titleYearMap[tx.title].years[year]) titleYearMap[tx.title].years[year] = 0;
        titleYearMap[tx.title].years[year] += tx.amount;
    });

    Object.entries(titleYearMap)
        .map(([title, data]) => {
            const yearCount = Object.keys(data.years).length;
            const totalAmt = Object.values(data.years).reduce((s, v) => s + v, 0);
            const yearlyAvg = Math.round(totalAmt / yearCount);
            return { title, category: data.category, yearCount, yearlyAvg };
        })
        .filter(({ yearCount }) => yearCount >= 2)
        .sort((a, b) => b.yearlyAvg - a.yearlyAvg)
        .forEach(({ title, category, yearCount, yearlyAvg }) => {
            const grow10y = Math.round(yearlyAvg * Math.pow(1.12, 10));
            const fundMap = CAT_FUND_MAP[category];
            let fundSuggestion = null;
            if (fundMap) {
                const fType = investmentTypes.find(t => t.id === fundMap.typeId);
                const fScheme = fType?.schemes.find(s => s.id === fundMap.schemeId);
                if (fType && fScheme) fundSuggestion = { type: fType, scheme: fScheme, rationale: fundMap.rationale };
            }
            recs.push({
                type: 'recurring-yearly',
                priority: 'medium',
                icon: 'fa-rotate',
                color: '#7c3aed',
                bg: 'rgba(124,58,237,0.08)',
                title: `Yearly ${title} Pattern`,
                detail: `You've spent on ${title} for ${yearCount} years in a row, averaging ${formatCurrency(yearlyAvg)}/year. This is a predictable annual expense worth planning around.`,
                insight: `Investing ${formatCurrency(yearlyAvg)} each year at 12% CAGR could grow to ${formatCurrency(grow10y)} in 10 years instead.`,
                insightBg: 'rgba(124,58,237,0.06)',
                story: {
                    quote: `"An investment in knowledge pays the best interest. But spending the same amount on habits that don't grow you? That's the real cost."`,
                    person: 'Benjamin Franklin',
                    role: 'Founding Father · America\'s first self-made millionaire',
                    avatar: 'fa-user-tie',
                    context: `Franklin tracked every penny he spent, keeping meticulous journals of his finances from age 20. He believed predictable annual expenses were the biggest drain on long-term wealth — because they compound in reverse.`,
                },
                cta: 'Invest Instead',
                ctaColor: '#7c3aed',
                ctaBg: 'rgba(124,58,237,0.1)',
                ctaNav: 'investments-view',
                fundSuggestion,
            });
        });

    // ── 2. Top non-essential category (all time) ──
    const catTotals = {};
    allNonEss.forEach(tx => { catTotals[tx.category] = (catTotals[tx.category] || 0) + tx.amount; });
    const sorted = Object.entries(catTotals).sort((a, b) => b[1] - a[1]);
    if (sorted.length) {
        const [topCat, topTotal] = sorted[0];
        const grow5y = Math.round(topTotal * Math.pow(1.12, 5));
        recs.push({
            type: 'top-splurge',
            priority: 'medium',
            icon: 'fa-chart-pie',
            color: '#7c3aed',
            bg: 'rgba(124,58,237,0.08)',
            title: `${topCat} is Your Biggest Splurge`,
            detail: `${formatCurrency(topTotal)} spent on ${topCat.toLowerCase()} across all transactions — your single largest non-essential category.`,
            insight: `If this amount were invested today at 12% CAGR, it could become ${formatCurrency(grow5y)} in 5 years.`,
            insightBg: 'rgba(124,58,237,0.06)',
            story: {
                quote: `"I'm as frugal now as I was when I started. The money I don't spend on myself goes into building something bigger."`,
                person: 'Azim Premji',
                role: "Founder, Wipro · India's most generous billionaire",
                avatar: 'fa-user-tie',
                context: `Despite being worth over $8 billion, Premji flies economy class, avoids luxury hotels, and has donated over ₹1.45 lakh crore to charity. He believes personal frugality is the foundation of entrepreneurial scale.`,
            },
            cta: 'Invest Now',
            ctaColor: '#7c3aed',
            ctaBg: 'rgba(124,58,237,0.1)',
            ctaNav: 'investments-view',
            chips: ['#1 Non-Essential'],
        });
    }

    // ── 3. Non-essential ratio alert (last 12 months) ──
    const total1y = last365.reduce((s, t) => s + t.amount, 0);
    const nonEss1y = last365.filter(t => t.type === 'non-essential').reduce((s, t) => s + t.amount, 0);
    if (total1y > 0) {
        const ratio = nonEss1y / total1y;
        if (ratio > 0.35) {
            const redirectable = Math.round(nonEss1y * 0.2);
            const fv5 = sipFutureValue(Math.round(redirectable / 12), 5);
            recs.push({
                type: 'ratio',
                priority: ratio > 0.55 ? 'high' : 'medium',
                icon: 'fa-triangle-exclamation',
                color: '#dc2626',
                bg: 'rgba(220,38,38,0.08)',
                title: `${Math.round(ratio * 100)}% of Spend is Non-Essential`,
                detail: `In the last 12 months, ${formatCurrency(nonEss1y)} of your ${formatCurrency(total1y)} total spend was non-essential. Healthy benchmark is under 35%.`,
                insight: `Redirecting just 20% (${formatCurrency(redirectable)}) to SIPs over 5 years could grow to ${formatCurrency(fv5)}.`,
                insightBg: 'rgba(220,38,38,0.06)',
                story: {
                    quote: `"I started with ₹5,000. I didn't earn more — I just chose not to spend what I had."`,
                    person: 'Rakesh Jhunjhunwala',
                    role: 'The "Warren Buffett of India" · Built ₹45,000 Cr from ₹5,000',
                    avatar: 'fa-user-tie',
                    context: `In 1985, Rakesh Jhunjhunwala began his journey with just ₹5,000 while living frugally as a student. He resisted every temptation to spend on non-essentials. That discipline — not luck — turned ₹5,000 into one of India's greatest investing fortunes.`,
                },
                cta: null,
                chips: [`${Math.round(ratio * 100)}% non-essential`],
            });
        }
    }

    // ── 4. Investment gap ──
    const invested = totalInvested();
    const totalNonEssAll = allNonEss.reduce((s, t) => s + t.amount, 0);
    if (totalNonEssAll > 0 && invested < totalNonEssAll * 0.15) {
        recs.push({
            type: 'gap',
            priority: 'high',
            icon: 'fa-scale-unbalanced',
            color: '#dc2626',
            bg: 'rgba(220,38,38,0.08)',
            title: 'Investment Gap Alert',
            detail: `You've spent ${formatCurrency(totalNonEssAll)} on non-essentials, but only invested ${formatCurrency(invested)} so far. That's a significant gap.`,
            insight: `Even starting a small SIP today builds the habit that compounds into wealth.`,
            insightBg: 'rgba(220,38,38,0.06)',
            story: {
                quote: `"It's not about how much money you make, but how much money you keep, how hard it works for you, and how many generations you keep it for."`,
                person: 'Robert Kiyosaki',
                role: 'Author, Rich Dad Poor Dad · Sold 32M+ copies worldwide',
                avatar: 'fa-user-tie',
                context: `Kiyosaki's "Rich Dad" lesson: the poor and middle class spend first, then try to save. The wealthy invest first and live on the rest. Every rupee you don't invest is a rupee that never gets to work for you.`,
            },
            cta: 'Start Investing',
            ctaColor: '#3b82f6',
            ctaBg: 'rgba(59,130,246,0.1)',
            ctaNav: 'investments-view',
            chips: invested > 0 ? [`Only ${Math.round((invested / totalNonEssAll) * 100)}% invested vs spent`] : ['₹0 invested so far'],
        });
    }

    // ── 5. Positive reinforcement ──
    if (invested > 0) {
        const grow5y = Math.round(invested * Math.pow(1.12, 5));
        const grow10y = Math.round(invested * Math.pow(1.12, 10));
        recs.push({
            type: 'positive',
            priority: 'positive',
            icon: 'fa-trophy',
            color: '#059669',
            bg: 'rgba(5,150,105,0.08)',
            title: 'Great Start — Keep It Going!',
            detail: `You've committed ${formatCurrency(invested)} to investments. Every rupee you invest is a rupee working for you 24/7.`,
            insight: `At 12% CAGR: ${formatCurrency(grow5y)} in 5 years · ${formatCurrency(grow10y)} in 10 years.`,
            insightBg: 'rgba(5,150,105,0.06)',
            story: {
                quote: `"Patience is the most important quality in investing. Buy right, sit tight — the market will reward you."`,
                person: 'Radhakishan Damani',
                role: 'Founder, D-Mart · Built ₹2.3 lakh Cr empire from scratch',
                avatar: 'fa-user-tie',
                context: `Damani lived a famously frugal life as a stockbroker, reinvesting every rupee of profit. He avoided parties, luxury, and short-term thinking. When he finally launched D-Mart in 2002, decades of patient wealth-building funded it. Today, he is one of India's wealthiest individuals — all because he let compounding do its job.`,
            },
            cta: 'Add More',
            ctaColor: '#059669',
            ctaBg: 'rgba(5,150,105,0.1)',
            ctaNav: 'investments-view',
            chips: [],
        });
    }

    // ── 6. Monthly savings opportunity (if current-month non-ess is high) ──
    const currentMonth = now.toISOString().substring(0, 7);
    const last30 = transactions.filter(tx => tx.date.substring(0, 7) === currentMonth);
    const nonEssLast30 = last30.filter(t => t.type === 'non-essential').reduce((s, t) => s + t.amount, 0);
    if (nonEssLast30 >= 2000) {
        const sipAmt = Math.round(nonEssLast30 * 0.3);
        const fv10 = sipFutureValue(sipAmt, 10);
        recs.push({
            type: 'monthly-sip',
            priority: 'info',
            icon: 'fa-calendar-check',
            color: '#3b82f6',
            bg: 'rgba(59,130,246,0.08)',
            title: 'This Month\'s SIP Opportunity',
            detail: `You spent ${formatCurrency(nonEssLast30)} on non-essentials this month. Just 30% of that as a monthly SIP could transform your future.`,
            insight: `A SIP of ${formatCurrency(sipAmt)}/month for 10 years → ${formatCurrency(fv10)} at 12% CAGR.`,
            insightBg: 'rgba(59,130,246,0.06)',
            story: {
                quote: `"The stock market is a device for transferring money from the impatient to the patient."`,
                person: 'N. R. Narayana Murthy',
                role: 'Co-founder, Infosys · Built $20B empire from ₹10,000',
                avatar: 'fa-user-tie',
                context: `Murthy borrowed ₹10,000 from his wife Sudha to start Infosys in 1981. He and his co-founders went without salaries for years, reinvesting every rupee they could. A SIP started today is your own version of that founding investment.`,
            },
            cta: 'Start SIP',
            ctaColor: '#3b82f6',
            ctaBg: 'rgba(59,130,246,0.1)',
            ctaNav: 'investments-view',
            chips: [`${formatCurrency(sipAmt)}/mo recommended`],
        });
    }

    return recs;
}

function calcFinancialHealthScore() {
    const allTx = transactions;
    const total = allTx.reduce((s, t) => s + t.amount, 0);
    const nonEss = allTx.filter(t => t.type === 'non-essential').reduce((s, t) => s + t.amount, 0);
    const invested = totalInvested();
    const streak = calcStreak(gameData.investDates);

    let score = 50; // base

    // Ratio penalty/bonus
    const ratio = total > 0 ? nonEss / total : 0;
    if (ratio < 0.3) score += 20;
    else if (ratio < 0.5) score += 10;
    else score -= 10;

    // Investment bonus
    if (invested > 0) score += 10;
    if (invested > 5000) score += 5;
    if (invested > 20000) score += 5;

    // Streak bonus
    if (streak >= 3) score += 5;
    if (streak >= 7) score += 5;

    return Math.max(0, Math.min(100, score));
}

function getScoreLabel(score) {
    if (score >= 80) return { label: 'Excellent', color: '#059669' };
    if (score >= 60) return { label: 'Good', color: '#3b82f6' };
    if (score >= 40) return { label: 'Fair', color: '#f97316' };
    return { label: 'Needs Work', color: '#dc2626' };
}

let _currentRecs = [];

function navigateToRecScheme(idx) {
    const rec = _currentRecs[idx];
    if (!rec) return;
    document.querySelector('[data-target="investments-view"]').click();
    document.querySelector('.app-content').scrollTop = 0;
    if (rec.fundSuggestion) {
        const { type, scheme } = rec.fundSuggestion;
        setTimeout(() => {
            navStack.push({ view: 'investments-home', title: 'Invest' });
            navStack.push({ view: 'investment-type', title: type.name, typeId: type.id });
            document.getElementById('page-title').textContent = scheme.name;
            renderSchemeView(scheme, type);
            showInvestmentsSubView('investment-scheme-view');
            updateBackBtnVisibility();
        }, 50);
    }
}

function renderRecommendations() {
    const container = document.getElementById('recommendations-container');
    const recs = analyzeSpending();

    const priorityOrder = { high: 0, medium: 1, positive: 2, info: 3 };
    recs.sort((a, b) => (priorityOrder[a.priority] ?? 9) - (priorityOrder[b.priority] ?? 9));
    _currentRecs = recs;

    const recCards = recs.map((rec, idx) => {
        const chips = (rec.chips || []).map(c => `<span class="rec-recurring-chip">${c}</span>`).join('');

        const detailParts = rec.detail.split(/\. (.+)/s);
        const detailHtml = detailParts.length > 1
            ? `<span class="rec-detail-highlight">${detailParts[0]}.</span> ${detailParts[1]}`
            : `<span class="rec-detail-highlight">${rec.detail}</span>`;

        let fundHtml = '';
        if (rec.fundSuggestion) {
            const { type, scheme, rationale } = rec.fundSuggestion;
            fundHtml = `
                <div class="rec-fund-suggestion" style="background:${type.bgColor}">
                    <div class="rec-fund-icon" style="background:${type.bgColor};color:${type.color}">${type.icon}</div>
                    <div>
                        <div class="rec-fund-name">${scheme.name}</div>
                        <div class="rec-fund-return">${scheme.returns5Y}% 5Y returns · ${scheme.risk} risk</div>
                        <div style="font-size:11px;color:var(--text-muted);margin-top:2px">${rationale}</div>
                    </div>
                </div>
            `;
        }

        const ctaHtml = rec.cta ? `
            <button class="rec-card-cta" style="color:${rec.ctaColor};background:${rec.ctaBg}"
                onclick="navigateToRecScheme(${idx})">
                <i class="fa-solid fa-arrow-right"></i> ${rec.cta}
            </button>
        ` : '';

        const storyHtml = rec.story ? `
            <div class="rec-story">
                <div class="rec-story-quote">${rec.story.quote}</div>
                <div class="rec-story-person-row">
                    <div class="rec-story-avatar">
                        <i class="fa-solid ${rec.story.avatar}"></i>
                    </div>
                    <div>
                        <div class="rec-story-name">${rec.story.person}</div>
                        <div class="rec-story-role">${rec.story.role}</div>
                    </div>
                </div>
                <p class="rec-story-context">${rec.story.context}</p>
            </div>
        ` : '';

        return `
            <div class="rec-card">
                <p class="rec-card-detail">${detailHtml}</p>
                <div class="rec-card-insight" style="background:${rec.insightBg};border-left:3px solid ${rec.color}">
                    ${rec.insight}
                </div>
                ${fundHtml}
                ${storyHtml}
                ${ctaHtml}
            </div>
        `;
    }).join('');

    const emptyHtml = recs.length === 0 ? `
        <div class="rec-empty">
            <i class="fa-solid fa-check-circle" style="color:var(--success)"></i>
            <p>Your finances look great! No concerns detected. Keep investing and building your wealth.</p>
        </div>
    ` : '';

    container.innerHTML = `
        <div style="padding: 0 16px 100px">
            <div class="rec-page-header">
                <div class="rec-page-title">Recommendations</div>
                <div class="rec-page-subtitle">Personalized insights based on your spend patterns</div>
            </div>

            ${recs.length > 0 ? `<div class="rec-section-label">${recs.length} Recommendation${recs.length > 1 ? 's' : ''} for You</div>` : ''}
            ${recCards}
            ${emptyHtml}
        </div>
    `;
}
