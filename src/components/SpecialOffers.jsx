import './SpecialOffers.css'

export default function SpecialOffers() {
  return (
    <section className="offers" id="offers">
      <div className="container">
        <div className="offer-card">
          <svg className="offer-card__leaf offer-card__leaf--tl" width="150" height="150" viewBox="0 0 150 150" fill="none" aria-hidden="true">
            <path d="M10 140C10 70 50 25 130 12c-8 75-45 118-120 128z" stroke="#e0a537" strokeWidth="1.5" opacity="0.5"/>
            <path d="M18 132C40 90 75 55 118 25" stroke="#e0a537" strokeWidth="1.2" opacity="0.5"/>
            <path d="M30 110c14-2 26-8 34-18M48 88c12-2 22-7 30-16M66 66c10-2 19-6 26-14" stroke="#e0a537" strokeWidth="1" opacity="0.4"/>
          </svg>
          <div className="offer-card__content">
            <span className="offer-card__eyebrow">Special Offer — This Month Only</span>
            <h2 className="offer-card__title">20% OFF</h2>
            <p className="offer-card__desc">
              On all Herbal Oils &amp; Natural Honey. Stock up on nature’s finest —
              trusted quality at our best prices of the season.
            </p>
            <a href="#featured" className="btn btn--gold offer-card__btn">Shop the Offer</a>
          </div>
          <div className="offer-card__visual">
            <span className="offer-card__badge">
              <span className="offer-card__badge-num">20%</span>
              <span className="offer-card__badge-off">OFF</span>
            </span>
            <img src="/assets/offers/honey.png" alt="Natural Honey jar" className="offer-card__img offer-card__img--honey" loading="lazy" />
            <img src="/assets/offers/oil.png" alt="Gingelly Oil bottle" className="offer-card__img offer-card__img--oil" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}
