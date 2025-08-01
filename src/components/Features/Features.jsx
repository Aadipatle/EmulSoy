import "./Features.css"

const Features = () => {
  const features = [
    {
      title: "Superior Raw Material",
      icon: "🌱",
      description: "Premium quality raw materials sourced from trusted suppliers",
    },
    {
      title: "Premium Class Facilities",
      icon: "🏭",
      description: "State-of-the-art manufacturing facilities with modern technology",
    },
    {
      title: "Research & Development Support",
      icon: "🔬",
      description: "Continuous R&D support for innovative product development",
    },
  ]

  return (
    <section className="features">
      <div className="container">
        <div className="grid grid-3">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <span>{feature.icon}</span>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
