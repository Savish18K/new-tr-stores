# New T. R. Stores — Ayurvedic eCommerce Website

Pixel-faithful recreation of the New T. R. Stores homepage, built with React + Vite.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

## Structure

- `public/assets/` — production-ready WebP/PNG assets cropped and cleaned from the high-res reference images (logo with transparent background, hero, categories, products, store photo, offer cutouts, blog images, decorations)
- `src/components/` — reusable components: TopBar, Header, Navbar, HeroSlider, Welcome, Categories (CategoryCard), FeaturedProducts (ProductCard), WhyChooseUs (FeatureCard), SpecialOffers (OfferCard), Reviews (ReviewCard), Blog (BlogCard), StoreSection, Footer (incl. Newsletter), SectionTitle, Icons
- `src/data/data.js` — categories, products, reviews, blog posts
- `src/styles/global.css` — design tokens (colors sampled from the reference), buttons, section titles, container

Responsive: desktop-first, adapts at 1400/1200/992/768/640px.
