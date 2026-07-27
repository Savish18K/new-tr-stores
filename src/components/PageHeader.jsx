import './PageHeader.css'

export default function PageHeader({ title, onHomeClick }) {
  return (
    <div className="page-header">
      <div className="container">
        <h1 className="page-header__title">{title}</h1>
        <div className="page-header__crumbs">
          <a href="#" onClick={(e) => { e.preventDefault(); onHomeClick?.() }}>Home</a>
          <span className="page-header__sep">/</span>
          <span className="page-header__current">{title}</span>
        </div>
      </div>
    </div>
  )
}
