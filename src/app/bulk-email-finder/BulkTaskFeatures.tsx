"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

const features = [
  {
    id: "01",
    title: "Massive List Verification",
    bgColor: "bg-[#FBF8FE]",
    points: [
      "Validate emails in bulk",
      "Detect catch-alls, spam traps & bounces",
      "Get deliverability scoring per contact",
      "Verify phone numbers across countries"
    ],
    description: `Upload large datasets and clean them in minutes. Our bulk verification engine scans each record for validity so you only send to real contacts.`,
    emphasis: "Avoid bounces, reduce spam risk, and improve sender reputation."
  },
  {
    id: "02",
    title: "Data Enrichment at Scale",
    bgColor: "bg-[#FEF0EC]",
    points: [
      "Append missing fields to 10K+ contacts",
      "Job titles, company size, industry & more",
      "LinkedIn URLs and personal email discovery",
      "Smart enrichment by domain matching"
    ],
    description: `Take your contact lists from partial to perfect. Add missing fields that enable personalized, high-converting outreach.`
  },
  {
    id: "03",
    title: "Flexible Uploads & Exports",
    bgColor: "bg-[#FFF6F7]",
    description: `Upload CSVs of any size, select what fields to enrich or verify, and download clean datasets with all your chosen columns intact.`
  },
  {
    id: "04",
    title: "Smart Filtering & Tagging",
    bgColor: "bg-[#EAF2FB]",
    description: `Automatically tag contacts by role, seniority, location, or industry. Use filters to segment for outreach or import to CRMs directly.`
  },
  {
    id: "05",
    title: "API Access for Automation",
    bgColor: "bg-[#FBF8FE]",
    description: `Integrate bulk tasks into your internal systems with our developer-friendly API. Automate enrichment, scoring, and verification workflows.`
  }
]

export default function BulkTaskFeatures() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 inline-block">
            Why Use <span className="text-[#6c3cbe]">Exellius</span> for{" "}
            <span className="whitespace-nowrap">
              Bulk Task:
              <br className="hidden md:block" />
            </span>{" "}
            Verify & Find Contacts at Scale
          </h2>
          <div className="h-1 w-40 bg-[#6c3cbe] mt-8 rounded mx-auto"></div>
        </div>

        {/* Top Row: 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {features.slice(0, 2).map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} />
          ))}
        </div>

        {/* Bottom Row: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.slice(2).map((feature, idx) => (
            <FeatureCard key={idx + 2} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature }: { feature: typeof features[0] }) {
  return (
    <div className={`relative overflow-hidden p-6 rounded-xl border border-gray-200 ${feature.bgColor}`}>
      {/* Right-side background image */}
      <div className="absolute inset-y-0 right-0 w-64">
        <Image
          src="/grp-bg.png"
          alt=""
          fill
          className="opacity-50"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-left">
        <h3 className="text-2xl font-bold text-black mb-7 flex items-baseline gap-2">
          <span className="text-[#6c3cbe]">{feature.id}.</span>
          <span>{feature.title}</span>
        </h3>
        <div className="h-0.5 w-20 bg-[#6c3cbe] mb-5"></div>

        {feature.description && (
          <p className="text-md text-gray-800 mb-5">{feature.description}</p>
        )}

        {feature.points && (
          <ul className="text-md space-y-2 mb-5">
            {feature.points.map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-900">
                <CheckCircle className="w-4 h-4 mt-0.5 text-[#6c3cbe]" />
                <span className="font-semibold">{point}</span>
              </li>
            ))}
          </ul>
        )}

        {feature.emphasis && (
          <p className="text-md text-gray-600">{feature.emphasis}</p>
        )}
      </div>
    </div>
  )
}
