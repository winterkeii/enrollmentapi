const Enrollment = require("../models/Enrollment-Model.js");
const bcryptjs = require("bcryptjs");

module.exports.registerEnrollment = (req,res) =>{
    let newUser = new Enrollment({
        userId: req.body.userId

    })
    return newUser.save().then(result => {
        res.send({
            code: "Success",
            message: "You are now Enrolled",
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