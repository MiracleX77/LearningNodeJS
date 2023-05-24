const fs = require('fs')

//Synchronous
// const data = fs.readFileSync('filesystem/myFile/input.txt','utf-8')
// console.log(data)

// const outputText = ` yooooooooo ${data}`
// fs.writeFileSync("filesystem/myFile/output.txt",outputText)

//Asynchronous

fs.readFile("filesystem/myFile/input.txt",'utf-8',(err,data)=>{
    if(err) return console.log("ERR",err)
    const outputText = ` Hello ${data} ` 
    fs.writeFile("filesystem/myFile/output.txt",outputText,err=>{
        if(err) return console.log("ERR",err)
        console.log("sus")
    })
})
console.log("end")