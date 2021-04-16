const Sequelize = require("sequelize");
const db = require("../db");

class Product extends Sequelize.Model { }

Product.init({
    title: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.TEXT,
    },
    price: {
        type: Sequelize.INTEGER,
    },
    stock: {
        type: Sequelize.INTEGER,
    },
    urlPicture: {
        type: Sequelize.STRING,
    },
    address: {
        type: Sequelize.STRING,
    }
}, { sequelize: db, modelName: "product" })

module.exports = Product