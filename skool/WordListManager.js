
function WordListManager() {
	this.wordLists = [];
}

WordListManager.prototype.registerWordList = function(wordlist) {
	this.wordLists[this.wordLists.length] = wordlist;
	
};

WordListManager.prototype.getWordListsForLang = function(lang) {
	var ii;
	var retArr = [];
	for(ii = 0; ii<this.wordLists.length;ii++) {
		if(this.wordLists[ii].langA.a == lang.a || this.wordLists[ii].langB.a == lang.a) {
			retArr[retArr.length]=this.wordLists[ii];
		}
	}
};

WordListManager.prototype.getWordListsForLangs = function(lang_a, lang_b) {
	var ii;
	var retArr = [];
	for(ii = 0; ii<this.wordLists.length;ii++) {
		if(this.wordLists[ii].langA.a == lang_a.a && this.wordLists[ii].langB.a == lang_b.a) {
			retArr[retArr.length]=this.wordLists[ii];
		}
	}
};

WordListManager.prototype.loadList = function(text) {
	// TODO: create wordlist and register it from param text
};
