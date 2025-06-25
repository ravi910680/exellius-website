"use client"

import { CheckCircle } from "lucide-react"
import Link from "next/link"

const outperformCards = [
  {
    title: "Enrichment Built for Scale",
    points: [
      "1000+ leads enriched in under a minute",
      "Bulk import via CSV or CRM",
      "Parallel processing engine"
    ],
    cta: "See Bulk Enrichment"
  },
  {
    title: "Accuracy You Can Rely On",
    points: [
      "95%+ verified email accuracy",
      "Real-time LinkedIn & domain verification",
      "Human-in-the-loop data checks"
    ],
    cta: "Our Accuracy Promise"
  },
  {
    title: "Smarter Context, Not Just Contacts",
    points: [
      "Enrich with tech stack, revenue & funding data",
      "Auto-detect job seniority & buyer roles",
      "Contextual firmographics & segmentation fields"
    ],
    cta: "See Smart Enrichment"
  }
]

export default function DataEnrichmentWhyWeOutperform() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Why Our <span className="text-[#6c3cbe]">Enrichment Suite</span> Outperforms the Rest
        </h2>
        <p className="mt-4 text-base text-gray-800">
          Most tools enrich contacts. We go further—with speed, precision, and context that empowers your sales & marketing strategies.
        </p>

        {/* Subheading */}
        <h3 className="text-xl font-semibold mt-10 mb-6">What Sets Us Apart</h3>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {outperformCards.map((card, i) => (
            <div
              key={i}
              className="bg-[#fbf8fe] border border-gray-200 rounded-xl p-6 text-left shadow-sm hover:shadow-md transition"
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

              <button className="bg-[#6c3cbe] hover:bg-[#4b239e] text-white text-sm font-semibold py-2 px-4 rounded-lg transition">
                {card.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
