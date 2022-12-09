/*
*/

let inputList = document.querySelectorAll("input");
inputList[0].addEventListener('keyup', () => {

    document.getElementById("display-firstname").innerHTML = inputList[0].value;
}
)

inputList[1].addEventListener('keyup', () => {

    if (inputList[1].value < 18){
        document.getElementById("a-hard-truth").style.visibility = "hidden";
    } else {
        document.getElementById("a-hard-truth").style.visibility = "visible";
    }

}
);

let pwd = document.getElementById("pwd");
let pwdConfirm = document.getElementById("pwd-confirm");

function passCheck(){
    if ( pwd.value === pwdConfirm.value && pwd.value.length > 5){
        pwd.style.border = "2px solid green";
        pwd.style.color = "green";
        pwdConfirm.style.border = "2px solid green";
        pwdConfirm.style.color = "green";
     } else {
        pwd.style.border = "2px solid red";
        pwd.style.color = "red";
        pwdConfirm.style.border = "2px solid red";
        pwdConfirm.style.color = "red";
     }
}

pwdConfirm.addEventListener('keyup', passCheck);
pwd.addEventListener('keyup', passCheck);

let darkModeToggleList = document.getElementById("toggle-darkmode");


darkModeToggleList.addEventListener('change',setDark);

function setDark(){

let darkModeToggle = darkModeToggleList.selectedIndex;
let chosenMode = darkModeToggleList.getElementsByTagName("option")[darkModeToggle];
let whichMode = chosenMode.value;

if (whichMode === "dark") {
    
document.body.style.backgroundColor = "black";
document.body.style.color = "white";
} else {
    document.body.style.backgroundColor = "white";
document.body.style.color = "black";
}

}