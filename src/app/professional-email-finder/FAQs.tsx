"use client"

import { useState, useRef } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

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
  const [activeIndex, setActiveIndex] = useState<number | null>(0) // Open first item by default

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
          const contentRef = useRef<HTMLDivElement>(null)

          return (
            <div
              key={i}
              className={`rounded-xl shadow-md border-b-2 border-[#9856F2] overflow-hidden transition-all duration-300 ${
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
                ref={contentRef}
                className="px-6 text-sm sm:text-base text-gray-700 transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: isOpen ? contentRef.current?.scrollHeight : 0,
                  opacity: isOpen ? 1 : 0,
                  overflow: "hidden",
                }}
              >
                <div className="pb-6 pt-1">{faq.answer}</div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
