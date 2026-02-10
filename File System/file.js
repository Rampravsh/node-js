const fs = require('fs')

// fs.writeFileSync('./File System/test.text','hello world ')

// fs.writeFile('./File System/test.text','hello',(err)=>{console.log(err)})


const result=fs.readFile('./File System/test.text','utf-8',(err)=>{})
console.log(result)

// console.log('hello')