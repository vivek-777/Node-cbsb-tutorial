// const fs = require('fs').writeFileSync;

// fs("hello2.txt", "like and subscribe");

//  ----------->create server


const http = require('http');
const data = require('./basic-api-tutorial/first');

http.createServer((req,res)=>{
    res.write("<h1>Hello this is vivek</h1>");
    res.end();
}).listen(4500)

http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'application\json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(5000)