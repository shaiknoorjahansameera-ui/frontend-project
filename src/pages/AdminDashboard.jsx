import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar
} from "recharts"

const adminStats = [
  { label: "Total Orders", value: "128" },
  { label: "Active Vendors", value: "24" },
  { label: "Products Listed", value: "540" },
  { label: "Revenue", value: "Rs. 2.4L" }
]

const recentOrders = [
  {
    id: "#ORD-1001",
    customer: "Ayesha Khan",
    amount: "Rs. 4,999",
    status: "Paid"
  },
  {
    id: "#ORD-1002",
    customer: "Ravi Kumar",
    amount: "Rs. 2,499",
    status: "Processing"
  },
  {
    id: "#ORD-1003",
    customer: "Meera Shah",
    amount: "Rs. 8,999",
    status: "Shipped"
  }
]

const salesData = [
  { month: "Jan", sales: 4000, orders: 24 },
  { month: "Feb", sales: 3000, orders: 18 },
  { month: "Mar", sales: 5000, orders: 32 },
  { month: "Apr", sales: 7000, orders: 40 }
]

function AdminDashboard() {
  return (
    <main className="dashboard-page">

      {/* Heading */}
      <section className="dashboard-heading">
        <div>
          <p className="eyebrow">Admin Panel</p>

          <h1>Admin Dashboard</h1>

          <p>
            Monitor platform performance, orders,
            vendors, and products.
          </p>
        </div>

        <button type="button">
          Add Product
        </button>
      </section>

      {/* Stats Cards */}
      <section className="dashboard-stats">
        {adminStats.map((stat) => (
          <article key={stat.label}>
            <p>{stat.label}</p>

            <strong>{stat.value}</strong>
          </article>
        ))}
      </section>

      {/* Recent Orders */}
      <section className="dashboard-panel">

        <div className="panel-header">
          <h2>Recent Orders</h2>

          <span>Today</span>
        </div>

        <div className="dashboard-table">
          {recentOrders.map((order) => (
            <article key={order.id}>
              <span>{order.id}</span>

              <strong>{order.customer}</strong>

              <span>{order.amount}</span>

              <span className="status-pill">
                {order.status}
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* Sales Analytics */}
      <section
        className="dashboard-panel"
        style={{ marginTop: "40px" }}
      >
        <div className="panel-header">
          <h2>Sales Analytics</h2>
        </div>

        <LineChart
          width={700}
          height={300}
          data={salesData}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="sales"
            stroke="#8884d8"
          />
        </LineChart>

        <h2 style={{ marginTop: "40px" }}>
          Orders Analytics
        </h2>

        <BarChart
          width={700}
          height={300}
          data={salesData}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="orders"
            fill="#82ca9d"
          />
        </BarChart>
      </section>

    </main>
  )
}

export default AdminDashboard
