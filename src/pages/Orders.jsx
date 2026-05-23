import { useEffect, useState } from "react"
import Loader from "../components/Loader"

const orders = [
  { id: "#ORD-1001", customer: "Ayesha Khan", amount: "Rs. 4,999", status: "Delivered" },
  { id: "#ORD-1002", customer: "Ravi Kumar", amount: "Rs. 2,499", status: "Pending" },
  { id: "#ORD-1003", customer: "Meera Shah", amount: "Rs. 8,999", status: "Processing" }
]

function Orders() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="dashboard-page">
      <section className="page-heading">
        <p className="eyebrow">Orders</p>
        <h1>Orders Management</h1>
        <p>Track customer orders and fulfillment status.</p>
      </section>

      {loading ? (
        <Loader type="rows" count={3} />
      ) : (
        <section className="dashboard-panel">
          <div className="dashboard-table">
            {orders.map((order) => (
              <article key={order.id}>
                <span>{order.id}</span>
                <strong>{order.customer}</strong>
                <span>{order.amount}</span>
                <span className="status-pill">{order.status}</span>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}

export default Orders
