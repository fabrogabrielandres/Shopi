const Product = require("../models/products")


//Create new Product => /api/v1/product/new
exports.newProduct = async (req, res, next) =>{
    const product = await Product.create(req.body)

    res.status(201).json({
        success: true,
        product        
    })
}  


exports.getProducts = (req, res, next)=> {
    res.status(200).json({
        success:true,
        message:"this route show all products in database"
    })
}

