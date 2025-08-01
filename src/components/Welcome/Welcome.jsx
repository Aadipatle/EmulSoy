import "./Welcome.css"
import company from '../../assets/company.svg'

const Welcome = () => {
  return (
    <section className="welcome section">
      <div className="container">
        <div className="grid grid-2 welcome-grid">
          <div className="welcome-image">
            <img src={company} alt="Manufacturing facility" />
          </div>
          <div className="welcome-content">
            <h2 className="welcome-title">
              Welcome to <span style={{color:'#30E830'}}>EmulSoy</span>
            </h2>
            <p className="welcome-text">
              We are a leading manufacturer and supplier of premium quality lecithin and soy-based products. Our
              commitment to excellence and innovation has made us a trusted name in the industry.
            </p>
            <p className="welcome-text">
              We are a young and enterprising organization, backed by over 15 years of industry experience in
              manufacturing and supplying high-quality lecithin products.
            </p>
            <p className="welcome-text">
              Our state-of-the-art manufacturing facility is equipped with modern machinery and technology, enabling us
              to deliver products that meet the highest standards of quality and purity.
            </p>
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Welcome
