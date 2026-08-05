import PageHeader from './PageHeader.jsx'
import { useCart } from '../context/CartContext.jsx'
import './CartPage.css'

export default function CartPage({ onHomeClick, onNavigate }) {
  const { cartItems, updateQuantity, removeItem, cartTotal } = useCart()

  return (
    <>
      <PageHeader title="Your Cart" onHomeClick={onHomeClick} />
      <section className="cart-page">
        <div className="container cart-page__inner">
          {cartItems.length === 0 ? (
            <div className="cart-page__empty">
              <h2>Your cart is currently empty.</h2>
              <p>Explore our wide range of authentic Ayurvedic products.</p>
              <button className="btn btn--gold" onClick={() => onNavigate('products')}>
                Return to Shop
              </button>
            </div>
          ) : (
            <div className="cart-page__content">
              <div className="cart-page__items">
                {cartItems.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <img src={item.img} alt={item.name} className="cart-item__img" />
                    <div className="cart-item__info">
                      <h3 className="cart-item__name">{item.name}</h3>
                      <p className="cart-item__price">Rs. {item.price.toLocaleString()}.00</p>
                    </div>
                    <div className="cart-item__qty">
                      <button onClick={() => updateQuantity(item.id, item.qty - 1)} aria-label="Decrease quantity">−</button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQuantity(item.id, item.qty + 1)} aria-label="Increase quantity">+</button>
                    </div>
                    <div className="cart-item__total">
                      Rs. {(item.price * item.qty).toLocaleString()}.00
                    </div>
                    <button className="cart-item__remove" onClick={() => removeItem(item.id)} aria-label="Remove item">✕</button>
                  </div>
                ))}
              </div>
              <div className="cart-page__summary">
                <h3>Order Summary</h3>
                <div className="cart-page__summary-row">
                  <span>Subtotal</span>
                  <span>Rs. {cartTotal.toLocaleString()}.00</span>
                </div>
                <div className="cart-page__summary-total">
                  <span>Total</span>
                  <span>Rs. {cartTotal.toLocaleString()}.00</span>
                </div>
                <button className="btn btn--gold cart-page__checkout" onClick={() => alert('Checkout flow coming soon!')}>
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
