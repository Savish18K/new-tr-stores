import { useEffect, useMemo, useState } from 'react'
import PageHeader from './PageHeader.jsx'
import ProductModal from './ProductModal.jsx'
import { allProducts, productCategories } from '../data/data.js'
import './ProductsPage.css'

const PRICE_MIN = Math.min(...allProducts.map((p) => p.price))
const PRICE_MAX = Math.max(...allProducts.map((p) => p.price))

const SORTS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name: A – Z' },
  { value: 'name-desc', label: 'Name: Z – A' },
]

function ProductCard({ product, onClick }) {
  return (
    <button className="pcard" onClick={() => onClick(product)}>
      <div className="pcard__img">
        <img src={product.img} alt={product.name} loading="lazy" />
        <span className="pcard__view">View Details</span>
      </div>
      <div className="pcard__body">
        <span className="pcard__cat">{product.category}</span>
        <h3 className="pcard__name">{product.name}</h3>
        <p className="pcard__price">
          Rs. {product.price.toLocaleString()}.00
          <span className="pcard__size"> / {product.size}</span>
        </p>
      </div>
    </button>
  )
}

export default function ProductsPage({ onHomeClick, initialCategory = null }) {
  const [selectedCats, setSelectedCats] = useState(initialCategory ? [initialCategory] : [])
  const [maxPrice, setMaxPrice] = useState(PRICE_MAX)
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('featured')
  const [selected, setSelected] = useState(null)
  const [filtersOpen, setFiltersOpen] = useState(false)

  // When arriving from a category card on the home page, pre-tick that filter.
  useEffect(() => {
    setSelectedCats(initialCategory ? [initialCategory] : [])
  }, [initialCategory])

  const toggleCat = (cat) => {
    setSelectedCats((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    )
  }

  const clearAll = () => {
    setSelectedCats([])
    setMaxPrice(PRICE_MAX)
    setSearch('')
    setSort('featured')
  }

  const isFiltered =
    selectedCats.length > 0 || maxPrice < PRICE_MAX || search.trim() !== '' || sort !== 'featured'

  const results = useMemo(() => {
    const term = search.trim().toLowerCase()

    let list = allProducts.filter((p) => {
      const catOk = selectedCats.length === 0 || selectedCats.includes(p.category)
      const priceOk = p.price <= maxPrice
      const searchOk =
        term === '' ||
        p.name.toLowerCase().includes(term) ||
        (p.native || '').toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term)
      return catOk && priceOk && searchOk
    })

    switch (sort) {
      case 'price-asc':
        list = [...list].sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        list = [...list].sort((a, b) => b.price - a.price)
        break
      case 'name-asc':
        list = [...list].sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'name-desc':
        list = [...list].sort((a, b) => b.name.localeCompare(a.name))
        break
      default:
        break
    }
    return list
  }, [selectedCats, maxPrice, search, sort])

  const countFor = (cat) => allProducts.filter((p) => p.category === cat).length

  return (
    <>
      <PageHeader title="Our Products" onHomeClick={onHomeClick} />

      <section className="products-page">
        <div className="container products-page__inner">
          {/* ---------------- Filter sidebar ---------------- */}
          <button
            className="products-page__filter-toggle"
            onClick={() => setFiltersOpen((o) => !o)}
          >
            {filtersOpen ? '✕ Hide Filters' : '☰ Show Filters'}
          </button>

          <aside className={`filters${filtersOpen ? ' filters--open' : ''}`}>
            <div className="filters__head">
              <h2 className="filters__title">Filter Products</h2>
              {isFiltered && (
                <button className="filters__clear" onClick={clearAll}>
                  Clear all
                </button>
              )}
            </div>

            <div className="filters__block">
              <h3 className="filters__label">Search</h3>
              <input
                type="search"
                className="filters__search"
                placeholder="Search by name…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="filters__block">
              <h3 className="filters__label">Category</h3>
              <ul className="filters__cats">
                {productCategories.map((cat) => (
                  <li key={cat}>
                    <label className="filters__check">
                      <input
                        type="checkbox"
                        checked={selectedCats.includes(cat)}
                        onChange={() => toggleCat(cat)}
                      />
                      <span className="filters__check-box" aria-hidden="true" />
                      <span className="filters__check-text">{cat}</span>
                      <span className="filters__count">{countFor(cat)}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="filters__block">
              <h3 className="filters__label">Max Price</h3>
              <input
                type="range"
                className="filters__range"
                min={PRICE_MIN}
                max={PRICE_MAX}
                step={10}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              />
              <div className="filters__range-vals">
                <span>Rs. {PRICE_MIN.toLocaleString()}</span>
                <strong>Up to Rs. {maxPrice.toLocaleString()}</strong>
              </div>
            </div>

            <div className="filters__block">
              <h3 className="filters__label">Sort By</h3>
              <select
                className="filters__select"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                {SORTS.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
          </aside>

          {/* ---------------- Results ---------------- */}
          <div className="products-page__results">
            <div className="products-page__bar">
              <p className="products-page__count">
                Showing <strong>{results.length}</strong> of {allProducts.length} products
                {selectedCats.length === 1 && <> in <strong>{selectedCats[0]}</strong></>}
              </p>
              {selectedCats.length > 0 && (
                <div className="products-page__chips">
                  {selectedCats.map((cat) => (
                    <button key={cat} className="chip" onClick={() => toggleCat(cat)}>
                      {cat} <span aria-hidden="true">✕</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {results.length === 0 ? (
              <div className="products-page__empty">
                <h3>No products match those filters</h3>
                <p>Try widening the price range or clearing your search.</p>
                <button className="btn btn--gold" onClick={clearAll}>
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="products-page__grid">
                {results.map((p) => (
                  <ProductCard key={p.id} product={p} onClick={setSelected} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </>
  )
}
