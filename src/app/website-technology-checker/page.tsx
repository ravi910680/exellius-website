import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Hero from "./Hero"
import WebsiteFeatures from "./WebsiteFeatures"
import TechCheckerFeature1 from "./TechCheckerFeature1"
import TechCheckerFeature2 from "./TechCheckerFeature2"
import TechCheckerFeature3 from "./TechCheckerFeature3"
import TechCheckerFeature4 from "./TechCheckerFeature4"
import IndustriesWeServe from "../lead-discovery/IndustriesWeServe"
import WhyWeOutperformTechCheckers from "./WhyWeOutperformTechCheckers"




export default function LeadDiscoveryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f9f7fe] ">
     
        <Hero />
        <WebsiteFeatures />
        <TechCheckerFeature1 />
        <TechCheckerFeature2 />
        <TechCheckerFeature3 />
        <TechCheckerFeature4 />
        <IndustriesWeServe />
        <WhyWeOutperformTechCheckers />
        {/* <TechCheckerFAQs /> */}
       
      </main>
      <Footer />
    </>
  )
}
