let http=require("http"),
fs=require("fs"),
url=require("url"),
websocket=require("websocket").server;

let server=http.createServer(function(req,res){
	if (req.url === '/favicon.ico') {
		res.writeHead(200, {'Content-Type': 'image/x-icon'} );
		res.end();
	} 

	else{

		let url_parsed=url.parse(req.url,true,true);
		let filepath=url_parsed.path.split("/")[1]+".html";
		fs.readFile(filepath,function(err,data){
			if(err){
				res.statusCode=400;
				res.end(http.STATUS_CODES[404])
			}
			res.statusCode=200;
			res.end(data);
		});
	}
}).listen(3000,function(err){
	if(err)
		console.log("error occured during listen");
	console.log("server is listen in port 3000");
});

let serverconfig={
	httpServer:server,
	autoAcceptConnections:false
}

let wsserver=new websocket();
wsserver.mount(serverconfig);

wsserver.on("connect",function(connection){
	console.log("connected");
	connection.send("yo");
	
});

wsserver.on("request",function(req){
	console.log("request");
	var connection=req.accept('echo-protocol',req.origin);
	
	connection.on("message",function(message){
		if(message.type=="utf8"){
			console.log("utf8=",message.utf8Data);
		}
		else if(message.type=="binary"){
			console.log(message.binaryData);
		}
	});

	connection.on("close",function(reasonCode,description){
		console.log("connection close",reasonCode,description);
	});
});

wsserver.on("close",function(conn,reason,description){
	console.log("closing",reason,description);
});

