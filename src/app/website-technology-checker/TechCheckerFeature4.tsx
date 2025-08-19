"use client"

export default function TechInsightsTable() {
  const data = [
    {
      category: "Hosting Providers",
      technology: "Pulsant Hosting",
      website: "shopjustice.com",
      insight: "Reliable enterprise hosting ensures site uptime and scalability.",
    },
    {
      category: "Hosting Providers",
      technology: "Terremark",
      website: "shop.spectator.org",
      insight: "Strong hosting improves performance and security.",
    },
    {
      category: "Domain Name Services",
      technology: "Netriplex",
      website: "ae.sunglasshut.com",
      insight: "DNS services reduce latency and secure domain resolution.",
    },
    {
      category: "Lead Generation",
      technology: "Rooster",
      website: "studio.jane.com",
      insight: "Lead-gen software integrates with CRMs for better conversions.",
    },
    {
      category: "Chat Tools",
      technology: "Zopim (Zendesk Chat)",
      website: "store.sho.com",
      insight: "Live chat boosts customer engagement and retention.",
    },
  ]

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Technology Insights by Category
        </h2>

        <div className="overflow-x-auto rounded-2xl shadow border border-gray-200">
          <table className="w-full text-left text-sm md:text-base">
            <thead className="bg-[#9856F2] text-white">
              <tr>
                <th className="py-4 px-6 font-semibold">Category</th>
                <th className="py-4 px-6 font-semibold">Technology</th>
                <th className="py-4 px-6 font-semibold">Example Website</th>
                <th className="py-4 px-6 font-semibold">Insight</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((row, idx) => (
                <tr
                  key={idx}
                  className={`${
                    idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-purple-50 transition`}
                >
                  <td className="py-4 px-6 font-medium text-gray-900">
                    {row.category}
                  </td>
                  <td className="py-4 px-6 text-gray-700">{row.technology}</td>
                  <td className="py-4 px-6 text-[#9856F2] font-medium underline">
                    {row.website}
                  </td>
                  <td className="py-4 px-6 text-gray-600">{row.insight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
