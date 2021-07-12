const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true,"user name is required!"]
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lower: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        select: false
    },
    passwordConfirm: {
        type: String,
        required: true,
        validate: [
            function(val) {
                return val == this.password
            },"password not match!"
        ]
    }
});

userSchema.methods.passwordVerification = async (password, hasedPassword) => {
    return await bcrypt.compare(password, hasedPassword)
};

userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) return next();
    var encryptedPassword = await bcrypt.hash(this.password,12)
    this.password = encryptedPassword
    this.passwordConfirm = undefined
    next();
});

var User = new mongoose.model("User",userSchema);

module.exports = User;