import { useState } from 'react'
import { HeartIcon, StarIcon } from './Icons.jsx'
import { products } from '../data/data.js'
import { useCart } from '../context/CartContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'
import './FeaturedProducts.css'

const Arrow = ({ dir = 'left' }) => (
  <svg width="58" height="16" viewBox="0 0 64 16" fill="none" aria-hidden="true"
    style={dir === 'right' ? { transform: 'scaleX(-1)' } : undefined}>
    <path d="M12 8 L52 8" stroke="#e0a537" strokeWidth="2" strokeLinecap="round" />
    <path d="M4 3 L10 8 L4 13" stroke="#14532d" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M50 2 L58 8 L50 14 Z" fill="#e0a537" />
  </svg>
)

function Stars() {
  return (
    <div className="product-card__stars" aria-label="Rated 5 out of 5 stars">
      {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
    </div>
  )
}

function ProductCard({ product }) {
  const { name, price, img, id } = product
  const [line1, line2] = splitName(name)
  const { addItem } = useCart()
  const { toggleWishlist, isInWishlist } = useWishlist()
  const [added, setAdded] = useState(false)

  const saved = isInWishlist(id)

  const handleAdd = () => {
    addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <article className="product-card">
      <button className="product-card__wishlist" aria-label={`Add ${name} to wishlist`} onClick={() => toggleWishlist(product)}>
        <HeartIcon size={24} color="#b98a3c" fill={saved ? "#b98a3c" : "none"} />
      </button>
      <div className="product-card__img">
        <img src={img} alt={`Featured product: ${name}`} loading="lazy" />
      </div>
      <h3 className="product-card__name">{line1}<br />{line2}</h3>
      <p className="product-card__price">Rs. {price.toLocaleString()}.00</p>
      <Stars />
      <button className={`product-card__btn${added ? ' product-card__btn--added' : ''}`} onClick={handleAdd}>
        {added ? 'Added ✓' : 'Add to Cart'}
      </button>
    </article>
  )
}

function splitName(name) {
  const words = name.split(' ')
  const mid = Math.max(1, Math.floor(words.length / 2))
  return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')]
}

export default function FeaturedProducts() {
  return (
    <section className="featured" id="featured">
      <div className="container">
        <div className="featured__head">
          <div className="featured__title-wrap">
            <h2 className="featured__title">Featured Products</h2>
            <Arrow dir="right" />
          </div>
          <a href="#" className="featured__view-all">
            View All Products
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
              <path d="M1 7h16M12 1.5L18 7l-6 5.5" stroke="#136931" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
        <div className="featured__grid">
          {products.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
