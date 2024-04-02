import express from "express";
import ProductController from "../controllers/productsController.js"

const router = express.Router();

router
    .get("/product", ProductController.getAllProducts)
    .get("/product/busca", ProductController.getProductByName)
    .get("/product/:id", ProductController.getProductById)
    .post("/product", ProductController.createProduct)
    .put("/product/:id", ProductController.updateProduct)
    .delete("/product/:id", ProductController.deleteProduct)

export default router;