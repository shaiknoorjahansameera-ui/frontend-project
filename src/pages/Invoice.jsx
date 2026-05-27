function Invoice() {
  return (
    <div>
      <h2>Invoice</h2>

      <p>Customer: John Doe</p>
      <p>Order ID: ORDER-001</p>

      <h3>Products</h3>
      <p>Product 1 - ₹500</p>
      <p>Product 2 - ₹500</p>

      <h3>Total: ₹1000</h3>
      <p>Payment: Card</p>

      <button onClick={() => window.print()}>
        Download Invoice
      </button>
    </div>
  )
}

export default Invoice