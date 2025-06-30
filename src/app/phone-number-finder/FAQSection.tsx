"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "How accurate is Exellius’ phone number lookup?",
    answer:
      "Our database is refreshed in real-time, with a 95%+ accuracy rate.",
  },
  {
    question: "Can I find phone numbers for free?",
    answer:
      "You can perform limited searches for free. For full access to our verified contact database, a subscription is required.",
  },
  {
    question: "Is bulk phone number search available?",
    answer:
      "Yes, Exellius supports bulk phone number searches. You can upload a list and retrieve multiple contact results at once.",
  },
  {
    question: "Are the phone numbers verified and GDPR-compliant?",
    answer:
      "Absolutely. All phone numbers are verified for accuracy and Exellius adheres strictly to GDPR and other data protection regulations.",
  },
  {
    question: "What’s the difference between a mobile number finder and a landline database?",
    answer:
      "A mobile number finder targets individual contacts' mobile numbers, often used for direct outreach. Landline databases typically contain office numbers, which may be shared lines.",
  },
  {
    question: "How does Exellius compare to other B2B contact finders?",
    answer:
      "Exellius offers higher accuracy, real-time updates, and advanced filtering compared to many B2B tools. We also support CRM integration and bulk exports.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="w-full px-4 py-20 bg-white text-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold">
          FAQ<span className="text-[#9856F2]">s</span>
        </h2>
        <div className="w-24 h-1 bg-[#9856F2] rounded mx-auto mt-2 mb-10" />
      </div>

      <div className="max-w-5xl mx-auto space-y-4">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={i}
              className={`bg-gradient-to-br from-[#f5f5f5] to-[#edf2fb] border-b-2 border-[#9856F2] rounded-xl px-6 py-6 transition-shadow duration-300 ${
                isOpen ? "shadow-md" : ""
              }`}
            >
              <button
                className="w-full flex justify-between items-center text-left font-semibold text-[18px] md:text-[20px] text-gray-900"
                onClick={() => toggle(i)}
              >
                {faq.question}
                {isOpen ? (
                  <Minus className="text-[#9856F2] w-5 h-5" />
                ) : (
                  <Plus className="text-[#9856F2] w-5 h-5" />
                )}
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
