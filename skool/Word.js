function Word(langA, langB) {
	this.langA = langA; // array of strings
	this.langB = langB; // array of strings
}

// a = boolean - lang a or b, otherWord - array of strings
Word.prototype.compareTo = function(a, otherWord) { // compares this word to user's input(from single/multiple inputfield(s))
	if(a) {
		
	} else {
	
	}
};

Word.prototype.getAsString = function() {
	var wordsA = "[";
	var wordsB = "[";
	
	var ii;
	for(ii=0;ii<this.langA.length;ii++) {
		wordsA = wordsA.concat((ii == 0 ? "" : ",")+this.langA[ii]);
	}
	
	for(ii=0;ii<this.langB.length;ii++) {
		wordsB = wordsB.concat((ii == 0 ? "" : ",")+this.langB[ii]);
	}
	
	wordsA = wordsA.concat("]");
	wordsB = wordsB.concat("]");
	return "{wordsA:"+wordsA+",wordsB:"+wordsB+"}";
};

function createWordObjFromString(str) {
	var splitted = splitObjectString(str.substring(1, str.length-1));
	if(splitted.length == 4) {
		if(splitted[0] == "wordsA" && splitted[2] == "wordsB") {
			return new Word(getFormattedStrAsStrArr(splitted[1]), getFormattedStrAsStrArr(splitted[3]));
		}
		
	}
	alert("something went wrong...");
}

function getWordArrAsString(arr) {
	var ret = "[";
	var ii;
	for(ii=0;ii<arr.length;ii++) {
		ret = ret.concat((ii==0?"":",")+arr[ii].getAsString());
	}
	return ret.concat("]");
}
