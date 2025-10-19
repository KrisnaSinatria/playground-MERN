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

  const handleDelete = (id : any) => {
     axios.delete("http://localhost:3000/api/products/"+id).then(() => {
      alert('berhasil hapus')
      window.location.reload()
     }).catch(err => console.log(err)
     )

  }

  return (
    <div style={{ padding: "20px", }}>
      <Link to="/create">Buat</Link>

      <h1>Product List</h1>
      <ul>
        {products.map((p: any) => (
          <li key={p._id}>
            <strong>{p.name}</strong> - ${p.price}
            <Link to={`/edit/${p._id}`}>edit</Link>
            <button onClick={(e) => handleDelete(p._id)}>hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Index;