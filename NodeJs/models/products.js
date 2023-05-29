//ใช้งาน mongoose

const mongoose = require('mongoose')

//เชื่อม data
const dbUrl = 'mongodb://127.0.0.1:27017/productDB';
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).catch(err => console.log(err));

//ออกเเบบ schema

let productSchema = mongoose.Schema({
    name:String,
    price:Number,
    image:String,
    description:String
})

//สร้างโมเดล
let Product = mongoose.model("products",productSchema)

//ส่งออก
module.exports = Product


module.exports.saveProduct = function(data){
    return data.save()
}