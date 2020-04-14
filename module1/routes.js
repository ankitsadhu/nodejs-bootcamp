const fs = require('fs');

const requestHandler =(req,res) => {

    const url = req.url;
    const method = req.method;

    if(url === '/'){  //Routes
        //sending response
        res.write('<html>');
        res.write('<head><title>Enter a message</title></head>');
        res.write('<body><form action = "/message" method ="POST"><input type ="text" name="message"><button type ="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();  // return respond i.e to end
        }
    
        //console.log(url,req.method,req.headers);
        //process.exit(); ->stops event loop and stop the server,we dont use this
        
        if(url === '/message' && method === 'POST'){
            const body = [];
            //Buffering & streaming data or message
            req.on('data', (chunk)=>{//on always you to listen events and here we are listening to data event
                console.log(chunk); //buffer data
                body.push(chunk); // add to the array list
            });
    
            req.on('end',() =>{
                const parsedBody = Buffer.concat(body).toString();
                console.log(parsedBody);
                const message = parsedBody.split('=')[1];
                //fs.writeFileSync('message.txt',message);//writing into message.txt file synchrounously block untill this operation is done(use only whe u have short file or data otherwise use writFile)   
                fs.writeFile('message.txt',message,err =>{
                    res.statusCode =302; //302 ->URL redirection,Moved Temporarily" rather than "Found".
                    res.setHeader('Location', '/'); //setting the location to '/' route
                    return res.end(); 
                });
            });
            
        }
        //sending response
       /* res.setHeader('Content-type','text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
        res.write('</html>');
        res.end();*/
    
};
module.exports = {
    handler: requestHandler,
    someText: 'Some hard coded text'
};
