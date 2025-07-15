"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How often is your Amazon seller database updated?",
    answer:
      "We refresh our data monthly, with critical fields like contact information verified quarterly.",
  },
  {
    question: "Can I get a list of Amazon sellers in specific categories?",
    answer:
      "Yes, our advanced filtering allows you to select sellers by product category, marketplace, and performance metrics.",
  },
  {
    question: "How does your Amazon vendor list differ from other directories?",
    answer:
      "Our database includes verified contact information not available through public sources, along with historical performance data.",
  },
  {
    question: "What's included in your Amazon FBA leads package?",
    answer:
      "Each lead includes business name, contact person, verified email, marketplace locations, product categories, and performance metrics.",
  },
  {
    question: "Can I search for a specific seller by name?",
    answer:
      'Absolutely. Our "find Amazon seller by name" function helps you locate specific businesses quickly.',
  },
]

export default function AmazonSellerFaq() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <section className="bg-[#fcf4fc] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Frequently Asked <span className="text-[#6c3cbe]">Questions</span>
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
