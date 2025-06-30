"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "What exactly does data enrichment do?",
    answer:
      "Data enrichment enhances your existing customer/prospect data by adding missing information (like job titles, company details) and correcting inaccuracies. Our service verifies emails, appends firmographics, and adds technographic insights to make your data more actionable.",
  },
  {
    question: "How accurate is Exellius' data enrichment?",
    answer:
      "Our data is verified using a combination of AI and human checks, maintaining industry-leading accuracy standards.",
  },
  {
    question: "Can I integrate this with my CRM?",
    answer:
      "Yes, Exellius integrates with major CRMs like Salesforce, HubSpot, and Pipedrive to sync enriched data seamlessly.",
  },
  {
    question: "What's the difference between data enrichment and data cleansing?",
    answer:
      "Enrichment adds missing data; cleansing removes or fixes outdated, duplicated, or incorrect data to maintain accuracy.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Results are visible instantly upon running enrichment. Most users see improved targeting and engagement within hours.",
  },
  {
    question: "Is my data secure with Exellius?",
    answer:
      "Absolutely. We follow industry-standard encryption, GDPR compliance, and never share your data with third parties.",
  },
  {
    question: "What makes Exellius better than other data enrichment tools?",
    answer:
      "We combine AI, human verification, and real-time updates for unmatched accuracy, firmographics, and technographic enrichment.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes, you can try Exellius for free to experience how it improves your outreach and data quality.",
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <section className="bg-[#fcf4fc] py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          FAQ<span className="text-[#9856F2]">s</span>
        </h2>
        <div className="w-20 h-1 bg-[#9856F2] rounded mx-auto mt-2 mb-10" />
      </div>

      <div className="max-w-5xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`bg-gradient-to-br from-[#f5f5f5] to-[#edf2fb] border-b-2 border-[#9856F2] rounded-xl px-6 py-6 transition-all duration-300 ${
              openIndex === i ? "shadow-md" : ""
            }`}
          >
            <button
              className="w-full flex justify-between items-center text-left font-semibold text-[18px] md:text-[20px] text-gray-900"
              onClick={() => toggle(i)}
            >
              {faq.question}
              {openIndex === i ? (
                <Minus className="text-[#9856F2] w-5 h-5" />
              ) : (
                <Plus className="text-[#9856F2] w-5 h-5" />
              )}
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                openIndex === i
                  ? "grid-rows-[1fr] opacity-100 mt-2"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
