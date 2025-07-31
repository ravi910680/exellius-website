"use client"

import Image from "next/image"

const benefits = [
  {
    title: "Sales Teams",
    description: "Scale prospecting with verified leads",
    icon: "/icons/sales.png",
    bg: "#F8F2FF",
  },
  {
    title: "Marketers",
    description: "Build targeted email & phone lists",
    icon: "/icons/marketing.png",
    bg: "#E7F0FB",
  },
  {
    title: "Recruiters",
    description: "Source candidates efficiently",
    icon: "/icons/bulk-11.png",
    bg: "#FEF4F2",
  },
  {
    title: "Agencies",
    description: "Manage multiple client databases",
    icon: "/icons/bulk-12.png",
    bg: "#F8F2FF",
  },
]

export default function BulkToolBenefitsSection() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Who Benefits from <span className="text-[#9856F2]">Exellius</span> Bulk Tools?
        </h2>
        <div className="h-1 w-16 bg-[#9856F2] mx-auto my-6" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl text-left shadow-sm"
              style={{ backgroundColor: item.bg }}
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={36}
                height={36}
                className="mb-4"
              />
              <h4 className="font-semibold text-sm text-black mb-1">{item.title}</h4>
              <p className="text-xs text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
