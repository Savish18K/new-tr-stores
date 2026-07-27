import PageHeader from './PageHeader.jsx'
import WhyChooseUs from './WhyChooseUs.jsx'
import './AboutUs.css'

export default function AboutUs({ onHomeClick }) {
  return (
    <>
      <PageHeader title="About Us" onHomeClick={onHomeClick} />

      <section className="story">
        <div className="container story__inner">
          <div className="story__legacy-images">
            <div className="legacy-card">
              <div className="legacy-card__img-wrap">
                <img
                  src="/assets/about/Founders.jpeg"
                  alt="Mr. Sithamparapillai Sathasivam and spouse"
                  loading="lazy"
                />
              </div>
              <div className="legacy-card__info">
                <h4>Mr. Sithamparapillai Sathasivam &amp; Spouse</h4>
                <span>Grandparents &amp; Founders</span>
              </div>
            </div>

            <div className="legacy-card">
              <div className="legacy-card__img-wrap">
                <img
                  src="/assets/about/Store-Owner.jpeg"
                  alt="Mr. Sathasivam Thampaiya sitting on his motorcycle"
                  loading="lazy"
                />
              </div>
              <div className="legacy-card__info">
                <h4>Mr. Sathasivam Thambiah</h4>
                <span>Father &amp; Founder of T.R. Stores</span>
              </div>
            </div>
          </div>

          <div className="story__text">
            <span className="story__eyebrow">Our Story</span>
            <h2 className="story__title">The Proud Heritage of New T.R. Stores</h2>
            <p className="story__subtitle">
              A Legacy of Tradition, Trust and Authentic Ayurvedic Excellence
            </p>

            <p>
              Nestled in the heart of the beautiful hill country of Sri Lanka, the historic town of Gampola has always been a place rich in culture, tradition, and community values. It is within this remarkable town, surrounded by the beauty of the central highlands, that the proud journey of New T.R Stores began — a family business built on generations of dedication, trust, and commitment to serving the community.
            </p>

            <p>
              The roots of this respected Ayurvedic and traditional products business can be traced back many decades to Mr. Sithamparapillai Sathasivam, fondly known as Sandappar, who established the foundation of the business under the name MSTD. Through his passion for authentic Ayurvedic products, traditional remedies, and quality service, he created a strong connection with the local community. The business was later continued under the name Murugan Stores, preserving the values and traditions established from its early beginnings.
            </p>

            <p>
              Carrying forward this valuable heritage, Mr. Sathasivam Thambiah, son of Mr. Sithamparapillai Sathasivam, officially commenced the business under the name T.R Stores on 19 September 1974 at No. 59 Ambagamuwa Road, Gampola, in the centre of this beautiful hill country town.
            </p>

            <p>
              From the very beginning, T.R Stores became recognised for its unique range of products, especially its authentic Ayurvedic medicines, traditional herbal products, religious items, and specialty goods that were rarely available elsewhere. The store quickly gained the trust and respect of the people of Gampola and surrounding towns due to its commitment to quality, authenticity, and personalised customer service.
            </p>

            <h3 className="story__section-title">Preserving Traditional Ayurvedic Knowledge</h3>
            <p>
              One of the greatest strengths of T.R Stores has always been its collection of traditional and rare Ayurvedic products. Many of these products represent generations of Ayurvedic knowledge and continue to support the health and wellbeing of customers who value natural and traditional approaches.
            </p>

            <p>
              Over the years, T.R Stores has also proudly served the religious and cultural needs of the community. The store has become a trusted supplier for Buddhist and Hindu temples, poojas, religious ceremonies, and cultural events by providing a complete range of required items. Temples and devotees can simply provide their requirements, and the experienced team at T.R Stores carefully prepares and supplies the necessary items, ensuring a convenient and reliable service for every occasion.
            </p>

            <h3 className="story__section-title">Continuing a Family Tradition</h3>
            <p>
              Following the passing of Mr. Sathasivam Thambiah, the responsibility of continuing this proud family legacy was taken over by his son, Mr. Thambiah Thayaparan.
            </p>

            <p>
              Beginning his journey in the family business at the young age of 18 years, Mr. Thayaparan quickly developed a deep understanding of the business and demonstrated exceptional dedication, commitment, and leadership. Through his hard work, business knowledge, and genuine care for customers, he successfully expanded and strengthened the reputation of T.R Stores.
            </p>

            <p>
              His excellent management skills and outstanding customer service approach helped transform the store into a thriving and trusted business where customers continue to visit regularly. His vision, determination, and passion for excellence have played a significant role in taking the family business to new heights.
            </p>

            <h3 className="story__section-title">A New Chapter – The Beginning of New T.R. Stores</h3>
            <p>
              With a strong understanding of traditional business values and modern business practices, Mr. Thambiah Thayaparan continues to develop the business while protecting the heritage and principles passed down by his parents and grandparents.
            </p>

            <p>
              Recognising the importance of adapting to changing customer needs and modern retail practices, he has taken the next step in this remarkable journey by establishing New T.R Stores at No. 43 Ambagamuwa Road, Gampola.
            </p>

            <p>
              New T.R Stores represents the continuation of a proud family legacy — combining generations of Ayurvedic knowledge and traditional values with modern convenience, improved services, and a wider range of quality products.
            </p>

            <h3 className="story__section-title">Our Commitment</h3>
            <p>
              At New T.R Stores, we believe that our success is built not only on the products we provide, but also on the trust and relationships we have developed with our customers over generations.
            </p>

            <ul className="story__commitment-list">
              <li>Authentic Ayurvedic medicines and traditional herbal products</li>
              <li>Religious and pooja essentials for temples and ceremonies</li>
              <li>Quality grocery and household products</li>
              <li>Traditional items that preserve Sri Lankan cultural values</li>
              <li>Friendly and personalised customer service</li>
            </ul>

            <p className="story__conclusion">
              From our humble beginnings to our new chapter, New T.R Stores continues to honour its rich heritage while looking towards the future — proudly serving the people of Gampola and beyond with trust, tradition, and excellence.
            </p>
          </div>
        </div>
      </section>

      <WhyChooseUs />
    </>
  )
}
