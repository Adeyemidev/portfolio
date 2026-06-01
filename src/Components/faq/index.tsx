"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What happens if I need changes after the project is done?",
    answer:
      "All projects include 2 weeks of free revisions and bug fixes. After that, I offer ongoing maintenance packages or hourly support. Minor tweaks are usually quick and affordable.",
  },
  {
    question: "How do you handle project communication and updates?",
    answer:
      "I keep communication clear and consistent. You'll get regular updates via your preferred channel (Slack, WhatsApp, or email). I'm always reachable and respond within 24 hours.",
  },
  {
    question: "What if my project requirements change during development?",
    answer:
      "Small changes are normal and usually no problem. For major scope changes, I'll provide a clear estimate for the additional work and timeline impact before proceeding. Transparency is key.",
  },
  {
    question: "Do you provide hosting and deployment?",
    answer:
      "Yes! I can deploy to platforms like Vercel, Netlify, AWS, or your preferred hosting service. I'll also set up domains, SSL certificates, and provide documentation for future deployments.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" py-16">
      {/* Title */}
      <h2 className="text-medium font-black uppercase mb-8">
        FAQs
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-white/40 rounded-sm bg-[#141414] overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-start gap-3 px-5 py-4 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-white/70 text-xs mt-0.5 flex-shrink-0">
                  {isOpen ? "▼" : "►"}
                </span>
                <span
                  className={`text-sm font-semibold ${
                    isOpen ? "text-white" : "text-white"
                  }`}
                >
                  {faq.question}
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-0">
                  <p className="text-sm text-white/60 leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}