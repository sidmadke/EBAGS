import express from 'express'
import CouchProducts from './data/couchProducts.js'
import Category from './data/category.js'
import cors from 'cors'

const app = express()
app.use(cors()) // Use this after the variable declaration
app.get('/api/category', (req,res)=>{
    res.send(Category)
})

const port = process.env.PORT || 5000;

app.listen(port,(req,res)=>{
    console.log(`port running at http://localhost:${port}`)
})