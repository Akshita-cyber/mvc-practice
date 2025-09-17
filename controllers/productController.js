const Product = require('../models/productModel.js')//to get model 

//business logic

//yahan saare ke saare products. chahiye mujhe
const getProduct = async (req, res)=>{
    try{
        //.find() is a Mongoose method that retrieves all products from the db.
        const allProducts = await Product.find()
        if(!allProducts || allProducts.length===0){
            res.json({
                message:"There is No Product"
            })
        }
        //if we have product>=1
        res.status(200).json({
            success: true,
            products: allProducts
        })
    }
    catch(err){
        res.status(500).json({
            success : false,
            message: "Internal Server Error"
        })    
    }
}

module.exports = {getProduct}