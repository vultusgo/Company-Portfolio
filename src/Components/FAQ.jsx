import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqData = [
  {
    id: 1,
    question: "Why VultusGo?",
    answer:
      "VultusGo focuses on building intelligent technology solutions that combine innovation, scalability, and reliability. Our goal is to create products that solve real-world challenges while preparing organizations for the future.",
  },
  {
    id: 2,
    question: "What does VultusGo do?",
    answer:
      "VultusGo develops software products, automation systems, intelligent digital solutions, and future-focused technologies designed to improve efficiency, security, and operational excellence.",
  },
  {
    id: 3,
    question: "Which industries can benefit from VultusGo solutions?",
    answer:
      "Our solutions are designed to be adaptable across industries including education, business, healthcare, manufacturing, government organizations, and other sectors seeking digital transformation.",
  },
  {
    id: 4,
    question: "Can VultusGo products be customized?",
    answer:
      "Yes. We understand that every organization has unique requirements, and our solutions can be tailored to meet specific operational and business needs.",
  },
  {
    id: 5,
    question: "How can I request a demo?",
    answer:
      "You can request a demo through the contact section of the website, and our team will get in touch to discuss your requirements.",
  },
  {
    id: 6,
    question: "Does VultusGo provide support and maintenance?",
    answer:
      "Yes. We provide ongoing support, updates, and maintenance services to ensure our solutions continue to perform effectively.",
  },
  {
    id: 7,
    question: "Are more products planned in the future?",
    answer:
      "Absolutely. VultusGo is continuously researching and developing new technologies, products, and innovations to expand our ecosystem and deliver greater value.",
  },
  {
    id: 8,
    question: "Why should organizations choose VultusGo?",
    answer:
      "We combine innovation, modern technology, scalable architecture, and a long-term vision to deliver reliable solutions that help organizations adapt and grow in a rapidly evolving digital world.",
  },
];

const FAQItem = ({ item, isOpen, toggle, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`relative overflow-hidden rounded-3xl border transition-all duration-300 ${
        isOpen
          ? "border-orange-500 bg-orange-50/10 shadow-lg shadow-orange-500/5"
          : "border-gray-100 bg-white/70 backdrop-blur-xl hover:border-orange-200"
      }`}
    >
      <button
        onClick={toggle}
        className="flex w-full items-center justify-between p-6 text-left focus:outline-none md:p-8"
      >
        <span
          className={`text-lg font-bold transition-colors duration-300 md:text-xl ${
            isOpen ? "text-orange-600" : "text-gray-900"
          }`}
        >
          {item.question}
        </span>
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen
              ? "bg-orange-500 text-white rotate-180"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {isOpen ? <FiMinus size={18} /> : <FiPlus size={18} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-6 pb-8 text-gray-600 md:px-8 md:text-lg leading-relaxed">
              <div className="h-px w-full bg-gradient-to-r from-orange-200 to-transparent mb-6" />
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="relative w-full py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background Aesthetic */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />
        {/* Subtle Orange Glows */}
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-orange-50/40 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-orange-100/20 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-black tracking-[0.2em] text-orange-600 uppercase mb-4 inline-block"
          >
            FREQUENTLY ASKED QUESTIONS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black font-serif text-gray-900 leading-tight mb-6"
          >
            Questions? We've Got Answers.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Find answers to common questions about VultusGo, our products,
            technologies, services, and future vision.
          </motion.p>
        </div>

        {/* FAQ List */}
        <div className="mx-auto max-w-4xl flex flex-col gap-4">
          {faqData.map((item, index) => (
            <FAQItem
              key={item.id}
              item={item}
              index={index}
              isOpen={openId === item.id}
              toggle={() => toggleItem(item.id)}
            />
          ))}
        </div>

        {/* Extra spacing at the bottom to accommodate glows */}
        <div className="mt-20 flex justify-center">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-orange-300 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
