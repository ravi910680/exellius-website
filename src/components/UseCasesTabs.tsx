"use client"

import { useEffect, useState } from "react"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const tabs = [
  {
    title: "Sales Teams",
    key: "sales",
    highlights: [
      "<strong>CEOs/Founders</strong> (92% coverage)",
      "<strong>VP/Director-level</strong> (88% coverage)",
      "<strong>Department Heads</strong> (95% coverage)",
    ],
    metrics: [
      { value: "40%", label: "faster sales cycles" },
      { value: "30%", label: "more meetings booked" },
      { value: "25%", label: "higher conversion rates" },
    ],
    cta: "Get Sales Team Toolkit",
    lineBreak: "Average customer results:",
  },
  {
    title: "Recruiters",
    key: "recruiters",
    highlights: [
      "Find <strong>work emails</strong> for 85% of Fortune 500 employees",
      "Verify <strong>personalized addresses</strong> (first.last@company)",
      "Access <strong>alternative contacts</strong> when roles change",
    ],
    metrics: [
      { value: "3x", label: "more responses than InMail" },
      { value: "50%", label: "reduction in sourcing time" },
      { value: "65%", label: "candidate engagement rate" },
    ],
    cta: "See Recruiting Templates",
    lineBreak: "Proven outcomes:",
  },
  {
    title: "E-commerce & Sellers",
    key: "ecommerce",
    highlights: [
      "<strong>Contact 1M+ FBA sellers</strong> by category/rating",
      "Identify <strong>high-volume wholesale buyers</strong>",
      "Track <strong>new marketplace entrants</strong> weekly",
    ],
    metrics: [
      { value: "120%", label: "more wholesale partnerships" },
      { value: "40%", label: "faster deal cycles" },
      { value: "$250k+", label: "avg. incremental revenue" },
    ],
    cta: "Explore Data",
    lineBreak: "Proven outcomes:",
  },
]

export default function UseCasesTabs() {
  const [activeTab, setActiveTab] = useState("sales")

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevKey) => {
        const currentIndex = tabs.findIndex((tab) => tab.key === prevKey)
        const nextIndex = (currentIndex + 1) % tabs.length
        return tabs[nextIndex].key
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const tabData = tabs.find((tab) => tab.key === activeTab)!

  return (
    <section className="relative w-full bg-[#f5f2fc] py-10 px-4 overflow-hidden">
      {activeTab !== "sales" && (
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-[url('/bottom-decor.png')] bg-contain bg-no-repeat bg-right" />
      )}
      {activeTab === "sales" && (
        <div className="absolute top-0 left-0 w-48 h-48 bg-[url('/top-decor.png')] bg-contain bg-no-repeat bg-left" />
      )}

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold text-gray-900">
          How Teams Use <span className="text-[#9856F2]">Exellius</span>
        </h2>
        <p className="text-2xl font-bold text-gray-600 italic mt-4">
          Transform Workflows Across Your Organization
        </p>
        <div className="w-36 h-1 bg-[#9856F2] rounded mx-auto mt-6 mb-10" />

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {tabs.map((tab, index) => (
            <button
              key={tab.key}
              onMouseEnter={() => setActiveTab(tab.key)}
              className={`group relative w-[400px] px-10 py-4 rounded-md font-bold text-2xl text-center items-center gap-2 overflow-hidden transition-all duration-500 ${
                activeTab === tab.key
                  ? "bg-[#cbf0ff] text-[#000] border-b-4 border-[#9856F2]"
                  : "bg-white text-gray-900"
              }`}
            >
              <span className="absolute inset-0 z-0 before:content-[''] before:absolute before:inset-0 before:bg-[url('/button-bottom.png')] before:bg-no-repeat before:bg-[center_bottom] before:bg-[length:100%_100%] before:transition-all before:duration-500 before:transform group-hover:before:bg-[left_top] group-hover:before:rotate-90 group-hover:before:origin-top-right" />
              <span className="text-[#9856F2] z-10">{index + 1}. </span>
              <span className="z-10">{tab.title}</span>
              {activeTab === tab.key && (
                <span className="absolute top-0 left-0 w-20 h-20 bg-[url('/button-bottom.png')] bg-no-repeat bg-contain z-0" />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-6 sm:p-10 shadow-lg w-full max-w-full mx-auto text-center"
          >
            <h3 className="text-3xl font-bold text-[#9856F2] mb-4">
              {tabs.findIndex((t) => t.key === activeTab) + 1}. {tabData.title}
            </h3>
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              {activeTab === "sales"
                ? "Close 30% More Deals with Verified Executive Contacts"
                : activeTab === "recruiters"
                ? "Source Candidates 3x Faster with Direct Emails"
                : "Find Wholesale Buyers in Amazon’s Marketplace"}
            </h4>

            <ul
              className={`${
                activeTab === "sales"
                  ? "flex flex-col sm:flex-row flex-wrap justify-center gap-6"
                  : "flex flex-col gap-4 items-center"
              } text-lg text-gray-800 mb-10`}
            >
              {tabData.highlights.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle className="text-[#9856F2] w-7 h-7 sm:w-6 sm:h-6 md:w-5 md:h-5" />
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>

            <h4 className="text-xl font-bold text-gray-900 mb-10">
              {tabData.lineBreak}
            </h4>

            <div className="grid grid-cols-3 gap-6 text-center mb-8 justify-items-center">
              {tabData.metrics.map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-bold text-[#9856F2]">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>

            <Button className="bg-[#9856F2] hover:bg-[#813fe0] text-white px-6 py-4 text-base font-semibold rounded-md w-[300px]">
              {tabData.cta} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
