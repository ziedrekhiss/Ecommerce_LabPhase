const Cart = require("../models/cart.js")
const Product = require("../models/product")
const User = require ("../models/user.js") 

const getCartItems= async (req, res)=>{
    const userId = req.user.id;
    try {
        let cart = await Cart.findOne({userId})
        console.log(cart)
        if (cart && cart.items.length>=1) {
            res.status(201).json(cart)
        }else{
            res.status(201).json(cart)
        }
        
    } catch (error) {
        console.log("error", error)
    }

}

const addToCart= async (req, res)=>{
    try {
        const userId= req.user.id;
        const productId = req.params.id;
        const product = await Product.findById(productId)

        if (!product){
            res.status(401).json({error: "product not found"})
        }
        let cart = await Cart.findOne({userId})
     
        if (!cart) {
            cart = new Cart({
                userId,
            })
         }
        let existingItem = cart.items.find(item => item.productId.equals(productId));
            if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.items.push({
                productId: product._id,
                title: product.title,
                quantity: 1,
                price: product.price,
            })
        }
        
        cart.bill += product.price;

        const response = await cart.save();
        res.status(201).json(response)
    } catch (error) {
        console.log("error", error)
        res.status(500).json({error: "cannot add the product"})
    }
}

const deleteCartItem = async (req, res)=>{
    try {
        const userId = req.user.id;
        const productId = req.params.id
        console.log('product',productId);
        console.log('user',userId)
        let cart = await Cart.findOne({userId})
        let item = cart.items.findIndex(item => item.productId.equals(productId))
        
        if(item !==-1){
            const removedItem = cart.items.splice(item , 1)[0];
            cart.bill-= removedItem.price * removedItem.quantity;
            await cart.save();
            res.status(201).json({message: "Product removed successfully"})
        }else{
            res.status(401).json({error: "Product not found"})
        }
    } catch (error) {
        console.log("error", error)
    }
}

const deleteAllCartItems= async (req, res)=>{
    try {
        const userId = req.user.id;
        console.log('...............',userId)
        let cart = await Cart.findOne({userId});

        if(cart){
            await Cart.deleteOne();
            res.status(201).json("cart deleted successfully")
        }else{
            res.status(401).json("cart not found")
        }
        
    } catch (error) {
        console.log("error", error)
    }
}






module.exports={getCartItems, addToCart, deleteCartItem, deleteAllCartItems}

