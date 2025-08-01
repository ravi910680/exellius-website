// app/email-finder/page.tsx (or pages/email-finder.tsx if using pages directory)

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmailFinderHero from "./EmailFinderHero";
import DomainEmailFeature from "./DomainEmailFeature";
import HowItWorks from "./HowItWorks";
import LeadDiscoveryStep2 from "./LeadDiscoveryStep2";
import LeadDiscoveryStep3 from "./LeadDiscoveryStep3";
import CallToAction from "@/components/CallToAction"

import FAQSection from "./FAQs";
import AccurateContactSection from "./AccurateContactSection";
import EmailFinderSteps from "./EmailFinderSteps";
import ReviewRatings from "./ReviewRatings";
import OptimizeOutreach from "./OptimizeOutreach";
export default function EmailFinderPage() {
  return (
    <>
      <Header />
      <EmailFinderHero />
      <AccurateContactSection />
      <DomainEmailFeature />
      <EmailFinderSteps />
      <HowItWorks />
      <LeadDiscoveryStep2 />
      <LeadDiscoveryStep3 />
      <ReviewRatings />
      <OptimizeOutreach />
     
      
      <FAQSection />
      <CallToAction />

     
      {/* Add any additional components or sec
      tions as needed */}
     
      <Footer />
    </>
  );
}
