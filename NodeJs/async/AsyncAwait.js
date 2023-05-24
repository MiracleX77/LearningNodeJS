
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

async function start(){
    console.log(await downloading(url1))
    console.log(await downloading(url2))
    console.log(await downloading(url3))
    console.log(await downloading(url4))
    console.log(await downloading(url5))

    
}
start()