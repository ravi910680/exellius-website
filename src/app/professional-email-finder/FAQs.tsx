"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "How does the Professional Email Finder work?",
    answer:
      "Our email finder tool searches public databases and verifies results to provide accurate professional emails. Just enter a name and domain.",
  },
  {
    question: "How accurate is Exellius’ Email Finder?",
    answer:
      "We ensure high accuracy through real-time validation, domain verification, and email activity checks before results are shown.",
  },
  {
    question: "Can I find emails in bulk?",
    answer:
      "Yes, our Bulk Email Finder allows you to upload CSV files and retrieve verified results for hundreds or thousands of contacts instantly.",
  },
  {
    question: "Is there a free version of the Email Finder?",
    answer:
      "Yes! You can start with limited free credits when you sign up, perfect for testing individual searches and understanding our results.",
  },
  {
    question: "Why does the Email Finder sometimes return no results?",
    answer:
      "Some contacts may not have public or verifiable email data. In such cases, we prioritize privacy and only surface verified, legal data.",
  },
]

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? -1 : i)
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
          const isOpen = openIndex === i
          return (
            <div
              key={i}
              className={`bg-gradient-to-br from-[#f5f5f5] to-[#edf2fb] border-b-2 border-[#9856F2] rounded-xl px-6 py-6 transition-all duration-300 ${
                isOpen ? "shadow-md" : ""
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center text-left font-semibold text-[18px] md:text-[20px] text-gray-900"
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
                  isOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
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
