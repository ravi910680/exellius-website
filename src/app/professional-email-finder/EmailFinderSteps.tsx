"use client"

import { User, Globe, MailCheck } from "lucide-react"

export default function EmailFinderSteps() {
  return (
    <section className="bg-[#FFF7FF] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          How Does the <span className="text-[#9856F2]">Email Finder</span> Work?
        </h2>
        <div className="h-1 w-16 bg-[#9856F2] mx-auto mb-8" />

        {/* Subtext */}
        <p className="text-gray-700 mb-12 text-base max-w-2xl mx-auto">
          Exellius’ <strong>email extractor</strong> simplifies prospecting with a straightforward process:
        </p>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 px-6 py-8 text-left hover:shadow-md transition">
            <User className="w-8 h-8 text-[#9856F2] mb-4" />
            <h4 className="text-[#9856F2] font-semibold text-lg mb-2">Enter the Full Name</h4>
            <p className="text-gray-700 text-sm">
              Provide the professional’s first and last name.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 px-6 py-8 text-left hover:shadow-md transition">
            <Globe className="w-8 h-8 text-[#9856F2] mb-4" />
            <h4 className="text-[#9856F2] font-semibold text-lg mb-2">Add the Company Domain</h4>
            <p className="text-gray-700 text-sm">
              Our tool auto-suggests domains for accuracy.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 px-6 py-8 text-left hover:shadow-md transition">
            <MailCheck className="w-8 h-8 text-[#9856F2] mb-4" />
            <h4 className="text-[#9856F2] font-semibold text-lg mb-2">Get Verified Emails</h4>
            <p className="text-gray-700 text-sm">
              Receive validated email addresses instantly.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
