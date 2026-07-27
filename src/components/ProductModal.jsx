import { useEffect, useState } from 'react'
import './ProductModal.css'

export default function ProductModal({ product, onClose }) {
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  // Reset state whenever a different product is opened.
  useEffect(() => {
    setQty(1)
    setAdded(false)
  }, [product])

  // Close on Escape, and lock body scroll while open.
  useEffect(() => {
    if (!product) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [product, onClose])

  if (!product) return null

  const handleAdd = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2200)
  }

  return (
    <div className="pmodal__overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="pmodal__panel" onClick={(e) => e.stopPropagation()}>
        <button className="pmodal__close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="pmodal__grid">
          <div className="pmodal__media">
            <div className="pmodal__img">
              <img src={product.img} alt={product.name} />
            </div>
            <span className="pmodal__badge">{product.category}</span>
          </div>

          <div className="pmodal__info">
            <span className="pmodal__num">No. {String(product.id).padStart(2, '0')}</span>
            <h2 className="pmodal__name">{product.name}</h2>
            {product.native && <p className="pmodal__native">{product.native}</p>}

            <p className="pmodal__price">
              Rs. {product.price.toLocaleString()}.00
              <span className="pmodal__size"> / {product.size}</span>
            </p>

            <p className="pmodal__desc">{product.description}</p>

            <div className="pmodal__specs">
              {Object.entries(product.specs || {}).map(([label, value]) => (
                <div className="pmodal__spec-row" key={label}>
                  <span className="pmodal__spec-label">{label}</span>
                  <span className="pmodal__spec-value">{value}</span>
                </div>
              ))}
            </div>

            <div className="pmodal__actions">
              <div className="pmodal__qty">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span>{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.min(99, q + 1))}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <button
                className={`btn btn--gold pmodal__cart${added ? ' pmodal__cart--added' : ''}`}
                onClick={handleAdd}
              >
                {added ? '✓ Added to Cart' : 'Add to Cart'}
              </button>
            </div>

            <p className="pmodal__total">
              Total: <strong>Rs. {(product.price * qty).toLocaleString()}.00</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
