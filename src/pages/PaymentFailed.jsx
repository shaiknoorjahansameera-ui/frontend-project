import { Link } from "react-router-dom"

function PaymentFailed() {
  return (
    <main className="not-found-page">
      <section className="not-found-content">
        <p className="eyebrow">Payment Failed</p>
        <h1>Payment Issue</h1>
        <p>Your payment could not be completed. Please try checkout again.</p>
        <Link to="/checkout" className="primary-button">Back to Checkout</Link>
      </section>
    </main>
  )
}

export default PaymentFailed
