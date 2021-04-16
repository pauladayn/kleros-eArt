const User = require("./user");
const Product = require("./product");

Product.belongsTo(User)

module.exports = { User, Product }
