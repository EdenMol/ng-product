require('dotenv').config({encoding: 'utf8'})

const env = process.env;

module.exports = {
    port: env.PORT,
    mongoUri: env.MONGO_URI
}
