import React from "react";
import { FiCpu } from "react-icons/fi";
import {
  ServiceHero, OverviewSection, WhatWeOffer, WhyChooseUs,
  ProcessSection, TechnologiesSection, ServiceFAQ, ServiceCTA,
} from "../ServiceLayout";

const offers = [
  "AI Chatbots", "AI Assistants", "Computer Vision", "Facial Recognition Systems",
  "OCR & Document Processing", "Recommendation Systems", "Predictive Analytics",
  "AI Model Integration", "AI Automation", "AI Consulting",
];

const techs = ["Python", "TensorFlow", "PyTorch", "OpenCV", "Scikit-learn", "Hugging Face", "LangChain", "Docker", "AWS SageMaker", "FastAPI"];

const faqs = [
  { q: "What AI services does Vultus Go offer?", a: "We offer end-to-end AI services including custom model development, computer vision solutions, NLP systems, chatbots, predictive analytics, recommendation engines, and AI consulting." },
  { q: "Do you build custom AI models?", a: "Yes. We develop custom machine learning and deep learning models tailored to your specific use case, trained on your data and optimized for production deployment." },
  { q: "Can you integrate AI into existing applications?", a: "Absolutely. We specialize in integrating AI capabilities into existing software systems through APIs, microservices, and middleware solutions." },
  { q: "What industries do you serve with AI solutions?", a: "We serve education, healthcare, government, finance, manufacturing, and enterprise sectors with AI solutions including automation, computer vision, and intelligent data processing." },
  { q: "How do you ensure AI models are ethical and unbiased?", a: "We follow responsible AI practices including bias detection, model explainability, data privacy compliance, and continuous monitoring throughout the model lifecycle." },
  { q: "How long does it take to develop an AI solution?", a: "Timelines vary by complexity. A standard AI chatbot can take 4-8 weeks, while custom computer vision systems may take 3-6 months including data collection, training, and deployment." },
];

const AIMachineLearning = () => (
  <>
    <ServiceHero title="AI & Machine Learning" breadcrumbParent="AI & Machine Learning" icon={FiCpu}
      description="We develop intelligent AI and machine learning solutions that automate processes, extract insights, and drive innovation. From computer vision to predictive analytics, our AI solutions deliver measurable business impact." />
    <OverviewSection title="Intelligence That Drives Results"
      paragraphs={[
        "Artificial intelligence is transforming every industry. At Vultus Go, we build practical, production-ready AI solutions that solve real business problems — from automating document processing to enabling facial recognition and intelligent decision-making.",
        "Our team of AI researchers and engineers has deep expertise in computer vision, natural language processing, predictive analytics, and machine learning. We work with both traditional ML models and cutting-edge deep learning architectures.",
        "We follow a rigorous approach to AI development: understanding your data, defining clear success metrics, building and training models iteratively, and deploying them into production with robust monitoring and continuous improvement.",
      ]} />
    <WhatWeOffer items={offers} />
    <WhyChooseUs />
    <ProcessSection />
    <TechnologiesSection techs={techs} />
    <ServiceFAQ faqs={faqs} />
    <ServiceCTA title="Ready to Harness the Power of AI?" subtitle="Let's explore how AI can transform your business operations and decision-making." />
  </>
);

export default AIMachineLearning;