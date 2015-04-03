// example param: "animals"
// TODO: add support for subcategories?
function Category(categ) {
	this.categ = categ;
}

Category.prototype.getAsString = function() {
	return "{categ:\""+this.categ+"\"}";
};

function createCategoryFromStr(str) {
	splitted = splitObjectString(str.substring(1, str.length-1));
	if(splitted.length == 2 && splitted[0] == "categ") {
		return new Category(splitted[1]);
	}
	return null;
}
