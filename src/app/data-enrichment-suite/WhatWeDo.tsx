"use client"

import React from "react"

export default function EnrichmentBenefits() {
  const cards = [
    {
      id: "01",
      title: "Improved Lead Conversion with Contact Enrichment",
      desc: "By enriching lead data with verified business emails, phone numbers, and firmographics, sales teams can prioritize high-value prospects effectively.",
    },
    {
      id: "02",
      title: "Enhanced Customer Profiles for Better Targeting",
      desc: "Customer profile enrichment ensures marketing campaigns are highly personalized, increasing engagement and conversion rates.",
    },
    {
      id: "03",
      title: "Reduced Manual Data Entry with Automated Enrichment",
      desc: "Our automated data enrichment eliminates the need for manual updates, saving time and reducing errors.",
    },
    {
      id: "04",
      title: "Higher ROI on Marketing Campaigns",
      desc: "With enriched data, businesses can run hyper-targeted campaigns, reducing wasted ad spend and improving overall marketing efficiency.",
    },
  ]

  return (
    <section className="bg-[#FFF5FD] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          See What Our Data <span className="text-[#9856F2]">Enrichment</span> Can Do<br />
          For Your Business
        </h2>
        <div className="w-20 h-1 bg-[#9856F2] mt-4 mx-auto mb-12" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {cards.map(({ id, title, desc }, index) => (
          <div
            key={index}
            className="relative bg-[#fdf4db] p-6 rounded-lg overflow-hidden"
          >
            {/* Background Number */}
            <div
  className="text-[120px] font-bold text-[#f5dcca] right-6 z-0 opacity-30 select-none text-right leading-none"
>
  {id}
</div>


            {/* Foreground Content */}
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-gray-900">
                {title}
              </h3>
              <p className="mt-2 text-gray-700">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
