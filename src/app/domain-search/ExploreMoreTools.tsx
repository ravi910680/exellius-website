"use client"

import { CheckCircle } from "lucide-react"

export default function ExploreMoreTools() {
  const tools = [
    {
      name: "Lead Discovery",
      bg: "bg-[#FEF0EC]",
    },
    {
      name: "Advanced Email Verifier",
      bg: "bg-[#EAF3FB]",
    },
    {
      name: "Bulk Email Finder",
      bg: "bg-[#FEF0F8]",
    },
  ]

  return (
    <section className="bg-white  px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12">Explore More Tools:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {tools.map((tool, index) => (
            <div
              key={index}
              className={`${tool.bg} w-full max-w-xs rounded-lg py-10 px-6 flex items-center justify-center gap-2`}
            >
              <CheckCircle className="w-5 h-5 text-[#9856F2]" />
              <span className="text-[#9856F2] font-medium">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
