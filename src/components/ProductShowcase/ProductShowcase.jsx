import "./ProductShowcase.css";
import banner3 from "../../assets/banner2.jpeg";

const ProductShowcase = () => {
  return (
    <section className="product-showcase section">
      <h2 className="section-title">Our <span style={{color:'#30E830'}}>Products</span> </h2>
      <div className="container">
        <div className="grid grid-2 showcase-grid">
          <div className="showcase-image">
            <img src={banner3} alt="Soy lecithin granules"/>
          </div>
          <div className="showcase-content">
            <p className="showcase-text">
              Soya Lecithin is a naturally important, widely used in various
              industries, like food, feed, pharmaceutical, cosmetic and paint.
              It is used as an emulsifier, wetting agent, stabilizing agent,
              release agent, antioxidant, viscosity modifier and nutritional
              supplement.
            </p>
            <p className="showcase-text">
              Soya Lecithin is a valuable ingredient widely used in various
              industries, like food, feed, pharmaceuticals, cosmetics, and more.
              It is known for its emulsifying properties, which help blend and
              stabilize different substances, making it a versatile additive in
              many applications.
            </p>
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
