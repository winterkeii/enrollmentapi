const mongoose = require("mongoose");

//Schema
const courseSchema = new mongoose.Schema({
    name: String,
    description: String,
    price : Number,
    isActive: {
        type: Boolean,
        default: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Course", courseSchema);
