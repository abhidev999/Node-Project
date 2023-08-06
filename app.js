const http = require('http');
const fs= require('fs');
 

const server = http.createServer((req,res)=>{
    console.log("req",req.url,req.headers,req.method);
    url = req.url;
    if(url== "/"){
        res.write('<html><head><title>Enter Msg</title></head><body><form action="/message" method="POST" ><input type="text" name="message" /><button type="submit"></button></form></body></html>');
        return res.end();
    }
    if(url="/message" && req.method == "POST"){
        const body =[];
        req.on('data',(chunk)=>{
            console.log("chunk",chunk);
            body.push(chunk);
        });
        req.on('end',()=>{
            const parssedBody = Buffer.concat(body).toString();
            console.log("parssedBosy",parssedBody);
            fs.writeFileSync('message.txt',parssedBody);
            //code for redirecting the page to initial/

            
        });
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end(); // sending the response and updating the page 

        
        


    }
    res.setHeader('content-Type','text-html');//default header for html text
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Geeting My First api request from api</h1></body>');
    res.write('</html>');
    res.end(); // to end the response setting
    // process.exit(); //exits the event loop
})

//creating aserver and listning a server

server.listen(3000); // server event listner will be always in loop.