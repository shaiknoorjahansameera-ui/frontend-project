import { useEffect, useState } from "react"
import Loader from "../components/Loader"

const userStats = [
  { label: "Total Orders", value: "5 Orders" },
  { label: "Cart Summary", value: "3 Items" },
  { label: "Recent Activity", value: "Last order placed yesterday" }
]

function UserDashboard() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="dashboard-page">
      <section className="dashboard-heading">
        <div>
          <p className="eyebrow">Customer Dashboard</p>
          <h1>Welcome User</h1>
          <p>View profile details, orders, cart, and recent activity.</p>
        </div>
      </section>

      {loading ? (
        <Loader count={3} />
      ) : (
        <section className="dashboard-stats">
          {userStats.map((stat) => (
            <article key={stat.label}>
              <p>{stat.label}</p>
              <strong>{stat.value}</strong>
            </article>
          ))}
        </section>
      )}
    </main>
  )
}

export default UserDashboard
