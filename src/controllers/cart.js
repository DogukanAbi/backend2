const Cart = require("../models/cart");
const User = require("../models/user");
const Product = require("../models/product");

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

const update = async (req, res) => {
  try {
    const productId = req.body.product_id;
    const quantity = req.body.quantity;
    const userId = req.user.id;
    const cartId = req.user.cart;

    const user = await User.findById(userId);
    const cart = await Cart.findById(cartId);
    const product = await Product.findById(productId);
    const existingProductIndex = cart.products.findIndex(
      (item) => item.product_name === product.name
    );
    if (existingProductIndex !== -1) {
      cart.products[existingProductIndex].quantity = quantity;
    } else {
      cart.products.push({
        product: product,
        product_name: product.name,
        quantity: quantity,
      });
    }
    await cart.save();
    await user.save();

    res.json({ message: "Product added to cart successfully", cart: cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred while adding the product to the cart",
    });
  }
};

module.exports = { retrieve, update };
