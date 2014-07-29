// Array Utils
function strArrEqual(arr1, arr2) {
	
}

function strArrDiff(arr1, arr2) {

}

function arraysSameLength(arr1, arr2) {
	return arr1.length == arr2.length;
}

function getStrArrayAsStr(arr) {
	return "[TODO]";
}

//i.e. "[a,b,c,d]"
function getFormattedStrAsStrArr(str) {
	return str.substring(1,str.length-1).split(",");
}

function getArrPrtStr(chr, arr) {
	var ii;
	var retStr = "";
	for(ii=0;ii<arr.length;ii++) {
		retStr = retStr.concat((ii==0?"":chr)+arr[ii]);
	}
	return retStr;
	
}
