import express from "express";
import CategoryController from "../controllers/categoryController.js"

const router = express.Router();

router
    .get("/category", CategoryController.getAllcategories)
    .get("/category/:id", CategoryController.getcategoryById)
    .post("/category", CategoryController.createcategory)
    .put("/category/:id", CategoryController.updatecategory)
    .delete("/category/:id", CategoryController.deletecategory)

export default router;