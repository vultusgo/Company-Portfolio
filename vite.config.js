import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import { contactInfo, socialLinks } from "./src/data/contactInfo.js";

/**
 * Injects contact details from src/data/contactInfo.js into index.html
 * (JSON-LD blocks can't import JS), so there is ONE place to edit them.
 */
function injectContactInfo() {
  const tokens = {
    "__CONTACT_EMAIL__": contactInfo.email,
    "__CONTACT_PHONE__": contactInfo.phone.e164,
    "__ADDR_LOCALITY__": contactInfo.address.locality,
    "__ADDR_REGION__": contactInfo.address.region,
    "__ADDR_POSTAL__": contactInfo.address.postalCode,
    "__ADDR_COUNTRY__": contactInfo.address.countryCode,
    "__HOURS_OPENS__": contactInfo.hours.opens,
    "__HOURS_CLOSES__": contactInfo.hours.closes,
    "__HOURS_DAYS__": JSON.stringify(contactInfo.hours.days),
    "__SAME_AS__": JSON.stringify(socialLinks.map((s) => s.href)),
  };
  return {
    name: "inject-contact-info",
    transformIndexHtml(html) {
      return Object.entries(tokens).reduce(
        (out, [token, value]) => out.split(token).join(value),
        html,
      );
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), injectContactInfo()],
});
