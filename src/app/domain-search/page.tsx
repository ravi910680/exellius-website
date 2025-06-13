// app/email-finder/page.tsx (or pages/email-finder.tsx if using pages directory)

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmailFinderHero from "./EmailFinderHero";
import DomainEmailFeature from "./DomainEmailFeature";
import HowItWorks from "./HowItWorks";
import LeadDiscoveryStep2 from "./LeadDiscoveryStep2";
import LeadDiscoveryStep3 from "./LeadDiscoveryStep3";
import LeadDiscoveryStep4 from "./LeadDiscoveryStep4";
import CallToAction from "@/components/CallToAction"

export default function EmailFinderPage() {
  return (
    <>
      <Header />
      <EmailFinderHero />
      <DomainEmailFeature />
      <HowItWorks />
      <LeadDiscoveryStep2 />
      <LeadDiscoveryStep3 />
      <LeadDiscoveryStep4 />
      <CallToAction />
      {/* Add any additional components or sec
      tions as needed */}
     
      <Footer />
    </>
  );
}
