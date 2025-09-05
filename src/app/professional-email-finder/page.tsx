// app/email-finder/page.tsx (or pages/email-finder.tsx if using pages directory)
import Head from "next/head"
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

     <Head>
                <title>Get Verified Business Emails Instantly with our Professional Email Finder </title>
                <meta
                  name="description"
                  content="Exellius Email Lookup Service helps you Find Email Addresses by Name & Domain. Try our Professional Email Finder for accurate, verified contacts. Start free today!"
                />
              </Head>
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
