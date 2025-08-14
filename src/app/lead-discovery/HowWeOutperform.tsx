"use client"

import { CheckCircle } from "lucide-react"
import Link from "next/link"

const cards = [
  {
    title: "See not just company tech stacks, but:",
    points: [
      "Recent software purchases",
      "Usage trends",
      "Security vulnerabilities",
      "Human-Verified Contacts"
    ],
    cta: "Human-Verified Contacts",
    href: "/lead-discovery"
  },
  {
    title: "Our team manually verifies:",
    points: [
      "Direct dials for C-suite",
      "Verified personal emails for founders",
      "Current project involvement",
      "Buying Committee Mapping"
    ],
    cta: "Buying Committee Mapping",
    href: "/data-platform"
  },
  {
    title: "Visualize all stakeholders for complex deals:",
    points: [
      "Economic buyers (CFOs)",
      "Technical evaluators (CTOs)",
      "End users (Department heads)",
      "Stakeholder Mapping"
    ],
    cta: "Stakeholder Mapping",
    href: "/contact-us"
  }
]

export default function HowWeOutperform() {
  return (
    <section className="bg-white px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          How We Outperform Other{" "}
          <br className="hidden md:block" />
          <span className="text-[#6c3cbe]">B2B Leads</span> Providers
        </h2>
        <p className="mt-4 text-base text-gray-800">
          While other tools offer lead databases, Exellius helps you{" "}
          <Link href="#" className="text-[#6c3cbe] underline underline-offset-2">
            discover leads at scale
          </Link>
          <br className="hidden md:block" />
          and delivers actionable intelligence with:
        </p>

        <h3 className="text-xl font-semibold mt-10 mb-6">Deeper Technographics</h3>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {cards.map(({ title, points, cta, href }, i) => (
            <div
              key={i}
              className="bg-[#fff5fd] border border-gray-200 rounded-xl p-6 text-left shadow-sm hover:shadow-md transition"
            >
              <h4 className="text-base font-semibold text-gray-900 mb-4">{title}</h4>

              <ul className="space-y-2 text-sm text-gray-900 ">
                {points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-[#6c3cbe]" />
                    <span className="font-medium">{point}</span>
                  </li>
                ))}
              </ul>
{/* Call to Action Button 
              <Link
                href={href}
                className="inline-block bg-[#6c3cbe] hover:bg-[#4b239e] text-white text-sm font-semibold py-2 px-4 rounded-lg transition"
              >
                {cta}
              </Link>
              */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
