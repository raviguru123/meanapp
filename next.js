let crypto=require("crypto"),
hashes=crypto.getHashes();

hashes.forEach(function(hash){
	console.log(hash);
	["","hello this is my first page"].forEach(function(text){
		let hashed;
		try{
			hashed=crypto.createHash(hash).update(text).digest("base64");
		}
		catch(ex){
			if(ex.message==='Digest method not supported'){

			}
			else{
				console.log(ex,hash);
			}
		}

		console.log(hash+"  "+hashed);
	});
});