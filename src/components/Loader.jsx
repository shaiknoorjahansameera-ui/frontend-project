function Loader({ type = "cards", count = 4 }) {
  return (
    <div className={`skeleton-grid skeleton-${type}`} aria-label="Loading content">
      {Array.from({ length: count }).map((_, index) => (
        <div className="skeleton-card" key={index}>
          <div className="skeleton-media" />
          <div className="skeleton-line short" />
          <div className="skeleton-line" />
          <div className="skeleton-line tiny" />
        </div>
      ))}
    </div>
  )
}

export default Loader
