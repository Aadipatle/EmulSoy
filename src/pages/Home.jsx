import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Welcome from "../components/Welcome/Welcome"
import HealthBenefits from "../components/HealthBenefits/HealthBenefits"
import ProductInfo from "../components/ProductInfo/ProductInfo"
import Features from "../components/Features/Features"
import ProductShowcase from "../components/ProductShowcase/ProductShowcase"
import TrustGlobal from "../components/TrustGlobal/TrustGlobal"
import Footer from "../components/Footer/Footer"
import History from "../components/OurHistory/History"

function Home() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Welcome />
      <HealthBenefits />
      <ProductInfo />
      <Features />
      <ProductShowcase />
      <History/>
      <TrustGlobal />
      <Footer />
    </div>
  )
}

export default Home
