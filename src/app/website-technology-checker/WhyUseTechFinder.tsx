"use client"

import { Code, Search, Briefcase } from "lucide-react"

export default function WhyUseTechFinder() {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-[#9856F2]" />,
      title: "For Developers",
      points: [
        "Debug compatibility issues by seeing a site’s full tech stack with our website tech checker.",
        "Learn from competitors’ tech choices (e.g., “Why are they using Next.js?”) with our technology lookup tool.",
      ],
    },
    {
      icon: <Search className="w-8 h-8 text-[#9856F2]" />,
      title: "For SEO & Marketing Teams",
      points: [
        "Reverse-engineer competitors’ traffic growth tools using our web technology checker.",
        "Validate if partners use analytics you trust through our tech stack lookup.",
      ],
    },
    {
      icon: <Briefcase className="w-8 h-8 text-[#9856F2]" />,
      title: "For Business Owners",
      points: [
        "Audit your agency’s work: “Did they really implement HubSpot as promised?”",
        "Spot outdated tech (e.g., PHP 7.4 → security risk) with our online tool to check website technology.",
      ],
    },
  ]

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Use Our Website Technology Finder?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tailored insights for developers, marketers, and business owners to
            make smarter technology decisions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-8 flex flex-col"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>
              <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
                {item.points.map((point, i) => (
                  <li key={i} className="relative pl-5">
                    <span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-[#9856F2] rounded-full"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
