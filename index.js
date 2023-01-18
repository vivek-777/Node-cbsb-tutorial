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

// ----------------> branch/file-list

// const fs = require('fs');
// const path = require('path');

// const dirPath = path.join(__dirname, 'files');

// // for(i=0; i<3; i++){
// //     fs.writeFileSync(`${dirPath}/hello${i}.txt`, "a simple text file");
// // };

// fs.readdir(dirPath, (err, files)=>{
//     console.log(files)
// });

// ------------> branch/crud

// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'crud');
// const filePath = `${dirPath}/apple.txt`;

// fs.writeFileSync(filePath, 'This is a text file'); // create

// fs.readFile(filePath,'utf-8',(err, file)=>{  // read
//     console.log(file);
// });

// fs.appendFile(filePath, ' appned new text', (err)=>{ // update
//     if(!err){
//         console.log("File is updated")
//     }
// });

// fs.rename(filePath, `${dirPath}/fruit.txt`, (err)=>{ // renaming a file
//     if(!err){
//         console.log("File name is updated")
//     }
// })

// fs.unlinkSync(`${dirPath}/fruit.txt`); // delete

// --------------> branch/asynchronus

// let a = 20;
// let b = 0;

// let waitingData = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(30);
//     },2000);
// });

// waitingData.then((data)=>{
//     b = data;
//     console.log(a+b);
// });

// -------------> branch/express

const express = require("express");
const app = express();

app.get("", (req, res) => {
  // console.log("data sent by browser ", req.query.name); //http://localhost:5000/?name=vivek
  res.send("<h1>Hello, This is home page</h1><a href='/about'>About</a>");
});

app.get("/about", (req, res) => {
  res.send({
    name: "vivek",
    email: "vivek@gmail.com",
  });
});

app.listen(5000);
