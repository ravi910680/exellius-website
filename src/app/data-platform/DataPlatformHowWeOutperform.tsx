"use client"

import { CheckCircle } from "lucide-react"
import Link from "next/link"

const cards = [
  {
    title: "Higher Email Accuracy Than Any Competitor",
    points: [
      "95%+ verified deliverability",
      "Daily validation against bounce databases",
      "SMTP & domain-level verification"
    ],
    cta: "See Email Accuracy Proof"
  },
  {
    title: "More Than Just Email Addresses",
    points: [
      "Full job role & seniority mapping",
      "Firmographics + technographics",
      "Buyer intent & engagement signals"
    ],
    cta: "Explore Data Types"
  },
  {
    title: "Built to Power Your Go-to-Market",
    points: [
      "Instant CRM & tool integrations",
      "API-first architecture",
      "Lead scoring & ICP filters"
    ],
    cta: "Try Enrichment Now"
  }
]

export default function DataPlatformHowWeOutperform() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          How <span className="text-[#6c3cbe]">Exellius</span> Outperforms Other{" "}
          <span className="whitespace-nowrap">B2B Data</span> Providers
        </h2>
        <p className="mt-4 text-base text-gray-800 max-w-2xl mx-auto">
          We don’t just sell email lists—we deliver a complete, validated data engine built
          for sales, marketing, and growth. Here’s what makes our platform unbeatable:
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-[#fff5fd] border border-gray-200 rounded-xl p-6 text-left shadow-sm hover:shadow-md transition"
            >
              <h4 className="text-base font-semibold text-gray-900 mb-4">{card.title}</h4>

              <ul className="space-y-2 text-sm text-gray-900 mb-6">
                {card.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-[#6c3cbe]" />
                    <span className="font-medium">{point}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#"
                className="inline-block bg-[#6c3cbe] hover:bg-[#4b239e] text-white text-sm font-semibold py-2 px-4 rounded-lg transition"
              >
                {card.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
