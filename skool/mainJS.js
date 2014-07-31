// main javascript file
var WORDLIST_MANAGER = new WordListManager();
			
var LANG_UMM_WHAT = new Tuple(-1, "Unknown_Language");
var LANG_ENG = new Tuple(0, "English");
var LANG_FIN = new Tuple(1, "Finnish");
var LANG_SWE = new Tuple(2, "Swedish");

var val = WORDLIST_MANAGER.getWordListsForLang(LANG_ENG);

var langChooserOpenForA = true;

var objStr = "{wordsA:[test,test2,test3],wordsB:[ans,ans2,ans3]}";
var wlObjStr = "{name:\"namees\",langA:,words:[{wordsA:[test,test2,test3],wordsB:[ans,ans2,ans3]},{wordsA:[test4,test5,test6],wordsB:[ans4,ans5,ans6]},{wordsA:[test7,test8,test9],wordsB:[ans7,ans8,ans9]}]}";

var splittered = splitObjectString(objStr.substring(1, objStr.length-1));
var cnocat = "";
var ii2;
for(ii2 = 0;ii2<splittered.length;ii2++) {
	cnocat = cnocat.concat((ii2==0?"":"|")+splittered[ii2]);
}

//alert(cnocat);
//var tstWrd = createWordObjFromString(objStr);

/*var WLCreatorWordlist = new WordList();*/
var currentWordlist = [];
var testList = new WordList("Namee", LANG_ENG, LANG_FIN, 3, 3);
var ws1 = ["a","b","c"];
var ws2 = ["0","1","2"];
var ws3 = ["aa","bb","cc"];
var ws4 = ["00","11","22"];
testList.addWordToEnd(new Word(ws1,ws2));
testList.addWordToEnd(new Word(ws3,ws4));
testList.metadata.author = "OkkapeL";
testList.metadata.info = "Default info.";
testList.metadata.creationDate = "29.7.2014";

//alert(testList.getWordListAsText());

var currLangA = LANG_ENG;
var currLangB = LANG_FIN;

testList.metadata.author = "OkkapeL";
testList.metadata.info = "Just a little test list to test WordLists";
var testList2 = createWordListFromText(wlObjStr.substring(1,wlObjStr.length-1));

function testii() {
	if(isWordListValid(words_test_err)) {
		document.getElementById("wot2").innerHTML = (words_test_err.length % 2);
	}
}

function noff() {
	//alert(testList.metadata.getAllData());
	//alert(testList2.name);
	//alert(currLangB.b)
}

function isWordListValid(list) {
	if(list.length % 2 != 1) {
		return true;
	}
	return false;
}

function wordOptionClicked(text) {
	alert(text);
}

function bPanelButtonHover(obj) {
	obj.style.color = '#00B0AA';
	obj.style.backgroundColor = '#994499';
	obj.style.borderBottomStyle = 'solid';
}

function bPanelButtonUnhover(obj) {
	obj.style.color = '#FFFFFF';
	obj.style.backgroundColor = '#883388';
	obj.style.borderBottomStyle = 'none';
}

function langOptHover(obj) {
	obj.style.color = '#AA00AA';
	obj.style.borderColor = '#AA00AA';
}

function langOptUnhover(obj) {
	obj.style.color = "#FF00FF";
	obj.style.borderColor = "#FF00FF";
}

function langOptClicked(lang) {// Tuple<int, String> lang
	//alert(lang.b);
	if(langChooserOpenForA) {
		currLangA = lang;
	} else {
		currLangB = lang;
	}
	updateLangDisplay();
}

function updateLangDisplay() {
	document.getElementById('lang_a').innerHTML=("Lang A: " + currLangA.b);
	document.getElementById('lang_b').innerHTML=("Lang B: " + currLangB.b);
}

function openLangChooserFor(a) { // boolean a
	langChooserOpenForA = a;
	document.getElementById('langChooser').style.visibility = 'visible';
	document.getElementById('langChooserBG').style.visibility = 'visible';
}

function closeLangChooser() {
	document.getElementById('langChooser').style.visibility = 'hidden';
	document.getElementById('langChooserBG').style.visibility = 'hidden';
}

function recreateWLCreatorWLDisplay() {
	// delete all of class wordDisplay
	// recreate all wordDisplay nodes
}

function appendWordToWLCreatorWList() {


}

function appendWordToWLCreatorWListEnd() {


}

function appendWordToWLCreatorWListStart() {


}

function wordDisplayHover(obj) {
	if(obj.class != 'wordDisplaySelected') {
		obj.style.backgroundColor = '#5F5F5F';
		obj.style.borderColor = '#6F6F6F';
	}
}

function wordDisplayUnhover(obj) {
	if(obj.class != 'wordDisplaySelected') {
		obj.style.backgroundColor = '#6F6F6F';
		obj.style.borderColor = '#7F7F7F';
	}
}

var lastSelectedWordDisp = null;
function selectWordDisp(obj) {
	if(lastSelectedWordDisp != null) {
		lastSelectedWordDisp.class = 'wordDisplay';
		lastSelectedWordDisp.style.backgroundColor = '#6F6F6F';
		lastSelectedWordDisp.style.borderColor = '#7F7F7F';
	}
	obj.class = 'wordDisplaySelected';
	obj.style.backgroundColor = '#6F306F';
	obj.style.borderColor = '#7F407F';
	lastSelectedWordDisp = obj;
}

function getElementX(elem) {
	return elem.getBoundingClientRect().left;
}

function getElementY(elem) {
	return elem.getBoundingClientRect().top;
}

// Tuple<int, int>
var getElementXYRectField = null;
function getElementXY(elem) {
	getElementXYRectField = elem.getBoundingClientRect();
	return new Tuple(getElementXYRectField.left, getElementXYRectField.top);
}

function addWordInputElement() {
	
}

function removeWordInputElement() {
	
}

var wlEditorTabClickedField = null;
function wlEditorTabClicked(obj, index) {
	if(wlEditorTabClickedField == null) {
		wlEditorTabClickedField = document.getElementById("wlWordlistEditorTab");
	}
	wlEditorTabClickedField.style.backgroundColor = '#003535';
	wlEditorTabClickedField.style.zIndex = 4;
	
	obj.style.backgroundColor = '#005555';
	obj.style.zIndex = 6;
	wlEditorTabClickedField = obj;
	
	if(index == 0) {
		document.getElementById('wlCreatorWordlistEditor').style.visibility = 'visible';
		document.getElementById('wlCreatorWordEditor').style.visibility = 'hidden';
	}else if(index == 1) {
		document.getElementById('wlCreatorWordEditor').style.visibility = 'visible';
		document.getElementById('wlCreatorWordlistEditor').style.visibility = 'hidden';
	}
}

