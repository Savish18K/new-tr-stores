import { PinIcon, PhoneIcon, WhatsAppIcon, MailIcon, GlobeIcon } from './Icons.jsx'
import './Footer.css'

const quickLinks = ['Home', 'About Us', 'Ayurvedic Products', 'Herbal Foods', 'General Products', 'Special Offers', 'Blog', 'Contact Us']
const supportLinks = ['Delivery Information', 'Return & Refund Policy', 'Terms & Conditions', 'Privacy Policy', 'FAQ', 'Wholesale Enquiries']

const socials = [
  {
    label: 'Facebook',
    className: 'footer__social--fb',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
        <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.3-.04-1.3-.12-2.4-.12-2.4 0-4 1.45-4 4.1v2.3H7.6V13h2.7v8h3.2z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    className: 'footer__social--ig',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="#fff" strokeWidth="2"/>
        <circle cx="12" cy="12" r="4.2" stroke="#fff" strokeWidth="2"/>
        <circle cx="17.2" cy="6.8" r="1.4" fill="#fff"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    className: 'footer__social--yt',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
        <path d="M22 12c0-2.2-.24-3.7-.52-4.6-.2-.7-.8-1.24-1.5-1.4C18.4 5.6 12 5.6 12 5.6s-6.4 0-8 .4c-.7.16-1.3.7-1.5 1.4C2.24 8.3 2 9.8 2 12s.24 3.7.52 4.6c.2.7.8 1.24 1.5 1.4 1.6.4 8 .4 8 .4s6.4 0 8-.4c.7-.16 1.3-.7 1.5-1.4.26-.9.48-2.4.48-4.6zM10 15.2V8.8l5.5 3.2L10 15.2z"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    className: 'footer__social--wa',
    icon: <WhatsAppIcon size={20} color="#fff" />,
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__col footer__col--brand">
          <div className="footer__brand">
            <img src="/assets/logo/logo.png.jpeg" alt="New T. R. Stores logo" className="footer__logo" />
            <div>
              <span className="footer__brand-new">New</span>
              <span className="footer__brand-name">T. R. Stores</span>
            </div>
          </div>
          <ul className="footer__contact">
            <li><PinIcon size={20} /><span>43 Ambagamuwa Road,<br />Gampola, Sri Lanka</span></li>
            <li><PhoneIcon size={19} /><span>+94 81 235 2452</span></li>
            <li><WhatsAppIcon size={19} color="#e0a537" /><span>077 235 2452</span></li>
            <li><MailIcon size={19} /><span>info@newtrstores.com</span></li>
            <li><GlobeIcon size={19} /><span>www.newtrstores.com</span></li>
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Quick Links</h3>
          <ul className="footer__links">
            {quickLinks.map((l) => (
              <li key={l}><a href="#">{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Customer Support</h3>
          <ul className="footer__links">
            {supportLinks.map((l) => (
              <li key={l}><a href="#">{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col footer__col--news">
          <h3 className="footer__heading">Newsletter</h3>
          <p className="footer__news-text">
            Subscribe to get updates on new products and special offers.
          </p>
          <form className="footer__newsletter" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" aria-label="Email address" required />
            <button type="submit" className="footer__subscribe">Subscribe</button>
          </form>
          <h3 className="footer__heading footer__heading--follow">Follow Us</h3>
          <div className="footer__socials">
            {socials.map((s) => (
              <a key={s.label} href="#" aria-label={s.label} className={`footer__social ${s.className}`}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© 2026 New T. R. Stores. All Rights Reserved.</p>
          <p className="footer__made">
            Designed with
            <svg width="18" height="16" viewBox="0 0 24 22" fill="#ff4d2e" aria-hidden="true">
              <path d="M12 21S1.5 14.5 1.5 7.5C1.5 3.9 4.4 1 8 1c2.2 0 3.5 1.2 4 2.3C12.5 2.2 13.8 1 16 1c3.6 0 6.5 2.9 6.5 6.5C22.5 14.5 12 21 12 21z"/>
            </svg>
            for healthy living
          </p>
        </div>
      </div>
    </footer>
  )
}
