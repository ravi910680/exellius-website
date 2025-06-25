"use client"

import { CheckCircle } from "lucide-react"

const outperformCards = [
  {
    title: "Hyper-Accurate Seller Intelligence",
    points: [
      "Real-time product and category tracking",
      "Verified contact & brand-level insights",
      "Historical sales patterns & ranking"
    ],
    cta: "Explore Seller Accuracy"
  },
  {
    title: "Built for Scale & Speed",
    points: [
      "Fetch 10,000+ sellers in minutes",
      "Parallel data processing for bulk tasks",
      "CSV, API & webhook support"
    ],
    cta: "See Bulk Access Options"
  },
  {
    title: "Smarter Filters for Better Outreach",
    points: [
      "Sort by revenue, reviews, and seller ratings",
      "Segment by country, niche, or brand type",
      "Target Amazon FBA, FBM or hybrid models"
    ],
    cta: "Discover Targeting Power"
  }
]

export default function AmazonSellerWhyWeOutperform() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Why Our <span className="text-[#6c3cbe]">Amazon Seller Data</span> Outperforms
        </h2>
        <p className="mt-4 text-base text-gray-800">
          We go beyond surface-level scraping — delivering real insights that help you identify, connect, and convert sellers with precision.
        </p>

        {/* Subheading */}
        <h3 className="text-xl font-semibold mt-10 mb-6">What Makes Us Different</h3>

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
