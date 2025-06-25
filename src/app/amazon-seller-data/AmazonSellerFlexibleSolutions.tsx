"use client"

import { CheckCircle } from "lucide-react"

const timelineSteps = [
  {
    id: "1",
    title: "Bulk Discover Amazon Sellers",
    side: "left",
    points: ["Find 10,000+ sellers by niche", "Filter by category, reviews, & rank"],
    bg: "bg-[#fbf8fe]",
  },
  {
    id: "2",
    title: "Target with Precision",
    side: "right",
    points: ["Filter by FBA/FBM, revenue & geography", "Get brand-level & seller contacts"],
    bg: "bg-[#fff2ec]",
  },
  {
    id: "3",
    title: "Enrich & Export at Scale",
    side: "left",
    points: ["Enrich with emails, phones & LinkedIn", "Bulk CSV download or API sync"],
    bg: "bg-[#edf4ff]",
  },
]

export default function AmazonSellerFlexibleSolutions() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Flexible <span className="text-[#6c3cbe]">Solutions</span> for Amazon Seller Outreach
        </h2>
        <div className="h-1 w-20 bg-[#6c3cbe] mt-4 mb-16 mx-auto rounded" />

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full border-l-2 border-[#6c3cbe] z-0" />

          {/* Timeline Steps */}
          <div className="flex flex-col gap-20 relative z-10">
            {timelineSteps.map((step) => (
              <div
                key={step.id}
                className={`relative flex items-center justify-between gap-6 ${
                  step.side === "left" ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div
                  className={`w-full max-w-sm rounded-xl shadow-sm border border-gray-200 p-6 text-left ${step.bg}`}
                >
                  <h4 className="font-semibold text-base text-gray-900 mb-4">{step.title}</h4>
                  <ul className="space-y-2 text-sm text-gray-900">
                    {step.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-0.5 text-[#6c3cbe]" />
                        <span className="font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Index Badge */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20 w-24 h-24 flex items-center justify-center p-1 bg-white">
                  <img
                    src={`/icons/${step.id}.png`} // Replace with correct icon path
                    alt={`Step ${step.id}`}
                    className="w-full h-full object-contain block"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
