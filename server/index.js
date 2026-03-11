const http = require(`http`);
const host = 'localhost';
const port =700;

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':"txt/plain"});
    res.end('HELLO WORLD! \n');
});
server.listen(port,host,()=>{

console.log(`server running at http://${host}:${port}/`);
});