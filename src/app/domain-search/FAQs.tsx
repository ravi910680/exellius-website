"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How accurate is Exellius’ email finder tool?",
    answer:
      "Our tool sources data from public profiles, company websites, and verified databases, ensuring 95%+ accuracy.",
  },
  {
    question: "Can I find emails from multiple domains at once?",
    answer:
      "Yes, you can search multiple domains via bulk search by uploading a CSV file or using our API.",
  },
  {
    question: "Is there an API for domain email search?",
    answer:
      "Absolutely. Exellius provides a robust Email Finder API for domain-based and name-based email discovery.",
  },
  {
    question: "How does Exellius verify email addresses?",
    answer:
      "We verify using SMTP checks, domain validation, and reputation scoring to ensure high accuracy and low bounce rates.",
  },
]

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setActiveIndex(activeIndex === i ? null : i)
  }

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">
          FAQ<span className="text-[#9856F2]">s</span>
        </h2>
        <div className="h-1 w-16 bg-[#9856F2] mx-auto mb-10" />
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, i) => {
          const isOpen = activeIndex === i
          return (
            <div
              key={i}
              className={`rounded-xl border-b-2 border-[#9856F2] transition-all duration-300 overflow-hidden ${
                isOpen ? "bg-white shadow-md" : "bg-[#FAF6FF]"
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full text-left flex items-center justify-between px-6 py-5 font-semibold text-lg sm:text-xl text-gray-900 focus:outline-none"
              >
                <span className={`${isOpen ? "text-[#9856F2]" : ""}`}>{faq.question}</span>
                {isOpen ? (
                  <ChevronUp className="text-[#9856F2]" />
                ) : (
                  <ChevronDown className="text-[#9856F2]" />
                )}
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden px-6 pb-6 pt-1 text-sm sm:text-base text-gray-700">
                  {faq.answer}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
