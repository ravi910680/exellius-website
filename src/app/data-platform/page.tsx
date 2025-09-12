
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Hero from "./Hero"
import DataPlatformFeatures from "./DataPlatformFeatures"
import FaqSection from "./FaqSection"
import WhyExelliusProvider from "./WhyExelliusProvider"
import SalesMarketingBenefits from "./SalesMarketingBenefits"
import BenefitCards from "./BenefitCards"
import GetStartedSection from "./GetStartedSection"
import CallToAction from "@/components/CallToAction"
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Exellius Data Platform | API & Enterprise B2B Intelligence",
    description:
      "Access 200M+ verified B2B contacts via our self-service platform or API. Real-time company data, technographics, and direct dials for sales teams.",
  }
}






export default function LeadDiscoveryPage() {
  return (
    <>

    
      <Header />
      <main className="min-h-screen bg-[#f9f7fe] ">
     
        <Hero />
        <WhyExelliusProvider />
        <DataPlatformFeatures />
        <SalesMarketingBenefits />
        <BenefitCards />
        <GetStartedSection />
       
        <FaqSection />
        <CallToAction />
        
       
        
        
      </main>
      <Footer />
    </>
  )
}
