const fs = require('fs')

// fs.writeFileSync('./test.text','hello world ')

// fs.writeFile('./test.text','hello',(err)=>{console.log(err)})


// fs.readFile('./test.text','utf-8',(err,data)=>{
//     if(err){
//         console.log("error: ",err)
//     }else{
//         console.log(data)
//     }
// })

// console.log('hello')

// fs.appendFileSync("./test.text",new Date().getDate().toLocaleString())

fs.appendFileSync('./test.text','hey there\n')