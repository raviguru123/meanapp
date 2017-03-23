var http=require("http");
const hostname='127.0.0.1';
const port='3000';

const server=http.createServer((req,res)=>{
	res.statusCode=200;
	res.setHeader('content-Type','text/plain');
	res.end("hello this is first response");
});

server.listen(port,hostname,()=>{
	console.log("server listen to port",port,hostname);
});

