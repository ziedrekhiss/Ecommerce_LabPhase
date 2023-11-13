const Product = require ("../models/product.js")

const newProduct = async (req, res)=>{
    try {
        const product = new Product({
            ...req.body,
            owner:req.user.id
         })
        const newProduct = await product.save()
        console.log(newProduct)
        return res.status(201).json(newProduct)
        
    } catch (error) {
        console.log("error", error);
    }
}


const getProduct = async (req, res)=>{
    try {
        const productId = req.params.id;
        const product = await Product.findById(productId)
        res.status(201).json(product)
    } catch (error) {
        console.log("error", error)
    }
}

const updateProduct = async (req, res)=>{
    try {
        const productId = req.params.id; 
        const updatedProduct = await Product.findOneAndUpdate(
         { _id: productId }, 
         { $set: req.body }, 
    );
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.log("error", error);
    }
}

const deleteProduct = async (req, res)=>{
    try {
        const productId = req.params.id;
        const product = Product.findById(productId)
        if (product){
            await product.deleteOne();
            res.status(201).json("Product deleted successfully")
        }
    } catch (error) {
        console.log("error", error);  
    }
}





module.exports={newProduct, updateProduct, deleteProduct, getProduct}