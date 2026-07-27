import { PinIcon, PhoneIcon, WhatsAppIcon } from './Icons.jsx'
import './StoreSection.css'

const LeafSpray = () => (
  <svg width="240" height="330" viewBox="0 0 240 330" fill="none" aria-hidden="true" className="store__leaves">
    <path d="M30 325C60 230 110 140 215 40" stroke="#e8d9a8" strokeWidth="1.6" opacity="0.55"/>
    {[
      [70, 240, -40], [105, 185, -30], [145, 130, -25], [185, 78, -15],
      [45, 285, -55], [90, 265, 30], [130, 210, 35], [170, 155, 40], [205, 100, 45],
    ].map(([x, y, r], i) => (
      <g key={i} transform={`translate(${x} ${y}) rotate(${r})`} opacity="0.55">
        <path d="M0 0C18 -6 34 -4 44 8C32 20 14 22 0 14C-4 9 -4 4 0 0Z" stroke="#e8d9a8" strokeWidth="1.4" fill="none"/>
        <path d="M2 7C14 6 26 7 40 9" stroke="#e8d9a8" strokeWidth="1" fill="none"/>
      </g>
    ))}
  </svg>
)

export default function StoreSection() {
  return (
    <section className="store" id="visit">
      <LeafSpray />
      <div className="container store__inner">
        <div className="store__photo-wrap">
          <img
            src="/assets/store/store-front.webp"
            alt="T. R. Stores shop front on Ambagamuwa Road, Gampola"
            className="store__photo"
            loading="lazy"
          />
        </div>
        <div className="store__info">
          <h2 className="store__title">
            Visit Our Store <span>Today</span>
          </h2>
          <a
            href="https://maps.google.com/?q=43+Ambagamuwa+Road,+Gampola,+Sri+Lanka"
            target="_blank"
            rel="noopener noreferrer"
            className="store__row store__link"
          >
            <span className="store__icon-ring"><PinIcon size={24} /></span>
            <p>43 Ambagamuwa Road<br />Gampola, Sri Lanka</p>
          </a>
          <div className="store__row-group">
            <div className="store__row">
              <span className="store__icon-ring"><PhoneIcon size={22} /></span>
              <p>+94 81 235 2452</p>
            </div>
            <div className="store__row">
              <span className="store__icon-ring store__icon-ring--wa"><WhatsAppIcon size={40} bg /></span>
              <p>077 235 2452</p>
            </div>
          </div>
        </div>
        <div className="store__map-wrap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.74399283304!2d80.59162993982734!3d7.155569671808221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae371de8cd6107b%3A0x84e2e3923638b99e!2s43%20Ambagamuwa%20Road%2C%20Gampola!5e0!3m2!1sen!2slk!4v1784531254220!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="T.R. Stores Google Map Location"
            className="store__map-iframe"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
