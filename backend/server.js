import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js"
import productRoutes from "./routes/productRoutes.js"

dotenv.config()
const app = express()

app.use(cors({}))
app.use(express.json())

app.use("/api/products", productRoutes)

const PORT = process.env.PORT || 5000
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`✅ Server running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Server startup failed, see error above.');
        process.exit(1);
    });
