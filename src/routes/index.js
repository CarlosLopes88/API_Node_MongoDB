import product from "./productsRoutes.js";
import category from "./categoriesRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send("Projeto API Node e MongoDB");
    });

    app.use(product)
    app.use(category);
};

export default routes;
