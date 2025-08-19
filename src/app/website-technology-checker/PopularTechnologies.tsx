"use client"

import { ShoppingBag, Mail, Headphones } from "lucide-react"

export default function PopularTechnologies() {
  const categories = [
    {
      icon: <ShoppingBag className="w-8 h-8 text-[#9856F2]" />,
      title: "eCommerce Platforms",
      tools: [
        { name: "Shopify", desc: "Powering 5,899,229 live websites worldwide" },
        { name: "Shopify Plus", desc: "Used by 70,482 live websites for enterprise-grade eCommerce" },
        { name: "Magento", desc: "Running on 104,357 live websites, trusted by mid-to-large retailers" },
        { name: "BigCommerce", desc: "Adopted by 40,131 live websites for scalable online stores" },
        { name: "Demandware (Salesforce Commerce Cloud)", desc: "Used by 10,352 live websites for premium commerce experiences" },
      ],
    },
    {
      icon: <Mail className="w-8 h-8 text-[#9856F2]" />,
      title: "Marketing & Automation",
      tools: [
        { name: "Klaviyo", desc: "Integrated into 532,403 live websites for personalized marketing" },
        { name: "Marketo", desc: "Trusted by 23,924 live websites for enterprise-level marketing automation" },
        { name: "HubSpot", desc: "Implemented on 513,283 live websites for CRM, sales, and marketing workflows" },
      ],
    },
    {
      icon: <Headphones className="w-8 h-8 text-[#9856F2]" />,
      title: "Customer Support & CRM",
      tools: [
        { name: "Salesforce", desc: "Powering 129,453 live websites with CRM and business automation" },
        { name: "Zendesk", desc: "Integrated with 301,580 live websites for customer service and ticketing" },
      ],
    },
  ]

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Website Technologies Tracked by Exellius
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our Website Technology Checker tracks the world’s leading web and eCommerce technologies, 
            helping you uncover adoption trends, market share, and competitor insights.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition p-8 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                {cat.icon}
                <h3 className="text-xl font-semibold text-gray-900">{cat.title}</h3>
              </div>
              <ul className="space-y-4 text-gray-700 text-sm">
                {cat.tools.map((tool, i) => (
                  <li key={i}>
                    <span className="font-medium text-gray-900">{tool.name}</span> – {tool.desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
