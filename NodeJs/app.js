const express = require('express')
const app  = express()
const path = require('path')
const router = require('./routes/router')

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')


app.use(express.urlencoded({extended:false}))
app.use(router)
app.use(express.static(path.join(__dirname,'public')))

app.listen(5500,()=>{
    console.log("Start server 8080")
})