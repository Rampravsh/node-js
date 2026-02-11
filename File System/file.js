const fs = require('fs')

// fs.writeFileSync('./File System/test.text','hello world ')

// fs.writeFile('./File System/test.text','hello',(err)=>{console.log(err)})


fs.readFile('./File System/test.text','utf-8',(err,data)=>{
    if(err){
        console.log("error: ",err)
    }else{
        console.log(data)
    }
})

// console.log('hello')