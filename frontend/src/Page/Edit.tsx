import { useEffect, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

function Edit() {
  const [name, setName] = useState<string>()
  const [price, setPrice] = useState<number>()
  const [description, setDescription] = useState<string>()
  const [category, setCategory] = useState<string>()

  const navigate = useNavigate()

  const Submit = (e: any) => {
    e
    axios.post("http://localhost:3000/api/products", { name, price, description, category })
      .then((res) => {
        alert("success");
        console.log(res);
        navigate("/")
      }).catch((err) => console.log(err))
  }


  return (
    <div style={{ padding: "20px", }}>
      <h1>Create Produc</h1>

      <form onSubmit={Submit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" onChange={(e) => setPrice(Number((e.target.value)))} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input type="text" id="category" onChange={(e) => setCategory(e.target.value)} />
        </div>
        <button type="submit">Create</button>
      </form>

    </div>
  );
}

export default Edit;
