import { createContext, useContext, useEffect, useReducer } from 'react'

const CartContext = createContext(null)

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(item => item.id === action.payload.id)
      if (existing) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, qty: item.qty + action.payload.qty }
            : item
        )
      }
      return [...state, action.payload]
    }
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.payload.id)
    case 'UPDATE_QTY':
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, qty: action.payload.qty }
          : item
      )
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [cartItems, dispatch] = useReducer(cartReducer, [], () => {
    try {
      const localData = localStorage.getItem('tr_cart')
      return localData ? JSON.parse(localData) : []
    } catch (e) {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('tr_cart', JSON.stringify(cartItems))
  }, [cartItems])

  const addItem = (product, qty = 1) => dispatch({ type: 'ADD_ITEM', payload: { ...product, qty } })
  const removeItem = (id) => dispatch({ type: 'REMOVE_ITEM', payload: { id } })
  const updateQuantity = (id, qty) => {
    if (qty <= 0) {
      removeItem(id)
    } else {
      dispatch({ type: 'UPDATE_QTY', payload: { id, qty } })
    }
  }

  const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0)
  const cartTotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0)

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, updateQuantity, cartCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within a CartProvider')
  return context
}
