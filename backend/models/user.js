
const mongoose = require('mongoose')
const Joi = require('joi')

const userSchema = new mongoose.Schema({
    username:String,
    email:{type:String, unique:true},
    password:String
})

function Validate(user){
    const schema = {
        email:Joi.string().min(3).required().email(),
        username:Joi.string().min(3).required(),
        password:Joi.string().min(3).required()
    }
    return Joi.validate(user,schema)
}


const User = mongoose.model('User', userSchema)

exports.User = User
exports.validate = Validate