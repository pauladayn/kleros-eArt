const router = require("express").Router();
const { User } = require("../models");

router.get("/:id", (req, res) => {
  User.findOne({
    where: { id: req.params.id }
  })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

router.put("/:id", (req, res) => {
  User.update(req.body, {
    where: { id: req.params.id },
    returning: true,
    plain: true
  })
  .then((userUpdated) => {
    res.status(200).json(userUpdated[1])
  })
  .catch((err) => {
    console.log(err)
    res.sendStatus(400)
  })
})

router.delete("/:id", (req, res) => {
  User.destroy({
    where: { id: req.params.id },
  })
    .then(() => {
      res.status(200).send();
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

router.post("/register", (req, res) => {
  User.create(req.body)
    .then((user) => {
        res.status(201).json(user);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

module.exports = router;