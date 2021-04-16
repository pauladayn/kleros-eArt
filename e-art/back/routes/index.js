const router = require("express").Router();

router.use("/users", require("./users"))
router.use("/products", require("./products"))

module.exports = router;