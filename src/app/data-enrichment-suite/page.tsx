import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Hero from "./Hero"
import DataEnrichmentFeatures from "./DataEnrichmentFeatures"
import DataEnrichmentFeature1 from "./DataEnrichmentFeature1"
import DataEnrichmentFeature2 from "./DataEnrichmentFeature2"
import DataEnrichmentFeature3 from "./DataEnrichmentFeature3"
import DataEnrichmentFeature4 from "./DataEnrichmentFeature4"
import IndustriesWeServe from "../lead-discovery/IndustriesWeServe"
import DataEnrichmentWhyWeOutperform from "./DataEnrichmentWhyWeOutperform"





export default function LeadDiscoveryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f9f7fe] ">
     
        <Hero />
        <DataEnrichmentFeatures />
        <DataEnrichmentFeature1 />
        <DataEnrichmentFeature2 />
        <DataEnrichmentFeature3 />
        <DataEnrichmentFeature4 />
        <IndustriesWeServe />
        <DataEnrichmentWhyWeOutperform />
        
        {/* Uncomment the following line to include FAQs */}
        {/* <DataEnrichmentFAQs /> */}
        {/* Uncomment the following line to include FAQs */}
        {/* <DataEnrichmentFAQs /> */}
        
        {/* Uncomment the following line to include FAQs */}
        {/* <DataEnrichmentFAQs /> */}
        {/* Add more features as needed */}
       
      </main>
      <Footer />
    </>
  )
}
