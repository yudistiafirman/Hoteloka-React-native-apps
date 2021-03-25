const route = require("express").Router();
const jwt = require('../middleware/jwtMidd')

const functions = require("../functions/userFunction.js");

route.post("/register", functions.Register);
route.post("/login", functions.Login);
route.get("/testmail", functions.sendMail);
route.patch("/verify/:id/:password/:otpnumber", functions.verifyEmail);
route.post("/isverifytoken", jwt, functions.isVerifieduser)
route.get("/getuserbyid/:id", functions.getUserById)
route.patch("/forgotpass/", functions.forgotPass)
route.patch('/updatecredential/:id',functions.editCredential)
module.exports = route;
