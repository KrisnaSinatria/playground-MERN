import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"

function Create() {

  // type FormData = {
  //   name: string;
  //   description: string;
  //   price: number;
  //   category: string;
  // }

  const formData = z.object({
    name: z.string().min(3),
    description: z.string(),
    price: z.coerce.number(),
    category: z.string(),

  })

  type FormData = z.infer<typeof formData>


  const form = useForm<FormData>({
    resolver: zodResolver(formData)
  });
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
          <span className="" style={{ color: "red" }}>{form.formState.errors.name?.message}</span>
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" {...form.register("price")} />
          <span className="" style={{ color: "red" }}>{form.formState.errors.price?.message}</span>
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" {...form.register("description")} />
          <span className="" style={{ color: "red" }}>{form.formState.errors.description?.message}</span>
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input type="text" id="category" {...form.register("category")} />
          <span className="" style={{ color: "red" }}>{form.formState.errors.category?.message}</span>
        </div>
        <button type="submit">Create</button>
      </form>

    </div>
  );
}

export default Create;
