let webSocketClient=require("websocket").client,
client=new webSocketClient();

client.on("connectFailed",function(err){
	console.log("connect failed",err.toString());
});

client.on("connect",function(connection){
	console.log("woo web socket client connected");
	connection.on("error",function(err){
		console.log("error occured during connect");
	});

	connection.on("close",function(){
		console.log("echo-protocol connection closed");
	});

	connection.on("message",function(message){
		switch(message.type){
			case "utf8":
			console.log("from server",message.utf8Data);
			break;
			default:
			console.log(JSON.stringify(message));
			break; 
		}
	});

	var log=0;
	connection.send("heyosecond");
});

client.connect("ws://localhost:3000/","echo-protocol");
