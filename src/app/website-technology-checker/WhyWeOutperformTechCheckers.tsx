"use client"

import { CheckCircle } from "lucide-react"
import Link from "next/link"

const cards = [
  {
    title: "We go beyond surface-level tech tags:",
    points: [
      "Track JavaScript frameworks with usage depth",
      "Detect hidden backend tech via DNS & headers",
      "Monitor 3rd-party services like CRMs or chatbots"
    ],
    cta: "Explore Full Stack Detection"
  },
  {
    title: "Get actionable sales context from tech data:",
    points: [
      "Know when tools were added or removed",
      "Identify product gaps to position your solution",
      "Sort targets by technology adoption stage"
    ],
    cta: "See Technographic Trends"
  },
  {
    title: "Map entire teams—not just technologies:",
    points: [
      "Get verified contacts tied to each tool",
      "Understand who influences tool decisions",
      "Prioritize high-fit roles for outreach"
    ],
    cta: "Request Access to Contact Data"
  }
]

export default function WhyWeOutperformTechCheckers() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          How We Outperform Other{" "}
          <span className="text-[#6c3cbe]">Tech Stack Analysis</span>{" "}
          Tools
        </h2>
        <p className="mt-4 text-base text-gray-800">
          Unlike traditional website scanners, Exellius offers deep, actionable
          technographic insights and contact-level data for smarter prospecting.
          <br className="hidden md:block" />
          <Link href="#" className="text-[#6c3cbe] underline underline-offset-2">
            Learn how it compares
          </Link>
        </p>

        <h3 className="text-xl font-semibold mt-10 mb-6">What Sets Us Apart</h3>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-[#f5f9ff] border border-gray-200 rounded-xl p-6 text-left shadow-sm hover:shadow-md transition"
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
