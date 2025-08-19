export default function DiscoverTechSection() {
  return (
    <section className="bg-[#9856F2] text-white py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          What You’ll Discover
        </h2>

        {/* Divider */}
        <div className="w-16 h-[2px] bg-white mx-auto my-6" />

        {/* Description */}
        <p className="text-sm sm:text-base leading-relaxed mb-3">
          Exellius’s <span className="font-semibold">website tech lookup</span> uncovers 50+ 
          web development technologies behind any website.
        </p>

        <p className="text-sm sm:text-base leading-relaxed">
          From <span className="font-semibold">CMS platforms</span> and <span className="font-semibold">eCommerce tools </span> 
          to <span className="font-semibold">analytics</span>, <span className="font-semibold">security layers</span>, 
          and <span className="font-semibold">marketing trackers</span> — you’ll instantly know the exact 
          stack powering your competitors, prospects, or partners.
        </p>
      </div>
    </section>
  )
}
