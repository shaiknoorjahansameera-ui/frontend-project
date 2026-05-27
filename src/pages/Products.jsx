import React, { useEffect } from "react";

const ProductDetails = ({ product }) => {

  // ⭐ RECENTLY VIEWED (PUT HERE)
  useEffect(() => {
    if (!product) return;

    let viewed = JSON.parse(localStorage.getItem("recent")) || [];

    // remove duplicate product
    viewed = viewed.filter((p) => p._id !== product._id);

    // add current product at start
    viewed.unshift(product);

    // keep only last 5
    viewed = viewed.slice(0, 5);

    localStorage.setItem("recent", JSON.stringify(viewed));
  }, [product]);

  return (
    <div>
      <h2>{product?.name}</h2>
      <p>{product?.description}</p>
      <p>₹ {product?.price}</p>
    </div>
  );
};

export default ProductDetails;