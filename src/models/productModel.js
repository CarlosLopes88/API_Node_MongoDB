import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        product_name: {type: String, required: true},
        category_name: {type: mongoose.Schema.Types.ObjectId, ref: "category", required: true},
        price: {type: Number, required: true},
        description: {type: String, required: true},
        image: {type: String, required: true},
        countInStock: {type: Number, required: true}
    }
);

const Product = mongoose.model("product", productSchema);

export default Product;