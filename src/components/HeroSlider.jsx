import { useState, useEffect, useCallback } from 'react'
import './HeroSlider.css'

const slides = [
  {
    top: 'Traditional',
    title: 'Ayurvedic Products',
    sub: 'Trusted for Generations',
    tagline: '100% Genuine Herbal Products',
  },
  {
    top: 'Pure & Natural',
    title: 'Herbal Medicines',
    sub: 'For Healthy Living',
    tagline: 'Sourced from Trusted Suppliers',
  },
  {
    top: 'Authentic',
    title: 'Herbal Oils & Honey',
    sub: 'Nature’s Finest Quality',
    tagline: 'Carefully Selected for You',
  },
  {
    top: 'Wholesome',
    title: 'Foods & Groceries',
    sub: 'Daily Essentials Store',
    tagline: 'Everything Under One Roof',
  },
  {
    top: 'Family Owned',
    title: 'Serving Gampola',
    sub: 'With Friendly Service',
    tagline: 'Quality Products at Fair Prices',
  },
]

export default function HeroSlider() {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), [])
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)

  useEffect(() => {
    const t = setInterval(next, 6500)
    return () => clearInterval(t)
  }, [next])

  const slide = slides[index]

  return (
    <section className="hero" aria-label="Featured promotions">
      <div className="hero__bg" role="img" aria-label="Ayurvedic mortar and pestle with fresh herbs" />
      <div className="container hero__inner">
        <div className="hero__content" key={index}>
          <h2 className="hero__top">{slide.top}</h2>
          <h1 className="hero__title">{slide.title}</h1>
          <h3 className="hero__sub">{slide.sub}</h3>
          <p className="hero__tagline">{slide.tagline}</p>
          <a href="#featured" className="btn hero__btn">Shop Now</a>
        </div>
      </div>

      <button className="hero__arrow hero__arrow--prev" onClick={prev} aria-label="Previous slide">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M12.5 4L6.5 10L12.5 16" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button className="hero__arrow hero__arrow--next" onClick={next} aria-label="Next slide">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M7.5 4L13.5 10L7.5 16" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div className="hero__dots" role="tablist" aria-label="Slides">
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === index}
            aria-label={`Slide ${i + 1}`}
            className={`hero__dot${i === index ? ' hero__dot--active' : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  )
}
