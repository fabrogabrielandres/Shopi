


exports.getProducts = (req, res, next)=> {
    res.status(200).json({
        success:true,
        message:"this route show all products in database"
    })
}

