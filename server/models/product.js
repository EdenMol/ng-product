const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
}, {
    writeConcern: {
        w: 'majority',
        j: true,
        wtimeout: 1000
    }
})

const Product = mongoose.model('Product', ProductSchema);


module.exports = Product;
