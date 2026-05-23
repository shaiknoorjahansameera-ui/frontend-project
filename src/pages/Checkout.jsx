import { useState } from "react"

function Checkout() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    pincode: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Order Placed Successfully")
  }

  return (
    <div className="container">
      <h1>Checkout Details</h1>

      <form onSubmit={handleSubmit} className="checkout-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={formData.pincode}
          onChange={handleChange}
          required
        />

        <div className="summary-box">
          <h2>Order Summary</h2>
          <p>Total: ₹1,000</p>
        </div>

        <button type="submit">Place Order</button>
      </form>
    </div>
  )
}

export default Checkout
