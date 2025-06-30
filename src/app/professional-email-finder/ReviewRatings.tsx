"use client"

export default function ReviewRatings() {
  return (
    <section className=" px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Trusted by <span className="text-[#9856F2]">Businesses</span> Worldwide
        </h2>
        <div className="w-16 h-[3px] bg-[#9856F2] mx-auto mb-6" />

        {/* Subheading */}
        <p className="text-gray-700 text-base sm:text-lg mb-12">
          Exellius is used and loved by thousands of professionals for reliable <strong>email search</strong>.
        </p>

        {/* Review Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              rating: "4.6/5",
              platform: "Capterra",
              bg: "bg-[#F8F5FF]",
            },
            {
              rating: "4.4/5",
              platform: "G2",
              bg: "bg-[#FEF0EC]",
            },
            {
              rating: "4.8/5",
              platform: "Trustpilot",
              bg: "bg-[#EDF6FF]",
            },
          ].map(({ rating, platform, bg }, index) => (
            <div
              key={index}
              className={`${bg} rounded-xl py-10 px-6 text-center shadow-sm`}
            >
              <p className="text-3xl font-bold text-gray-900 mb-2">
                {rating} <span className="text-yellow-500">★</span>
              </p>
              <p className="text-gray-800 font-medium text-sm">on {platform}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
