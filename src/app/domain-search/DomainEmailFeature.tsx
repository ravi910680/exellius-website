import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DomainEmailFeature() {
  return (
    <section className="py-20 bg-white px-6 md:px-10">
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 relative">
          <div className="rounded-xl overflow-hidden ">
            <Image
              src="/domain-4.png" // replace with your actual UI asset
              alt="Domain Search UI"
              width={640}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Why Use a <span className="text-[#9856F2]">Domain Email</span> Search Tool?
          </h2>

          <div className="w-16 h-1 bg-[#9856F2] mb-6" />

          <p className="text-gray-700 mb-6 text-base leading-relaxed">
            Manually searching for business email addresses is time-consuming and unreliable.
            With Exellius, you can:
          </p>

          <ul className="space-y-4 text-sm sm:text-base">
            {[
              "Find emails by domain at scale with 95%+ accuracy.",
              "Access a verified email address database to reduce bounce rates.",
              "Speed up lead generation with bulk domain search capabilities.",
              "Integrate seamlessly using our Domain Search API for automated workflows.",
            ].map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle className="text-[#9856F2] w-5 h-5 mt-1" />
                <span className="text-gray-800">{point}</span>
              </li>
            ))}
          </ul>

          <Button className="mt-8 bg-[#9856F2] hover:bg-[#6c3cbe] text-white px-6 py-3 text-base rounded-md">
            Find Verified Emails Now
          </Button>
        </div>
      </div>
    </section>
  )
}
