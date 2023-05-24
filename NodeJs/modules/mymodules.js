function getCurrentTime(){
    return new Date()
}
function add(x,y){
    return x+y;
}

module.exports.getCurrentTime = getCurrentTime
module.exports.add = add


// การเรียนใช้งาน 
// const mymodules = require('./modules/mymodules')
// const now = require('./modules/mymodules').getCurrentTime


// console.log(now())
// console.log(mymodules.add(50,100))