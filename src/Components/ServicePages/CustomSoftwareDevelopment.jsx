import React from "react";
import { FiServer } from "react-icons/fi";
import {
  ServiceHero, OverviewSection, WhatWeOffer, WhyChooseUs,
  ProcessSection, TechnologiesSection, ServiceFAQ, ServiceCTA,
} from "../ServiceLayout";

const offers = [
  "School Management Systems", "Hospital Management Systems", "ERP Solutions",
  "CRM Solutions", "Inventory Management", "Billing & Invoicing",
  "Workflow Automation", "Business Process Automation", "Custom Enterprise Software",
];

const techs = ["React", "Node.js", "Python", "PostgreSQL", "MongoDB", "Docker", "AWS", "TypeScript", "REST APIs", "Microservices"];

const faqs = [
  { q: "What types of custom software do you build?", a: "We build a wide range of custom software including ERP systems, CRM platforms, school and hospital management systems, inventory management, billing solutions, and workflow automation tools." },
  { q: "How do you approach custom software projects?", a: "We begin with thorough requirements gathering and discovery. Our agile development process ensures regular feedback, transparent progress, and alignment with your business goals throughout the project." },
  { q: "Can you integrate with existing systems?", a: "Yes. We specialize in integrating custom software with existing tools including ERPs, CRMs, accounting software, HR systems, and third-party APIs. Legacy system integration is one of our core capabilities." },
  { q: "How long does custom software development take?", a: "Timelines depend on complexity. A typical custom software project ranges from 3 to 9 months. We break projects into phases to deliver value incrementally." },
  { q: "Do you provide ongoing support after deployment?", a: "Absolutely. We offer comprehensive maintenance plans covering updates, bug fixes, performance monitoring, security patches, and feature enhancements." },
  { q: "Is my custom software scalable for future growth?", a: "Yes. We architect every solution with scalability in mind — from database design to infrastructure — ensuring your software grows seamlessly with your organization." },
];

const CustomSoftwareDevelopment = () => (
  <>
    <ServiceHero title="Custom Software Development" breadcrumbParent="Custom Software" icon={FiServer}
      description="We design and develop custom software solutions tailored to your unique business requirements. From enterprise platforms to workflow automation, our solutions are built to scale." />
    <OverviewSection title="Software Built for Your Business"
      paragraphs={[
        "Off-the-shelf software rarely fits every organization perfectly. At Vultus Go, we build custom software that aligns with your processes, integrates with your existing tools, and evolves with your business.",
        "Our team has extensive experience developing enterprise-grade systems across education, healthcare, government, and corporate sectors. We follow industry best practices in architecture, security, and quality assurance.",
        "From initial discovery to deployment and ongoing support, we partner closely with your team to deliver software that solves real problems, automates workflows, and drives operational efficiency.",
      ]} />
    <WhatWeOffer items={offers} />
    <WhyChooseUs />
    <ProcessSection />
    <TechnologiesSection techs={techs} />
    <ServiceFAQ faqs={faqs} />
    <ServiceCTA title="Need Custom Software?" subtitle="Let's discuss your requirements and build a solution tailored to your business." />
  </>
);

export default CustomSoftwareDevelopment;