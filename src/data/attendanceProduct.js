/**
 * Single source of truth for the flagship product:
 * AI Facial Recognition Attendance System.
 * Pricing, market comparison, demo-video slots and audiences all live here.
 */

export const productRoute = "/products/facial-recognition-attendance-system";
export const productName = "AI Facial Recognition Attendance System";

/* ---------- Pricing ---------- */
export const pricing = {
  perUserPerYear: 70, // ₹ per student/employee per YEAR
  market: { perUserPerMonthMin: 70, perUserPerMonthMax: 100 }, // ₹ per MONTH
};

export const marketPerYear = {
  min: pricing.market.perUserPerMonthMin * 12, // 840
  max: pricing.market.perUserPerMonthMax * 12, // 1200
};

/** Percentage saved vs the market range (e.g. 92% to 94%) */
export const savingsPercent = {
  min: Math.round((1 - pricing.perUserPerYear / marketPerYear.min) * 100),
  max: Math.round((1 - pricing.perUserPerYear / marketPerYear.max) * 100),
};

/** Total Annual Cost = people × ₹70/year, plus the market equivalent */
export const calculateCosts = (people) => {
  const n = Math.max(0, Math.floor(Number(people) || 0));
  const ours = n * pricing.perUserPerYear;
  const marketMin = n * marketPerYear.min;
  const marketMax = n * marketPerYear.max;
  return { people: n, ours, marketMin, marketMax, saveMin: marketMin - ours, saveMax: marketMax - ours };
};

export const formatINR = (amount) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(amount);

/** Example sizes for the transparent pricing table */
export const exampleSizes = [
  { label: "Small school / office", people: 100 },
  { label: "Mid-size school", people: 500 },
  { label: "College / factory", people: 1000 },
  { label: "University / enterprise", people: 5000 },
];

/* ---------- Demo videos ----------
 * Paste a YouTube / Vimeo link or a direct .mp4/.webm URL (e.g. "/videos/promo.mp4").
 * Leave null to show a "coming soon" placeholder frame.
 */
export const productVideos = {
  promo: { url: null, title: "Vultus Go attendance: 60-second overview", poster: null },
  demo: { url: null, title: "Vultus Go attendance: full walkthrough", poster: null },
};

/* ---------- Audiences ---------- */
export const audiences = [
  {
    id: "education",
    icon: "school",
    title: "Schools & Colleges",
    desc: "Mark student and staff attendance in seconds at the gate or classroom, with no registers.",
    points: ["Student & staff attendance", "Instant parent notifications", "Class-wise reports"],
  },
  {
    id: "corporate",
    icon: "office",
    title: "Corporate Offices & Enterprises",
    desc: "Contactless check-in and check-out that removes buddy punching and manual HR work.",
    points: ["Employee check-in / out", "Shift & late-arrival tracking", "Payroll-ready exports"],
  },
  {
    id: "workforce",
    icon: "workforce",
    title: "Hospitals, Factories & Workplaces",
    desc: "Built for high-density workforces and multi-shift operations where speed matters.",
    points: ["Multi-shift rosters", "Multi-camera, multi-gate", "Works with low connectivity"],
  },
];

/* ---------- Product highlights (video showcase + featured section) ---------- */
export const productHighlights = [
  { id: "price", icon: "price", title: "₹70 per person / year", desc: "Predictable annual pricing, with no per-month billing." },
  { id: "liveness", icon: "shield", title: "Real-time logging & liveness", desc: "Instant attendance marking with anti-spoofing to block photos and screens." },
  { id: "alerts", icon: "bell", title: "Automated alerts", desc: "SMS / WhatsApp notifications to parents or HR as soon as attendance is marked." },
  { id: "offline", icon: "wifi", title: "Offline & low-hardware", desc: "Keeps working without internet and runs on modest, affordable hardware." },
];
