"use client"

import Image from "next/image"

const industries = [
  {
    title: "Technology & SaaS",
    icon: "/icons/tech-saas.png"
  },
  {
    title: "Healthcare & Pharma",
    icon: "/icons/healthcare.png"
  },
  {
    title: "Finance & Banking",
    icon: "/icons/finance.png"
  },
  {
    title: "Manufacturing & Logistics",
    icon: "/icons/manufacturing.png"
  },
  {
    title: "Retail & E-commerce",
    icon: "/icons/retail.png"
  }
]

export default function IndustriesWeServe() {
  return (
    <section className=" px-6 bg-white py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Industries <span className="text-[#6c3cbe]">We Serve</span>
        </h2>
        <p className="mt-4 text-base text-gray-700">
          We offer <strong>B2B lead</strong> data for multiple industries, including:
        </p>
        <div className="h-1 w-20 bg-[#6c3cbe] mt-4 mb-12 mx-auto rounded"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((item, i) => (
            <div
              key={i}
              className="bg-[#FFF6F7] rounded-xl p-6 shadow-sm hover:shadow-md transition text-center flex flex-col items-center justify-center"
            >
              <div className="mb-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h4 className="font-semibold text-sm text-gray-900">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
