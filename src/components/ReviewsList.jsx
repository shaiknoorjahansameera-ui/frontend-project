const ReviewsList = ({ reviews }) => {
  return (
    <div>
      <h3>All Reviews</h3>

      {reviews.map((r, i) => (
        <div key={i}>
          <p>⭐ {r.rating}</p>
          <p>{r.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewsList;