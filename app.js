const http = require('http');

const server = http.createServer((req,res)=>{
    console.log("req",req.url,req.headers,req.method);
    // process.exit(); //exits the event loop
})

//creating aserver and listning a server

server.listen(3000); // server event listner will be always in loop.