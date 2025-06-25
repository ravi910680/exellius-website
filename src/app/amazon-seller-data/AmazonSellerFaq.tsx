"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What kind of Amazon sellers can I find?",
    answer:
      "You can discover FBA, FBM, private label, and reseller accounts across various categories — filtered by product type, seller rating, review count, and geography.",
  },
  {
    question: "Do you provide contact details of Amazon sellers?",
    answer:
      "Yes. We enrich Amazon seller profiles with business emails, LinkedIn profiles, phone numbers, and brand-level information where available.",
  },
  {
    question: "How fresh is the Amazon seller data?",
    answer:
      "Our Amazon seller data is updated weekly with real-time crawling and enrichment — ensuring seller status, rank, and contact details remain current.",
  },
  {
    question: "Can I filter sellers by product niche?",
    answer:
      "Absolutely. You can search sellers by product keywords, categories, ASINs, or even review patterns — helping you segment by niche or competition.",
  },
  {
    question: "Can I export seller data?",
    answer:
      "Yes. You can bulk export enriched seller data to CSV, or use our API to integrate directly into your CRM or lead pipeline.",
  },
  {
    question: "Is your data GDPR and CCPA compliant?",
    answer:
      "Yes. We only collect publicly available data and provide options for opt-out suppression and regional filtering for full compliance.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes, we offer a limited free trial so you can test the Amazon Seller Discovery tool and export sample data before upgrading.",
  },
  {
    question: "Can I target top-performing sellers only?",
    answer:
      "Yes. You can sort and filter by sales rank, number of reviews, star rating, and other indicators of performance to find top sellers in any niche.",
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
          FAQs About <span className="text-[#6c3cbe]">Amazon Seller</span> Data
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
