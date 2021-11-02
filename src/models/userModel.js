const mongoose = require('mongoose')


let userSchema = mongoose.Schema({
    email :String,
    name:String,
    password:String
})

let UserModel = new mongoose.model("UserModel" , userSchema)

module.exports = UserModel