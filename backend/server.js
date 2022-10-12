import express from 'express'
import Category from './data/category.js'
import Products from './data/products.js'
import cors from 'cors'

const app = express()
app.use(cors()) // Use this after the variable declaration

app.get('/api/category', (req,res)=>{
    res.send(Category)
})

app.get('/api/products', (req,res)=>{
    res.send(Products)
})

const port = process.env.PORT || 5000;

app.listen(port,(req,res)=>{
    console.log(`port running at http://localhost:${port}`)
})