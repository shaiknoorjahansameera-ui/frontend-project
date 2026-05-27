import React from "react";

const CheckoutPage = () => {
  return (
    <div className="container mt-5">
      <h2>Checkout Page</h2>

      <h4>Shipping Address</h4>

      <form>
        <div>
          <input
            type="text"
            placeholder="Full Name"
            className="form-control mb-3"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Address"
            className="form-control mb-3"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="City"
            className="form-control mb-3"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Pincode"
            className="form-control mb-3"
          />
        </div>

        <h4>Payment Method</h4>

        <select className="form-control mb-3">
          <option>Cash on Delivery</option>
          <option>UPI</option>
          <option>Credit Card</option>
        </select>

        <h4>Order Summary</h4>

        <p>Total Items: 0</p>
        <p>Total Amount: ₹0</p>

        <button className="btn btn-primary">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;