function OrderHistory() {
  const orders = [
    { id: "ORDER-001", total: 1000, status: "Delivered" },
    { id: "ORDER-002", total: 500, status: "Pending" }
  ]

  return (
    <div>
      <h2>Order History</h2>

      {orders.map((order) => (
        <div key={order.id}>
          <p>Order ID: {order.id}</p>
          <p>Total: ₹{order.total}</p>
          <p>Status: {order.status}</p>
        </div>
      ))}
    </div>
  )
}

export default OrderHistory