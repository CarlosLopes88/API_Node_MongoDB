import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {   
        category_id: {type: String},
        category_name: {type: String, required: true}
    },
    {
        versionKey: false
    }
);

const Category = mongoose.model("category", categorySchema);

export default Category;