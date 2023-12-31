const Product = require("../models/product.js");
const User = require("../models/user.js");
const newProduct = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);
    const userName = user.name;
    const product = new Product({
      ...req.body,
      owner: userId,
      ownerName: userName,
    });
    const newProduct = await product.save();
    console.log(newProduct);
    return res.status(201).json(newProduct);
  } catch (error) {
    console.log("error", error);
  }
};

const getAll = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const updatedProduct = await Product.findOneAndUpdate(
      { _id: productId },
      { $set: req.body }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.log("error", error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = Product.findById(productId);
    if (product) {
      await product.deleteOne();
      res.status(201).json("Product deleted successfully");
    }
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = {
  newProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getAll,
};
