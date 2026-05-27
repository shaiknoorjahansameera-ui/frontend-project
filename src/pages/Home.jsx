function Home() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">Multi-Tenant E-Commerce SaaS</p>

          <h1>Welcome to Our Store</h1>

          <p className="hero-subtitle">
            Best products at best prices, delivered through a modern shopping
            experience built for every tenant.
          </p>

          <a href="/products" className="primary-button">
            Shop Now
          </a>
        </div>

        <div
          className="hero-banner"
          aria-label="Ecommerce shopping banner"
        >
          <h2>Online Shopping Store</h2>
          <p>Find the best products at affordable prices.</p>
        </div>
      </section>

      <section className="featured-section">
        <div>
          <p className="eyebrow">Featured</p>
          <h2>Popular Categories</h2>
        </div>

        <div className="feature-grid">
          <article>
            <span>01</span>
            <h3>Fresh Styles</h3>
            <p>
              Shoes, watches, and accessories for everyday looks.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Smart Tech</h3>
            <p>
              Laptops, mobiles, and headphones ready for work and play.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Fast Checkout</h3>
            <p>
              A clean storefront experience made for real ecommerce teams.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Home;