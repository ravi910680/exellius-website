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




export default function LeadDiscoveryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f9f7fe] ">
        <Hero />
     
     <BulkTaskFeatures />
     <BulkTaskFeature1 />
        <BulkTaskFeature2 />
        <BulkTaskFeature3 />
        <BulkTaskFeature4 />
        <IndustriesWeServe />
       <BulkTaskWhyWeOutperform />
       <BulkTaskFaqSection />
       
     
     
        
        
      </main>
      <Footer />
    </>
  )
}
