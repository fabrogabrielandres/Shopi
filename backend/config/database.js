const mongoose = require('mongoose');

const connectDatabase =  () => {
    

        mongoose.connect(process.env.DB_LOCAL_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            // useCreateIndex: true


        }).then(con=>{
            console.log("dale que funcione");
        })

     


}



module.exports = connectDatabase