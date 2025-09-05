// app/email-finder/page.tsx (or pages/email-finder.tsx if using pages directory)
import Head from "next/head"
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

export default function EmailFinderPage() {
  return (
    <>

    <Head>
                <title>For a Reliable Email Verification Service, use Exellius Email Verifier</title>
                <meta
                  name="description"
                  content="Ensure deliverability with Exellius' email verification service. Verify professional email addresses instantly with our accurate email verifier. Try free!"
                />
              </Head>
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
