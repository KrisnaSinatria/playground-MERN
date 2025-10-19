import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"

function Create() {

  type FormData = {
    name: string;
    description: string;
    price: number;
    category: string;
  }

  const form = useForm<FormData>(); 
  const navigate = useNavigate()

  const Submit = (values: FormData) => {
    
    axios.post("http://localhost:3000/api/products", {
      name: values.name,
      description: values.description,
      price: values.price,
      category: values.category,
    }).then(() => {
      alert("Product created successfully!");
      navigate("/")
    })
  }

  return (
    <div style={{ padding: "20px", }}>
      <h1>Create Product</h1>

      <form onSubmit={form.handleSubmit(Submit)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" {...form.register("name")} />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" {...form.register("price")} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" {...form.register("description")} />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input type="text" id="category" {...form.register("category")} />
        </div>
        <button type="submit">Create</button>
      </form>

    </div>
  );
}

export default Create;
