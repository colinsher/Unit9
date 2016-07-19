/**
 * Created by colinjsherman on 7/18/16.
 */
//Unit 9
//Exercise 10
var username = "Seno";
var password= "Aplus4Colin";

var subKey = document.getElementById("submit");
subKey.disabled=true;

/*
document.addEventListener("keypress",function(){
    if(document.getElementById("login").value&& document.getElementById("pass").value&& document.getElementById("name").value && document.getElementById("last").value && document.getElementById("email").value && document.getElementById("passTwo").value){
        subKey.disabled = false;
    }
},true);
*/

var areSame = function(){
    if((document.getElementById("pass").value===document.getElementById("passTwo").value) && (document.getElementById("login").value && document.getElementById("pass").value && document.getElementById("passTwo").value)){
        subKey.disabled = false;
        document.getElementById("failTwo").innerHTML="";
        document.getElementById("no_login").innerHTML = "";
        document.getElementById("failure").innerHTML = "";
    }else{
        subKey.disabled = true;
        if(document.getElementById("pass").value != document.getElementById("passTwo").value){
            document.getElementById("failTwo").innerHTML="Passwords do not match!";
        }else{
            document.getElementById("failTwo").innerHTML="";
        }
        if(!document.getElementById("login").value){
            document.getElementById("no_login").innerHTML = "Username Required";
        }else{
            document.getElementById("no_login").innerHTML = "";
        }
        if(!document.getElementById("pass").value){
            document.getElementById("failure").innerHTML = "Password Required.";
        }else{
            document.getElementById("failure").innerHTML = "";
        }
    }
};

document.getElementById("pass").addEventListener("blur",areSame);

document.getElementById("passTwo").addEventListener("blur",areSame);

document.getElementById("login").addEventListener("blur",areSame);

subKey.addEventListener("click",function(){
    if(document.getElementById("login").value===username && document.getElementById("pass").value===password){
        document.getElementById("form").action = "Exercise14.html";
        document.getElementById("form").submit();
    }else{
        alert("PASSWORD INCORRECT!");
        //document.getElementById("failure").innerHTML = "PASSWORD INCORRECT";
        subKey.disabled=true;
    }
});