require("dotenv").config();

const express = require("express");
const db = require("./src/config/mongodb");
const routerApi = require("./src/routes/index");

const app = express();
const port = process.env.PORT || 3000;

db.connect();
app.use(express.json());
routerApi(app);

app.get("/", (req, res) => {
  res.send("Server Express");
});

app.listen(port, () => {
  console.log("Server running on port: " + port);
});
