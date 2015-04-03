function Metadata() {
	this.author = "";
	this.info = "";
	this.creationDate = "";
}

Metadata.prototype.getAllData = function() {
	return "{author:\""+this.author+"\",info:\""+this.info+"\",creationDate:\""+this.creationDate+"\"}";
};

function createMetadataFromStr(str) {
	var splitted = splitObjectString(str.substring(1, str.length-1));
	
	if(splitted.length == 6 && splitted[0] == "author" && splitted[2] == "info" && splitted[4] == "creationDate") {
		var ret = new Metadata();
		ret.author = removeQuotes(splitted[1]);
		ret.info = removeQuotes(splitted[3]);
		ret.creationDate = removeQuotes(splitted[5]);
		return ret;
	}
	return null;
	
	
}
