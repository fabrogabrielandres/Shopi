const mongoose = require('mongoose');

const connectDatabase = async () => {
    
    try {

        await mongoose.connect( process.env.DB_LOCAL_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: false
        });
    
        console.log('Base de datos online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }

     


}



module.exports = connectDatabase