"use client"

import Image from "next/image"

const features = [
  {
    id: "01",
    title: "Bulk Email Finder – Scale Your Outreach Efficiently",
    bgColor: "bg-[#FBF8FE]",
    description: `Need a large B2B email list for your campaigns? Our `,
    linkLabel: "Bulk Email Finder",
    link: "#",
    afterLink:
      " tool lets you upload domains or company names and extract verified emails in seconds—perfect for marketing and sales teams.",
  },
  {
    id: "02",
    title: "Professional Email Finder – Precision at Your Fingertips",
    bgColor: "bg-[#EAF2FB]",
    description: `Find the exact email formats of key decision-makers with our `,
    linkLabel: "Professional Email Finder",
    link: "#",
    afterLink:
      ". Just enter a name and company, and get accurate contact information instantly.",
  },
  {
    id: "03",
    title: "Phone Number Finder – Connect Directly with Prospects",
    bgColor: "bg-[#FEF0EC]",
    description: `Boost your cold calling success with our `,
    linkLabel: "Phone Number Finder",
    link: "#",
    afterLink:
      ", providing direct lines to executives and managers.",
  },
  {
    id: "04",
    title: "Domain Search – Discover All Associated Emails",
    bgColor: "bg-[#FBF8FE]",
    description: `Our Domain Search feature helps you uncover every professional email linked to a company, ensuring no potential lead is missed.`,
  },
]

export default function DataPlatformFeatures() {
  return (
    <section className="bg-white pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Key Features of Our B2B <span className="text-[#6c3cbe]">Email Data</span> Platform
          </h2>
          <div className="h-1 w-24 bg-[#6c3cbe] mt-4 mx-auto rounded" />
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  feature,
}: {
  feature: {
    id: string
    title: string
    bgColor: string
    description: string
    linkLabel?: string
    link?: string
    afterLink?: string
  }
}) {
  return (
    <div
      className={`relative overflow-hidden p-16 rounded-xl border border-gray-200 ${feature.bgColor}`}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/grp-bg.png"
          alt=""
          fill
          className=" opacity-50 pointer-events-none"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900">
          <span className="text-[#6c3cbe] font-bold">{feature.id}.</span>{" "}
          {feature.title}
        </h3>
        <div className="h-0.5 w-20 bg-[#6c3cbe] mb-4"></div>

        <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
          {feature.description}
          {feature.link && (
            <a href={feature.link} className="text-[#6c3cbe] underline font-medium">
              {feature.linkLabel}
            </a>
          )}
          {feature.afterLink}
        </p>
      </div>
    </div>
  )
}
