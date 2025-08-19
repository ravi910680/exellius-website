import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function DomainEmailFeature() {
  return (
    <section className="py-20 bg-white px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 relative">
          <div className="rounded-xl overflow-hidden">
            <Image
              src="/images/img-2.svg" // replace with your actual UI asset
              alt="Domain Search UI"
              width={2904}
              height={2496}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Why Use <span className="text-[#9856F2]">Exellius’</span> Email Finder Tool?
          </h2>

          <div className="w-16 h-1 bg-[#9856F2] mb-6" />

          <p className="text-gray-700 mb-6 text-base leading-relaxed">
            Our <strong>email search</strong> tool combines advanced algorithms with a vast database of professional emails to deliver accurate results. Here’s why businesses trust Exellius:
          </p>

          <ul className="space-y-4 text-sm sm:text-base">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[#9856F2] w-5 h-5 mt-1" />
              <span><strong>High Accuracy</strong> — Every email is verified for deliverability.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[#9856F2] w-5 h-5 mt-1" />
              <span><strong>Instant Results</strong> — Find emails in seconds, not hours.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[#9856F2] w-5 h-5 mt-1" />
              <span><strong>Seamless Integration</strong> — Use our Email Finder API to embed email search into your workflow.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[#9856F2] w-5 h-5 mt-1" />
              <span><strong>Bulk Processing</strong> — Need multiple contacts? Use our Bulk Email Extraction Tool for large-scale searches.</span>
            </li>
          </ul>

         
        </div>
      </div>
    </section>
  )
}
