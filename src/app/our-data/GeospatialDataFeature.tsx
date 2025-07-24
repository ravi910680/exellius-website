import { Globe, Landmark, Building2, Users, Pin } from "lucide-react";

const regions = [
  {
    region: "North America",
    companies: "32M",
    contacts: "190M",
    icon: <Landmark className="text-blue-600" size={28} />,
  },
  {
    region: "Europe",
    companies: "28M",
    contacts: "145M",
    icon: <Building2 className="text-purple-600" size={28} />,
  },
  {
    region: "APAC",
    companies: "18M",
    contacts: "72M",
    icon: <Globe className="text-green-600" size={28} />,
  },
  {
    region: "LATAM",
    companies: "5M",
    contacts: "23M",
    icon: <Pin className="text-yellow-600" size={28} />,
  },
  {
    region: "Middle East",
    companies: "3M",
    contacts: "15M",
    icon: <Users className="text-pink-600" size={28} />,
  },
];

export default function GeographicCoverage() {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 md:p-10 max-w-4xl mx-auto mt-10">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Geographic Coverage</h2>
        <p className="text-gray-500 mt-1 text-base">Comprehensive business data, everywhere you need it</p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-100 text-left">
          <thead>
            <tr>
              <th className="py-3 px-4 font-bold text-gray-600 tracking-wide">Region</th>
              <th className="py-3 px-4 font-bold text-gray-600 tracking-wide">Companies</th>
              <th className="py-3 px-4 font-bold text-gray-600 tracking-wide">Contacts</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {regions.map((r, idx) => (
              <tr key={r.region}
                  className={`transition-colors hover:bg-indigo-50 ${idx % 2 ? "bg-gray-50" : ""}`}>
                <td className="flex items-center gap-3 py-3 px-4 whitespace-nowrap font-medium">
                  {r.icon}
                  {r.region}
                </td>
                <td className="py-3 px-4 text-indigo-900 text-lg font-semibold">{r.companies}</td>
                <td className="py-3 px-4 text-green-700 text-lg font-semibold">{r.contacts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
