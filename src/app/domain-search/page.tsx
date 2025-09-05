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
import HowItWorksInfographic from "./HowItWorksInfographic";
import UseCasesSplitSection from "./UseCasesSplitSection";
import FAQSection from "./FAQs";
import DomainHelpSection from "./DomainHelpSection";
import ProspectingHighlight from "./ProspectingHighlight";
import ExploreMoreTools from "./ExploreMoreTools";

export default function EmailFinderPage() {
  return (
    <>
    <Head>
                <title>Find professional emails by domain in one click | Exellius</title>
                <meta
                  name="description"
                  content=" Exellius, helps find emails by domain, streamlines sales and marketing by finding email addresses by name, bulk email finder and API services in one click."
                />
              </Head>
      <Header />
      <EmailFinderHero />
      <DomainHelpSection />
      <DomainEmailFeature />
      <HowItWorks />
      <LeadDiscoveryStep2 />
      <LeadDiscoveryStep3 />
      
      <HowItWorksInfographic />
       <UseCasesSplitSection />
      <ProspectingHighlight />
      <ExploreMoreTools />
      
  
      <FAQSection />
      <CallToAction />

     
      {/* Add any additional components or sec
      tions as needed */}
     
      <Footer />
    </>
  );
}
