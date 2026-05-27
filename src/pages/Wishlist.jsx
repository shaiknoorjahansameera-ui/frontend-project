import { useEffect, useState } from "react";
import axios from "axios";

const Wishlist = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/wishlist/123")
      .then(res => setItems(res.data));
  }, []);

  return (
    <div>
      <h2>Wishlist</h2>
      {items.map((i, index) => (
        <p key={index}>{i.productId}</p>
      ))}
    </div>
  );
};

export default Wishlist;