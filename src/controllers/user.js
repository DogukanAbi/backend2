const User = require("../models/user");

const list = async (req, res) => {
  try {
    const clients = await User.find({ role: "client" });
    res.status(200).json({ clients });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
};

module.exports = { list };
