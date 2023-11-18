const express = require('express');
const app = express()
const cors = require ("cors")
require ('dotenv').config();
const connectDB = require("./config/database")

const userRoute = require ("./routes/user.js")
const productRoute = require ("./routes/product.js")
const cartRoute = require("./routes/cart.js")
app.use(cors());
app.use(express.json());
const port = 4000

connectDB();

app.use("/api/user", userRoute);
app.use("/api/product", productRoute)
app.use("/api/cart", cartRoute)

app.listen(port, (err)=>{
    err? console.log(err,'error'): console.log(`server run on port ${port}`);
    
})