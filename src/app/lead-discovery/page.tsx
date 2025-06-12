import Header from "@/components/Header"
import Footer from "@/components/Footer"
import LeadDiscoveryHero from "./LeadDiscoveryHero"



export default function LeadDiscoveryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f9f7fe] pb-16">
     
            <LeadDiscoveryHero />
          {/* Add your lead discovery content/components here */}
       
      </main>
      <Footer />
    </>
  )
}
