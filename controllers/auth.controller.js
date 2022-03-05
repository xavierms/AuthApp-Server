const { response } = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { generateJWT } = require("../helpers/jwt");

const createUser = async (req, res = response) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  try {
    // Verify E-Mail
    const verifyEmail = await User.findOne({ email });

    if (verifyEmail) {
      return res.status(400).json({
        ok: true,
        msg: "There is already a user with this email",
      });
    }
    //Create user on model
    const dbUser = new User(req.body);

    //Hashing password
    const salt = bcrypt.genSaltSync();
    dbUser.password = bcrypt.hashSync(password, salt);

    //Generate JWT
    const token = await generateJWT(dbUser.id, name);

    //Create user of db
    await dbUser.save();

    //Generar respuesta exitosa
    return res.status(201).json({
      ok: true,
      uid: dbUser.id,
      name,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Please talk with your admin",
    });
  }
};

const loginUser = (req, res = response) => {
  const { email, password } = req.body;

  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Please talk with your admin",
    });
  }
  
};

const renewToken = (req, res = response) => {
  return res.json({
    ok: true,
    msg: "Renew",
  });
};

//ES module
// export default{
//          createUser
//     }

module.exports = {
  createUser,
  loginUser,
  renewToken,
};
