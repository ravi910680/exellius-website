import Header from "@/components/Header"
import Footer from "@/components/Footer"
import AmazonSellerDataHero from "./AmazonSellerDataHero"
import AmazonSellerFeatures from "./AmazonSellerFeatures"
import AmazonSellerFeature1 from "./AmazonSellerFeature1"
import AmazonSellerFeature2 from "./AmazonSellerFeature2"
import AmazonSellerFeature3 from "./AmazonSellerFeature3"
import HowBussinessUse from "./HowBussinessUse"
import OurDataCollectionMethodology from "./OurDataCollectionMethodology"
import AmazonSellerFaq from "./AmazonSellerFaq"
import CallToAction from "@/components/CallToAction"
import ComparisonTable from "./ComparisonTable"
import AmazonLeadListPricing from "./AmazonLeadListPricing"
import PremiumGuarantees from "./PremiumGuarantees"
import TestimonialSlider from "./TestimonialSlider"


export default function LeadDiscoveryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f9f7fe] ">
        <AmazonSellerDataHero />
        <AmazonSellerFeatures />
        <AmazonSellerFeature1 />
        <AmazonSellerFeature2 />
        <AmazonSellerFeature3 />
        <HowBussinessUse />
        <OurDataCollectionMethodology />
        <ComparisonTable />
        <AmazonLeadListPricing />
        <PremiumGuarantees />
        <TestimonialSlider />
       
        <AmazonSellerFaq />
        <CallToAction />
        
       
        
        
        
      </main>
      <Footer />
    </>
  )
}
