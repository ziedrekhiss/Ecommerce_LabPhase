const express = require("express")

const auth = require("../middlewares/authMiddleware.js")

const {newProduct, updateProduct, deleteProduct, getProduct, getAll}= require ("../controllers/productController.js")

const router = express.Router();

router.post("/newProduct",auth, newProduct);
router.get("/", getAll);
router.get("/getProduct/:id",getProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);


module.exports = router;