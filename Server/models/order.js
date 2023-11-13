const mongoose = require ("mongoose")
const {Schema , model} = mongoose

const orderSchema = new Schema(
    {
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    items: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            required : true,
            ref:"Product" 
        },
        title: String,
        quantity: {
            type: mongoose.Schema.Types.Number,
            ref : "Product",
            required: true,
            min: [1, 'Quantity can not be less then 1.']
        },
        price:  {
            type: mongoose.Schema.Types.Number,
            ref : "Product",
            required: true,
        }
    }],
    bill: {
        type: mongoose.Schema.Types.Number,
        ref: "Cart",
        required: true
    },
    orderDate: {
        type: Date,
        default: Date.now
    }
},{
    timestamps : true,
})


module.exports = Order = model("Order",orderSchema);