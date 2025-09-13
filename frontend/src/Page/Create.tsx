import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

 

  return (
    <div style={{ padding: "20px",  }}>
      <h1>Create Produc</h1>

      <form action="">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" />
        </div>
        <button type="submit">Create</button>
      </form>
      
    </div>
  );
}

export default App;
