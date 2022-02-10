const { Router } = require('express');

const router = Router();


module.exports= router

// New user
router.post( '/', (req,res)=>{
    return res.json({
        ok: true,
        msg: 'New user /new'
    })
})

// Login user
router.post( '/', (req,res)=>{
    return res.json({
        ok: true,
        msg: 'Login user /'
    })
})

// renew token
router.get( '/', (req,res)=>{
    return res.json({
        ok: true,
        msg: 'Renew'
    })
})