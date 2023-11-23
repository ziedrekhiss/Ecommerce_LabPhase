const express = require("express");
const {
  getCartItems,
  addToCart,
  deleteCartItem,
  deleteAllCartItems,
  increaseQuantity,
  decreaseQuantity,
} = require("../controllers/cartController");

const protect = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.post("/addItem/:id", protect, addToCart);
router.get("/getItem", protect, getCartItems);
router.delete("/:id", protect, deleteCartItem);
router.delete("/delcart/delAll", protect, deleteAllCartItems);
router.put("/incQty/:id", protect, increaseQuantity);
router.put("/decQty/:id", protect, decreaseQuantity);

module.exports = router;
