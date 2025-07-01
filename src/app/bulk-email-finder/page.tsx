import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Hero from "./Hero"
import BulkTaskFeatures from "./BulkTaskFeatures"
import BulkTaskFeature1 from "./BulkTaskFeature1"
import BulkTaskFeature2 from "./BulkTaskFeature2"
import BulkTaskFeature3 from "./BulkTaskFeature3"
import BulkTaskFeature4 from "./BulkTaskFeature4"
import IndustriesWeServe from "../lead-discovery/IndustriesWeServe"
import BulkTaskWhyWeOutperform from "./BulkTaskWhyWeOutperform"
import BulkTaskFaqSection from "./BulkTaskFaqSection"
import BulkEmailFinderSection from "./BulkEmailFinderSection"
import BulkEmailVerifierSection from "./BulkEmailVerifierSection"
import BulkDomainSearchSection from "./BulkDomainSearchSection"
import BulkPhoneFinderSection from "./BulkPhoneFinderSection"
import BulkToolBenefitsSection from "./BulkToolBenefitsSection"
import WhyChooseExelliusSection from "./WhyChooseExelliusSection"
import CallToAction from "@/components/CallToAction"




export default function LeadDiscoveryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f9f7fe] ">
        <Hero />
     
     <BulkEmailFinderSection />
     <BulkEmailVerifierSection />
        <BulkDomainSearchSection />
        <BulkPhoneFinderSection />
        <BulkToolBenefitsSection />
        <WhyChooseExelliusSection />
        
    
       <BulkTaskFaqSection />
       <CallToAction />
       
     
     
        
        
      </main>
      <Footer />
    </>
  )
}
