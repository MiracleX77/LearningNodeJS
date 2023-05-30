const express = require('express')
const router = express.Router()
//เรียกใช้งานโมเดล
const Product = require('../models/products')
//อัพโหลดไฟล์
const multer = require('multer')

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/images/products')//ตำเเหน่งจัดเก็บไฟล์
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+".jpg")//ป้องกันชื่อไฟลฒซ้ำ
    }
})

const upload = multer({
    storage:storage
})

router.get('/',async (req,res)=>{
    try{
        const products = await Product.find().exec();
        res.render('index',{products:products})
    }
    catch(err){
        console.log(err)
    }
})

router.get('/add-product',(req,res)=>{
    if(req.session.login){
        res.render('form')
    }
    else{
        res.render('admin')
    }
})

router.get('/manage',async (req,res)=>{
    if(req.session.login){
        try{
            const products = await Product.find().exec();
            res.render('manage',{products:products})
        }
        catch(err){
            console.log(err)
        }
    }
    else{
        res.render('admin')
    }
})
router.get("/logout",(req,res)=>{
    req.session.destroy()
    res.redirect("/manage")
})
router.get('/delete/:id',async (req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id,{
            useFindAndModify:false
        }).exec();
        res.redirect('/manage')
    }
    catch(err){
        console.log(err)
    }
})

router.get('/:id',async (req,res)=>{
    try{
        const product = await Product.findOne({_id:req.params.id}).exec();
        res.render('product',{product:product})
    }
    catch(err){
        console.log(err)
    }
})


router.post('/insert',upload.single("image"),async (req,res)=>{
    try {
        let data = new Product({
            name: req.body.name,
            price: req.body.price,
            image: req.file.filename,
            description: req.body.description,
        });
        await Product.saveProduct(data);
        res.redirect('/');
    } catch (err) {
        console.log(err);
    }

})

router.post('/update',async (req,res)=>{
    try {
        const update_id = req.body.update_id
        let data = {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
        };
        await Product.findByIdAndUpdate(update_id,data,{useFindAndModify:false}).exec()
        res.redirect("/manage")
    } catch (err) {
        console.log(err);
    }

})
router.post('/edit',async (req,res)=>{
    try {
        const edit_id = req.body.edit_id
        const product = await Product.findOne({_id:edit_id}).exec();
        //นำข้อมูลเดิมไปเเสดงผล
        res.render('edit',{product:product})
    } catch (err) {
        console.log(err);
    }

})

router.post("/login",(req,res)=>{
    const username = req.body.username
    const password = req.body.password
    const timeExpire = 30000 // 10 s
    if(username === "admin" && password === "123"){
        //create session
        req.session.username = username
        req.session.password = password
        req.session.login = true
        req.session.cookie.maxAge = timeExpire
        res.redirect('/manage')
    }else{
        res.render('404')
    }
})



module.exports = router;