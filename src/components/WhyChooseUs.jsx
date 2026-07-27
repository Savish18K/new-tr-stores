import SectionTitle from './SectionTitle.jsx'
import { LeafIcon, TruckIcon, MedalIcon, SupportIcon } from './Icons.jsx'
import './WhyChooseUs.css'

const features = [
  {
    icon: <LeafIcon />,
    title: '100% Genuine Products',
    text: 'Every Ayurvedic and herbal product we stock is sourced directly from trusted, certified suppliers.',
  },
  {
    icon: <TruckIcon size={34} color="#136931" />,
    title: 'Free Delivery',
    text: 'Enjoy free island-wide delivery on all orders over Rs. 5,000 — fast, careful and reliable.',
  },
  {
    icon: <MedalIcon />,
    title: 'Trusted for Generations',
    text: 'A family store serving the Gampola community with honest advice and fair prices for decades.',
  },
  {
    icon: <SupportIcon />,
    title: 'Friendly Service',
    text: 'Our knowledgeable staff is always ready to help you find exactly the right product for your needs.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="why">
      <div className="container">
        <SectionTitle>Why Choose Us</SectionTitle>
        <div className="why__grid">
          {features.map((f) => (
            <div className="feature-card" key={f.title}>
              <div className="feature-card__icon">{f.icon}</div>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__text">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
