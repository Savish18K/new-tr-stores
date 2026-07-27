import SectionTitle from './SectionTitle.jsx'
import { categories } from '../data/data.js'
import './Categories.css'

function CategoryCard({ name, img, onCategoryClick }) {
  const handleClick = (e) => {
    e.preventDefault()
    // Opens the Products page with this category already ticked in the filters.
    onCategoryClick?.(name)
  }

  return (
    <a href="#" className="category-card" onClick={handleClick}>
      <div className="category-card__img">
        <img src={img} alt={name} loading="lazy" />
      </div>
      <h3 className="category-card__name">{name.split(' ').map((w, i) => (
        <span key={i}>{w}<br /></span>
      ))}</h3>
    </a>
  )
}

export default function Categories({ onCategoryClick }) {
  return (
    <section className="categories" id="categories">
      <div className="container">
        <SectionTitle>Shop by Category</SectionTitle>
        <div className="categories__grid">
          {categories.map((c) => (
            <CategoryCard key={c.name} {...c} onCategoryClick={onCategoryClick} />
          ))}
        </div>
      </div>
    </section>
  )
}
