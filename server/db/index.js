const mongoose = require('mongoose');
const {mongoUri} = require('../config');

module.exports = async function connect() {
    try {
        return mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnique: true,
            useCreateIndex: true,
            useFindAndModify: true
        });
    } catch (e) {
        console.error('could not connect to mongo');
        process.exit(1);
    }
};
