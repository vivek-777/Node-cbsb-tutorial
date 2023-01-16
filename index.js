// const fs = require('fs').writeFileSync;

// fs("hello2.txt", "like and subscribe");

//  ----------->create server


const http = require('http');

http.createServer((req,res)=>{
    res.write("<h1>Hello this is vivek</h1>");
    res.end();
}).listen(4500)