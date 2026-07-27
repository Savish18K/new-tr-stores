import './Welcome.css'

export default function Welcome() {
  return (
    <section className="welcome">
      <div className="welcome__band">
        <div className="container welcome__inner">
          <div className="welcome__art">
            <img
              src="/assets/decorations/welcome-art.webp"
              alt="Black mortar and pestle surrounded by fresh green herbs"
              loading="lazy"
            />
          </div>
          <div className="welcome__text">
            <h3 className="welcome__intro">Welcome to</h3>
            <h2 className="welcome__title">New<br />T. R. Stores</h2>
            <p className="welcome__desc">
              Located in Gampola, New T. R. Stores has been serving customers with trusted
              Ayurvedic products, herbal medicines, grocery items and daily essentials. Our
              goal is to provide quality products with friendly service at affordable prices.
            </p>
            <a href="#" className="btn">Learn More</a>
          </div>
          <img
            src="/assets/decorations/welcome-sketch.webp"
            alt=""
            aria-hidden="true"
            className="welcome__sketch"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
