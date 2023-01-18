

// const fs = require('fs').writeFileSync;

// fs("hello2.txt", "like and subscribe");



//  ----------->create server



// const http = require('http');
// const data = require('./basic-api-tutorial/first');

// http.createServer((req,res)=>{
//     res.write("<h1>Hello this is vivek</h1>");
//     res.end();
// }).listen(4500)

// http.createServer((req, res)=>{
//     res.writeHead(200, {'Content-Type':'application\json'});
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(5000)



// ------------->branch/Input-from-cmd



// console.log(process.argv) // ['/usr/local/bin/node', '/Users/vivek/Desktop/Node/index.js' ]

// console.log(process.argv[2]); // node index.js hello

// const fs = require('fs');

// const input = process.argv;
// if(input[2] === "add"){
//     fs.writeFileSync(input[3],input[4]); // node index.js apple.txt "This is new file"
// }else if(input[2] === "remove"){
//     fs.unlinkSync(input[3]);
// }else{
//     console.log("Invalid Input");
// }
