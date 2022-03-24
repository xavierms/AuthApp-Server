const express = require('express');
const cors = require('cors');
const path = require('path');
const {dbConnection} = require('./db/config')
require('dotenv').config();


//create the server / app/ of express

const app = express();

//Database
dbConnection();

//public directory
app.use(express.static('public'))

//MIDDLEWARES
//CORS
app.use( cors() );

// read and body parse
app.use( express.json());

//routes
app.use('/api/auth',require('./routes/auth'));

// Manejar demás rutas
app.get( '*', (req,res)=>{
    res.sendFile( path.resolve(__dirname, 'public/index.html' ) );
});


app.listen( process.env.PORT, () =>{
    console.log(`server port = ${ process.env.PORT}`);
} );