const { resolve6 } = require("dns");
const http = require("http");
const myserver= http.createServer((req,res)=>{
    console.log("NEw REC RECIVE");
    res.end("HELLO FROM SERVER");
});
myserver.listen(7000,()=>console.log("Server started"));

