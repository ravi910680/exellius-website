import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Companies from "@/components/Companies"
import Features from "@/components/Features"
import EmailFinderFeature from "@/components/EmailFinderFeature"
import EmailVerifyFeature from "@/components/EmailVerifyFeature"
import AccessDirectContact from "@/components/AccessDirectContact"
import DataEnrichment from "@/components/DataEnrichment"
import Discover from "@/components/Discover"
import Amazon from "@/components/Amazon"
import API from "@/components/API"
import BenefitCards from "@/components/BenefitCards"
import UseCasesTabs from "@/components/UseCasesTabs"
import Testimonials from "@/components/Testimonials"
import StatsHighlight from "@/components/StatsHighlight"
import Footer from "@/components/Footer"
import CallToAction from "@/components/CallToAction"
import FAQSection from "@/components/faqs"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Companies />
        <Features />
        <EmailFinderFeature />
        <EmailVerifyFeature />
        <AccessDirectContact />
        <DataEnrichment />
        <Discover />
        <Amazon />
        <API />
        <BenefitCards />  
        <UseCasesTabs />  
        <Testimonials />  
        <StatsHighlight /> 
        <FAQSection />
        <CallToAction />

        <Footer /> 
        
       
      </main>
    </>
  )
}
