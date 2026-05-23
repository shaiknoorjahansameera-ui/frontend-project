import { useState } from "react"

function Payment() {
  const [loading, setLoading] = useState(false)

  const handlePayment = () => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      alert("Payment Successful")
    }, 3000)
  }

  return (
    <div className="container">
      <h1>Payment Page</h1>

      <div className="payment-card">
        <input type="text" placeholder="Card Number" />
        <input type="text" placeholder="Card Holder Name" />
        <input type="text" placeholder="Expiry Date" />
        <input type="password" placeholder="CVV" />

        <button onClick={handlePayment} disabled={loading}>
          {loading ? "Processing Securely..." : "Pay Now"}
        </button>
      </div>
    </div>
  )
}

export default Payment
