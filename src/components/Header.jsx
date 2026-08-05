import { UserIcon, HeartIcon, CartIcon, SearchIcon } from './Icons.jsx'
import { useCart } from '../context/CartContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'
import './Header.css'

export default function Header({ onHomeClick, onNavigate }) {
  const { cartCount } = useCart()
  const { wishlistItems } = useWishlist()
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
          <a href="#" className="header__action" onClick={(e) => { e.preventDefault(); onNavigate('wishlist') }}>
            <span className="header__cart-wrap">
              <HeartIcon />
              {wishlistItems.length > 0 && <span className="header__cart-badge">{wishlistItems.length}</span>}
            </span>
            <span>Wishlist</span>
          </a>
          <a href="#" className="header__action header__action--cart" onClick={(e) => { e.preventDefault(); onNavigate('cart') }}>
            <span className="header__cart-wrap">
              <CartIcon />
              {cartCount > 0 && <span className="header__cart-badge">{cartCount}</span>}
            </span>
            <span>Cart</span>
          </a>
        </div>
      </div>
    </header>
  )
}
