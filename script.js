// CLOCK

function updateClock(){

    let now = new Date();

    let time =
    now.getHours() + ":" +
    now.getMinutes() + ":" +
    now.getSeconds();


    document.getElementById("clock").innerHTML = time;

}


setInterval(updateClock,1000);

updateClock();





// CALCULATOR


let display =
document.getElementById("display");



function addValue(value){

    display.value += value;

}



function clearDisplay(){

    display.value="";

}



function deleteValue(){

    display.value =
    display.value.slice(0,-1);

}



function calculate(){

    try{

        display.value =
        eval(display.value);

    }

    catch{

        display.value="Error";

    }

}





// NOTES

// NOTES

let notes = document.getElementById("notes");


// Load saved notes

notes.value =
localStorage.getItem("savedNotes") || "";



// Show Notes

function showNotes(){

    document
    .getElementById("noteBox")
    .classList.remove("hidden");


    document
    .getElementById("addBtn")
    .style.display="none";

}



// Hide Notes

function hideNotes(){

    document
    .getElementById("noteBox")
    .classList.add("hidden");


    document
    .getElementById("addBtn")
    .style.display="block";

}



// Save Notes

function saveNotes(){

    localStorage.setItem(
        "savedNotes",
        notes.value
    );


    alert("Notes Saved");

}