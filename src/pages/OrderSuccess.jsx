import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="container mt-5 text-center">
      <h1>Order Successful!</h1>

      <p>
        Thank you for your purchase.
      </p>

      <Link to="/">
        <button className="btn btn-success">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default OrderSuccess;