const jwt = require("jsonwebtoken")
const User = require ("../models/user")

const protect = async (req, res, next)=>{
    const token = req.headers.authorization?.split(" ")[1];
    if(
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ){
        try {
           const decoded = jwt.verify(token, process.env.JWT);
           console.log("decoded", decoded);
           req.user = await User.findById(decoded.id).select("decoded.id");
           next();
        } catch (error) {
            console.log("error", error)
            res.status(401).json({error:"request is not authorized"})
        }
    }
}

module.exports= protect;