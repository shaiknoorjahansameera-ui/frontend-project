const vendorStats = [
  { label: "My Products", value: "36" },
  { label: "Pending Orders", value: "12" },
  { label: "Completed Sales", value: "84" },
  { label: "Earnings", value: "Rs. 86K" }
]

const topProducts = [
  { name: "Running Shoes", stock: "42 in stock", sales: "120 sold" },
  { name: "Classic Watch", stock: "18 in stock", sales: "76 sold" },
  { name: "Wireless Headphones", stock: "31 in stock", sales: "98 sold" }
]

function VendorDashboard() {
  return (
    <main className="dashboard-page">
      <section className="dashboard-heading">
        <div>
          <p className="eyebrow">Vendor Panel</p>
          <h1>Vendor Dashboard</h1>
          <p>Manage products, track orders, and review store performance.</p>
        </div>
        <button type="button">Add Listing</button>
      </section>

      <section className="dashboard-stats">
        {vendorStats.map((stat) => (
          <article key={stat.label}>
            <p>{stat.label}</p>
            <strong>{stat.value}</strong>
          </article>
        ))}
      </section>

      <section className="dashboard-panel">
        <div className="panel-header">
          <h2>Top Products</h2>
          <span>This Month</span>
        </div>

        <div className="dashboard-table">
          {topProducts.map((product) => (
            <article key={product.name}>
              <strong>{product.name}</strong>
              <span>{product.stock}</span>
              <span>{product.sales}</span>
              <span className="status-pill">Active</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default VendorDashboard
