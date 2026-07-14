import React from "react";
import { FiGlobe } from "react-icons/fi";
import {
  ServiceHero, OverviewSection, WhatWeOffer, WhyChooseUs,
  ProcessSection, TechnologiesSection, ServiceFAQ, ServiceCTA, RJTechForceSection,
} from "../ServiceLayout";

const offers = [
  "Business Websites", "Corporate Websites", "Portfolio Websites",
  "E-commerce Websites", "Custom Web Applications", "Admin Dashboards",
  "Website Redesign", "Website Maintenance",
];

const techs = ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "MongoDB", "PostgreSQL", "TypeScript", "REST APIs", "Docker"];

const faqs = [
  { q: "How long does it take to build a website?", a: "Timelines vary by complexity. A business website typically takes 2-4 weeks, while custom web applications can take 2-4 months depending on scope and requirements." },
  { q: "Do you offer website redesign services?", a: "Yes. We specialize in redesigning existing websites to improve performance, user experience, and visual appeal while preserving your brand identity and SEO rankings." },
  { q: "Will my website be mobile-friendly?", a: "Absolutely. Every website we build is fully responsive and optimized for all devices — desktops, tablets, and smartphones." },
  { q: "Do you provide hosting and maintenance?", a: "Yes, we offer comprehensive hosting setup and ongoing maintenance services including updates, backups, security monitoring, and performance optimization." },
  { q: "Can you build custom web applications?", a: "Yes. Our team develops custom web applications including SaaS platforms, dashboards, portals, and enterprise systems using modern frameworks and architectures." },
  { q: "What technologies do you use for web development?", a: "We primarily use React, Next.js, Node.js, and Tailwind CSS for frontend, with robust backend options including Node.js, Python, and various databases." },
];

const WebDevelopment = () => ( 
  <>
    <ServiceHero title="Web Development" breadcrumbParent="Web Development" icon={FiGlobe}
      description="We build modern, high-performance websites and web applications that drive business growth. From simple business sites to complex enterprise platforms, our solutions are fast, secure, and scalable." />
    <RJTechForceSection />
    <OverviewSection title="Building the Web, Better"
      paragraphs={[
        "A website is more than a digital presence — it's your brand's most powerful communication channel. At Vultus Go, we build web experiences that are fast, accessible, and engineered for performance.",
        "Whether you need a business website, an e-commerce platform, or a custom web application, our team combines modern frontend frameworks with robust backend architectures to deliver solutions that scale with your business.",
        "We follow a user-centered design approach, ensuring every interface is intuitive and every interaction is meaningful. Combined with enterprise-grade security and performance optimization, our web solutions are built to compete in today's digital landscape.",
      ]} />
    <WhatWeOffer items={offers} />
    <WhyChooseUs />
    <ProcessSection />
    <TechnologiesSection techs={techs} />
    <ServiceFAQ faqs={faqs} />
    <ServiceCTA title="Ready to Build Your Web Presence?" subtitle="Let's create a website that elevates your brand and drives real results." />
  </>
);

export default WebDevelopment;