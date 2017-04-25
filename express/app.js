let express=require("express"),
app=express(),
logger=require("morgan"),
compress=require('compression'),
auth=require("basic-auth");


app.use(logger);
app.use(compress);
app.use(express.static(__dirname));
//specific route handler;
app.get("/blah",function(req,res){
	res.send("blah");
});

//default handler;
app.get("*",function(req,res){
	res.send("default");
});


app.listen(3000);