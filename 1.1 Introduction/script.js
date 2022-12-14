/*
*/

// Display existing title
console.log(document.title);

// Modifies exisiting title
document.title = "Modifying the DOM";

// Changes background color to pink.
document.body.style.backgroundColor = "hotpink";

// Generates a random number for the rgb code.
function randColor(){
    let number = Math.floor(Math.random() * ( 255 - 0 + 1 ) + 0);
    return number;
}

// Uses the random number generator to create a random color.
document.body.style.backgroundColor = `rgb(${randColor()},${randColor()},${randColor()})`;

// Displays all children of the body child.
for (let elem of document.body.children){
    console.log(elem);
}
