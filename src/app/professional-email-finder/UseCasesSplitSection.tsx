"use client"

import { CheckCircle, ArrowRight } from "lucide-react"

export default function UseCasesSplitSection() {
  const commonCases = [
    {
      label: "Sales Teams",
      text: "Find decision-makers’ emails for cold outreach.",
    },
    {
      label: "Recruiters",
      text: "Source candidates’ business email addresses.",
    },
    {
      label: "Marketers",
      text: "Build targeted B2B contact lists.",
    },
  ]

  const domainUsers = [
    {
      label: "Sales Teams",
      text: "Quickly find email addresses by domain to reach decision-makers.",
    },
    {
      label: "Recruiters",
      text: "Source candidates using professional email addresses.",
    },
    {
      label: "Marketers",
      text: "Build targeted outreach lists for cold email campaigns.",
    },
  ]

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left: Common Use Cases */}
        <div className="bg-[#FEF0EC] p-10 md:p-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-2">
            Common Use <span className="text-[#9856F2]">Cases</span>
          </h3>
          <div className="w-16 h-1 bg-[#9856F2] mb-6" />

          <ul className="space-y-4">
            {commonCases.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="text-[#9856F2] mt-1 w-5 h-5" />
                <p className="text-gray-800 text-base">
                  <strong>{item.label}:</strong> {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Who Uses Domain Email Tools */}
        <div className="bg-[#E8F2FC] p-10 md:p-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-2">
            Who Uses <span className="text-[#9856F2]">Domain Email Search</span> Tools?
          </h3>
          <div className="w-16 h-1 bg-[#9856F2] mb-6" />

          <ul className="space-y-4">
            {domainUsers.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="text-[#9856F2] mt-1 w-5 h-5" />
                <p className="text-gray-800 text-md">
                  <strong>{item.label}:</strong> {item.text}
                </p>
              </li>
            ))}
          </ul>

          {/* CTA link */}
          <div className="mt-6">
            <a href="#" className="text-[#9856F2] text-sm font-medium inline-flex items-center hover:underline">
              Add Vectors of each to make it creative <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
