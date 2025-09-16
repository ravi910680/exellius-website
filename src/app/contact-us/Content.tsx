"use client"

import { useState } from "react"

export default function ContactHero() {
  const [form, setForm] = useState({
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(form)
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
          </div>
        </div>

        {/* Right: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full flex flex-col gap-5 items-center"
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
            className="mt-2 w-full sm:w-3/4 lg:w-full bg-[#9856F2] hover:bg-[#6c3cbe] text-white font-semibold py-2 rounded transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}
