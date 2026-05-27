import { useState } from "react";
import axios from "axios";

const ReviewForm = ({ productId, onReviewAdded }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const submitReview = async () => {
    if (!rating || !comment) return alert("Please fill all fields");

    await axios.post("http://localhost:5000/api/reviews", {
      productId,
      rating,
      comment,
    });

    setRating(0);
    setComment("");
    onReviewAdded(); // refresh reviews
  };

  return (
    <div>
      <h3>Add Review</h3>

      {/* ⭐ Rating */}
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)}
            style={{ cursor: "pointer", color: star <= rating ? "gold" : "gray" }}
          >
            ★
          </span>
        ))}
      </div>

      {/* 💬 Comment */}
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write review..."
      />

      <button onClick={submitReview}>Submit</button>
    </div>
  );
};

export default ReviewForm;