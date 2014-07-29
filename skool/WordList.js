function WordList(name, langA, langB, subWordsA, subWordsB) {
	this.name = name; // String
	this.subWordsA = subWordsA; // int
	this.subWordsB = subWordsB; // int
	this.langA = langA; // Tuple<int, String>
	this.langB = langB; // Tuple<int, String>
	this.words = []; // Array of Words
	this.metadata = new Metadata();
}

WordList.prototype.getReversed = function(index) {
	if(index-1<this.words.length && index >= 0) {
		return this.words[this.words.length-1-index];
	}
	return null;
};

WordList.prototype.addWord = function(word, index) {
	if(index >= this.words.length) {
		this.addWordToEnd(word);
	} else {
		var ii;
		for(ii = this.words.length-1; ii >= index;i--) {
			this.words[ii+1] = this.words[ii];
		}
		this.words[index]=word;
	}
};

WordList.prototype.addWordToBeginning = function(word) {
	this.addWord(word, 0);
};

WordList.prototype.addWordToEnd = function(word) {
	this.words[this.words.length] = word;
};

function createWordListFromText(text) {
	var ret = new WordList("testitusMaximus", "aa", "bb");
	splitted = splitObjectString(text);
	alert(getArrPrtStr("|",splitted));
	return ret;
}

WordList.prototype.getWordListAsText = function() {
	return "{name:\""+this.name+"\",langA:"+this.langA.a+",langB:"+this.langB.a+",words:"+getStrArrayAsString(this.words)+",metadata:"+this.metadata.getAllData()+"}";
};
