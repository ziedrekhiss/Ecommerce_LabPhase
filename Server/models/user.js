const mongoose = require ("mongoose")
const {Schema , model} = mongoose;

const userSchema = new Schema(
    {
        name :{
            type : String
        },

        email:{
            type: String,
            unique : true,
        },

        phone : Number,

        password : {
            type : String,
            require : true,
        },
        role : {
            type : String,
            default : 'user',
        },
    },
    {
        timestamps : true,
    }
);


module.exports = User = model("User", userSchema)
