// app/email-finder/page.tsx (or pages/email-finder.tsx if using pages directory)

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PhoneFinderHero from "./PhoneFinderHero";
import WhyPhoneFinder from "./WhyPhoneFinder";
import ColdCallSolution from "./ColdCallSolution";
import PhoneNumber1 from "./PhoneNumber1";
import PhoneNumber2 from "./PhoneNumber2";
import PhoneNumber3 from "./PhoneNumber3";
import PhoneFinderFeatures from "./PhoneFinderFeatures";
import B2BSalesUseCases from "./B2BSalesUseCases";
import CustomerTestimonials from "./CustomerTestimonials";
import PhoneCallToAction from "./PhoneCallToAction";
import FAQSection from "./FAQSection";
import CallToAction from "@/components/CallToAction";

export default function EmailFinderPage() {
  return (
    <>
      <Header />
       
            <PhoneFinderHero />
            <WhyPhoneFinder />
            <ColdCallSolution />
            <PhoneNumber1 />
            <PhoneNumber2 />
            <PhoneNumber3 />
            <PhoneFinderFeatures />
            <B2BSalesUseCases />
            <CustomerTestimonials />
            <PhoneCallToAction />
            <FAQSection />
            <CallToAction />
          
      
     
      <Footer />
    </>
  );
}
