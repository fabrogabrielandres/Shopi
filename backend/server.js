const app = require("./app")

const dotenv = require("dotenv")


//setting up config file
//configurando el archivo de configuracion

dotenv.config({path:"backend/config/config.env"})


app.listen(process.env.PORT, ()=>{
    console.log(`server started on Port ${process.env.PORT} in ${process.env.NODE_ENV}`);
})
