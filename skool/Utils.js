
function Tuple(a, b) {
	this.a = a;
	this.b = b;
}

function createTupleFromStr(str) {
	var splitted = splitObjectString(str.substring(1,str.length-1));
	if(splitted.length==4 && splitted[0] == "a" && splitted[2] == "b") {
		return new Tuple(removeQuotes(splitted[1]), removeQuotes(splitted[3]));
	}
	return null;
}

function removeQuotes(str) {
	return str.substring(1,str.length-1);
	
}

function splitObjectString(str) {
	var ret = [];
	var ii;
	var chr;
	var ignoreValue = 0;
	var strBuf = "";
	var ignStr = false;
	for(ii=0;ii<str.length;ii++) {
		chr = str.charAt(ii);
		
		if(chr == '"') {
			ignStr = !ignStr;
		}
		
		if(chr == '[' || chr == '{') {
			ignoreValue++;
		}
		if(chr == ']' || chr == '}') {
			ignoreValue--;
		}
		if(ignoreValue == 0 && !ignStr && (chr == ':' || chr == ',')) {
			ret[ret.length] = strBuf;
			strBuf = "";
		} else {
			strBuf = strBuf.concat(chr);
		}
	}
	ret[ret.length]=strBuf;
	return ret;
}

function clampInt(val, min, max) {
	return val < min ? min : val > max ? max : val;
}
