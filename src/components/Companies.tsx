"use client"

import Image from "next/image"

export default function UsedByCompanies() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-2xl font-semibold text-gray-800 mb-6">
          Used by Companies Worldwide
        </h2>
        <p className="text-md text-gray-600 mb-10">
          Startups to global enterprises use Exellius for strategic Amazon seller intelligence
        </p>

        <div className="flex items-center justify-center gap-6 overflow-x-auto">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex-shrink-0 grayscale hover:grayscale-0 transition duration-300">
              <Image
                src={`/logos/company-${i + 1}.png`}
                alt={`Company ${i + 1}`}
                width={100}
                height={60}
                className="object-contain w-[100px] h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
