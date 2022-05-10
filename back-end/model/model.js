const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    phone : {
        type : String
    },
    otp : {
        type : String
    },
})

const UserModel = mongoose.model('users', UserSchema)

module.exports = UserModel