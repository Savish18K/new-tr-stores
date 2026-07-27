import { useState } from 'react'
import { ChevronDown } from './Icons.jsx'
import './Navbar.css'

// `category` on a dropdown item = open the Products page with that filter ticked.
// Items without a `category` open the Products page with no filter applied.
const links = [
  { label: 'Home', page: 'home' },
  { label: 'About Us', page: 'about' },
  { label: 'All Products', page: 'products' },
  {
    label: 'Ayurvedic Products',
    dropdown: [
      { label: 'Ayurvedic Medicines', category: 'Ayurvedic Medicines' },
      { label: 'Herbal Oils', category: 'Herbal Oils' },
      { label: 'Health Supplements', category: 'Health Supplements' },
      { label: 'Personal Care', category: 'Personal Care' },
    ],
  },
  {
    label: 'Herbal Foods',
    dropdown: [
      { label: 'Herbal Foods', category: 'Herbal Foods' },
      { label: 'Herbal Tea', category: 'Herbal Tea' },
    ],
  },
  {
    label: 'General Products',
    dropdown: [
      { label: 'Grocery', category: 'Grocery' },
      { label: 'Spices', category: 'Spices' },
    ],
  },
  { label: 'Special Offers', anchor: 'offers' },
  { label: 'Blog', anchor: 'blog' },
  { label: 'Contact Us', anchor: 'visit' },
]

export default function Navbar({ page = 'home', onNavigate }) {
  const [open, setOpen] = useState(false)

  const go = (e, target, category = null) => {
    e.preventDefault()
    onNavigate?.(target, category)
    setOpen(false)
  }

  const handleTopClick = (e, link) => {
    if (link.page) {
      go(e, link.page)
    } else if (link.anchor) {
      e.preventDefault()
      if (page !== 'home') {
        onNavigate?.('home')
        setTimeout(() => {
          const el = document.getElementById(link.anchor)
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      } else {
        const el = document.getElementById(link.anchor)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }
      setOpen(false)
    }
  }

  return (
    <nav className="navbar">
      <div className="container navbar__inner">
        <button
          className="navbar__toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
        <ul className={`navbar__list${open ? ' navbar__list--open' : ''}`}>
          {links.map((link) => {
            const isActive = link.page && link.page === page
            return (
              <li key={link.label} className={`navbar__item${link.dropdown ? ' navbar__item--dropdown' : ''}`}>
                <a
                  href={link.anchor ? `#${link.anchor}` : '#'}
                  className={`navbar__link${isActive ? ' navbar__link--active' : ''}`}
                  onClick={(e) => handleTopClick(e, link)}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown />}
                </a>
                {link.dropdown && (
                  <ul className="navbar__dropdown">
                    {link.dropdown.map((item) => (
                      <li key={item.label}>
                        <a href="#" onClick={(e) => go(e, 'products', item.category)}>
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
