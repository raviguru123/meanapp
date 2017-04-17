let app=require("http").createServer(connectionHandler),
io=require("socket.io").listen(app),
fs=require("fs");

app.listen(3000);



function connectionHandler(req,res){
	fs.readFile(__dirname+"/socket.io.html",function(err,data){
		if(err){
			res.writeHead(500);
			res.end("error occured during html page serve");
		}
		res.writeHead(200);
		res.end(data);
	});
};

io.socket.on("connection",function(socket){
	socket.broadcast.emit("big_news");
	socket.emit("news",{hello:"this"});
	socket.on("other-event",function(data){
		console.log("other-event=",data);
	});
});

//namespaced
var users=io.of("/users").on("connection",function(socket){
	socket.emit("user message",{
		that:"that",
		"/user":"will get"
	});
	users.emit("user message",{
		all:"in",
		"/user":"will get"
	});
});


