"use client"

import { useState } from "react"
import { Check } from "lucide-react"

export default function ExelliusPricingTabs() {
  const [activeTab, setActiveTab] = useState<"outreach" | "data">("outreach")
  const [activeBilling, setActiveBilling] = useState("monthly")

  const features = [
    "Email Finder",
    "Mobile Finder",
    "Email Verifier",
    "Domain Search",
    "API Access",
    "Bulk Processing",
    "Priority Support",
  ]

  const plans = [
    {
      name: "Free",
      price: "$0/month",
      credits: "75 credits ?",
      bg: "bg-white",
      features: [true, true, true, true, true, false, false],
    },
    {
      name: "Basic",
      price: "$59/month",
      credits: "6,000 credits ?",
      bg: "bg-[#f4f8ff]",
      features: [true, true, true, true, true, true, false],
    },
    {
      name: "Growth",
      price: "$119/month",
      credits: "13,000 credits ?",
      bg: "bg-[#fef4f1]",
      features: [true, true, true, true, true, true, true],
    },
    {
      name: "Professional",
      price: "$199/month",
      credits: "21,000 credits ?",
      bg: "bg-[#f8f5ff]",
      features: [true, true, true, true, true, true, true],
    },
  ]

  return (
    <section className="bg-white px-4 md:px-8 py-20 pb-0">
      <div className="max-w-7xl mx-auto">

      <div className="flex border-b border-[#f1f1f1]">
  {/* Outreach Tab */}
  <button
    onClick={() => setActiveTab("outreach")}
    className={`w-1/2 text-center pb-4 border-b-4 ${
      activeTab === "outreach" ? "border-[#9856f2]" : "border-transparent"
    }`}
  >
    <p className="text-md font-medium text-gray-400 mb-0.5">
      All-in-one outreach platform
    </p>
    <p className="text-2xl font-semibold text-black">
      Find, verify and send cold emails
    </p>
  </button>

  {/* Data Platform Tab */}
  <button
    onClick={() => setActiveTab("data")}
    className={`w-1/2 text-center pb-4 border-b-4 ${
      activeTab === "data" ? "border-[#9856f2]" : "border-transparent"
    }`}
  >
    <p className="text-md font-medium text-gray-400 mb-0.5">
      Data Platform
    </p>
    <p className="text-2xl font-semibold text-black">
      Data solutions for your application
    </p>
  </button>
</div>




        {/* ======================== OUTREACH TAB ======================== */}
        {activeTab === "outreach" && (
          <>
            <div className="overflow-x-auto">
              <div className="grid grid-cols-[340px_repeat(4,minmax(200px,1fr))] w-full border-t border-gray-200">
                {/* Left Column */}
                <div className="border-b border-r px-4 py-6">
                  <div className="inline-flex rounded-full border border-gray-200 p-1 bg-[#f5f0fd] mb-4">
                    <button
                      className={`px-4 py-1.5 text-sm font-semibold rounded-full transition ${
                        activeBilling === "monthly" ? "bg-white text-[#9856f2]" : "text-gray-500"
                      }`}
                      onClick={() => setActiveBilling("monthly")}
                    >
                      Monthly
                    </button>
                    <button
                      className={`px-4 py-1.5 text-sm font-semibold rounded-full transition ${
                        activeBilling === "yearly" ? "bg-white text-[#9856f2]" : "text-gray-500"
                      }`}
                      onClick={() => setActiveBilling("yearly")}
                    >
                      Yearly Plans Save up to <span className="text-[#9856f2] font-bold">25%</span>
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mb-6">
                    <strong className="text-black">Unlimited seats.</strong><br />
                    Upgrade or downgrade at anytime.
                  </p>
                  <div className="space-y-5 text-sm font-medium text-black">
                    {features.map((f, i) => (
                      <div key={i}>{f}</div>
                    ))}
                  </div>
                </div>

                {/* Right Plans */}
                {plans.map((plan, idx) => (
                  <div key={idx} className={`border-l border-b px-4 py-6 ${plan.bg}`}>
                    <h4 className="text-base font-semibold text-black mb-1">{plan.name}</h4>
                    <p className="text-xl font-bold text-[#9856f2] mb-1">{plan.price}</p>
                    <p className="text-sm text-gray-500 mb-4">{plan.credits}</p>
                    <button className="w-full bg-[#9856f2] hover:bg-[#7b44ca] text-white py-2 rounded-md text-sm font-semibold mb-4">
                      Buy now
                    </button>
                    <hr className="mb-4 border-[#ddd]" />
                    <ul className="space-y-5 text-sm text-black">
                      {plan.features.map((hasFeature, i) => (
                        <li key={i} className="h-5 flex items-center">
                         {hasFeature ? (
  <Check className="w-4 h-4 text-[#9856f2]" />
) : (
  <span className="w-4 h-4 inline-block text-center text-gray-400">–</span>
)}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ======================== DATA PLATFORM TAB ======================== */}
        {activeTab === "data" && (
          <>
          <div className="p-10 bg-[#FFF5FD]" >
            <h2 className="text-3xl font-bold text-center mb-4 ">
              Access exellius data via API.
            </h2>
            <p className="text-center text-sm text-gray-500 max-w-2xl mx-auto mb-12">
              Exellius Data Platform is a flexible way to access our email finding and verification services at scale.
              Determine how many credits you need, and only pay for the credits you’re planning to spend.
            </p>

            <div className="grid md:grid-cols-2 gap-8  p-8 rounded-xl">
              {/* Sliders */}
              <div>
                <h4 className="text-lg font-semibold mb-6">How many credits do you want to purchase?</h4>
                {["Search", "Email", "Verification", "Phone"].map((type) => (
                  <div key={type} className="mb-6">
                    <div className="text-sm font-medium text-black mb-1">{type} Credits</div>
                    <input
                      type="range"
                      min={1000}
                      max={1000000}
                      step={1000}
                      defaultValue={10000}
                      className="w-full accent-[#9856f2]"
                    />
                    <div className="text-xs flex justify-between text-gray-400 mt-1">
                      <span>1,000</span>
                      <span>10,000</span>
                      <span>100,000</span>
                      <span>1M</span>
                    </div>
                  </div>
                  
                ))}
              </div>

              {/* Summary Box */}
              <div className="bg-white rounded-xl p-6 shadow text-center">
                <p className="text-sm text-gray-400 mb-1">Your credits purchase</p>
                <h3 className="text-3xl font-bold mb-6">$4,000 USD</h3>
                <ul className="text-sm text-black space-y-4 mb-6 border-t pt-4">
                  <li className="flex justify-between"><span>10,000 Search Credits</span><span>$1,000USD</span></li>
                  <li className="flex justify-between"><span>10,000 Email Credits</span><span>$1,000USD</span></li>
                  <li className="flex justify-between"><span>10,000 Verification Credits</span><span>$1,000USD</span></li>
                  <li className="flex justify-between"><span>10,000 Phone Credits</span><span>$1,000USD</span></li>
                </ul>
                <button className="w-full bg-[#9856f2] hover:bg-[#7c45d2] text-white font-semibold py-2 rounded-md">
                  Get started
                </button>
              </div>
            </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
