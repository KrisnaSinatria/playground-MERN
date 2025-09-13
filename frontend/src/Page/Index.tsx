import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Index() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px", }}>
      <Link to="/create">pindah</Link>

      <h1>Product List</h1>
      <ul>
        {products.map((p: any) => (
          <li key={p._id}>
            <strong>{p.name}</strong> - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Index;