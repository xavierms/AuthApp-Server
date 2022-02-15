const { response } = require('express');



const createUser = (req,res = response)=>{

    const {name,email,password}= req.body;
    
    return res.json({
        ok: true,
        msg: 'New user /new'
    });
};

const loginUser = (req,res  = response)=>{

   
    const {email,password}= req.body;
    
    return res.json({
        ok: true,
        msg: 'Login user /'
    });
};

const renewToken = (req,res  = response)=>{
    return res.json({
        ok: true,
        msg: 'Renew'
    });
};

//ES module
// export default{
//          createUser
//     }

module.exports={
    createUser,
    loginUser,
    renewToken
}