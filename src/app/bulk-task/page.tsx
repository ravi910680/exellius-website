import Head from "next/head"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Hero from "./Hero"
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
    <Head>
                <title>Bulk B2B Data Processing | Upload & Enrich Lead Lists at Scale</title>
                <meta
                  name="description"
                  content="Process data points in minutes with Exellius' bulk email verification, finding, data enrichment or phone number finder. Get 95%+ deliverability guaranteed"
                />
              </Head>
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
