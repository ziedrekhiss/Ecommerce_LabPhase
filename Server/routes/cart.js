const express = require("express")
const { getCartItems, addToCart, deleteCartItem, deleteAllCartItems } = require("../controllers/cartController")

const protect = require("../middlewares/authMiddleware.js")

const router = express.Router();

router.post("/addItem/:id", protect,  addToCart);
router.get("/getItem", protect, getCartItems);
router.delete("/:id", protect, deleteCartItem);
router.delete("/delcart/delAll", protect, deleteAllCartItems)





module.exports = router;