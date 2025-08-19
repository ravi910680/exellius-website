"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    question: "Can the tool detect custom-built technologies?",
    answer:
      "While we automatically identify 300+ standardized technologies through our website technology checker online, custom solutions require manual pattern analysis. Submit unrecognized tech through our verification portal to improve future scans.",
  },
  {
    question: "How frequently should I re-check a website's technology?",
    answer:
      "We recommend monthly checks for competitive tech stack analysis, or quarterly for general research. Critical security components (like SSL certificates) should be verified before major campaigns.",
  },
  {
    question: "Does the checker analyze mobile app technologies?",
    answer:
      "This tool focuses exclusively on web technologies. For mobile app analysis, explore our sister product Exellius Mobile Stack Inspector (currently in beta).",
  },
  {
    question: "What's the difference between your free and pro version?",
    answer:
      "The free version shows core website development technologies (CMS, servers, frameworks). Pro adds:\n\n- E-commerce platform details\n- Historical version tracking\n- Technology health scores\n- Priority re-scan requests",
  },
  {
    question: "Can I check subdomains or specific pages?",
    answer:
      "Yes. Enter full URLs (e.g., \"https://blog.example.com/pricing\") to:\n\n- Compare tech between site sections\n- Verify implementation of tools on key pages\n- Audit campaign landing page setups using our website tech stack lookup",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? -1 : i)
  }

  return (
    <section className="w-full px-4 py-20 bg-white text-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold">
          Frequently Asked <span className="text-[#9856F2]">Questions</span>
        </h2>
        <div className="w-24 h-1 bg-[#9856F2] rounded mx-auto mt-4 mb-10" />
      </div>

      <div className="max-w-6xl mx-auto space-y-5">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`bg-gradient-to-br from-[#f5f5f5] to-[#edf2fb] border-b-2 border-[#9856F2] rounded-xl px-6 py-6 transition-all duration-300 ${
              openIndex === i ? "shadow-md" : ""
            }`}
          >
            <button
              className="w-full flex justify-between items-center text-left font-semibold text-2xl text-gray-900"
              onClick={() => toggle(i)}
            >
              {faq.question}
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
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="mt-4 text-md text-gray-900 whitespace-pre-line">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  )
}
