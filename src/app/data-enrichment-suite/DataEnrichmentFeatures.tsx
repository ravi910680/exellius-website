"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

const features = [
  {
    id: "01",
    title: "Fill in Missing Lead Details",
    bgColor: "bg-[#FBF8FE]",
    points: [
      "Email addresses & phone numbers",
      "Job titles and seniority levels",
      "Company size, industry, location",
      "LinkedIn URLs and social links"
    ],
    description: `Incomplete data hurts conversions. Our enrichment engine instantly fills in missing contact and company details, so your sales team never works with guesswork.`,
    emphasis: "Upgrade every record in your CRM to be sales-ready in seconds."
  },
  {
    id: "02",
    title: "Real-Time CRM Enrichment",
    bgColor: "bg-[#FEF0EC]",
    points: [
      "Integrate with HubSpot, Salesforce & more",
      "Enrich leads as they enter your funnel",
      "Auto-update outdated info daily",
      "Trigger workflows based on enriched fields"
    ],
    description: `Bring your data to life with seamless CRM enrichment. Push updates in real-time or enrich historical data at scale—no spreadsheets needed.`
  },
  {
    id: "03",
    title: "Account-Level Firmographics",
    bgColor: "bg-[#FFF6F7]",
    description: `Understand the full picture of every account. Enrich with firmographic data such as revenue, employee count, funding, and tech stack—all mapped to domain.`
  },
  {
    id: "04",
    title: "Sales & Marketing Ready Data",
    bgColor: "bg-[#EAF2FB]",
    description: `Get clean, actionable data tailored for GTM teams. Personalize outreach with confidence, reduce bounce rates, and prioritize high-fit accounts from day one.`
  },
  {
    id: "05",
    title: "Flexible API & Bulk Uploads",
    bgColor: "bg-[#FBF8FE]",
    description: `Whether you're enriching 10,000 records or building a custom integration, our enrichment engine scales with you. Upload CSVs or automate via API with ease.`
  }
]

export default function DataEnrichmentFeatures() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 inline-block">
            Why Choose <span className="text-[#6c3cbe]">Exellius</span> for{" "}
            <span className="whitespace-nowrap">
              Lead Data
              <br className="hidden md:block" />
            </span>{" "}
            Enrichment?
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
