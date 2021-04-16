const Sequelize = require("sequelize")
const db = require("../db")

class User extends Sequelize.Model {}

User.init(
  {
    name: {
      type: Sequelize.STRING,
    },
    lastName: {
      type: Sequelize.STRING,
    },
    accAddress: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
  },
  { sequelize: db, modelName: "user" }
)

module.exports = User
