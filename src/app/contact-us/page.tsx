// app/email-finder/page.tsx (or pages/email-finder.tsx if using pages directory)

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Content from "./Content";
import CallToAction from "@/components/CallToAction";

export default function EmailFinderPage() {
  return (
    <>
      <Header />
      
            <Content />
      <CallToAction />
     
     
      <Footer />
    </>
  );
}
