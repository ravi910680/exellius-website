"use client"

import { CheckCircle } from "lucide-react"
import Image from "next/image"

const plans = [
  {
    title: "Starter Plan Best For",
    icon: "/icons/starter.png",
    points: [
      "Solo entrepreneurs or SMBs",
      "Teams needing <500 leads/month",
      "Basic email prospecting",
    ],
    bg: "bg-white",
  },
  {
    title: "Growth Plan Best For",
    icon: "/icons/growth.png",
    points: [
      "Sales teams of 5-20 reps",
      "Companies running outbound campaigns",
      "Need for bulk verification + API access",
    ],
    bg: "bg-[#fff7f0]",
  },
  {
    title: "Enterprise Plan Best For",
    icon: "/icons/enterprise.png",
    points: [
      "Large-scale recruiting/revops teams",
      "Custom data enrichment workflows",
      "SOC-2 compliant data handling",
    ],
    bg: "bg-[#f4f8ff]",
  },
]

export default function PricingPlans() {
  return (
    <div className="text-center py-12 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-10">
        Which Plan is <span className="text-purple-600">Right</span> For You?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`${plan.bg} border border-gray-200 rounded-xl p-6 text-left shadow-sm`}
          >
            <div className="flex flex-col items-start mb-4">
              <Image
                src={plan.icon}
                alt="Plan Icon"
                width={40}
                height={40}
                className="h-10 w-10 object-contain "
              />
              <h3 className="text-lg font-semibold pt-5">{plan.title}</h3>
            </div>
            <ul className="space-y-2 mt-4">
              {plan.points.map((point, i) => (
                <li key={i} className="flex items-center text-sm">
                  <CheckCircle className="text-purple-600 w-4 h-4 mr-2" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 text-sm text-gray-600">
        Still unsure? <br />
        Contact us  to learn more about our pricing and plan options.
      </div>

      <div className="mt-6 flex justify-center gap-4">
        <a href="https://www.exellius.com/contact-us" 
  className="text-[#9856F2] font-medium hover:underline">
        <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition">
          Contact Us
        </button>
        </a>
         <a href="https://www.exellius.com/" 
  className="text-[#9856F2] font-medium hover:underline">
        <button className="border border-purple-600 text-purple-600 px-6 py-2 rounded-md hover:bg-purple-50 transition">
          Learn More
        </button>
        </a>
      </div>
    </div>
  )
}
