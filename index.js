var http=require("http");
const hostname='127.0.0.1';
const port='3000',
argv=process.argv.slice(2);

let clientoption=
{
	host:'localhost',
	method:'GET',
	port:3000,
	path:'/'
}

argv.forEach(function(method){
	switch(method){
		case 'GET':
		clientoption.method=method;
		break;
		case 'SUBMIT':
		case 'POST':
		clientoption.method=method;
		clientoption.path='/api';
		break;
		case 'UPDATE':
		case 'PUT':
		clientoption.method=method;
		clientoption.path="/api";

		default:
		clientoption.method=method;
		clientoption.path="/";
	}



	let clientreq=http.request(clientoption,function(res){
		console.log("statusCode",res.statusCode);
		switch(res.statusCode){
			case 200:
			res.setEncoding("utf8");
			res.on("data",function(data){
				console.log("data",data);
			});
			break;
			case 400:
			console.log("404 error");
			break;
		}
	});


	clientreq.on("error",function(err){
		console.log("error occured")
	});

	clientreq.end();

});
