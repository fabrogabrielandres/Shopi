const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please enter product name"],
        trim: true,
        maxlength: [200, "please max numbers of characters is 200"]
    },
    price: {
        type: Number,
        required: [true, "please enter product price"],
        trim: true,
        maxlength: [5, "product name cannot exceed 5 characters"]
    },
    description: {
        type: String,
        required: [true, "please enter description name"],
    },
    ratings: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, "please select category for this product"],
        enum: {
            values: [
                "Electronics",
                "Cameras",
                "Laptops",
                "Accessories",
                "HeadPhones",
                "Food",
                "Books",
                "Clothes/Shoes",
                "Beauty/Health",
                "Sports",
                "Outdoor",
                "Home"
            ],
            message: "Please select correct category for product"
        }
    },
    seller: {
        type:String,
        required: [true, "please entre product seller"]
    },
    stock: {
        type: Number,
        required: [true, "please enter prodcut stock"],
        maxLenght: [5, "Product cannot exceed 5 caracters"], 
        default: 0
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required: true
            },
            rating:{
                type: Number,
                required: true ,

            },
            comment: {
                type:String,
                required: true 
            }

        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model("Product", productsSchema)
