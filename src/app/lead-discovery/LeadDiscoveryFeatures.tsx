"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

const features = [
  {
    id: "01",
    title: "Verified & Accurate B2B Data",
    bgColor: "bg-[#FBF8FE]",
    points: [
      "Phone numbers",
      "Job titles & company details",
      "Verified Corporate emails",
      "Firmographics & technographics"
    ],
    description: `Not all lead databases are created equal. Many platforms offer outdated or unverified contacts, leading to wasted efforts. Exellius helps you find professional email addresses and verified B2B leads.`
    
  },
  {
    id: "02",
    title: "Extensive B2B Leads Database",
    bgColor: "bg-[#FEF0EC]",
    points: [
      "Filter leads by industry, company size, and location",
      "Identify key decision-makers (CEOs, CMOs, IT Directors, etc.)",
      "Access intent data to prioritize high-intent prospects"
    ],
    description: `Our B2B database covers millions of companies and decision-makers across industries. Whether you're targeting startups, mid-market businesses, or enterprises, Exellius helps you:`
  },
  {
    id: "03",
    title: "AI-Powered Lead Generation",
    bgColor: "bg-[#FFF6F7]",
    description: `Exellius leverages AI-driven insights to help you generate B2B leads that match your ideal customer profile (ICP). Our platform analyzes firmographic data to deliver precision-matched prospects.`
  },
  {
    id: "04",
    title: "Seamless CRM & Sales Tool Integration",
    bgColor: "bg-[#EAF2FB]",
    description: `Maximize efficiency by syncing Exellius with your CRM (Salesforce, HubSpot, Pipedrive) or sales engagement tools (Outreach, SalesLoft). Automate lead development and streamline your sales pipeline.`
  },
  {
    id: "05",
    title: "Cost-Effective B2B Lead Solutions",
    bgColor: "bg-[#FBF8FE]",
    description: `Instead of spending hours on manual prospecting or hiring expensive data providers, buy B2B leads from Exellius at a fraction of the cost. We offer pricing that ensures you only pay for the data you need.`
  }
]

export default function LeadDiscoveryFeatures() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
      <div className="mb-16 text-center">
  <h2 className="text-4xl font-bold text-gray-900 inline-block">
    Why Choose <span className="text-[#6c3cbe]">Exellius</span> for{" "}
    <span className="whitespace-nowrap">
      B2B
      <br className="hidden md:block" />
    </span>{" "}
    Lead Discovery?
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
      {/* Right-side background image (no padding, full height) */}
      <div className="absolute inset-y-0 right-0 w-64">
        <Image
          src="/grp-bg.png"
          alt=""
          fill
          className=" opacity-50"
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


        
      </div>
    </div>
  )
}
