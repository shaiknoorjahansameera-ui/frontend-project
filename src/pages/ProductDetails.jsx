import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);

  // 🔹 FETCH PRODUCT
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  // 🔹 FETCH REVIEWS
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/reviews/${id}`)
      .then((res) => setReviews(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  // ⭐ AVERAGE RATING CALCULATION
  const avgRating =
    reviews.length > 0
      ? reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
      : 0;

  // ⭐ RECENTLY VIEWED (optional but part of your task 3)
  useEffect(() => {
    if (!product) return;

    let viewed = JSON.parse(localStorage.getItem("recent")) || [];

    viewed = viewed.filter((p) => p._id !== product._id);
    viewed.unshift(product);
    viewed = viewed.slice(0, 5);

    localStorage.setItem("recent", JSON.stringify(viewed));
  }, [product]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      
      {/* 📦 PRODUCT INFO */}
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3>₹ {product.price}</h3>

      {/* ⭐ TASK 4 — RATING UI */}
      <div style={{ marginTop: "15px" }}>
        <h3>
          ⭐ {avgRating.toFixed(1)} / 5
        </h3>
        <p>{reviews.length} reviews</p>
      </div>

      {/* 🧾 REVIEWS LIST */}
      <div style={{ marginTop: "20px" }}>
        <h3>Customer Reviews</h3>

        {reviews.length === 0 ? (
          <p>No reviews yet</p>
        ) : (
          reviews.map((r) => (
            <div
              key={r._id}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                marginTop: "10px",
              }}
            >
              <p>⭐ {r.rating}</p>
              <p>{r.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductDetails;