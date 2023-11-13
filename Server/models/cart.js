const mongoose = require("mongoose")
const {Schema, model}= mongoose

const cartSchema = new Schema(
    {
        userId: {
           type: mongoose.Schema.Types.ObjectId,
           ref: 'User', 
           required: true
        },
        items: [{
            productId: {
                type: mongoose.Schema.Types.ObjectId, 
                ref: 'Product', 
                required: true
            },
            title: String,
            quantity: {
                type: Number,
                required: true,
                min: [1, 'Quantity can not be less then 1.'],
                deafult: 1
            },
            price: Number
        }],
        bill: {
            type: Number,
            required: true,
            default: 0
        }
    },
    {
        timestamps: true,
    }
)


module.exports = Cart = model("Cart", cartSchema)