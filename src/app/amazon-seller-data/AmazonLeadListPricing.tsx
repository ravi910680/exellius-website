"use client"

import { useState } from "react"
import { CheckCircle } from "lucide-react"
import CryptoJS from "crypto-js"

const SECRET_KEY = "4b227777d4dd1fc61c6f884f48641d02"

function decryptData<T>(encryptedData: string): T | null {
  try {
    const decryptedText = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY).toString(CryptoJS.enc.Utf8)
    return decryptedText ? (JSON.parse(decryptedText) as T) : null
  } catch (error) {
    console.error("Decryption Error:", error)
    return null
  }
}

const packages = [
  {
    title: "Get 1,000 Verified Leads",
    price: "$100",
    perLead: "$0.10",
    delivery: "48 hours",
    recommended: false,
    cta: "GET 1,000 LEADS",
  },
  {
    title: "Get 2,500 Verified Leads",
    price: "$200",
    perLead: "$0.08",
    delivery: "48 hours",
    recommended: true,
    cta: "GET 2,500 LEADS",
  },
  {
    title: "Get 5,000 Verified Leads",
    price: "$350",
    perLead: "$0.07",
    delivery: "24 hours",
    recommended: false,
    cta: "CONTACT SALES",
  },
]

const features = [
  "Lifetime Lead Updates - Refresh contacts until campaign success",
  "30+ Insights/Seller - Revenue trends, inventory turnover, response rates",
  "3 Contacts/Seller - Direct emails + mobile numbers (CEO/Marketing/Buyer)",
  "6 Advanced Filters - Precision targeting (see dropdowns below)",
]

export default function AmazonLeadQuoteSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    leads: "",
    region: "",
    revenue: "",
    category: "",
  })
  const [status, setStatus] = useState<"success" | "error" | "">("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.leads || !form.region) {
      setStatus("error")
      return
    }

    setLoading(true)
    setStatus("")

    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    const raw = JSON.stringify({
      subject: "Amazon Leads Quote Request",
      html: `<div style="font-family: Arial; padding: 20px;">
              <h2>New Amazon Lead Request</h2>
              <p><strong>Name:</strong> ${form.name}</p>
              <p><strong>Email:</strong> ${form.email}</p>
              <p><strong>Number of Leads:</strong> ${form.leads}</p>
              <p><strong>Region:</strong> ${form.region}</p>
              <p><strong>Revenue Tier:</strong> ${form.revenue}</p>
              <p><strong>Category:</strong> ${form.category}</p>
            </div>`,
      email: form.email,
    })

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow" as RequestRedirect,
    }

    try {
      const response = await fetch("https://app.exellius.com/api/contact/send", requestOptions)
      const result = await response.json()
      console.log(decryptData(result.data))
      setStatus("success")
      setForm({ name: "", email: "", leads: "", region: "", revenue: "", category: "" })
    } catch (error) {
      console.error("Error sending request:", error)
      setStatus("error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-white px-4 py-20">
      <div className="max-w-6xl mx-auto border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 lg:p-10">
          {/* Left Side: Packages + Features */}
          <div className="lg:col-span-2">
            {/* Packages */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {packages.map((pkg, i) => (
                <div
                  key={i}
                  className={`relative border rounded-xl shadow-sm bg-[#f3f1fa] text-center ${
                    pkg.recommended ? "ring-2 ring-[#e05e2b]" : ""
                  }`}
                >
                  {pkg.recommended && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#e05e2b] text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                      RECOMMENDED
                    </div>
                  )}
                  <div className="bg-[#6c3cbe] text-white text-sm font-semibold py-2 rounded-t-xl">
                    {pkg.title}
                  </div>
                  <div className="p-5">
                    <p className="text-lg font-bold text-gray-900 mb-1">Get access for {pkg.price}</p>
                    <p className="text-sm text-[#6c3cbe] font-semibold mb-2">
                      Only {pkg.perLead} per lead
                    </p>
                    <p className="text-sm text-gray-600 mb-4">Delivered in {pkg.delivery}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="border-t pt-6">
              <ul className="space-y-4 text-sm text-gray-900">
                {features.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 text-[#6c3cbe]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-[#fbf8fe] border border-gray-200 rounded-xl p-6 shadow-sm h-fit">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Customize your list</h3>
            <div className="space-y-4 text-sm">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border rounded-lg px-4 py-2 text-gray-700"
                required
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full border rounded-lg px-4 py-2 text-gray-700"
                required
              />
              <select
                name="leads"
                value={form.leads}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 text-gray-700"
                required
              >
                <option value="">Number of Leads</option>
                <option>1,000</option>
                <option>2,500</option>
                <option>5,000</option>
                <option>Custom</option>
              </select>
              <select
                name="region"
                value={form.region}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 text-gray-700"
                required
              >
                <option value="">Geographic Targeting</option>
                <option>North America</option>
                <option>Europe</option>
                <option>Asia</option>
                <option>Global</option>
              </select>
              <select
                name="revenue"
                value={form.revenue}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 text-gray-700"
              >
                <option value="">Revenue Tiers</option>
                <option>$100K – $1M</option>
                <option>$1M – $5M</option>
                <option>$5M+</option>
              </select>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 text-gray-700"
              >
                <option value="">Category Specialization</option>
                <option>Electronics</option>
                <option>Home Goods</option>
                <option>Beauty</option>
                <option>All</option>
              </select>
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`mt-6 w-full bg-[#6c3cbe] hover:bg-[#5b2da8] text-white font-semibold py-3 px-6 rounded-lg transition ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Processing..." : "GENERATE MY LIST 👉"}
            </button>

            {status && (
              <p
                className={`text-sm mt-3 transition-opacity duration-500 ${
                  status === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {status === "success"
                  ? "Your request has been received! We'll contact you shortly."
                  : "There was an error submitting your request. Please try again."}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
