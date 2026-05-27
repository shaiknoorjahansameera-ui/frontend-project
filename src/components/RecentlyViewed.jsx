import React from "react";

const RecentlyViewed = () => {
  const recent = JSON.parse(localStorage.getItem("recent")) || [];

  if (recent.length === 0) return null;

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Recently Viewed</h3>

      {recent.map((p) => (
        <div key={p._id} style={{ borderBottom: "1px solid #ddd", padding: "5px 0" }}>
          <p>{p.name}</p>
        </div>
      ))}
    </div>
  );
};

export default RecentlyViewed;