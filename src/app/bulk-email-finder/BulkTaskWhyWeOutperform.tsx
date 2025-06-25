"use client"

import { CheckCircle } from "lucide-react"

const outperformCards = [
  {
    title: "Scale Without Limits",
    points: [
      "Upload & verify 100,000+ contacts in one go",
      "Bulk deduplication and enrichment",
      "Fast turnaround with parallel verification"
    ],
    cta: "Explore Bulk Processing"
  },
  {
    title: "Industry-Leading Accuracy",
    points: [
      "96%+ deliverable email rate",
      "Multi-step domain & MX checks",
      "LinkedIn & job title cross-validation"
    ],
    cta: "Learn About Accuracy"
  },
  {
    title: "Actionable Contact Intelligence",
    points: [
      "Append job roles, seniority, and location",
      "Enrich with technographics & firmographics",
      "Tag by intent & engagement signals"
    ],
    cta: "See Contact Enrichment"
  }
]

export default function BulkTaskWhyWeOutperform() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Why <span className="text-[#6c3cbe]">Bulk Task</span> Outperforms Legacy Tools
        </h2>
        <p className="mt-4 text-base text-gray-800">
          Speed, scale, and signal — we don’t just verify emails; we empower your entire contact pipeline.
        </p>

        <h3 className="text-xl font-semibold mt-10 mb-6">What Makes Us Different</h3>

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
