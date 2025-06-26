"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

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
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-900">
          FAQs
        </h2>
        <div className="w-10 h-1 bg-[#6c3cbe] rounded mx-auto mt-2 mb-10" />

        <div className="space-y-3">
          {faqs.map((faq, i) => (
             <div
              key={i}
              className={`bg-white rounded-xl border border-[#eee] px-6 py-4 transition-all shadow-sm ${
                openIndex === i ? "ring-2 ring-[#6c3cbe]" : ""
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className={`w-full flex items-center justify-between px-6 py-4 text-left font-semibold transition-colors ${
                  openIndex === i
                    ? "text-[#6c3cbe]"
                    : "text-gray-800 hover:text-[#6c3cbe]"
                }`}
              >
                {faq.question}
                {openIndex === i ? (
                  <ChevronUp className="text-[#6c3cbe]" />
                ) : (
                  <ChevronDown className="text-[#6c3cbe]" />
                )}
              </button>

              {openIndex === i && (
                <div className="px-6 pb-5 pt-0 text-sm text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
