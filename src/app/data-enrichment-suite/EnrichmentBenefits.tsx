"use client"

import Image from "next/image"

export default function EnrichmentBenefits() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Who Can Benefit from <span className="text-[#9856F2]">Exellius’</span> Data Enrichment Platforms?
        </h2>
        <div className="h-1 w-20 bg-[#9856F2] mt-4 mb-6 mx-auto rounded" />
        <p className="text-gray-700 text-base mb-12">Our data enrichment services are ideal for:</p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              title: "Sales Teams",
              description: "Access accurate contact details for better outreach.",
              bg: "bg-[#F7F2FE]",
              image: "/icons/sales.png",
            },
            {
              title: "Marketing Teams",
              description: "Improve segmentation with enriched customer data.",
              bg: "bg-[#EAF2FD]",
              image: "/icons/marketing.png",
            },
            {
              title: "Data Analysts",
              description: "Ensure clean, reliable datasets for analytics.",
              bg: "bg-[#FEF1EC]",
              image: "/icons/analytics.png",
            },
            {
              title: "Customer Support",
              description: "Enhance service with complete customer profiles.",
              bg: "bg-[#F3EEFF]",
              image: "/icons/support.png",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className={`rounded-xl ${card.bg} p-6 text-left flex flex-col items-start gap-4 shadow-sm border border-gray-200`}
            >
              <Image
                src={card.image}
                alt={card.title}
                width={60}
                height={50}
                className="mb-4"
                
              />
              <h4 className="font-semibold text-lg text-gray-900">{card.title}</h4>
              <p className="text-sm text-gray-700">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
