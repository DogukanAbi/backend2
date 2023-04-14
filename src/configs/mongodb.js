const mongoose = require("mongoose");

module.exports = {
  connection: null,
  connect: () => {
    if (this.connection) return this.connection;
    return mongoose
      .connect(process.env.DATABASE_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      })
      .then((connection) => {
        this.connection = connection;
        console.log("Database connection: Successful");
      })
      .catch((err) => console.log(err));
  },
};
