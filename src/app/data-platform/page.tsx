import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Hero from "./Hero"
import DataPlatformFeatures from "./DataPlatformFeatures"
import DataPlatformFeature1 from "./DataPlatformFeature1"
import DataPlatformFeature2 from "./DataPlatformFeature2"
import DataPlatformFeature3 from "./DataPlatformFeature3"
import DataPlatformFeature4 from "./DataPlatformFeature4"
import IndustriesWeServe from "../lead-discovery/IndustriesWeServe"
import DataPlatformHowWeOutperform from "./DataPlatformHowWeOutperform"
import FlexibleSolutions from "./FlexibleSolutions"
import FaqSection from "./FaqSection"
import WhyExelliusProvider from "./WhyExelliusProvider"
import SalesMarketingBenefits from "./SalesMarketingBenefits"
import BenefitCards from "./BenefitCards"
import GetStartedSection from "./GetStartedSection"
import CallToAction from "@/components/CallToAction"






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
