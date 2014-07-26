function WordList(name, langA, langB) {
	this.name = name;
	this.langA = langA;
	this.langB = langB;
	this.words = [];
	this.metadata = new Metadata();
}

function createWordListFromText(text) {
	var ret = new WordList("testitusMaximus", "aa", "bb");
	return ret;
}

function getWordListAsText() {
	return "{name:"+this.name+",langA:"+this.langA+",langB:"+this.langB+",words:"+getStrArrayAsString(this.words)+",metadata:"+this.metadata.getAllData()+"}";
}

function getStrArrayAsStr(arr) {
	return "[TODO]";
}
