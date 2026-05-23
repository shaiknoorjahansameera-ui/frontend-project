import { useEffect, useMemo, useState } from "react"
import Loader from "../components/Loader"
import ProductCard from "../components/ProductCard"

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:5000"
const PRODUCTS_API_URL = `${API_BASE_URL}/api/products`

const fallbackImages = [
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"
]

function formatProduct(product, index) {
  return {
    id: product._id || product.id || index,
    title: product.title || product.name || "Product",
    category: product.category || "General",
    price: product.price || 0,
    rating: product.rating || 4.5,
    image: product.image || fallbackImages[index % fallbackImages.length]
  }
}

function Products() {
  const [products, setProducts] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 6

  const filteredProducts = useMemo(() => products.filter((product) => {
    const searchValue = searchQuery.toLowerCase()
    return (
      product.title.toLowerCase().includes(searchValue) ||
      product.category.toLowerCase().includes(searchValue)
    )
  }), [products, searchQuery])

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / productsPerPage))
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * productsPerPage
    return filteredProducts.slice(startIndex, startIndex + productsPerPage)
  }, [currentPage, filteredProducts])

  function handleSearch(event) {
    setSearchQuery(event.target.value)
    setCurrentPage(1)
  }

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(PRODUCTS_API_URL)

        if (!response.ok) {
          throw new Error("Unable to load products")
        }

        const data = await response.json()
        setProducts(data.map(formatProduct))
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <main className="products-page">
      <section className="page-heading">
        <p className="eyebrow">Shop Collection</p>
        <h1>Products</h1>
        <p>Explore everyday essentials and premium tech for your store.</p>
      </section>

      <div className="products-toolbar">
        <input
          type="search"
          placeholder="Search by title or category"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {loading && (
        <>
          <p className="products-message">Loading products...</p>
          <Loader count={6} />
        </>
      )}
      {error && <p className="products-message error-message">{error}</p>}

      {!loading && !error && (
        <section className="products-grid">
          {paginatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </section>
      )}

      {!loading && !error && filteredProducts.length === 0 && (
        <p className="products-message">No products found.</p>
      )}

      {!loading && !error && filteredProducts.length > 0 && (
        <div className="pagination">
          <button
            type="button"
            onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button
            type="button"
            onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </main>
  )
}

export default Products
