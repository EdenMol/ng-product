const Product = require("../models/product");
const { getProducts, postProducts } = require("../services");

const getProductsController = async (req, res) => {
    try {
        const products = await getProducts();
        res.json(products);
    } catch (e) {
        res.status(500).json('Something went wrong when fetching products')
    }
};

const postProductController = async (req, res) => {
    try {
        const product = await postProducts({ title: req.body.title })

        res.json(product);
    } catch (e) {
        console.error(e);
        res.status(500).json("Something went wrong when creating a product");
    }
}

const deleteProductController = ""
const putProductController = ""


module.exports = {
    getProductsController, postProductController
}
