import React from "react";
import axios from "axios";

const ProductCard = ({ product }) => {
  
  // ⭐ ADD TO WISHLIST FUNCTION
  const addToWishlist = async () => {
    try {
      await axios.post("http://localhost:5000/api/wishlist/add", {
        userId: "123", // later replace with logged-in user id
        productId: product._id,
      });

      alert("Added to Wishlist ❤️");
    } catch (error) {
      console.log("Wishlist Error:", error);
      alert("Failed to add wishlist");
    }
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
      
      {/* 🖼️ Product Image */}
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "150px" }}
      />

      {/* 📦 Product Info */}
      <h3>{product.name}</h3>
      <p>₹ {product.price}</p>
      <p>{product.description}</p>

      {/* ❤️ Wishlist Button */}
      <button
        onClick={addToWishlist}
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "5px 10px",
          border: "none",
          cursor: "pointer",
        }}
      >
        ❤️ Add to Wishlist
      </button>

    </div>
  );
};

export default ProductCard;