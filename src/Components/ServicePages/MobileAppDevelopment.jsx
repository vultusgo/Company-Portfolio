import React from "react";
import { FiSmartphone } from "react-icons/fi";
import {
  ServiceHero, OverviewSection, WhatWeOffer, WhyChooseUs,
  ProcessSection, TechnologiesSection, ServiceFAQ, ServiceCTA,
} from "../ServiceLayout";

const offers = [
  "Android Apps", "iOS Apps", "Cross-platform Apps", "Business Apps",
  "E-commerce Apps", "Educational Apps", "Healthcare Apps", "Government Apps", "App Maintenance",
];

const techs = ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Node.js", "MongoDB", "REST APIs", "App Store Deployment", "Push Notifications"];

const faqs = [
  { q: "Do you develop both Android and iOS apps?", a: "Yes. We build native apps for both Android and iOS, as well as cross-platform apps using React Native and Flutter for clients who need a single codebase." },
  { q: "How long does mobile app development take?", a: "A standard business app typically takes 3-6 months. Complex apps with advanced features like AI or real-time sync may take longer depending on requirements." },
  { q: "Do you handle app store submission?", a: "Yes, we manage the entire app store submission process for both Google Play and Apple App Store, including asset preparation and compliance checks." },
  { q: "Can you integrate third-party services into my app?", a: "Absolutely. We integrate payment gateways, maps, analytics, chatbots, CRM systems, and other third-party APIs as needed for your application." },
  { q: "Do you provide post-launch support?", a: "Yes, we offer comprehensive maintenance plans including bug fixes, performance monitoring, updates, and feature enhancements after launch." },
  { q: "What platforms do you use for cross-platform development?", a: "We primarily use React Native and Flutter for cross-platform development, delivering near-native performance with a single shared codebase." },
];

const MobileAppDevelopment = () => (
  <>
    <ServiceHero title="Mobile App Development" breadcrumbParent="Mobile App Development" icon={FiSmartphone}
      description="We build powerful, user-friendly mobile applications for iOS and Android. From business apps to enterprise solutions, our apps are designed to engage users and deliver measurable results." />
    <OverviewSection title="Mobile Experiences That Matter"
      paragraphs={[
        "Mobile applications have become essential for businesses to connect with customers, streamline operations, and drive growth. At Vultus Go, we build mobile apps that are fast, intuitive, and built for real-world use.",
        "Our development team specializes in both native and cross-platform development, ensuring your app delivers a premium experience on every device. From healthcare to e-commerce, we've built apps across industries.",
        "We focus on performance, security, and user engagement. Every app we build undergoes rigorous testing, follows platform-specific design guidelines, and is optimized for long-term scalability and maintainability.",
      ]} />
    <WhatWeOffer items={offers} />
    <WhyChooseUs />
    <ProcessSection />
    <TechnologiesSection techs={techs} />
    <ServiceFAQ faqs={faqs} />
    <ServiceCTA title="Ready to Launch Your Mobile App?" subtitle="Let's build an app that your users will love and your business will benefit from." />
  </>
);

export default MobileAppDevelopment;