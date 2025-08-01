import "./Hero.css"
import banner from '../../assets/banner.jpeg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src={banner} alt="Soybeans and oil" />
      </div> 
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Your trusted partner for the high-quality Lecithin</h1>
          <p className="hero-description">
            We work consistently to bring out the best in the highest quality products & we ensure uncompromised
            responsiveness/durability of Soya Lecithin.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
