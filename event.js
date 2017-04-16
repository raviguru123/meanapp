let fs=require("fs"),
args=process.argv.splice('2'),
crypto=require("crypto");
let algorithm=['md5', 'sha1', 'sha256', 'sha512'];
algorithm.forEach(function(algo){
	let hash=crypto.createHash(algo);
	let filestream=fs.ReadStream(args[0]);
	filestream.on("data",function(data){
		hash.update(data);
	});
	filestream.on("end",function(){
		console.log(algo);
		console.log(hash.digest('hex'));
	})
});

