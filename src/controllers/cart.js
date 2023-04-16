const Cart = require("../models/cart");

const retrieve = async (req, res) => {
  try {
    const id = req.user.cart;
    const cart = await Cart.findById(id);

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json({
      message: "Recovered cart",
      cart,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
};

module.exports = { retrieve };
