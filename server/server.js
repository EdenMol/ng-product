const express = require('express');
const {port} = require('./config');
const connect = require('./db');
const Product = require("./models/product");
const cors = require('cors')

const {getProductsController} = require("./controllers");

const app = express();
app.use(cors())

app.use(express.json())



require('./routes')(app)

connect().then(() => {

    console.log('db is connected');

    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
})


