const router = require("express").Router()
const { Product, User } = require("../models");

router.post("/", (req, res) => {
    Product.create(req.body)
        .then((productCreated) => {
            productCreated.setUser(req.body.userId)
            res.status(201).json(productCreated)
        })
        .catch((err) => {
            console.log(err)
            res.sendStatus(400)
        })
})

router.get("/all", (req, res) => {
    Product.findAll()
    .then((products) => {
        res.status(200).json(products)
    })
    .catch((err) => {
        console.log(err)
        res.sendStatus(400)
    })
})

router.get("/userAll", (req, res) => {
    Product.findAll({
        include:{
            model: User,
            where:{accAddress: req.query.a}
        }
    })
    .then((products) => {
        res.status(200).json(products)
    })
    .catch((err) => {
        console.log(err)
        res.sendStatus(400)
    })
})


router.get("/:id", (req, res) => {
    Product.findOne({
        where: { id: req.params.id },
        include: User
    })
    .then((product) => {
            res.status(200).json(product)
        })
        .catch((err) => {
            console.log(err)
            res.sendStatus(400)
        })
})

router.put("/:id", (req, res) => {
    Product.update(req.body, {
        where: { id: req.params.id },
        returning: true,
        plain: true
    })
    .then((productUpdated) => {
        res.status(200).json(productUpdated[1])
    })
    .catch((err) => {
        console.log(err)
        res.sendStatus(400)
    })
})

router.delete("/:id", (req, res) => {
    Product.destroy({
        where: { id: req.params.id }
    })
    .then(() => {
        res.status(200).json()
    })
    .catch((err) => {
        console.log(err)
        res.sendStatus(400)
    })
})

module.exports = router;