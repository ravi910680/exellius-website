"use client"

import Link from "next/link"

export default function AccurateContactSection() {
  return (
    <section className="bg-[#9B4FF6] text-white text-center py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          B2B Success Starts with <br className="sm:hidden" />
          Accurate Contacts
        </h2>

        {/* Underline */}
        <div className="w-24 h-1 mx-auto bg-white mb-8" />

        {/* Paragraph */}
        <p className="text-sm sm:text-base leading-relaxed mb-10">
          Exellius’ <strong>Professional Email Finder</strong> helps you locate verified business emails in seconds.
          Whether you’re reaching out to potential clients, partners, or industry leaders, our <strong>email lookup</strong> tool ensures
          you get reliable contact details without the guesswork.
        </p>

        {/* Button */}
        <Link
          href="https://app.exellius.com/signup"
          className="inline-block bg-white text-[#9B4FF6] font-semibold px-6 py-3 rounded-lg text-sm sm:text-base shadow hover:bg-gray-100 transition"
        >
          Get started for free
        </Link>
      </div>
    </section>
  )
}
