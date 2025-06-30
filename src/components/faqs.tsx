"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    question: "How does Exellius verify email addresses?",
    answer:
      "Exellius uses real-time email validation tools to check domain validity, syntax, and mailbox activity, ensuring 98% accuracy in deliverability.",
  },
  {
    question: "Can I find emails in bulk?",
    answer:
      "Yes, our bulk email finder allows you to upload lists and verify emails in batches.",
  },
  {
    question: "Does Exellius provide phone numbers?",
    answer:
      "Exellius includes direct dial numbers and mobile contact details for decision-makers where available.",
  },
  {
    question: "Is Exellius compatible with CRMs?",
    answer:
      "Yes, we offer CRM integrations and CSV export to easily import verified data.",
  },
  {
    question: "How accurate is your B2B database?",
    answer:
      "We maintain 98% accuracy by continuously verifying and updating contact information.",
  },
  {
    question: "Can I check a company’s tech stack?",
    answer:
      "Yes! Exellius provides insights into technologies used by companies, including marketing tools, CRMs, hosting platforms, and more.",
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
                  <p className="mt-4 text-md text-gray-900">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  )
}
