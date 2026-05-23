function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} loading="lazy" />
      </div>

      <div className="product-info">
        <div className="product-meta">
          <p className="product-category">{product.category}</p>
          <span className="product-rating">Star {product.rating}</span>
        </div>

        <h3>{product.title}</h3>
        <p className="product-price">Rs. {product.price}</p>

        <div className="product-actions">
          <button type="button">Add to Cart</button>
          <button type="button" className="secondary-button">View</button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
