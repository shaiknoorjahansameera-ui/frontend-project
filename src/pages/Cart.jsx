import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {

  const [cartItems, setCartItems] = useState(() => {
    const savedCart =
      localStorage.getItem("cartItems");

    return savedCart
      ? JSON.parse(savedCart)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  const totalPrice = cartItems.reduce(
    (acc, item) =>
      acc + item.price,
    0
  );

  return (
    <div className="container mt-5">

      <h2>Cart Page</h2>

      {cartItems.length === 0 ? (
        <h4>Your Cart is Empty</h4>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="card p-3 mb-3"
            >
              <h5>{item.title}</h5>

              <p>Price: ₹{item.price}</p>
            </div>
          ))}

          <h4>Total: ₹{totalPrice}</h4>

          <Link to="/checkout">
            <button className="btn btn-primary">
              Checkout
            </button>
          </Link>
        </>
      )}

    </div>
  );
};

export default Cart;