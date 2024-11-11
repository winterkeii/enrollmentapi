const Course = require("../models/Course-Model.js");
const bcryptjs = require("bcryptjs");

module.exports.registerCourse = (req,res) =>{
    let newUser = new Course({
        name: req.body.name,
        description: req.body.description,
        price : req.body.price
    })
    return newUser.save().then(result => {
        res.send({
            code: "Success",
            message: "You are now Enrolled to",
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