var fs=require("fs");
var http=require("http"),
url=require("url"),

port=3000;

let server=http.createServer(function(req,res){
	if(req.headers.dnt==1){
		console.log("do not track please");
	}

	var url_parsed=url.parse(req.url,true);
	if(req.method=='GET'){

	}
	else if(['PUT','POST','DELETE'].indexOf(req.method)>-1){

	}
	else{
		res.end("method not supported");
	}
});










server.listen(port,function(err,res){
	if(err){
		return console.log("error occured during listen server");
	}
	console.log("response and server listen",port);
});