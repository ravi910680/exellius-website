"use client"

import { CheckCircle } from "lucide-react"

const cards = [
  {
    title: "For Suppliers & Wholesalers",
    points: [
      "Identify potential retail partners",
      "Expand distribution channels",
      "Monitor competitor partnerships"
    ],
    cta: "Explore Partnerships"
  },
  {
    title: "For Software & Service Providers",
    points: [
      "Target relevant Amazon sellers for your solutions",
      "Understand seller needs and pain points",
      "Develop more tailored offerings"
    ],
    cta: "Target Smartly"
  },
  {
    title: "For Investors & Acquirers",
    points: [
      "Discover acquisition targets",
      "Analyze marketplace trends",
      "Identify high-growth sellers"
    ],
    cta: "Get Insights"
  }
]

export default function HowBusinessesUseData() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          How Businesses Use Our{" "}
          <span className="text-[#6c3cbe]">Amazon Seller Data</span>
        </h2>
        <p className="mt-4 text-base text-gray-800">
          Our data empowers teams across industries to make smarter, faster decisions.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-[#fff5fd] border border-gray-200 rounded-xl p-6 text-left shadow-sm hover:shadow-md transition"
            >
              <h4 className="text-base font-semibold text-gray-900 mb-4">
                {card.title}
              </h4>

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
