import categoryModel from "../models/categoryModel.js";

class CategoryController {

    static async getAllcategories(req, res) {
        try {
            const categorys = await categoryModel.find({});
            res.status(200).json(categorys);
        } catch (err) {
            res.status(500).send(err);
        }
    }

    static async getcategoryById(req, res) {
        try {
            const id = req.params.id;
            const category = await categoryModel.findById(id);
            res.status(200).json(category);
        } catch (err) {
            res.status(400).send(err);
        }
    }

    static async createcategory(req, res) {
        try {
            const newcategory = new categoryModel(req.body);
            const savedcategory = await newcategory.save();
            res.status(201).json(savedcategory);
        } catch (err) {
            res.status(500).send({ message: `${err.message} - Falha ao cadastrar categoria.` });
        }
    }

    static async updatecategory(req, res) {
        try {
            const id = req.params.id;
            await categoryModel.findByIdAndUpdate(id, { $set: req.body });
            res.status(200).send({message: "Categoria atualizado com sucesso."})
        } catch (err) {
            res.status(500).send({ message: `${err.message} - Falha ao atualizar categoria.` });
        }
    }

    static async deletecategory(req, res) {
        try {
            const id = req.params.id;
            await categoryModel.findByIdAndDelete(id);
            res.status(200).send({message: "Categoria deletado com sucesso."})
        } catch (err) {
            res.status(500).send({ message: `${err.message} - Falha ao deletar categoria.` });
        }
    }    
}

export default CategoryController;