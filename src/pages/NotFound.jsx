import { Link } from "react-router-dom"

function NotFound() {
  return (
    <main className="not-found-page">
      <section className="not-found-content">
        <p className="eyebrow">Page Not Found</p>
        <h1>404</h1>
        <p>The page may have moved, or the route is not part of this store.</p>
        <Link to="/" className="primary-button">Back to Home</Link>
      </section>
    </main>
  )
}

export default NotFound
