/*
*/

let toMove = document.querySelector("ol");
let last = toMove.lastElementChild;
let first = toMove.children[0];
let second = toMove.children[1];
let third = toMove.children[2];
let fourth = toMove.children[3];
last.appendChild(first);
first.appendChild(second);
second.appendChild(third);
third.appendChild(fourth);

// accessing the sections.
let sectionPack = document.querySelectorAll("section");

// accessing the headers.
let sectionDeux = sectionPack[1].querySelector("h2");
let sectionTrois = sectionPack[2].querySelector("h2");

// accessing the first child of those sections.
let refDeux = sectionPack[1].querySelector("p");
let refTrois = sectionPack[2].querySelector("div");

// moving the titles. 
sectionPack[1].insertBefore(sectionTrois, refDeux);
refTrois.insertBefore(sectionDeux, refTrois.firstElementChild);

// accessing the children of "main"
let mainChildren = document.querySelector("main").children ;
document.querySelector("main").removeChild(mainChildren[(mainChildren.length-1)]);





