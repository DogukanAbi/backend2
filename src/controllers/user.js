const bcrypt = require("bcrypt");
const User = require("../models/user");

const createDefaultAdmin = async () => {
  try {
    const admin = await User.findOne({ email: process.env.EMAIL_USER_ADMIN });

    if (!admin) {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(
        process.env.PASSWORD_USER_ADMIN,
        salt
      );
      const admin = new User({
        name: process.env.NAME_USER_ADMIN,
        email: process.env.EMAIL_USER_ADMIN,
        password: hashedPassword,
        role: "admin",
      });
      await admin.save();
      console.log("Admin user created successfully");
    }
  } catch (error) {
    console.error("Error creating admin user:", error);
  }
};

const create = async (req, res) => {
  try {
    const existingCustomer = await User.findOne({ email: req.body.email });
    if (existingCustomer) {
      return res.status(400).json({ message: "Email is already in use" });
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const client = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    await client.save();

    res
      .status(201)
      .json({ message: "It has been successfully registered", client: client });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
};

module.exports = {
  createDefaultAdmin,
  create,
};