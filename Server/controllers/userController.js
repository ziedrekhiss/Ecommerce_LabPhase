const User = require("../models/user")
const bcrypt = require("bcrypt")
const generateToken = require ("../utils/generateToken.js")

const signUp = async (req, res)=>{
    try {
        const {name, email, phone, password}= req.body;

        if(!name ||!email ||!password) {
            res.status(400).json("All the fields are mendatory")
        };

        const exist = await User.findOne({email});
        if (exist) {
            res.status(400).json("Email already used")
        };

        const newUser = new User({ name, email, phone, password });

        const hashPswd = await bcrypt.hash(password, 10);
        newUser.password=hashPswd;
        newUser.save();
        return res.status(201).json(newUser);

    } catch (error) {
        console.log("error", error); 
    }
}


const signIn = async (req, res)=>{
    try {
        const {email, password} = req.body;
        if(!email || !password){
            res.status(400).json("All the fields are mendatory");
        }

        const user = await User.findOne({email});
        const isMatch = user && (await bcrypt.compare(password , user.password))

        if (user && isMatch){
            res.status(200).json({
                _id:user.id,
                name: user.name,
                email : user.email,
                token: generateToken(user._id),
            });
        } else {
            res.status(400).json("invalid Email or password")
        }
    } catch (error) {
        console.log("error", error);   
    }
}


const getUser = async (req , res)=>{
    try {
        const userId = req.params.id;
        const user = await User.findById(userId)
        res.status(200).json(user)
    } catch (error) {
        console.log(error, "error")
    }
}




module.exports = {signUp, signIn, getUser}
