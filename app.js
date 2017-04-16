var fs=require("fs");
var http=require("http"),
url=require("url"),

port=3000;

let server=http.createServer(function(req,res){
	if(req.headers.dnt==1){
		console.log("do not track please");
	}

	var url_parsed=url.parse(req.url,true);
	//res.setHeader("content-Type","application/json");
	//res.statusCode=100;
	res.end(JSON.stringify(http.STATUS_CODES));
	if(req.method=='GET'){
		handlegetrequest(url_parsed,res);
	}
	else if(['PUT','POST','DELETE'].indexOf(req.method)>-1){
		handleapirequest(url_parsed,req.method,res);
	}
	else{
		res.end("method not supported");
	}
});

let handlegetrequest=function(url_parsed,res){
	console.log("url_parsed.search=",url_parsed.search);
	console.log("url_parsed.query",url_parsed.query);
	res.end("handle get request="+JSON.stringify(url_parsed.pathname)+"\n");
}

let handleapirequest=function(url_parsed,method,res){
	if(url_parsed.pathname!="/api"){
		res.statusCode=404;
		res.end('404\n'+url_parsed.path+"\n");
	}

	res.end("handle  new line api request="+method+"\n");
}










server.listen(port,function(err,res){
	if(err){
		return console.log("error occured during listen server");
	}
	console.log("response and server listen",port);
});