function() {
var inputField = document.getElementsByClassName("contact-name")[0];
return inputField.value || "";
}
function() {
var inputField = document.getElementsByClassName("contact-email")[0];
return inputField.value || "";
}
function() {
var textField = document.getElementsByClassName("contact-message")[0];
return inputField.value || "";
}
function(){
var today = new Date();
var str = today.toUTCString();
return str;
}
