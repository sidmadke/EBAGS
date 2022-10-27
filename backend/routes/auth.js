
const {User} = require('../models/user')
const express = require('express')
const Joi = require('joi');
const router = express.Router();
router.use(express.json())

router.post('/', async (req,res)=>{
    const result = validate(req.body)

    if(result.error){
        return res.send(result.error.details[0].message)
    }

    // let user = await User.findOne({email: req.body.email})
    let user = await User.findOne({email: req.body.email})
    if(!user) {
        return res.send('Invalid email or password')
    }

    const validPassword = req.body.password==user.password?true:false
    if(!validPassword) {
        return res.send('Invalid email or password')
    }
    res.send("Successfully Logged In")
    
})

router.get('/',(req,res)=>{
    res.send('auth')
})

function validate(user){
    const schema = {
        email:Joi.string().email().required(),
        password:Joi.string().min(4).required()
    }
    return Joi.validate(user,schema)
}

module.exports = router