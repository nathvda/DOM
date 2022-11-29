/*
*/

// Trainees list.
const becodeTrainees = [ 
    "Arno Volts" ,
    "Aurélien Mariaule",
    "Aurore Lemaire",
    "Benjamin Porsont",
    "Céline Verreydt",
    "Corentin Miserque",
    "Dominique Coppée",
    "Edouard de Romrée de Vichenet",
    "Hugo Goorickx ",
    "Jofrey Houyoux",
    "Jonathan Manes",
    "jonathan bajoux",
    "Laura Wilhelmi",
    "Lysie Soyez",
    "Marnie Benalia",
    "Mathilde Cornelis",
    "Milo Bonnet",
    "Nadim El Nakadi",
    "Nathalie Vanden Abeele",
    "Nathalie Goffette",
    "Nour Everaert",
    "Pierre Mauriello",
    "Quentin Bource ",
    "Virginie Dourson"
];

// Randomizes the array.
const toDisplay = becodeTrainees.sort((a,b) => 0.5 - Math.random());

// generates random number for color.
function randColor(){
    let number = Math.floor(Math.random() * ( 255 - 0 + 1 ) + 0);
    return number;
}

// displays each element of the randomized array.
for (let elem of toDisplay){
        let cont = document.createElement("section");

        // gets values for the color (needed for the contrast calculation)
        let red = randColor();
        let green = randColor();
        let blue = randColor();

        // calculates the contrast
        let contrast = (red * 0.299) + (green * 0.587) + (blue * 0.114);

        // sets random background color
        cont.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

        // creates p element and text nodes containing the name of the student.
        let nameItem = document.createElement("p");
        let inside = document.createTextNode(elem);

        // sets text color depending on the background;
        (contrast > 150) ? nameItem.style.color = "black" : nameItem.style.color = "white"; 

        nameItem.appendChild(inside);
        cont.appendChild(nameItem);
        document.querySelector("article").appendChild(cont);
}