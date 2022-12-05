const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

let displayed = document.querySelector(".displayedsquare-wrapper");

// creates keyboard event
window.addEventListener('keydown', (keyboard) => {
  console.log(keyboard.code);

  if (keyboard.code === "Space"){

    //random numbers for colors
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    var changedBG = `rgb(${r},${g},${b})`;
    document.body.style.backgroundColor = changedBG; 

    // log for backgrround color
    let newLog = document.createElement("li");
    let logText = document.createTextNode(`[${getElapsedTime()}] Changed background color to ${changedBG}`);
    newLog.appendChild(logText);
    document.querySelector("ul").appendChild(newLog);
  }

  // deletes log
  if (keyboard.code === "KeyL")
  {
   let logContent = document.querySelector("ul").children;

   while ( logContent.length > 0 ){
    document.querySelector("ul").removeChild(logContent[logContent.length-1]);
   }
  }

  //deletes generated squares
  if (keyboard.code === "KeyS")
  {
   let alldisplayed = document.querySelector(".displayedsquare-wrapper").children;

   while ( alldisplayed.length > 0 ){
    document.querySelector(".displayedsquare-wrapper").removeChild(alldisplayed[alldisplayed.length-1]);
   }
  }
})

// creates alert for the clicked squares
function showMeYourColor(square){
  alert(square[1]);
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())


  // creates square
  let newDiv = document.createElement("div");
  let newLog = document.createElement("li");

  newDiv.classList.add("displayedsquare");
  let colorOfSquare = "";

  // chooses the color class to give and prepares for the log list
  if (e.target.classList.contains("green")){
    newDiv.classList.add("green");
    colorOfSquare = "green";
  } else if (e.target.classList.contains("violet")){
    newDiv.classList.add("violet");
    colorOfSquare = "violet";
  } else if (e.target.classList.contains("orange")){
    newDiv.classList.add("orange");
    colorOfSquare = "orange";
  } 

  // logs color
  let logText = document.createTextNode(`[${getElapsedTime()}] Created a new ${colorOfSquare} square`);

  // appends created square to the container
  newLog.appendChild(logText);
  document.querySelector("ul").appendChild(newLog);
  newDiv.setAttribute('onclick', "showMeYourColor(this.classList);");
  displayed.appendChild(newDiv);
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}