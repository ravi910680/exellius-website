// app/email-finder/page.tsx (or pages/email-finder.tsx if using pages directory)

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmailFinderHero from "./EmailFinderHero";
import HowItWorks from "./HowItWorks";
import LeadDiscoveryStep2 from "./LeadDiscoveryStep2";
import LeadDiscoveryStep3 from "./LeadDiscoveryStep3";
import LeadDiscoveryStep4 from "./LeadDiscoveryStep4";
import CallToAction from "@/components/CallToAction"
import FAQSection from "./FAQs";
import EmailValidationWarning from "./EmailValidationWarning";
import EmailVerificationBenefits from "./EmailVerificationBenefits";
import EmailVerificationSteps from "./EmailVerificationSteps";
import CallToAction2 from "./CallToAction";

import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title:
      "For a Reliable Email Verification Service, use Exellius Email Verifier",
    description:
      "Ensure deliverability with Exellius' email verification service. Verify professional email addresses instantly with our accurate email verifier. Try free!",
  }
}

export default function EmailFinderPage() {
  return (
    <>

    
      <Header />
      <EmailFinderHero />
      <EmailValidationWarning />
      <EmailVerificationBenefits />
      
      <HowItWorks />
      <LeadDiscoveryStep2 />
      <LeadDiscoveryStep3 />
      <LeadDiscoveryStep4 />
     <EmailVerificationSteps />
       <CallToAction2 />
      <FAQSection />
      <CallToAction />

     
      {/* Add any additional components or sec
      tions as needed */}
     
      <Footer />
    </>
  );
}
