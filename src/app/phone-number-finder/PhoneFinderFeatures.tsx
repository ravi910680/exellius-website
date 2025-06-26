"use client"

import Image from "next/image"

export default function PhoneFinderFeatures() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Key Features of <span className="text-[#9856F2]">Exellius’</span> Phone<br className="sm:hidden" />
          Number Finder
        </h2>
        <div className="h-1 w-20 bg-[#9856F2] mx-auto mt-4 mb-12 rounded" />

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="bg-[#FEF3FD] rounded-lg p-6 text-left flex flex-col items-start h-full">
            <Image
              src="/icons/phone-finder-1.png" // replace with actual path
              alt="High Accuracy"
              width={48}
              height={48}
              className="w-12 mb-4"
            />
            <h4 className="text-lg font-semibold text-gray-900 mb-1">High Accuracy</h4>
            <p className="text-sm text-gray-700">Real-time verification for reliable data.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#E9F3FE] rounded-lg p-6 text-left flex flex-col items-start h-full">
            <Image
              src="/icons/phone-finder-2.png" // replace with actual path
              alt="Global Coverage"
              width={48}
              height={48}
              className="w-12 mb-4"
            />
            <h4 className="text-lg font-semibold text-gray-900 mb-1">Global Coverage</h4>
            <p className="text-sm text-gray-700">Find numbers across 50+ countries.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#FEF0EC] rounded-lg p-6 text-left flex flex-col items-start h-full">
            <Image
              src="/icons/phone-finder-3.png" // replace with actual path
              alt="No Landlines"
              width={48}
              height={48}
              className="w-12 mb-4"
            />
            <h4 className="text-lg font-semibold text-gray-900 mb-1">No Landlines</h4>
            <p className="text-sm text-gray-700">Only direct mobile contacts for decision-makers.</p>
          </div>

          {/* Feature 4 */}
          <div className="bg-[#F5F2FE] rounded-lg p-6 text-left flex flex-col items-start h-full">
            <Image
              src="/icons/phone-finder-4.png" // replace with actual path
              alt="Easy Integration"
              width={48}
              height={48}
              className="w-12 mb-4"
            />
            <h4 className="text-lg font-semibold text-gray-900 mb-1">Easy Integration</h4>
            <p className="text-sm text-gray-700">Use our API or Chrome extension for seamless workflows.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
