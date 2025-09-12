
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Hero from "./Hero"
import DataEnrichmentFeature1 from "./DataEnrichmentFeature1"
import DataEnrichmentFeature2 from "./DataEnrichmentFeature2"
import DataEnrichmentFeature3 from "./DataEnrichmentFeature3"

import DataEnrichmentWhyWeOutperform from "./DataEnrichmentWhyWeOutperform"
import DataEnrichFeature from "./DataEnrichFeature"
import WhatWeDo from "./WhatWeDo"
import EnrichmentBenefits from "./EnrichmentBenefits"
import FAQs from "./FAQs"
import CallToAction from "@/components/CallToAction"
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Enhance Your Data Accuracy with Exellius’ Data Enrichment Tools",
    description:
      "Discover Exellius’ advanced data enrichment services and data enrichment tools to enhance customer profiles, improve lead quality, and drive better business decisions.",
  }
}





export default function LeadDiscoveryPage() {
  return (
    <>
    
      <Header />
      <main className="min-h-screen bg-[#f9f7fe] ">
     
        <Hero />
        <DataEnrichFeature />
        <WhatWeDo />
       
        <DataEnrichmentFeature1 />
        <DataEnrichmentFeature2 />
        <DataEnrichmentFeature3 />
        <EnrichmentBenefits />
        
       
        <DataEnrichmentWhyWeOutperform />
        <FAQs />
        <CallToAction />
        
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
