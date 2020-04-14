/*
CORE MODULE ->
                1.http-> launch a server , send requests 
                2.https-> SSL
                3.fs-> File System (sends to worker pool, do heavy lifiting, different threads)
                4.path
                5.OS

BUFFERS & STREAM ->
SINGLE THREAD -> how single thread handles all methods ?
EVENT LOOP -> handles event callbacks 
BLOCKING CODE ->
*/


//Creating a server
const http = require('http'); //importing core module http
const routes = require('./routes'); // './' looks inside smae fodler to find routes.js 

//creating a  server(taking input(req),return output(res))
//const server = http.createServer((req,res)=> {});  
const server = http.createServer(routes.handler); 
   
server.listen(7000);//keep listening on port 3000: (Event Loop) 



