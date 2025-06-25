"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

const features = [
  {
    id: "01",
    title: "Powerful RESTful API",
    bgColor: "bg-[#FBF8FE]",
    points: [
      "Modern JSON-based endpoints",
      "Predictable, easy-to-integrate format",
      "Fast responses & scalable infra",
      "Rate limits to match your growth"
    ],
    description: `Our developer-first API is designed for speed, scale, and simplicity. Whether you're enriching leads or verifying emails, get real-time data in a few lines of code.`,
    emphasis: "Built by engineers—for engineers."
  },
  {
    id: "02",
    title: "Bulk Operations at Scale",
    bgColor: "bg-[#FEF0EC]",
    points: [
      "Async bulk enrichment with job status",
      "Up to 100,000 records per call",
      "CSV and JSON input supported",
      "Webhook callbacks for completion"
    ],
    description: `Automate large-scale data processing without bottlenecks. Our bulk endpoints allow you to clean, enrich, and verify leads with minimal effort.`
  },
  {
    id: "03",
    title: "Secure & Compliant",
    bgColor: "bg-[#FFF6F7]",
    description: `We take data protection seriously. Every API call is encrypted, rate-controlled, and monitored. GDPR and CCPA-ready with full audit trails.`
  },
  {
    id: "04",
    title: "Developer-Friendly Docs",
    bgColor: "bg-[#EAF2FB]",
    description: `Our API docs are interactive and easy to follow—with clear examples, sandbox testing, and Postman collections to speed up your dev time.`
  },
  {
    id: "05",
    title: "Flexible Authentication & Keys",
    bgColor: "bg-[#FBF8FE]",
    description: `Issue and manage API keys via dashboard. Use environment-based key control for staging vs. production. Rotate securely with no downtime.`
  }
]

export default function DeveloperApiFeatures() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 inline-block">
            Why Developers Choose <span className="text-[#6c3cbe]">Exellius</span>{" "}
            <span className="whitespace-nowrap">API Hub</span>
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
