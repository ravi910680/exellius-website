"use client"

import { useState } from "react"
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

export default function ContactHero() {
  const [form, setForm] = useState({
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"success" | "error" | "">("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus("")

    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    const raw = JSON.stringify({
      subject: "Contact Form Submission",
      html: `<div style="font-family: Arial; padding: 20px;">
              <h2>New Contact</h2>
              <p><strong>Email:</strong> ${form.email}</p>
              <p><strong>Subject:</strong> ${form.subject}</p>
              <p><strong>Message:</strong> ${form.message}</p>
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
      const response = await fetch("https://api.app.exellius.com/api/contact/send", requestOptions)
      const result = await response.json()
      console.log(decryptData(result.data))

      setStatus("success")
      setForm({ email: "", subject: "", message: "" })
    } catch (error) {
      console.error("Error sending message:", error)
      setStatus("error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-gray-50 py-16 px-4 pt-40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Hero Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Let’s Talk About Your Ideas
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Have a question or need help? Fill out the form and our team will get back to you as soon as possible.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <div className="bg-white shadow-md p-4 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-500">📧 Email</p>
              <p className="font-medium text-gray-800">contact@exellius.com</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-500">📞 Call</p>
              <p className="font-medium text-gray-800">+91 93225 25763</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-500">📞 Call</p>
              <p className="font-medium text-gray-800">+1 302 570 2013</p>
            </div>
          </div>
           <div className="flex justify-center lg:justify-start gap-4 mt-10">
  <div className="bg-white shadow-md p-4 rounded-lg border border-gray-200">
    <p className="text-sm text-gray-500 flex items-center gap-2">
      📍 <span>USA Office</span>
    </p>
    <p className="font-medium text-gray-800">
      8 The Green STE 15256,<br />
      Dover, DE 19901, USA
    </p>
  </div>

  <div className="bg-white shadow-md p-4 rounded-lg border border-gray-200">
    <p className="text-sm text-gray-500 flex items-center gap-2">
      📍 <span>India Office</span>
    </p>
    <p className="font-medium text-gray-800">
      Office No. 301, Vandan Smruti, Plot No. 1, Sector 11,<br />
      Spine Road, PCNTDA, Moshi,<br />
      Pune, Maharashtra 411070, India
    </p>
  </div>
</div>

        </div>

        {/* Right: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full flex flex-col gap-5 items-center relative"
        >
          <div className="w-full sm:w-3/4 lg:w-full">
            <label className="block text-left text-gray-600 mb-1 font-medium" htmlFor="email">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="me@company.com"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#9856F2]"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="w-full sm:w-3/4 lg:w-full">
            <label className="block text-left text-gray-600 mb-1 font-medium" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9856F2]"
              value={form.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="w-full sm:w-3/4 lg:w-full">
            <label className="block text-left text-gray-600 mb-1 font-medium" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="How can we help?"
              rows={6}
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9856F2] resize-none"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`mt-2 w-full sm:w-3/4 lg:w-full bg-[#9856F2] hover:bg-[#6c3cbe] text-white font-semibold py-2 rounded transition ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Sending..." : "Submit"}
          </button>

          {/* Success/Error Message */}
          {status && (
            <p
              className={`text-sm mt-3 transition-opacity duration-500 ${
                status === "success"
                  ? "text-green-600 opacity-100"
                  : "text-red-600 opacity-100"
              }`}
            >
              {status === "success"
                ? "Your message has been sent successfully!"
                : "There was an error sending your message. Please try again."}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
