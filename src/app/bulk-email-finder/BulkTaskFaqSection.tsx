"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How many contacts can I verify at once?",
    answer:
      "You can upload and verify 100,000+ contacts in a single CSV upload. Our bulk processor is optimized for scale and speed.",
  },
  {
    question: "What kind of data does Bulk Task append?",
    answer:
      "Bulk Task enriches emails with phone numbers, job titles, seniority, company details, and LinkedIn profiles — all in one operation.",
  },
  {
    question: "Is the verification API available?",
    answer:
      "Yes. You can integrate our verification engine into your own product or workflow using our robust REST API.",
  },
  {
    question: "Can I detect duplicates before verifying?",
    answer:
      "Yes. We offer automatic deduplication for uploaded files so you only pay for unique, valid contacts.",
  },
  {
    question: "How fast is your verification process?",
    answer:
      "Our parallel processing engine can verify and enrich 50,000+ contacts in under 5 minutes, depending on your plan tier.",
  },
  {
    question: "Does Bulk Task clean and format my data?",
    answer:
      "Absolutely. We remove bad formatting, standardize columns, and apply schema checks before enrichment begins.",
  },
  {
    question: "Can I filter out invalid or risky emails?",
    answer:
      "Yes. You can choose to exclude catch-all, disposable, role-based, or invalid emails automatically before download.",
  },
  {
    question: "Is my uploaded data secure?",
    answer:
      "All files are encrypted in transit and at rest. Your data is private, never resold, and deleted automatically after 30 days.",
  },
  {
    question: "Is there a free trial for Bulk Task?",
    answer:
      "Yes. You can try Bulk Task with a limited number of contact verifications and enrichment credits before upgrading.",
  },
  {
    question: "How do I get help during onboarding?",
    answer:
      "Our onboarding team is available via live chat and email. We also offer walk-through sessions and file formatting support.",
  },
]

export default function BulkTaskFaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <section className="bg-[#fcf4fc] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          FAQs About <span className="text-[#6c3cbe]">Bulk Verification & Enrichment</span>
        </h2>
        <div className="h-1 w-20 bg-[#6c3cbe] mt-4 mb-12 mx-auto rounded" />

        <div className="space-y-4 text-left">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl border border-[#eee] px-6 py-4 transition-all shadow-sm ${
                openIndex === i ? "ring-2 ring-[#6c3cbe]" : ""
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between font-semibold text-gray-900 text-left"
              >
                {faq.question}
                {openIndex === i ? (
                  <ChevronUp className="text-[#6c3cbe]" />
                ) : (
                  <ChevronDown className="text-[#6c3cbe]" />
                )}
              </button>
              {openIndex === i && faq.answer && (
                <div className="mt-4 text-sm text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
