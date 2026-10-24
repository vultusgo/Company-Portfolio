/**
 * Single source of truth for Vultus Go contact details.
 *
 * Plain JS with no framework imports on purpose: it is consumed by React
 * components AND by vite.config.js (to inject values into index.html JSON-LD).
 * Icons live in the components; only data lives here.
 */

export const siteUrl = "https://www.vultusgo.in";

export const contactInfo = {
  email: "vultusgo@gmail.com",
  phone: {
    display: "+91 9664373310",
    e164: "+919664373310",
  },
  address: {
    locality: "Churu",
    region: "Rajasthan",
    postalCode: "331001",
    country: "India",
    countryCode: "IN",
    // Human-readable one-liner used in the UI
    display: "Churu, Rajasthan 331001",
  },
  hours: {
    display: "Mon – Fri: 9 AM – 6 PM",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  responseTime: "within 24 hours",
};

export const socialLinks = [
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/vultusgo" },
  { id: "github", label: "GitHub", href: "https://github.com/vultusgo" },
  { id: "x", label: "X (Twitter)", href: "https://twitter.com/vultusgo" },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/vultusgo" },
];

/** External development / ordering portal */
export const devPortal = {
  url: "https://dev.vultusgo.in",
  label: "Dev Studio",
  description: "Order Web & App development",
};

/* Derived helpers so components never rebuild these strings */
export const mailtoHref = `mailto:${contactInfo.email}`;
export const telHref = `tel:${contactInfo.phone.e164}`;
