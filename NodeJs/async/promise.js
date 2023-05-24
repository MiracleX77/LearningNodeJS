
//PROMISE
const connect = true
const url1 = "big1.com"
const url2 = "big2.com"
const url3 = "big3.com"
const url4 = "big4.com"
const url5 = "big5.com"

function downloading(url){
    return new Promise(function(resolve,reject){
        setTimeout(() =>{
            if(connect){
                resolve("ok")
            }
            else{
                reject("false")
            }
        },1000)
    })
}
downloading(url1).then(result=>{
    console.log(result);
}).catch(err=>{
    console.log(err);
}).finally(() =>{
    console.log("finally");
})

downloading(url1).then(function(result){
    console.log(result)
    downloading(url2).then(function(result){
        console.log(result)
    })
})

downloading(url1).then(function(result){
    console.log(result)
    return downloading(url2)
}).then(function(result){
    console.log(result)
    return downloading(url3)})