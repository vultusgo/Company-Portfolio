import React from "react";
import { FiLayout } from "react-icons/fi";
import {
  ServiceHero, OverviewSection, WhatWeOffer, WhyChooseUs,
  ProcessSection, TechnologiesSection, ServiceFAQ, ServiceCTA,
} from "../ServiceLayout";

const offers = [
  "UI Design", "UX Design", "UX Research", "Wireframing",
  "Interactive Prototypes", "Design Systems", "Dashboard Design",
  "Responsive Web Design", "Mobile App UI Design",
];

const techs = ["Figma", "Adobe XD", "Sketch", "Framer", "Prototyping Tools", "Design Systems", "User Testing", "Accessibility Standards"];

const faqs = [
  { q: "What is the difference between UI and UX design?", a: "UI (User Interface) design focuses on the visual elements — colors, typography, layouts, and interactive components. UX (User Experience) design focuses on the overall feel, usability, and user journey throughout the product." },
  { q: "Do you conduct user research?", a: "Yes. UX research is a critical part of our process. We conduct user interviews, surveys, usability testing, and analytics analysis to understand user needs and validate design decisions." },
  { q: "Can you create design systems for my product?", a: "Absolutely. We build comprehensive design systems that include component libraries, style guides, and usage documentation to ensure consistency across your entire product ecosystem." },
  { q: "Do you design for both web and mobile?", a: "Yes. We design for all platforms including responsive web, native mobile apps (iOS and Android), tablets, and enterprise dashboards with platform-specific design guidelines." },
  { q: "How do you ensure designs are accessible?", a: "We follow WCAG 2.1 AA standards, ensuring proper color contrast, keyboard navigation, screen reader compatibility, and inclusive design practices in every project." },
  { q: "What is your design process?", a: "Our process includes discovery and research, information architecture, wireframing, high-fidelity prototyping, user testing, and developer handoff with detailed specifications." },
];

const UIUXDesign = () => (
  <>
    <ServiceHero title="UI/UX Design" breadcrumbParent="UI/UX Design" icon={FiLayout}
      description="We design intuitive, visually compelling user interfaces and seamless user experiences. From research to prototypes, our design process ensures products that users love." />
    <OverviewSection title="Design That Delights and Converts"
      paragraphs={[
        "Great design is invisible — it makes complex tasks feel simple and intuitive. At Vultus Go, our design team combines user research, visual design expertise, and interaction design to create products that users genuinely enjoy using.",
        "We believe design is more than aesthetics. Every pixel, every interaction, and every micro-animation serves a purpose: guiding users toward their goals with clarity and delight. Our human-centered design approach ensures the end product truly meets user needs.",
        "From wireframes to polished prototypes, we collaborate closely with your team through every stage of the design process. We deliver comprehensive design systems, detailed specifications, and assets that make development seamless and consistent.",
      ]} />
    <WhatWeOffer items={offers} />
    <WhyChooseUs />
    <ProcessSection />
    <TechnologiesSection techs={techs} />
    <ServiceFAQ faqs={faqs} />
    <ServiceCTA title="Ready to Design a Product Users Will Love?" subtitle="Let's create intuitive, beautiful interfaces that elevate your brand and drive engagement." />
  </>
);

export default UIUXDesign;