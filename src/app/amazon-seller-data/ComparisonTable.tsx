"use client"

import { CheckCircle, XCircle } from "lucide-react"

const features = [
  {
    feature: "Complete contact info",
    exellius: true,
    public: false,
  },
  {
    feature: "Bulk export capability",
    exellius: true,
    public: false,
  },
  {
    feature: "Historical performance data",
    exellius: true,
    public: false,
  },
  {
    feature: "Advanced filtering",
    exellius: true,
    public: "Basic",
  },
  {
    feature: "Verified email addresses",
    exellius: true,
    public: false,
  },
]

export default function ComparisonTable() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Exellius vs. Public Amazon Seller Search
        </h2>
        <p className="text-base text-gray-700 mb-12">
          See how Exellius stands apart with deeper data and superior capabilities.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-[#F5F3FF] text-gray-800 text-sm uppercase">
              <tr>
                <th className="p-4 text-sm font-semibold">Feature</th>
                <th className="p-4 text-sm font-semibold text-center">Exellius</th>
                <th className="p-4 text-sm font-semibold text-center">Public Search</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-900">
              {features.map((item, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"}
                >
                  <td className="p-4 font-medium">{item.feature}</td>
                  <td className="p-4 text-center">
                    {item.exellius === true ? (
                      <CheckCircle className="text-[#6c3cbe] w-5 h-5 mx-auto" />
                    ) : (
                      <span className="text-sm text-gray-600">{item.exellius}</span>
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {item.public === true ? (
                      <CheckCircle className="text-[#6c3cbe] w-5 h-5 mx-auto" />
                    ) : item.public === false ? (
                      <XCircle className="text-gray-400 w-5 h-5 mx-auto" />
                    ) : (
                      <span className="text-sm text-gray-600">{item.public}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
