const bcrypt = require("bcrypt");
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

const getProfile = async (req, res) => {
  try {
    const { id, name, email, role } = req.user;
    res.status(200).json({ id, name, email, role });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while getting the profile" });
  }
};

const updateProfile = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userId = req.user.id;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.findByIdAndUpdate(
      userId,
      { name: name, email: email, password: hashedPassword },
      { new: true }
    );

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while updating the profile" });
  }
};

module.exports = { list, getProfile, updateProfile };
