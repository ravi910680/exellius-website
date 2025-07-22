"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// FAQ content as shown in your screenshot
const faqs = [
  {
    question: "How do credits work?",
    answer: (
      <>
        <span className="text-[#5a33c9] font-semibold block mb-2">
          Credits are deducted automatically per action (see table above). Unused credits roll over for 3&nbsp;months.
        </span>
      </>
    ),
  },
  {
    question: "What's the difference between monthly/yearly?",
    answer: (
      <>Monthly plans renew every 30 days. Yearly plans are billed annually and give you a discount of up to 25%.</>
    ),
  },
  {
    question: "Is there a free trial?",
    answer: (
      <>Yes! Every new user gets a free trial with 75 credits upon sign up.</>
    ),
  },
  {
    question: "How accurate is your data?",
    answer: (
      <>We use advanced verification and enrichment pipelines to ensure 98% deliverability and up-to-date profiles.</>
    ),
  },
  {
    question: "Can I cancel anytime?",
    answer: (
      <>Yes, you can cancel, upgrade, or downgrade at any time from your dashboard. Your subscription will remain active until the current billing period ends.</>
    ),
  },
  {
    question: "Do you offer refunds?",
    answer: (
      <>We provide refunds only if you experience technical issues. Contact support within 7 days for assistance.</>
    ),
  },
  {
    question: "What integrations do you support?",
    answer: (
      <>Exellius integrates with popular CRMs, outreach tools, and has an open API for custom workflows.</>
    ),
  },
  {
    question: "How does Exellius stand out from other solutions?",
    answer: (
      <>We combine data accuracy, flexible credits, outreach, and compliance features into a single, intuitive platform.</>
    ),
  },
  {
    question: "Are there bulk discounts?",
    answer: (
      <>Yes, bulk discounts are available on custom plans over 100,000 credits. Contact sales for details.</>
    ),
  },
  {
    question: "Is my data usage tracked?",
    answer: (
      <>We track usage for billing and compliance only. Your data is never sold or shared.</>
    ),
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? -1 : i);

  return (
    <section className="min-h-[100vh] w-full px-1 py-14 flex flex-col items-center" style={{ background: "#fbf5fd" }}>
      <div className="w-full max-w-2xl mx-auto pt-2 pb-10">
        <h2 className="text-3xl font-bold text-center mb-2 tracking-tight" >
          FAQ<span className="text-[#9856f2] underline underline-offset-4">s</span>
        </h2>
        <div className="w-10 h-1 bg-[#9856f2] mx-auto rounded mb-8" />
      </div>

      <div className="w-full max-w-2xl space-y-3 px-2">
        {faqs.map((faq, i) => (
          <div
            key={i}
             className={`bg-gradient-to-br from-[#f5f5f5] to-[#edf2fb] border-b-2 border-[#9856F2] rounded-xl px-6 py-6 transition-all duration-300 ${
              openIndex === i ? "shadow-md" : ""
            }`}
          >
            <button
              className={`w-full flex justify-between items-center text-left font-medium text-lg md:text-xl ${openIndex === i ? "text-[#6538b6]" : "text-[#201a32]"} `}
              onClick={() => toggle(i)}
              aria-expanded={openIndex === i}
            >
              <span className={openIndex === i ? "font-semibold" : ""}>{faq.question}</span>
              {openIndex === i ? (
                <Minus className="text-[#9856F2] w-5 h-5" />
              ) : (
                <Plus className="text-[#9856F2] w-5 h-5" />
              )}
            </button>
            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  key="answer"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* The answer: */}
                  <div className="text-gray-700 pt-1 pb-1 text-base leading-relaxed">{faq.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
