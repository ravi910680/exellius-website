import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Hero from "./Hero"
import DiscoverTechSection from "./DiscoverTechSection"
import TechCheckerFeature1 from "./TechCheckerFeature1"
import TechCheckerFeature2 from "./TechCheckerFeature2"
import TechCheckerStep3 from "./TechCheckerFeature3"
import TechCheckerFeatures4 from "./TechCheckerFeature4"
import WhyUseTechFinder from "./WhyUseTechFinder"
import PopularTechnologies from "./PopularTechnologies"
import EcommerceIntelligenceSection from "./EcommerceIntelligenceSection"
import FAQSection from "./FAQSection"
import CallToAction from "@/components/CallToAction"





export default function LeadDiscoveryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f9f7fe] ">
     
        <Hero />
        <DiscoverTechSection />
        <TechCheckerFeature1 />
        <TechCheckerFeature2 />
        <TechCheckerStep3 />
        <TechCheckerFeatures4 />
        <WhyUseTechFinder />
        <PopularTechnologies />
        <EcommerceIntelligenceSection />
        <FAQSection />
        <CallToAction />
        
        
       
        
       
       
      </main>
      <Footer />
    </>
  )
}
