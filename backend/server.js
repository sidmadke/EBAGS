const express = require('express')
const cors  = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const user = require('./routes/user')
const data = require('./routes/data')


//Database
dotenv.config()
mongoose.connect(process.env.MONGO_URI)
 .then(console.log('successfully connected'))
 .catch((err)=>{console.log(err)})

const app = express()
app.use(cors()) // Use this after the variable declaration

//ROUTES
app.use('/api/users',user)
app.use('/api',data)


//SERVER
const port = process.env.PORT || 5000;
app.listen(port,(req,res)=>{
    console.log(`port running at http://localhost:${port}`)
})