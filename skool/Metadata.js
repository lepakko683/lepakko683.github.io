function Metadata() {
	this.author = "";
	this.info = "";
	this.creationDate = "";
}

Metadata.prototype.getAllData = function() {
	return "{author:"+this.author+",info:"+this.info+",creationDate:"+this.creationDate+"}";
};
