import productModel from "../models/productModel.js";

class ProductController {

    static async getAllProducts(req, res) {
        try {
            const products = await productModel.find()
            .populate("category_name")
            .exec();
            res.status(200).json(products);
        } catch (err) {
            res.status(500).send(err);
        }
    }

    static async getProductById(req, res) {
        try {
            const id = req.params.id;
            const product = await productModel.findById(id)
            .populate("category_name", "category_name")
            .exec();
            res.status(200).json(product);
        } catch (err) {
            res.status(400).send(err);
        }
    }

    static async createProduct(req, res) {
        try {
            const newProduct = new productModel(req.body);
            const savedProduct = await newProduct.save();
            res.status(201).json(savedProduct);
        } catch (err) {
            res.status(500).send({ message: `${err.message} - Falha ao cadastrar produto.` });
        }
    }

    static async updateProduct(req, res) {
        try {
            const id = req.params.id;
            await productModel.findByIdAndUpdate(id, { $set: req.body });
            res.status(200).send({message: "Produto atualizado com sucesso."})
        } catch (err) {
            res.status(500).send({ message: `${err.message} - Falha ao atualizar produto.` });
        }
    }

    static async deleteProduct(req, res) {
        try {
            const id = req.params.id;
            await productModel.findByIdAndDelete(id);
            res.status(200).send({message: "Produto deletado com sucesso."})
        } catch (err) {
            res.status(500).send({ message: `${err.message} - Falha ao deletar produto.` });
        }
    }

    static async getProductByName (req, res) {
        try {
            const name = req.query.product_name;
            const product = await productModel.find({"product_name": name});
            res.status(200).send(product);
        } catch (err) {
            res.status(400).send(err);
        }
    }
}

export default ProductController;

