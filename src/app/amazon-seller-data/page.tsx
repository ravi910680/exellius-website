import Header from "@/components/Header"
import Footer from "@/components/Footer"
import AmazonSellerDataHero from "./AmazonSellerDataHero"
import AmazonSellerFeatures from "./AmazonSellerFeatures"
import AmazonSellerFeature1 from "./AmazonSellerFeature1"
import AmazonSellerFeature2 from "./AmazonSellerFeature2"
import AmazonSellerFeature3 from "./AmazonSellerFeature3"
import AmazonSellerFeature4 from "./AmazonSellerFeature4"
import IndustriesWeServe from "../lead-discovery/IndustriesWeServe"
import AmazonSellerWhyWeOutperform from "./AmazonSellerWhyWeOutperform"
import AmazonSellerFlexibleSolutions from "./AmazonSellerFlexibleSolutions"
import AmazonSellerFaq from "./AmazonSellerFaq"


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
        <AmazonSellerFeature4 />
        <IndustriesWeServe />
        <AmazonSellerWhyWeOutperform />
        <AmazonSellerFlexibleSolutions />
        <AmazonSellerFaq />
        
       
        
        
        
      </main>
      <Footer />
    </>
  )
}
