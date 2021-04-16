const Sequelize = require("sequelize");

const db = new Sequelize("postgres://postgres:123@localhost:5432/eart", {
    logging: false, 
    dialect: "postgres" 
})

module.exports = db
