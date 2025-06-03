const mongoose = require('mongoose'), bcrypt = require('bcrypt'), SALT_WORK_FACTOR = 10

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'manager', 'engineer']
    }
},
{
    timestamps: true
})

userSchema.pre(save, () => {
    var user = this
    if(!user.modified('password')) return next()

    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        if(err) return next(err)

        bcrypt.hash(user.password, salt, (err, hash) => {
            if(err) return next(err)

            user.password = hash
            next()
        })
    })
})

const User = mongoose.model('User', userSchema)
module.exports = User