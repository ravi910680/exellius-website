"use client"

import Image from "next/image"

const benefits = [
  {
    title: "Sales Teams",
    description: "Close more deals with direct contact details.",
    image: "/icons/data-1.png", // replace with your actual image path
    bg: "bg-[#FAF6FF]",
  },
  {
    title: "Marketing Agencies",
    description: "Run hyper-targeted email campaigns.",
    image: "/icons/data-2.png",
    bg: "bg-[#EAF2FB]",
  },
  {
    title: "Recruiters",
    description: "Source top talent with verified professional emails.",
    image: "/icons/data-3.png",
    bg: "bg-[#FEF0EC]",
  },
  {
    title: "Startups & SMBs",
    description: "Accelerate growth with high-intent leads.",
    image: "/icons/data-4.png",
    bg: "bg-[#F5F0FF]",
  },
]

export default function BenefitCards() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Who Benefits from <span className="text-[#9856F2]">Exellius’</span> B2B Data Solutions?
          </h2>
          <div className="h-1 w-24 bg-[#9856F2] mx-auto mt-4 rounded" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, index) => (
            <div key={index} className={`rounded-xl p-6 text-left border ${item.bg}`}>
              <Image
                src={item.image}
                alt={item.title}
                width={40}
                height={40}
                className="mb-4"
              />
              <h3 className="font-semibold text-lg text-black mb-2">{item.title}</h3>
              <p className="text-sm text-gray-800">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
