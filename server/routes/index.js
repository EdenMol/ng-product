const Product = require("../models/product");
const { getProductsController, postProductController } = require("../controllers");
const { ObjectId } = require("mongoose").Types;

module.exports = function getRoutes(app) {
    app
        .get("/products", getProductsController)
        .post("/create-product", postProductController)
        // TODO DELETE+PUT move outer function to controller, and business logic to service
        .delete("/delete-product/:id", async (req, res) => {
            const id = req.params.id;
            try {
                const product = await Product.findByIdAndDelete(ObjectId(id));
                res.json(product);
            } catch (e) {
                console.error(e);
                res.status(500).json("Something went wrong when deleted a product");
            }
        })
        .put("/update-product", async (req, res) => {
            try {
                if (!req.body) {
                    return res.status(400).json("Must provide a body to update records.");
                }
                const id = req.body.product._id;
                const title = req.body.product.title;

                const products = await Product.findByIdAndUpdate(ObjectId(id), {
                    title,
                });
                res.json(products);
            } catch (e) {
                console.error(e);
                res.status(500).json("Something went wrong when updated a product");
            }
        });
};
