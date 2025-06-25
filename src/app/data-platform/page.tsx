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






export default function LeadDiscoveryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f9f7fe] ">
     
        <Hero />
        <DataPlatformFeatures />
        <DataPlatformFeature1 />
        <DataPlatformFeature2 />
        <DataPlatformFeature3 />
        <DataPlatformFeature4 />
        <IndustriesWeServe />
        <DataPlatformHowWeOutperform />
        <FlexibleSolutions />
        <FaqSection />
        
       
        
        
      </main>
      <Footer />
    </>
  )
}
