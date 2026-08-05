import PageHeader from './PageHeader.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'
import { useCart } from '../context/CartContext.jsx'
import './WishlistPage.css'
import { HeartIcon } from './Icons.jsx'
import { useState } from 'react'

function WishlistCard({ product }) {
  const { toggleWishlist } = useWishlist()
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleMoveToCart = () => {
    addItem(product)
    setAdded(true)
    setTimeout(() => {
      setAdded(false)
      toggleWishlist(product)
    }, 1500)
  }

  return (
    <article className="wcard">
      <button className="wcard__remove" onClick={() => toggleWishlist(product)} aria-label={`Remove ${product.name} from wishlist`}>
        <HeartIcon size={24} color="#b98a3c" fill="#b98a3c" />
      </button>
      <div className="wcard__img">
        <img src={product.img} alt={product.name} loading="lazy" />
      </div>
      <h3 className="wcard__name">{product.name}</h3>
      <p className="wcard__price">Rs. {product.price.toLocaleString()}.00</p>
      <button className={`wcard__btn${added ? ' wcard__btn--added' : ''}`} onClick={handleMoveToCart}>
        {added ? 'Moved ✓' : 'Move to Cart'}
      </button>
    </article>
  )
}

export default function WishlistPage({ onHomeClick, onNavigate }) {
  const { wishlistItems } = useWishlist()

  return (
    <>
      <PageHeader title="Your Wishlist" onHomeClick={onHomeClick} />
      <section className="wishlist-page">
        <div className="container wishlist-page__inner">
          {wishlistItems.length === 0 ? (
            <div className="wishlist-page__empty">
              <h2>Your wishlist is currently empty.</h2>
              <p>Save items you love to find them easily later.</p>
              <button className="btn btn--gold" onClick={() => onNavigate('products')}>
                Explore Products
              </button>
            </div>
          ) : (
            <div className="wishlist-page__grid">
              {wishlistItems.map(item => (
                <WishlistCard key={item.id} product={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
