"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

const features = [
  {
    id: "01",
    title: "Verified Global B2B Coverage",
    bgColor: "bg-[#FBF8FE]",
    points: [
      "Millions of contacts across 100+ countries",
      "C-level to mid-level professionals",
      "Email, phone, LinkedIn & firmographics",
      "Segment by role, location, or industry"
    ],
    description: `Our database includes decision-makers across every region and vertical. Whether you're targeting SaaS startups in Berlin or manufacturers in Texas, we’ve got you covered.`,
    emphasis: "Fuel international campaigns with trusted and complete B2B contact data."
  },
  {
    id: "02",
    title: "High Deliverability Standards",
    bgColor: "bg-[#FEF0EC]",
    points: [
      "95%+ verified deliverable email addresses",
      "Spam trap, disposable & catch-all detection",
      "SMTP & domain verification built-in",
      "Auto-removal of outdated records"
    ],
    description: `Stop wasting time on bounce backs. Every contact you get from Exellius is cleaned and validated through multiple layers of verification.`
  },
  {
    id: "03",
    title: "Rich Company Intelligence",
    bgColor: "bg-[#FFF6F7]",
    description: `Pair every contact with deep firmographic and technographic context—like company size, revenue, tech stack, funding rounds, and recent changes.`
  },
  {
    id: "04",
    title: "Built for Targeted Outreach",
    bgColor: "bg-[#EAF2FB]",
    description: `Precision-filter data by job function, company headcount, tools used, or buyer intent. Whether it's cold emails or ABM ads—target your exact ICP with confidence.`
  },
  {
    id: "05",
    title: "Flexible Delivery & Integration",
    bgColor: "bg-[#FBF8FE]",
    description: `Download lists instantly, connect via API, or sync with CRMs like HubSpot and Salesforce. Build your ideal pipeline your way—with zero manual work.`
  }
]

export default function DataPlatformFeatures() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 inline-block">
            Why Trust <span className="text-[#6c3cbe]">Exellius</span> as Your{" "}
            <span className="whitespace-nowrap">
              B2B Email
              <br className="hidden md:block" />
            </span>{" "}
            Data Platform?
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
      {/* Background Image */}
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
