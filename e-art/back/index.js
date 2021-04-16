const express = require("express");
const app = express();
const db = require("./db")
const routes = require("./routes")
const path = require('path')
const PORT = 3001;

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", routes)
app.use("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

db.sync({force: false}).then(() => {
    console.log('Data base synchronized')
  app.listen(PORT, () => {
    console.log(`The server is listening at port ${PORT}`);
  });
});
