"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react" // Assuming you have lucide-react installed

const pricingFaqs = [
  {
    question: "How are credits consumed?",
    answer:
      "Each successful email lookup consumes one Email credit. Each successful phone number lookup consumes one Phone credit. Unsuccessful lookups do not consume credits.",
  },
  {
    question: "Do credits expire?",
    answer:
      "Yes, purchased credits are valid for 12 months from the date of purchase. We will notify you before your credits expire.",
  },
  {
    question: "Can I get a refund if I don't use all my credits?",
    answer:
      "Credits are non-refundable once purchased. We recommend determining your expected usage to choose the appropriate package.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit cards (Visa, MasterCard, American Express) and PayPal for all purchases.",
  },
  {
    question: "Is there a free trial or free credits available?",
    answer:
      "We occasionally offer promotional free credits. Please check our pricing page or sign up for our newsletter for updates.",
  },
  {
    question: "Can I upgrade or downgrade my credit package later?",
    answer:
      "You can purchase additional credit packages at any time. If you need a custom solution, please contact our sales team.",
  },
]

export default function PricingFaq() {
  // State to manage which FAQ item is open. Defaults to the first item (index 0).
  // Set to -1 if you want all to be closed by default.
  const [openIndex, setOpenIndex] = useState(0)

  // Function to toggle the open/close state of an FAQ item
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
          {pricingFaqs.map((faq, i) => (
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
              {/* Only render the answer if the FAQ is open and an answer exists */}
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