//Nodemon (as development dependencies)  -> npm install nodemon --save-dev 
// Express.js (as production dependencies) -> npm install --save express
//Middleware
//routing

const http = require('http');

const express = require('express');

const app = express();

app.use((req,res,next)=>{ //use method allows us to add middleware
    console.log('In the middleware!!!');
    next();//allows
}); 

const server = http.createServer(app);

server.listen(3000);