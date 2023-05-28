const express = require('express')
const router = express.Router()


router.get('/',(req,res)=>{
    const products = [
        {name:"notebook",price:25500,images:"images/products/product1.png"},
        {name:"cloth",price:2000,images:"images/products/product2.png"},
        {name:"headgear",price:30000,images:"images/products/product3.png"},

    ]
    res.render('index',{products:products})
})

router.get('/addform',(req,res)=>{
    res.render('form')
})

router.get('/manage',(req,res)=>{
    res.render('manage')
})

module.exports = router;