import { UserIcon, HeartIcon, CartIcon, SearchIcon } from './Icons.jsx'
import './Header.css'

export default function Header({ onHomeClick }) {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#" className="header__brand" onClick={(e) => { e.preventDefault(); onHomeClick?.() }}>
          <img src="/assets/logo/logo.png" alt="New T. R. Stores logo" className="header__logo" />
          <div className="header__brand-text">
            <span className="header__brand-new">New</span>
            <span className="header__brand-name">T. R. Stores</span>
            <span className="header__brand-address">43 Ambagamuwa Road, Gampola, Sri Lanka</span>
          </div>
        </a>

        <form className="header__search" onSubmit={(e) => e.preventDefault()} role="search">
          <input type="search" placeholder="Search for products..." aria-label="Search for products" />
          <button type="submit" aria-label="Search">
            <SearchIcon />
          </button>
        </form>

        <div className="header__actions">
          <a href="#" className="header__action">
            <UserIcon />
            <span>My Account</span>
          </a>
          <a href="#" className="header__action">
            <HeartIcon />
            <span>Wishlist</span>
          </a>
          <a href="#" className="header__action header__action--cart">
            <span className="header__cart-wrap">
              <CartIcon />
              <span className="header__cart-badge">0</span>
            </span>
            <span>Cart</span>
          </a>
        </div>
      </div>
    </header>
  )
}
