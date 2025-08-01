import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid grid-3">
          <div className="footer-section">
            <h2 className="footer-title">Welcome to EmulSoy</h2>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span> 2nd Floor, MB Tower, Nandanvan Main Rd, Mire Layout, Jawahar Nagar, Azamshah Layout, Nagpur, Maharashtra 440009</span>
              </div>
            </div>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Contact Us</h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+91-9826000000</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>info@emulsoy.com</span>
              </div>
            </div>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Reach Us</h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                 <span className="contact-icon">📞</span>
                <span className="contact-icon">✉️</span>
                 <span className="contact-icon">📞</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 EmulSoy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
