import "./TrustGlobal.css";

const TrustGlobal = () => {
  return (
    <section className="trust-global section">
         <h2 className="section-title">Why <span style={{color:'#30E830'}}>Choose Us</span> </h2>
      <div className="container">
        <div className="grid grid-3">
          <div className="trust-card">
            <h3 className="card-title">Competence</h3>
            <p className="card-text">
              We offer you first-class products and best services based on the
              expertise of our employees. We have developed strict quality
              criteria together with our partners so that this quality reaches 
              you too.
            </p>
          </div>
          <div className="trust-card">
            <h3 className="card-title">Trust</h3>
            <p className="card-text">
              Our product range includes lecithin with varied concentrations. We
              guarantee the quality and purity of our products through rigorous
              testing and quality control measures to ensure consistent product
              related processes.
            </p>
          </div>
          <div className="global-card">
            <h3 className="card-title">Global</h3>
            <p className="card-text">
              We export our products worldwide. The shipments of more than 50
              years have built our reputation as a reliable supplier. Our global
              network spans across many countries all over the world helps us to
              achieve this.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustGlobal;
