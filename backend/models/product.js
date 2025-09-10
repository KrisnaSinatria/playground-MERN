import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Name is required"] },
    description: { type: String, required: [true, "Description is required"] },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0.01, 'Price must be greater than 0']
    },
    category: { type: String, required: [true, 'Category is required'] },
    inStock: { type: Boolean, default: true },
    tags: { type: [String], default: [] },
    createdAt: { type: Date, default: Date.now }
});

const Product = mongoose.model("Product", productSchema);
export default Product;
