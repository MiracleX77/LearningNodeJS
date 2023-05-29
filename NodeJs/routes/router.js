const express = require('express')
const router = express.Router()
//เรียกใช้งานโมเดล
const Product = require('../models/products')


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

router.post('/insert',async (req,res)=>{
    try {
        let data = new Product({
            name: req.body.name,
            price: req.body.price,
            image: req.body.image,
            description: req.body.description,
        });
        await Product.saveProduct(data);
        res.redirect('/');
    } catch (err) {
        console.log(err);
    }

})

module.exports = router;