const  mongoose  = require("mongoose");



const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.DB_Connection_mongo,{
            useNewUrlParser: true,
            useUniFiedTopology: true,
            // useCreateIndex: true
        });
        console.log('db online');
    } catch (error) {
        console.log(error);
        throw new Error('Error connecting to database');
    }
}

module.exports ={
    dbConnection
}