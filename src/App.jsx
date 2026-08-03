import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import TopBar from './components/TopBar.jsx'
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import HeroSlider from './components/HeroSlider.jsx'
import Welcome from './components/Welcome.jsx'
import Categories from './components/Categories.jsx'
import FeaturedProducts from './components/FeaturedProducts.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import SpecialOffers from './components/SpecialOffers.jsx'
import Reviews from './components/Reviews.jsx'
import Blog from './components/Blog.jsx'
import StoreSection from './components/StoreSection.jsx'
import Footer from './components/Footer.jsx'
import AboutUs from './components/AboutUs.jsx'
import ProductsPage from './components/ProductsPage.jsx'

export default function App() {
  const [page, setPage] = useState('home')
  // Category pre-ticked on the Products page — set when a category card or a
  // navbar dropdown item is clicked (e.g. "Herbal Oils").
  const [productCategory, setProductCategory] = useState(null)

  const navigate = (target, category = null) => {
    setPage(target)
    if (target === 'products') setProductCategory(category)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goHome = () => navigate('home')

  return (
    <>
      <TopBar />
      <Header onHomeClick={goHome} />
      <Navbar page={page} onNavigate={navigate} />
      <main>
        {page === 'about' && <AboutUs onHomeClick={goHome} />}

        {page === 'products' && (
          <ProductsPage onHomeClick={goHome} initialCategory={productCategory} />
        )}

        {page === 'home' && (
          <>
            <Helmet>
              <title>New T. R. Stores — Ayurvedic Products &amp; Herbal Medicines | Gampola</title>
              <meta name="description" content="New T. R. Stores - Trusted Ayurvedic products, herbal medicines, grocery items and daily essentials in Gampola, Sri Lanka." />
            </Helmet>
            <HeroSlider />
            <Welcome />
            <Categories onCategoryClick={(cat) => navigate('products', cat)} />
            <FeaturedProducts />
            <WhyChooseUs />
            <SpecialOffers />
            <Reviews />
            <Blog />
            <StoreSection />
          </>
        )}
      </main>
      <Footer />
    </>
  )
}
