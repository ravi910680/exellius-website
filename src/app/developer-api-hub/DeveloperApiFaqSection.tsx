"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What can I do with the Exellius Developer API?",
    answer:
      "You can enrich contacts, validate emails, search decision-makers by filters, and sync verified data to your systems—all programmatically through our RESTful endpoints.",
  },
  {
    question: "Is there a rate limit for API usage?",
    answer:
      "Yes. We offer generous limits by default, and you can request higher quotas based on your use case. All plans support burst handling and queue-based scaling.",
  },
  {
    question: "How secure is the API?",
    answer:
      "We use HTTPS, token-based auth, and strict usage logs. You can also rotate keys, define IP whitelists, and monitor usage from your dashboard.",
  },
  {
    question: "Can I use the API for bulk enrichment?",
    answer:
      "Absolutely. You can POST thousands of records via our bulk endpoint, or upload CSVs and receive enriched results with high throughput.",
  },
  {
    question: "Do you support sandbox access?",
    answer:
      "Yes, developers get sandbox keys for free testing. It lets you explore endpoints, test integrations, and simulate real responses without using live credits.",
  },
  {
    question: "What languages or SDKs are supported?",
    answer:
      "Our API is language-agnostic (REST + JSON), but we provide ready-to-use examples in Node.js, Python, and PHP. You can integrate with any modern stack.",
  },
  {
    question: "Can I manage leads across multiple systems?",
    answer:
      "Yes. Our API supports bi-directional sync, webhooks, and native CRM integrations so you can push enriched data wherever you need it.",
  },
  {
    question: "How fast is the response time?",
    answer:
      "Most enrichment and validation endpoints respond within 300ms–800ms. Bulk operations are queued for optimal performance and reliability.",
  },
  {
    question: "Is there developer support available?",
    answer:
      "Of course. Our support team is available via chat, and we offer dedicated API success engineers for enterprise plans.",
  },
  {
    question: "How do I get started?",
    answer:
      "Sign up and access your developer dashboard to generate API keys, review docs, and start integrating within minutes.",
  },
]

export default function DeveloperApiFaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <section className="bg-[#fcf4fc] py-24 px-6 ">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Developer FAQs for the <span className="text-[#6c3cbe]">Exellius API</span>
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
