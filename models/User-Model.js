const mongoose = require("mongoose");
const { Schema, Types } = mongoose;
//Schema
const userSchema = new mongoose.Schema({
 firstName: String,
 middleName: String,
 lastName: String,
 email: String,
 contactNumber: String,
 password: String,
 isAdmin: {
     type: Boolean,
     default: false
 },
 id: {  
    type: Types.ObjectId,
    default: () => new Types.ObjectId()
 }
})

module.exports = mongoose.model("User", userSchema);
