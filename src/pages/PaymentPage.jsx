import { useState } from "react";
function PaymentPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };
  if (isSubmitted) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h2 style={{ color: "#10b981" }}>Order Placed Successfully ✅</h2>
        <p>Your multi-tenant lease invoice confirmation has been dispatched.</p>
      </div>
    );
  }
  return (
    <div style={{ maxWidth: "450px", margin: "0 auto", padding: "20px" }}>
      <h2>Secure Checkout Payment</h2>
      <form onSubmit={handlePaymentSubmit} style={{ display: "flex", flexDirection: "column", 
gap: "12px" }}>
        <input type="text" placeholder="Card Number" required style={{ padding: "10px", 
borderRadius: "4px", border: "1px solid #cbd5e1" }} />
        <div style={{ display: "flex", gap: "10px" }}>
          <input type="text" placeholder="Expiry Date (MM/YY)" required style={{ flex: 1, 
padding: "10px", borderRadius: "4px", border: "1px solid #cbd5e1" }} />
          <input type="text" placeholder="CVV" required style={{ flex: 1, padding: "10px", 
borderRadius: "4px", border: "1px solid #cbd5e1" }} />
        </div>
        <h3 style={{ marginTop: "15px", borderTop: "1px solid #e2e8f0", paddingTop: "15px" }}
>Order Summary</h3>
        <p style={{ fontWeight: "bold", fontSize: "14pt" }}>Total Amount: ₹1,000</p>
        <button type="submit" style={{ padding: "12px", background: "#6366f1", color: "white", 
border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" }}>
          Pay Now
        </button>
      </form>
    </div>
  );
}
export default PaymentPage;
