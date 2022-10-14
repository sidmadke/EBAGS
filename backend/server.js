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

app.get('/api/products/:category/:product', (req,res)=>{
    const url = req.params.category+'/'+req.params.product
    let product = {}
    if(req.params.category=='couch-section'){
        product = Products.couchProducts.find(x => x.url==url)
    }
    if(req.params.category=='chair-section'){
        product = Products.chairProducts.find(x => x.url==url)
    }
    if(req.params.category=='cupboard-section'){
        product = Products.cupboardProducts.find(x => x.url==url)
    }
    if(req.params.category=='table-section'){
        product = Products.tableProducts.find(x => x.url==url)
    }
    if(req.params.category=='bed-section'){
        product = Products.bedProducts.find(x => x.url==url)
    }
    res.send(product)
})

const port = process.env.PORT || 5000;

app.listen(port,(req,res)=>{
    console.log(`port running at http://localhost:${port}`)
})