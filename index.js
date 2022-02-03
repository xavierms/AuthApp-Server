const express = require('express');
const res = require('express/lib/response');

//create the server / app/ of express

const app = express();


app.get('/', (req, resp)=> {

   resp.json({
       ok:true,
       msg: 'Todo salio bien',
       uid: 1234
   });

})

app.listen( 4000, () =>{
    console.log(`server =${4000}`);
} )