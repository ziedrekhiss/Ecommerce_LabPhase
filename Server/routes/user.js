const express = require("express")

const {signUp , signIn, getUser}= require ("../controllers/userController.js")
const protect = require("../middlewares/authMiddleware.js")

const router = express.Router();

router.post("/signUp",signUp);
router.get("/signIn", signIn);
router.get("/:id", protect, getUser);




module.exports = router;