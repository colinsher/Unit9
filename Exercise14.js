/**
 * Created by colinjsherman on 7/18/16.
 */
//Unit 9
//Exercise 14

var reveal = function(s){
    document.getElementById(s).style.display = "initial";
};
var hide = function(s){
    document.getElementById(s).style.display = "none";
};

var revealTo = function(){
    reveal("to");
};
var revealFrom = function(){
    reveal("from");
};
var revealBody = function(){
    reveal("body");
};

var hideTo = function(){
    hide("to");
};
var hideFrom = function(){
    hide("from");
};
var hideBody = function(){
    hide("body");
};

document.getElementById("recip").addEventListener("focus",revealTo);
document.getElementById("recip").addEventListener("blur",hideTo);
document.getElementById("sender").addEventListener("focus",revealFrom);
document.getElementById("sender").addEventListener("blur",hideFrom);
document.getElementById("text").addEventListener("focus",revealBody);
document.getElementById("text").addEventListener("blur",hideBody);
