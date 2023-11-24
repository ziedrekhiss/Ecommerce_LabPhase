const jwt = require ("jsonwebtoken")


const generateToken = (id, role)=>{
    return jwt.sign({id, role}, process.env.JWT,{
        expiresIn: "1d",
    });
};


module.exports = generateToken;