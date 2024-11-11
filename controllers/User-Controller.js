const User = require("../models/User-Model.js");
const bcryptjs = require("bcryptjs");

module.exports.registerUser = (req,res) =>{
    let newUser = new User({
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        email: req.body.email,
        contactNumber: req.body.contactNumber,
        password: bcryptjs.hashSync(req.body.password, 10)
    })
    return newUser.save().then(result => {
        res.send({
            code: "Registration Success",
            message: "You are now Registered",
            result: result
        })
    })
    .catch(error =>{
        res.send({
            code: "REGISTRATION ERROR",
            message: "We have encountered an error during the registration. PLease Try Again!",
            result: error
        })
    })
}