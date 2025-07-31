"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    id: "01",
    title: "Why Access an Amazon Seller Database?",
    bgColor: "bg-[#FBF8FE]",
    points: [
      "Verified seller profiles with complete contact",
      "Filterable data by marketplace, category",
      "Regular updates to ensure data accuracy"
      
    ],
    description:
      "Navigating Amazon's vast marketplace can be challenging when trying to identify potential partners, competitors, or acquisition targets."
  },
  {
    id: "02",
    title: "Global Seller Network for Explosive Growth",
    bgColor: "bg-[#FEF0EC]",
    points: [
      "Top-rated sellers in 12 global marketplaces",
      "Buy Box dominators with 95%+ positive",
      "Emerging brands with viral growth potential"
    ],
    description: "Elite Seller Circle — Collaborate with Marketplace Leaders"
  },
  {
    id: "03",
    title: "Inventory Revolution",
    bgColor: "bg-[#FFF6F7]",
    points: [
      "Global inventory redistribution",
      "Seasonality-based stock absorption",
      "FBA/FBM hybrid flow management"
    ],
    description: "Smart Liquidation & FBA Optimization — Our vetted partners specialize in:"
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-20 text-center">
          <div className="flex flex-wrap justify-center gap-4">
  <a
    href="https://app.exellius.com/signup"
    target="_blank"
    rel="noopener noreferrer"
    className=""
  >
    <Button size="lg" className="bg-[#9856F2] hover:bg-[#5a30aa] text-white text-md">
      Join the Network
    </Button>
  </a>

  <a href="/data-platform" className="">
    <Button variant="outline" size="lg" className="text-[#9856F2] border-[#9856F2]">
      Optimize Your Supply Chain
    </Button>
  </a>
</div>

        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature }: { feature: typeof features[0] }) {
  return (
    <div className={`relative overflow-hidden p-6 rounded-xl border border-gray-200 ${feature.bgColor}`}>
      <div className="absolute inset-y-0 right-0 w-64">
        <Image
          src="/grp-bg.png"
          alt=""
          fill
          className="opacity-40"
        />
      </div>

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

       
      </div>
    </div>
  )
}
