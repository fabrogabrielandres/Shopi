const express = require("express");
const app = express();



//lectura y parceo del body (middlewares)
app.use(express.json())

//import all routes
const products = require("./routes/products") 

app.use("/api/v1",products)



module.exports = app

