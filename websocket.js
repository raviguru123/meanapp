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