const express = require('express');
const res = require('express/lib/response');

//create the server / app/ of express

const app = express();




app.listen( 4000, () =>{
    console.log(`server =${4000}`);
} )