import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./Page/Index"
import Create from "./Page/Create"
import Edit from "./Page/Edit"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
