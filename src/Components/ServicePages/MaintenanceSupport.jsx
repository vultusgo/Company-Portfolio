import React from "react";
import { FiTool } from "react-icons/fi";
import {
  ServiceHero, OverviewSection, WhatWeOffer, WhyChooseUs,
  ProcessSection, TechnologiesSection, ServiceFAQ, ServiceCTA,
} from "../ServiceLayout";

const offers = [
  "Website Maintenance", "Application Maintenance", "Software Maintenance",
  "Bug Fixes", "Performance Optimization", "Security Updates",
  "Feature Enhancements", "Technical Support",
];

const techs = ["Monitoring Tools", "Cloud Infrastructure", "CI/CD Pipelines", "Security Auditing", "Performance Testing", "Database Management"];

const faqs = [
  { q: "What types of maintenance do you offer?", a: "We offer comprehensive maintenance services including website maintenance, application maintenance, software updates, bug fixes, performance optimization, security patching, and feature enhancements." },
  { q: "How quickly do you respond to issues?", a: "Our response times vary by service level. Standard plans include response within 24 hours, while premium plans offer 4-hour response windows and 24/7 emergency support." },
  { q: "Do you provide security updates and patches?", a: "Yes. We proactively monitor for security vulnerabilities and apply patches and updates to keep your software secure and compliant with industry standards." },
  { q: "Can you add new features to existing software?", a: "Absolutely. Feature enhancement is one of our core maintenance services. We work with your team to prioritize, design, and implement new capabilities within your existing applications." },
  { q: "Do you monitor application performance?", a: "Yes. We implement comprehensive monitoring solutions that track uptime, response times, error rates, and resource usage. We proactively address issues before they impact users." },
  { q: "What happens after the initial development is complete?", a: "We recommend transitioning to a maintenance plan that covers ongoing support, updates, monitoring, and continuous improvement. This ensures your software remains reliable, secure, and up-to-date." },
];

const MaintenanceSupport = () => (
  <>
    <ServiceHero title="Maintenance & Support" breadcrumbParent="Maintenance & Support" icon={FiTool}
      description="We provide ongoing maintenance and support services to keep your software running smoothly, securely, and efficiently. From bug fixes to feature enhancements, we've got you covered." />
    <OverviewSection title="Your Software, Always at Its Best"
      paragraphs={[
        "Software maintenance is essential for keeping your applications secure, performant, and aligned with evolving business needs. At Vultus Go, we offer comprehensive maintenance and support services that give you peace of mind.",
        "Our team proactively monitors your applications for issues, applies security patches, optimizes performance, and implements feature enhancements as your business grows. We treat your software as a living product that needs continuous care.",
        "Whether you need basic website maintenance or comprehensive enterprise application support, we offer flexible plans tailored to your needs. Our guaranteed SLAs ensure you always know what to expect, with transparent reporting and communication.",
      ]} />
    <WhatWeOffer items={offers} />
    <WhyChooseUs />
    <ProcessSection />
    <TechnologiesSection techs={techs} />
    <ServiceFAQ faqs={faqs} />
    <ServiceCTA title="Need Reliable Software Support?" subtitle="Let's discuss a maintenance plan that keeps your applications running at peak performance." />
  </>
);

export default MaintenanceSupport;