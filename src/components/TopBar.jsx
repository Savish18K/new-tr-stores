import { PhoneIcon, WhatsAppIcon, MailIcon, TruckIcon } from './Icons.jsx'
import './TopBar.css'

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <div className="topbar__group">
          <a href="tel:+94812352452" className="topbar__item">
            <PhoneIcon />
            <span>+94 81 235 2452</span>
          </a>
          <a href="https://wa.me/94772352452" className="topbar__item">
            <WhatsAppIcon color="#e0a537" />
            <span>077 235 2452</span>
          </a>
          <a href="mailto:info@newtrstores.com" className="topbar__item">
            <MailIcon />
            <span>info@newtrstores.com</span>
          </a>
        </div>
        <div className="topbar__item topbar__delivery">
          <TruckIcon />
          <span>Free delivery for orders over Rs. 5,000</span>
        </div>
      </div>
    </div>
  )
}
