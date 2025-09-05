import Head from "next/head"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import LeadDiscoveryHero from "./LeadDiscoveryHero"
import LeadDiscoveryFeatures from "./LeadDiscoveryFeatures"
import LeadDiscoveryStep1 from "./LeadDiscoveryStep1"
import LeadDiscoveryStep2 from "./LeadDiscoveryStep2"
import LeadDiscoveryStep3 from "./LeadDiscoveryStep3"
import IndustriesWeServe from "./IndustriesWeServe"
import HowWeOutperform from "./HowWeOutperform"
import FlexibleSolutions from "./FlexibleSolutions"
import FAQSection from "./FaqSection"



export default function LeadDiscoveryPage() {
  return (
    <>
      <Head>
            <title>Accurate B2B Leads from a Top-Rated Data Provider</title>
            <meta
              name="description"
              content="Exellius offers a verified B2B leads database with accurate contact data. Generate qualified B2B leads and boost conversions with our AI-powered platform."
            />
          </Head>
    
      <Header />
      <main className="min-h-screen bg-[#f9f7fe] ">
     
            <LeadDiscoveryHero />
            <LeadDiscoveryFeatures />
            <LeadDiscoveryStep1 />
            <LeadDiscoveryStep2 />
            <LeadDiscoveryStep3 />
            <IndustriesWeServe />
            <HowWeOutperform />
            <FlexibleSolutions />
            <FAQSection />
          {/* Add your lead discovery content/components here */}
       
      </main>
      <Footer />
    </>
  )
}
