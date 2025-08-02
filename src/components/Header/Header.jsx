import { useState } from "react"
import "./Header.css"
import logo from '../../assets/EmulSoy-Logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="container"> 
        <div className="header-content">
          <div className="logo">
            <img src={logo} alt="EmulSoy Logo" />
          </div>

          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#about" className="nav-link">
              About Company
            </a>
            <a href="#products" className="nav-link">
              Our Products
            </a>
            <a href="#news" className="nav-link">
              News & Events
            </a>
            <a href="#contact" className="nav-link">
              Contact Us
            </a>
          </nav>

          <button className="btn btn-primary header-btn">Get Quote</button>

          <button className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
