import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [price, setPrice] = useState<number>();
  const [category, setCategory] = useState<string>();

  const navigate = useNavigate()

  const Submit = (e: any) => {
    e.preventDefault();
    axios.post("http://localhost:3000/api/products", {
      name,
      description,
      price,
      category
    }).then(() => {
      alert("Product created successfully!");
      navigate("/")
    })
  }

  return (
    <div style={{ padding: "20px", }}>
      <h1>Create Product</h1>

      <form onSubmit={Submit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" onChange={(e) => setPrice(Number(e.target.value))} />
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

export default Create;
