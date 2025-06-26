import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DomainEmailFeature() {
  return (
    <section className="py-20 bg-white px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 relative">
          <div className="rounded-xl overflow-hidden">
            <Image
              src="/domain-finder-img.png" // Replace with your actual image path
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
            Turn Incomplete Data into Your{" "}
            <span className="text-[#9856F2]">Competitive</span> Edge
          </h2>

          <div className="w-20 h-1 bg-[#9856F2] mb-6" />

          <p className="text-gray-800 mb-6 text-base leading-relaxed">
            Inaccurate or outdated prospect data costs businesses 20% of revenue.
            Exellius solves this with industry-leading <strong>data enrichment tools</strong> that:
          </p>

          <ul className="space-y-4 text-sm sm:text-base">
            {[
              "Fill missing firmographics (job titles, company size, tech stack)",
              "Verify emails/phones in real-time (Reduce bounce rates by 90%)",
              "Enrich CRM records automatically (Works with Salesforce, HubSpot & more)",
              "Scale with API-based enrichment (Process millions of records effortlessly)",
            ].map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle className="text-[#9856F2] w-5 h-5 mt-1" />
                <span className="text-gray-800">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex gap-4 flex-wrap">
            <Button className="bg-[#9856F2] hover:bg-[#6c3cbe] text-white px-6 py-3 text-base rounded-md">
              See How It Works
            </Button>
            <Button variant="outline" className="border-[#9856F2] text-[#9856F2] px-6 py-3 text-base rounded-md">
              Free Data Audit
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
