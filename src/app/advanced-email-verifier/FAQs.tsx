"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What’s the difference between an email verifier and an email lookup tool?",
    answer:
      "An email checker validates whether an address exists, while an email lookup tool helps find verified email addresses associated with a person or domain. Exellius offers both solutions for complete email intelligence.",
  },
  {
    question: "Can verified emails still bounce?",
    answer:
      "Yes, while verification reduces the risk, some emails may still bounce due to temporary server issues or changes after verification.",
  },
  {
    question: 'What does "Accept-All" mean in email verification?',
    answer:
      'It means the domain is configured to accept all emails, even invalid ones—making it hard to confirm the recipient’s validity.',
  },
  {
    question: "Is bulk email verification secure?",
    answer:
      "Absolutely. Exellius uses encrypted connections and strict data privacy policies to ensure your uploaded data stays secure.",
  },
]

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const toggle = (i: number) => {
    setActiveIndex(activeIndex === i ? null : i)
  }

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">
          Common Questions About <span className="text-[#9856F2]">Email Verification</span>
        </h2>
        <div className="h-1 w-16 bg-[#9856F2] mx-auto mb-10" />
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, i) => {
          const isOpen = activeIndex === i
          return (
            <div
              key={i}
              className={`rounded-xl shadow-md border-b-2 border-[#9856F2] overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "bg-white" : "bg-[#FAF6FF]"
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
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-[500px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
                }`}
              >
                <p className="text-sm sm:text-base text-gray-700">{faq.answer}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
