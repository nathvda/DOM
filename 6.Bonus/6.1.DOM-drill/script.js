let mainList = document.querySelector('ul');
let mainListItems = mainList.childNodes;

for (i of mainListItems){
    

    if (i.nodeType === 1 ) {

        for (elem of mainListItems){

          if ( elem.isSameNode(i) ){
            continue; 
            
          }
           else if ( elem.nodeType === 1) {    
          
            if (elem.isEqualNode(i)){
            mainList.removeChild(elem);              
            } 
        }
        
        } 

        if (i.innerHTML === "Fast and Furious"){
            mainList.insertBefore(i, mainListItems[0]);
            i.classList.add("important");
        }

    }

    i.addEventListener('click', (e) => {

        if (e.target.classList.contains("important")){
            alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.");
        } else {

        alert(e.target.innerHTML);
        }

    });  

   
}

window.addEventListener('keyup', (e) => {
    if (e.code === "KeyR"){
      
   for (elem of mainListItems){
    mainList.appendChild(elem);
   
    if (elem.innerHTML === "Fast and Furious"){
        mainList.insertBefore(elem, mainListItems[0]);
        elem.classList.add("important");
      }
      
    }
    }

    if (e.code === "KeyD"){
      
      let fastAndFurious = document.querySelector(".important");
      let clonedFaF = fastAndFurious.cloneNode(true);
      console.log(clonedFaF);
      mainList.insertBefore(clonedFaF, mainListItems[1]);
         }
         }
  )

// Creates the select menu
let divNew = document.createElement("div");
document.body.insertBefore(divNew, mainList);

let selectNew = document.createElement("select");
let selectOptionOne = document.createElement("option");
let selectOptionTwo = document.createElement("option");

let selectOptionOneText = document.createTextNode("important franchises");
let selectOptionTwoText = document.createTextNode("normal franchises");

selectOptionOne.setAttribute("value", "important");
selectOptionTwo.setAttribute("value", "normal");

selectOptionOne.appendChild(selectOptionOneText);
selectOptionTwo.appendChild(selectOptionTwoText);

selectNew.append(selectOptionOne, selectOptionTwo);
divNew.append(selectNew);

selectNew.addEventListener("change", () => {
let selectedIndex = selectNew.selectedIndex;
let optionChosen = selectNew.getElementsByTagName("option")[selectedIndex];
let chosenValue = optionChosen.value;
console.log(chosenValue);

if (chosenValue === "important"){   
   
    for (elem of mainListItems){

    if (elem.nodeType === 1){

        console.log(mainListItems);

    if (elem.classList.contains('important')){

        elem.style.display = "block";

    } else {

        elem.style.display = "none";

    }
}
   }
} else if (chosenValue === "normal"){
       
    for (elem of mainListItems){

        if (elem.nodeType === 1){
    
            console.log(mainListItems);
    
        if (elem.classList.contains('important')){
    
            elem.style.display = "none";
    
        } else {
    
            elem.style.display = "block";
    
        }
    }
       }
    }

    

})








