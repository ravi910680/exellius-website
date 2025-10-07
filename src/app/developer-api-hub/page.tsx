import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CallToAction from "@/components/CallToAction"
import Hero from "./DeveloperApiHero"
import DeveloperApiFeatures from "./DeveloperApiFeatures"
import DeveloperApiFeature1 from "./DeveloperApiFeature1"
import DeveloperApiFeature2 from "./DeveloperApiFeature2"
import DeveloperApiFeature3 from "./DeveloperApiFeature3"
import DeveloperApiFeature4 from "./DeveloperApiFeature4"
import IndustriesWeServe from "../lead-discovery/IndustriesWeServe"
import DeveloperApiFaqSection from "./DeveloperApiFaqSection"







export default function LeadDiscoveryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f9f7fe] ">
     
        <Hero />
        <DeveloperApiFeatures />
        <DeveloperApiFeature1 />
        <DeveloperApiFeature2 />
        <DeveloperApiFeature3 />
        <DeveloperApiFeature4 />
        <IndustriesWeServe />
        <DeveloperApiFaqSection />
        <CallToAction />
        
     
       
        
        
      </main>
      <Footer />
    </>
  )
}
