import Link from "next/link"

export default function CallToAction() {
  return (
    <div className="w-full bg-[url('/cta-back.png')] bg-cover bg-center px-4 sm:px-6 pt-20">
      <div className="w-full max-w-[100%] sm:max-w-2xl md:max-w-7xl bg-gradient-to-r from-[#9856F2] to-[#58328C] text-white px-6 sm:px-10 py-14 rounded-2xl flex flex-col md:flex-row justify-between items-center mx-auto shadow-lg">
        <div className="text-center md:text-left w-full md:w-2/3">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Start Growing with Exellius Today!
          </h2>
          <p className="text-sm text-white/90">
            Connect with qualified buyers using the most reliable B2B data platform.
          </p>
        </div>
        <div className="mt-6 md:mt-0 text-center w-full md:w-auto">
          <Link
            href="#"
            className="inline-block bg-white text-[#9856F2] px-6 py-3 font-semibold rounded-lg text-sm shadow-sm hover:opacity-90 transition"
          >
            Try Exellius Free Now
          </Link>
        </div>
      </div>
    </div>
  )
}
