"use client"

export default function ComingSoonPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4 py-24">
      <div className="text-center max-w-xl">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">🚀 Coming Soon</h1>
        <p className="text-gray-600 text-lg mb-6">
          We&apos;re working hard to launch this feature. It&apos;ll be worth the wait!
        </p>
        <div className="h-1 w-24 bg-[#6c3cbe] mx-auto rounded mb-6" />

        <p className="text-sm text-gray-500 mb-8">
          In the meantime, explore other tools in your dashboard or reach out to support.
        </p>

        <button className="bg-[#6c3cbe] text-white px-6 py-3 rounded-lg hover:bg-[#51289e] transition text-sm">
          Try Other Tools
        </button>
      </div>
    </section>
  )
}
