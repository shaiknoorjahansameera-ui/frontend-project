import { useState } from "react"
import { useNavigate } from "react-router-dom"

function PaymentPage() {
  const [method, setMethod] = useState("")
  const navigate = useNavigate()

  const handlePayment = () => {
    if (!method) {
      alert("Select payment method")
      return
    }

    // simulate success
    navigate("/payment-success")
  }

  return (
    <div>
      <h2>Select Payment Method</h2>

      <label>
        <input type="radio" name="payment" onChange={() => setMethod("card")} />
        Card Payment
      </label>

      <label>
        <input type="radio" name="payment" onChange={() => setMethod("upi")} />
        UPI
      </label>

      <label>
        <input type="radio" name="payment" onChange={() => setMethod("cod")} />
        Cash on Delivery
      </label>

      <button onClick={handlePayment}>Pay Now</button>
    </div>
  )
}

export default PaymentPage