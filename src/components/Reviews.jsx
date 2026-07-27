import { useState } from 'react'
import SectionTitle from './SectionTitle.jsx'
import { QuoteIcon, StarIcon } from './Icons.jsx'
import { reviews } from '../data/data.js'
import './Reviews.css'

function ReviewCard({ name, location, text }) {
  const initials = name.split(' ').map((w) => w[0]).join('')
  return (
    <article className="review-card">
      <div className="review-card__quote"><QuoteIcon /></div>
      <div className="review-card__stars" aria-label="Rated 5 out of 5 stars">
        {[...Array(5)].map((_, i) => <StarIcon key={i} size={20} />)}
      </div>
      <p className="review-card__text">“{text}”</p>
      <div className="review-card__author">
        <span className="review-card__avatar">{initials}</span>
        <span>
          <strong className="review-card__name">{name}</strong>
          <span className="review-card__meta">Verified Customer — {location}</span>
        </span>
      </div>
    </article>
  )
}

export default function Reviews() {
  const [page, setPage] = useState(0)

  return (
    <section className="reviews">
      <div className="container">
        <SectionTitle>Customer Reviews</SectionTitle>
        <div className="reviews__grid">
          {reviews.map((r) => <ReviewCard key={r.name} {...r} />)}
        </div>
        <div className="reviews__dots" role="tablist" aria-label="Review pages">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === page}
              aria-label={`Review page ${i + 1}`}
              className={`reviews__dot${i === page ? ' reviews__dot--active' : ''}`}
              onClick={() => setPage(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
