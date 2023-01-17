// const http = require('http');

// http.createServer((req, res)=>{
//     res.writeHead(200, {'Content-Type':'application\json'});
//     res.write(JSON.stringify({name:'vivek', email: 'vivekvikram777@gmail.com'}));
//     res.end();
// }).listen(5000)

const data = [
    { 
        name:'vivek', 
        email: 'vivekvikram777@gmail.com'
    },
    {
        name: 'abc',
        email: 'abc@gmail.com',
    }
];

module.exports = data;