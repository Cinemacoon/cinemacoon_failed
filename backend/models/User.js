const mongoose = require("mongoose")
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    admin: Boolean,
    dor: Date,
    status: String
})

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User", userSchema);

module.exports = User