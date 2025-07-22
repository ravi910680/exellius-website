"use client";

import { useState } from "react";
import { Check, Info } from "lucide-react";

// Credit Types with Tooltips
const creditTypes = [
  {
    key: "emailFinder",
    label: "Email Credits",
    description: "1 credit",
    pricePerCredit: 0.01,
    tooltip: "1 credit per valid email found",
  },
  {
    key: "mobileFinder",
    label: "Mobile Number Finder",
    description: "5 credits",
    pricePerCredit: 0.01,
    tooltip: "5 credits per mobile number found",
  },
  {
    key: "emailVerifier",
    label: "Email Verifier",
    description: "1 credit",
    pricePerCredit: 0.01,
    tooltip: "1 credit per email verified",
  },
  {
    key: "domainSearch",
    label: "Domain Search",
    description: "1 credit",
    pricePerCredit: 0.01,
    tooltip: "1 credit per domain search",
  },
];

function formatCurrency(val) {
  return `$${val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export default function ExelliusPricingTabs() {
  const [activeTab, setActiveTab] = useState<"outreach" | "data">("outreach");
  const [activeBilling, setActiveBilling] = useState("monthly");

  // ---- Credit Bundles State ----
  const [creditCounts, setCreditCounts] = useState({
    emailFinder: 10000,
    mobileFinder: 10000,
    emailVerifier: 10000,
    domainSearch: 10000,
  });
  

  const totalCredits = Object.values(creditCounts).reduce((a, b) => a + b, 0);
  const totalPrice =
    creditTypes
      .map(type => creditCounts[type.key] * type.pricePerCredit)
      .reduce((a, b) => a + b, 0);

  function handleSliderChange(typeKey: keyof typeof creditCounts, value: number) {
    setCreditCounts(prev => ({
      ...prev,
      [typeKey]: value,
    }));
  }

  async function handleBuyCredits() {
    window.location.href = `https://app.exellius.com/signup?credits=${totalCredits}`;
  }

  // Features as displayed in rows
  const features = [
    "Email Finder",
    "Mobile Finder",
    "Email Verifier",
    "Domain Search",
    "API Access",
    "Bulk Processing",
    "Priority Support",
  ];

  // Plans now ONLY contain meta details and their feature booleans row-by-row
  const plans = [
    {
      name: "Free",
      price: "$0/month",
      year_price: "$0/month",
      credits: "75 credits",
      bg: "bg-white",
      features: [true, true, true, true, true, false, false],
    },
    {
      name: "Basic",
      price: "$59/month",
      year_price: "$44/month",
      credits: "6,000 credits",
      bg: "bg-[#f4f8ff]",
      features: [true, true, true, true, true, true, false],
    },
    {
      name: "Growth",
      price: "$99/month",
      year_price: "$89/month",
      credits: "13,000 credits",
      bg: "bg-[#fef4f1]",
      features: [true, true, true, true, true, true, true],
    },
    {
      name: "Professional",
      price: "$199/month",
      year_price: "$149/month",
      credits: "21,000 credits",
      bg: "bg-[#f8f5ff]",
      features: [true, true, true, true, true, true, true],
    },
  ];

  // Tooltip message for info icon
  const creditsTooltip =
    "Credits are the currency used to access various features such as email addresses, mobile numbers, email verification, and domain search.";

  return (
    <section className="bg-white px-4 md:px-8 py-20 pb-0">
      <div className="max-w-7xl mx-auto">

        {/* Tab Selectors */}
        <div className="flex border-b border-[#f1f1f1]">
          <button
            onClick={() => setActiveTab("outreach")}
            className={`w-1/2 text-center pb-4 border-b-4 ${activeTab === "outreach" ? "border-[#9856f2]" : "border-transparent"}`}
          >
            <p className="text-md font-medium text-gray-400 mb-0.5">
              All-in-one outreach platform
            </p>
            <p className="text-2xl font-semibold text-black">
              Find, verify and send cold emails
            </p>
          </button>
          <button
            onClick={() => setActiveTab("data")}
            className={`w-1/2 text-center pb-4 border-b-4 ${activeTab === "data" ? "border-[#9856f2]" : "border-transparent"}`}
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
          <div className="overflow-x-auto w-full">
            <div className="min-w-[900px]">

              {/* Table Header for Plans */}
              <div className="grid grid-cols-[340px_repeat(4,1fr)] border-gray-200">
                {/* Left top cell with billing toggle and info text */}
                <div className="py-4 px-4 flex flex-col justify-center">
                  <div className="inline-flex rounded-full border border-gray-200 p-1 bg-[#f5f0fd] mb-3">
                    <button
                      className={`px-4 py-1.5 text-sm font-semibold rounded-full transition ${activeBilling === "monthly" ? "bg-white text-[#9856f2]" : "text-gray-500"
                        }`}
                      onClick={() => setActiveBilling("monthly")}
                    >
                      Monthly
                    </button>
                    <button
                      className={`px-4 py-1.5 text-sm font-semibold rounded-full transition ${activeBilling === "yearly" ? "bg-white text-[#9856f2]" : "text-gray-500"
                        }`}
                      onClick={() => setActiveBilling("yearly")}
                    >
                      Yearly Plans Save up to <span className="text-[#9856f2] font-bold">25%</span>
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 leading-snug max-w-[200px]">
                    <strong className="text-black">Unlimited seats.</strong> Upgrade or downgrade at anytime.
                  </p>
                </div>

                {/* Plan headers */}
                {plans.map((plan, idx) => (
                  <div
                    key={plan.name}
                    className={`flex flex-col items-center py-4 px-2 ${idx === 0 ? "bg-white" : plan.bg
                      }`}
                  >
                    <div className="text-base font-semibold text-black">{plan.name}</div>
                    <div className="text-xl font-bold text-[#9856f2] py-5">{activeBilling === "monthly" ? plan.price : plan.year_price}</div>
                    <div className="text-sm text-gray-500 pb-5 flex items-center relative gap-1 mb-0">
                      {plan.credits}
                      <span className="relative group flex items-center">
                        <Info className="w-4 h-4 text-[#9856f2] ml-1 cursor-pointer" />
                        <span className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 text-xs bg-black text-white rounded px-3 py-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 shadow-lg">
                          {creditsTooltip}
                        </span>
                      </span>
                    </div>
                    <a
                      href="https://app.exellius.com/signup"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[140px] bg-[#9856f2] hover:bg-[#7b44ca] text-white py-2 rounded-md text-sm font-semibold mb-4 text-center inline-block"
                    >
                      Buy now
                    </a>
                    <hr className="w-3/4 mt-2 mb-3 border-[#9856f2] border-t-2" />
                  </div>
                ))}
              </div>

              {/* Feature Rows */}
              {features.map((feature, fIdx) => (
                <div
                  className="grid grid-cols-[340px_repeat(4,1fr)] items-center"
                  key={fIdx}
                  style={{ minHeight: 36 }}
                >
                  {/* Feature Name column*/}
                  <div className="py-3 px-2 font-medium text-sm text-black bg-white">
                    {feature}
                  </div>
                  {/* Plan feature cells */}
                  {plans.map((plan, pIdx) => (
                    <div
                      key={plan.name}
                      className={`flex justify-center items-center py-3 ${pIdx === 0 ? "bg-white" : plan.bg
                        }`}
                    >
                      {plan.features[fIdx] ? (
                        <Check className="w-4 h-4 text-[#9856f2]" strokeWidth={3} />
                      ) : (
                        <span className="w-4 h-4 inline-block text-center text-gray-400">–</span>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================== DATA PLATFORM TAB ======================== */}
        {activeTab === "data" && (
          <div className="p-10 bg-[#FFF5FD]">
            <h2 className="text-3xl font-bold text-center mb-4">
              Access exellius data via API.
            </h2>
            <p className="text-center text-sm text-gray-500 max-w-2xl mx-auto mb-12">
              Exellius Data Platform is a flexible way to access our email finding and verification services at scale.
              Determine how many credits you need, and only pay for the credits you’re planning to spend.
            </p>
            <div className="grid md:grid-cols-2 gap-8 p-8 rounded-xl">
              {/* Sliders */}
              <div>
                <h4 className="text-lg font-semibold mb-6">How many credits do you want to purchase?</h4>
                {creditTypes.map((type) => (
                  <div key={type.key} className="mb-8">
                    <div className="flex items-center mb-2 gap-1">
                      <span className="font-semibold">{type.label}</span>
                      <span className="ml-2 text-gray-400 text-xs">{type.description}</span>
                      <span className="relative group flex items-center">
                        <Info className="w-4 h-4 text-[#9856f2] ml-1 cursor-pointer" />
                        <span className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 text-xs bg-black text-white rounded px-3 py-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 shadow-lg">
                          {type.tooltip}
                        </span>
                      </span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={1000000}
                      step={1}
                      value={creditCounts[type.key as keyof typeof creditCounts]}
                      onChange={(e) => handleSliderChange(type.key as keyof typeof creditCounts, Number(e.target.value))}
                      className="w-full accent-[#9856f2]"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>1</span>
                      
                      <span>1M</span>
                    </div>
                  </div>
                ))}
              </div>
              {/* Summary Box */}
              <div className="bg-white rounded-xl p-6 shadow text-center">
                <p className="text-sm text-gray-400 mb-1">Your credits purchase</p>
                <h3 className="text-3xl font-bold mb-6">{formatCurrency(totalPrice)} USD</h3>
                <ul className="text-sm text-black space-y-4 mb-6 border-t pt-4">
                  {creditTypes.map((type) => (
                    <li className="flex justify-between" key={type.key}>
                      <span>{creditCounts[type.key as keyof typeof creditCounts].toLocaleString()} {type.label}</span>
                      <span>{formatCurrency(creditCounts[type.key as keyof typeof creditCounts] * type.pricePerCredit)}</span>
                    </li>
                  ))}
                </ul>
                <div className="mb-4 text-gray-600 text-sm">
                  <b>Total Credits:</b> {totalCredits.toLocaleString()}
                </div>
                <button
                  className={`w-full bg-[#9856f2] hover:bg-[#7c45d2] text-white font-semibold py-2 rounded-md ${buyingCredits ? "opacity-60 cursor-wait" : ""}`}
                  disabled={buyingCredits || totalPrice === 0}
                  onClick={handleBuyCredits}
                >
                 Buy Now
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
