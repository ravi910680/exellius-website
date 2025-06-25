"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

const features = [
  {
    id: "01",
    title: "Global Seller Coverage",
    bgColor: "bg-[#FBF8FE]",
    points: [
      "Millions of active Amazon sellers worldwide",
      "Covers US, UK, DE, IN, and 15+ marketplaces",
      "Private label, FBA, wholesale, and DTC sellers",
    ],
    description:
      "Tap into a rich database of Amazon sellers across every region and fulfillment model. Get real-time access to their store URLs, brand names, and selling categories.",
    emphasis: "Expand your TAM beyond just Shopify—Amazon sellers are scaling fast."
  },
  {
    id: "02",
    title: "Actionable Seller Intelligence",
    bgColor: "bg-[#FEF0EC]",
    points: [
      "Estimated monthly revenue & order volume",
      "Seller ratings, reviews & product count",
      "Fulfillment model: FBA, FBM, or hybrid",
    ],
    description:
      "Prioritize sellers by size, performance, and market presence. Use sales signals to score prospects and focus on accounts with actual momentum."
  },
  {
    id: "03",
    title: "Verified Decision-Maker Data",
    bgColor: "bg-[#FFF6F7]",
    points: [
      "Founder, eCommerce, and growth roles",
      "Verified emails & LinkedIn URLs",
      "Phone numbers & business websites",
    ],
    description:
      "Find and connect with the people behind the store. Reach Amazon sellers via verified contact data and skip the manual LinkedIn scraping."
  },
  {
    id: "04",
    title: "Flexible Filters & Bulk Exports",
    bgColor: "bg-[#EAF2FB]",
    points: [
      "Filter by category, country, revenue, or reviews",
      "Export as CSV or push via API",
      "Sync with CRMs like HubSpot or Salesforce",
    ],
    description:
      "Whether you're enriching leads, building audiences, or running cold outreach, Exellius makes it easy to extract the exact seller data you need—at scale."
  }
]

export default function AmazonSellerFeatures() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 inline-block">
            What You Get with <span className="text-[#6c3cbe]">Amazon Seller Data</span>
          </h2>
          <div className="h-1 w-40 bg-[#6c3cbe] mt-8 rounded mx-auto"></div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature }: { feature: typeof features[0] }) {
  return (
    <div className={`relative overflow-hidden p-6 rounded-xl border border-gray-200 ${feature.bgColor}`}>
      {/* Optional background pattern */}
      <div className="absolute inset-y-0 right-0 w-64">
        <Image
          src="/grp-bg.png"
          alt=""
          fill
          className="opacity-40"
        />
      </div>

      {/* Text */}
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
