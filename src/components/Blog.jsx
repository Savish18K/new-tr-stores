import SectionTitle from './SectionTitle.jsx'
import { CalendarIcon } from './Icons.jsx'
import { posts } from '../data/data.js'
import './Blog.css'

function BlogCard({ title, date, img }) {
  return (
    <article className="blog-card">
      <a href="#" className="blog-card__img">
        <img src={img} alt={`Blog post: ${title}`} loading="lazy" />
      </a>
      <div className="blog-card__body">
        <span className="blog-card__date">
          <CalendarIcon />
          {date}
        </span>
        <h3 className="blog-card__title"><a href="#">{title}</a></h3>
        <a href="#" className="blog-card__more">
          Read More
          <svg width="17" height="12" viewBox="0 0 20 14" fill="none" aria-hidden="true">
            <path d="M1 7h16M12 1.5L18 7l-6 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </article>
  )
}

export default function Blog() {
  return (
    <section className="blog" id="blog">
      <div className="container">
        <SectionTitle>Latest From Our Blog</SectionTitle>
        <div className="blog__grid">
          {posts.map((p) => <BlogCard key={p.title} {...p} />)}
        </div>
      </div>
    </section>
  )
}
