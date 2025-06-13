"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How does Exellius verify B2B leads?",
    answer:
      "Exellius uses AI and human verification to ensure data accuracy, including email validation, job role confirmation, and company updates.",
  },
  {
    question: "Can I buy targeted B2B leads for my industry?",
    answer:
      "Yes! Exellius allows you to filter leads based on your industry, company size, job roles, and even intent signals — ensuring you're only reaching the most relevant prospects.",
  },
  {
    question: "How often is your B2B database updated?",
    answer:
      "Our database is continuously refreshed. We update data in real-time using a combination of automated crawling, third-party enrichment, and manual validation to ensure maximum accuracy.",
  },
  {
    question: "Do you offer integrations with CRMs?",
    answer:
      "Absolutely. Exellius integrates seamlessly with popular CRMs like Salesforce, HubSpot, Pipedrive, and more — so you can push leads directly into your workflow.",
  },
  {
    question: "What makes Exellius different from other B2B data providers?",
    answer:
      "Unlike generic lead tools, Exellius focuses on accuracy, role-based intent, and full contact enrichment. We provide human-verified contacts, deeper firmographics, and technographic signals that help you close faster.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a free trial that lets you explore our platform’s features and retrieve sample leads. It's the best way to test the quality before upgrading.",
  },
  {
    question: "How quickly can I start getting leads after signing up?",
    answer:
      "Immediately. Once your account is activated, you can begin searching, enriching, and exporting verified leads right away.",
  },
  {
    question: "What makes your leads better than free LinkedIn searches?",
    answer:
      "Exellius gives you validated email addresses, direct dials, job intelligence, and company-level insights — all of which LinkedIn does not provide. Plus, no manual copy-pasting.",
  },
  {
    question: "Can I try before I buy?",
    answer:
      "Yes, our free trial and 'Pay-as-you-go' plan allow you to test the platform without committing to a long-term contract.",
  },
  {
    question: "Got more questions?",
    answer:
      "Feel free to reach out to our support team via chat or email. We’re happy to answer your questions and guide you through your use case.",
  },
]


export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <section className="bg-[#fcf4fc] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          FAQs About <span className="text-[#6c3cbe]">B2B Lead</span> Discovery
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
