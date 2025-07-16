import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Price from "./Price"
import Companies from "@/components/Companies"
import FAQs from "./FAQs"


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Price />
       <Companies />
        <FAQs />
        
        {/* Add any additional sections or components here */}
        
        {/* Footer */}
        <Footer /> 
        
       
      </main>
    </>
  )
}
