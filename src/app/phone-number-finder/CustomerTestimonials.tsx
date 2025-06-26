"use client"

export default function CustomerTestimonials() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Why Customers Trust <span className="text-[#9856F2]">Exellius</span>
        </h2>
        <div className="h-1 w-20 bg-[#9856F2] mt-4 mb-12 mx-auto rounded" />

        <div className="grid md:grid-cols-2 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-[#EAF2FD] rounded-lg p-12 border text-left shadow-sm">
            <p className="text-sm sm:text-base text-gray-800 mb-4">
              &quot;Exellius phone number finder saved us hours of manual research. The data quality is unmatched, and the API integrates perfectly with our CRM.&quot;
            </p>
            <p className="font-semibold text-gray-900">Mark T., Sales Director</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-[#FEF0EC] rounded-lg p-12 border text-left shadow-sm">
            <p className="text-sm sm:text-base text-gray-800 mb-4">
              &quot;Compared to other providers, Exellius delivers higher accuracy at a fraction of the cost.&quot;
            </p>
            <p className="font-semibold text-gray-900">Sarah L., Growth Marketer</p>
          </div>
        </div>
      </div>
    </section>
  )
}
