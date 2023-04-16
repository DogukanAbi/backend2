const Product = require("../models/product");

const create = async (req, res) => {
  try {
    const { name, description, tag, price, stock, image } = req.body;
    const newProduct = new Product({
      name,
      description,
      tag,
      price,
      stock,
      image,
    });
    const savedProduct = await newProduct.save();

    res.status(201).json({ message: "Created product", product: savedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
};

const retrieve = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Recovered product",
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, description, tag, price, stock, image } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, description, tag, price, stock, image },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Updated product",
      product: updatedProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
};

const deleted = async (req, res) => {
  try {
    const { id } = req.params.id;
    const deletedProduct = await Product.findOneAndDelete({ id });

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Deleted product",
      product: deletedProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
};

const list = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
};

module.exports = {
  create,
  retrieve,
  update,
  deleted,
  list,
};
