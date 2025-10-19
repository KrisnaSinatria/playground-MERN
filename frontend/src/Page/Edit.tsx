import { useEffect, useState } from "react";
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const [name, setName] = useState<string>('')
  const [price, setPrice] = useState<number>(Number)
  const [description, setDescription] = useState<string>('')
  const [category, setCategory] = useState<string>('')

  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    axios.get("http://localhost:3000/api/products/edit/" + id).then(res => {
      setName(res.data.name);
      setDescription(res.data.description);
      setPrice(res.data.price);
      setCategory(res.data.category);
    })
  }, [])

  const Submit = (e: any) => {
    e.preventDefault()
    axios.put(`http://localhost:3000/api/products/${id}`, { name, price, description, category })
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
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" value={price} onChange={(e) => setPrice(Number((e.target.value)))} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
        <button type="submit">Update</button>
      </form>

    </div>
  );
}

export default Edit;
