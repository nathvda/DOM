/*
*/

let element = document.querySelectorAll('.important');

for (elem of element){
    elem.setAttribute("title","This is an important item");
}

let images = document.querySelectorAll('img');

for (pic of images){
    (pic.classList.contains("important")) ? pic.style.display ="block" : pic.style.display ="none";   
}

let paras = document.querySelectorAll('p');

function randColor(){
    let number = Math.floor(Math.random() * ( 255 - 0 + 1 ) + 0);
    return number;
}

for (par of paras){
    par.hasAttribute("class") ? console.log(par.innerHTML,par.classList) : (console.log(par.innerHTML), par.style.color = `rgb(${randColor()},${randColor()},${randColor()})`);
}