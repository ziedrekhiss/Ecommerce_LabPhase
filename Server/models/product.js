const mongoose = require ("mongoose")
const {Schema, model} = mongoose


const productSchema =  new Schema(
    {
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "user",
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        category:{
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        quantity:{
            type:Number,
            required:true,
        },
        date_added: {
            type: Date,
            default: Date.now
        },
        rating:{
            type : Number,
            required : true,
            default:0
        },
        numReviews:{
            type : Number,
            required : true,
            default :0
        },
    },
    {
        timestamps : true,
    }
);

module.exports = Products = model("Product", productSchema)