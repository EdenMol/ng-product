const Product = require("../models/product");


const getProducts = () => {
    return Product.find({});
}

const postProducts = (objTitle) => {
    return Product.create(objTitle)
}


module.exports = {
    getProducts, postProducts
}

