"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

const features = [
  {
    id: "01",
    title: "Deep Technology Detection",
    bgColor: "bg-[#EAF2FB]",
    points: [
      "Detect CMS, frameworks, JS libraries",
      "Hosting provider, CDN, and SSL info",
      "Marketing & analytics tools",
      "Custom-built tech stacks"
    ],
    description: `Go beyond the surface. Our scanner uncovers a site's full tech stack with precision. From WordPress to Next.js to Cloudflare, we detect what powers any website.`,
    emphasis: "Build better strategies by knowing your competitors' infrastructure inside out."
  },
  {
    id: "02",
    title: "Fast & Reliable Results",
    bgColor: "bg-[#FBF8FE]",
    points: [
      "Scan any domain in seconds",
      "No sign-up or extensions required",
      "Cloud-based crawler engine",
      "99.9% uptime SLA"
    ],
    description: `Get detailed insights with just one click. Our engine ensures high-speed processing with maximum reliability, so your research workflow never hits a bottleneck.`
  },
  {
    id: "03",
    title: "Built for Sales & Marketing Teams",
    bgColor: "bg-[#FEF0EC]",
    description: `Understand which technologies your prospects use—before reaching out. Target by tech stack, use technographic filters, and personalize your pitch based on actual tooling data.`
  },
  {
    id: "04",
    title: "Tech Change Monitoring",
    bgColor: "bg-[#FFF6F7]",
    description: `Track changes in your competitors' tech stack over time. We alert you when websites add or drop tools—giving you a strategic edge in outreach or product development.`
  },
  {
    id: "05",
    title: "Free to Use & Developer-Friendly",
    bgColor: "bg-[#FBF8FE]",
    description: `Start scanning websites without logging in. For developers and teams, we also offer an API to automate workflows, build integrations, or enrich your CRM with tech data.`
  }
]

export default function TechCheckerFeatures() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 inline-block">
            Why Use <span className="text-[#6c3cbe]">Exellius</span> for{" "}
            <span className="whitespace-nowrap">
              Website Tech
              <br className="hidden md:block" />
            </span>{" "}
            Discovery?
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
