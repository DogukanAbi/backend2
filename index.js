require("dotenv").config();

const express = require("express");
const db = require("./src/config/mongodb");
const user = require("./src/controllers/auth");
const routerApi = require("./src/routes/index");

const app = express();
const port = process.env.PORT || 3000;

db.connect();
app.use(express.json());
app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next();
});
user.createDefaultAdmin();
routerApi(app);

app.get("/", (req, res) => {
  res.send("Server Express");
});

app.listen(port, () => {
  console.log("Server running on port: " + port);
});
