import React from "react";
import { FiRefreshCw } from "react-icons/fi";
import {
  ServiceHero, OverviewSection, WhatWeOffer, WhyChooseUs,
  ProcessSection, TechnologiesSection, ServiceFAQ, ServiceCTA,
} from "../ServiceLayout";

const offers = [
  "Business Process Digitization", "Legacy System Modernization", "Paperless Workflow Solutions",
  "Technology Consulting", "Process Automation", "Digital Strategy",
];

const techs = ["Cloud Platforms", "Automation Tools", "API Integration", "Enterprise Architecture", "Data Analytics", "Digital Workflow Platforms"];

const faqs = [
  { q: "What is digital transformation?", a: "Digital transformation is the process of integrating digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers while improving efficiency and agility." },
  { q: "How do you approach digital transformation for organizations?", a: "We start with a comprehensive assessment of your current systems, processes, and goals. We then create a roadmap that prioritizes quick wins while building toward long-term strategic transformation." },
  { q: "Do you help with legacy system modernization?", a: "Yes. We specialize in modernizing legacy systems — migrating outdated technology to modern architectures, improving performance, security, and maintainability without disrupting business operations." },
  { q: "What industries do you serve for digital transformation?", a: "We serve education, government, healthcare, manufacturing, finance, and enterprise sectors — helping organizations of all sizes embrace digital technologies to improve operations." },
  { q: "How long does a digital transformation project take?", a: "Digital transformation is a journey, not a one-time project. We break it into phases, with initial results visible within weeks and full transformation scaling over months." },
  { q: "Can you handle organization-wide transformation?", a: "Yes. We work with leadership teams to align technology strategy with business goals, ensuring organization-wide adoption and measurable outcomes at every stage." },
];

const DigitalTransformation = () => (
  <>
    <ServiceHero title="Digital Transformation" breadcrumbParent="Digital Transformation" icon={FiRefreshCw}
      description="We help organizations embrace digital technologies to modernize operations, improve efficiency, and create new growth opportunities. Transform your business for the digital age." />
    <OverviewSection title="Transform Your Business for the Future"
      paragraphs={[
        "The organizations that thrive in today's digital economy are those that embrace change. At Vultus Go, we help businesses reimagine their processes, technology, and culture to compete effectively in a rapidly evolving landscape.",
        "Digital transformation is not just about adopting new technology — it's about fundamentally rethinking how your organization operates, delivers value, and engages with customers. We partner with leadership teams to create and execute comprehensive digital strategies.",
        "Our approach is practical and results-driven. We identify quick wins to build momentum, then systematically modernize core systems and processes. From paperless workflows to legacy system modernization, we guide your organization through every step of the journey.",
      ]} />
    <WhatWeOffer items={offers} />
    <WhyChooseUs />
    <ProcessSection />
    <TechnologiesSection techs={techs} />
    <ServiceFAQ faqs={faqs} />
    <ServiceCTA title="Ready to Transform Your Organization?" subtitle="Let's create a digital strategy that drives growth, efficiency, and competitive advantage." />
  </>
);

export default DigitalTransformation;