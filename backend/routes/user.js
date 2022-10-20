
const {User, validate} = require('../models/user')
const express = require('express')
const router = express.Router();
router.use(express.json())

router.post('/', async (req,res)=>{
    const result = validate(req.body)

    if(result.error){
        return res.status(400).send(result.error.details[0].message)
    }

    let user = await User.findOne({email: req.body.email})
    if(user) {
        return res.status(400).send('email already registered')
    }

    user = new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    })

    await user.save()
    res.send(user)
})

router.get('/',(req,res)=>{
    res.send('User')
})

module.exports = router