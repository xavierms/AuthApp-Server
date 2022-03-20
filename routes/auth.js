const { Router } = require('express');
const { check } = require('express-validator');
const { loginUser,createUser,renewToken } = require('../controllers/auth.controller');
const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();


// New user
router.post( '/new',[
    check('email', 'The email is require').isEmail(),
    check('password', 'The password is require').isLength({min:6}),
    check('name', 'The name is require').notEmpty(),
    validateFields
] ,createUser );

//Login user
router.post( '/',[
    check('email', 'The email is require').isEmail(),
    check('password', 'The password is require').isLength({min:6}),
    validateFields
] ,loginUser );

router.get( '/renew',validateJWT,renewToken )

//validate and revalidate token


module.exports= router;