/**
 * Featured projects: used by the Home "Development Studio" carousel and by the
 * Web / Mobile service pages.
 *
 * !! MOCK DATA !!  Replace each entry with a real project before launch:
 *   - heroImage: path/URL of a real screenshot (e.g. "/Images/projects/hms.webp").
 *                Leave null to render the built-in browser/phone mockup.
 *   - liveUrl:   the real live URL (currently example.com placeholders).
 *   - highlight: a verifiable outcome. Do not publish numbers you can't back up.
 *
 * type: "web" | "mobile"  (drives badge + which service page shows it)
 */
export const featuredProjects = [
  {
    id: 1,
    type: "web",
    title: "Hospital Management Portal",
    category: "Healthcare",
    heroImage: null,
    problemSolved: "Paper-based patient, billing and staff records slowed down front-desk and ward operations.",
    mainFeatures: ["Patient records & OPD billing", "Role-based staff access", "Reports & daily summaries"],
    highlight: { value: "Role-based", label: "Access for every staff level" },
    stack: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
  },
  {
    id: 2,
    type: "web",
    title: "Regional Commerce Storefront",
    category: "E-Commerce",
    heroImage: null,
    problemSolved: "Local producers had no reliable way to sell specialty products beyond their own town.",
    mainFeatures: ["Catalog & cart", "Order tracking", "Admin inventory dashboard"],
    highlight: { value: "End-to-end", label: "Catalog to delivery workflow" },
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    liveUrl: "https://example.com",
  },
  {
    id: 3,
    type: "web",
    title: "Operations Analytics Dashboard",
    category: "SaaS",
    heroImage: null,
    problemSolved: "Teams were stitching reports together by hand from several disconnected data sources.",
    mainFeatures: ["Live KPI dashboards", "Scheduled exports", "Multi-tenant workspaces"],
    highlight: { value: "Multi-tenant", label: "Separate workspace per client" },
    stack: ["React", "FastAPI", "PostgreSQL"],
    liveUrl: "https://example.com",
  },
  {
    id: 4,
    type: "mobile",
    title: "Field Attendance App",
    category: "Workforce",
    heroImage: null,
    problemSolved: "Distributed teams needed verifiable check-ins without depending on constant connectivity.",
    mainFeatures: ["Geo-fenced check-in", "Offline-first sync", "Manager approvals"],
    highlight: { value: "Offline-first", label: "Syncs when connectivity returns" },
    stack: ["Flutter", "Firebase"],
    liveUrl: "https://example.com",
  },
  {
    id: 5,
    type: "mobile",
    title: "Learning Companion App",
    category: "EdTech",
    heroImage: null,
    problemSolved: "Students in low-bandwidth areas struggled to access lessons and track progress.",
    mainFeatures: ["Downloadable lessons", "Progress tracking", "Push reminders"],
    highlight: { value: "Low-bandwidth", label: "Designed for slow networks" },
    stack: ["React Native", "Node.js"],
    liveUrl: "https://example.com",
  },
  {
    id: 6,
    type: "mobile",
    title: "Clinic Booking App",
    category: "Healthcare",
    heroImage: null,
    problemSolved: "Patients queued in person just to book or reschedule appointments.",
    mainFeatures: ["Slot booking & reminders", "Doctor availability", "Secure patient profile"],
    highlight: { value: "Self-serve", label: "Book and reschedule in-app" },
    stack: ["Flutter", "FastAPI"],
    liveUrl: "https://example.com",
  },
];

export const projectTypeLabel = { web: "Web App", mobile: "Mobile App" };
export const getProjectsByType = (type) => featuredProjects.filter((p) => p.type === type);
