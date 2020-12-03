const header = document.querySelector (".header");
const footer = document.querySelector (".footer");
const container = document.querySelector (".container");
const nav = document.querySelector(".nav");
const notearea = document.getElementById("notearea");
const newBtn = document.getElementById("new");
const saveBtn = document.getElementById("save");
const darkBtn = document.getElementById("dark");
const cancelBtn = document.getElementById("cancel");

let state = 0;
function changeTheme() {
    if (state == 0) {
        document.body.style.backgroundColor = "#254B62";
        header.style.backgroundColor = "#1D3E53";
        footer.style.backgroundColor = "#1D3E53";
        nav.style.backgroundColor = "#1D3E53";
        newBtn.style.backgroundColor = "#9E9E9E";
        saveBtn.style.backgroundColor = "#9E9E9E";
        darkBtn.style.backgroundColor = "#476D7C";
        cancelBtn.style.backgroundColor = "#476D7C";
        notearea.style.backgroundColor = "#77ABB7";
        document.body.style.color = "white";
        document.querySelector("#dark").innerHTML = "Light Theme";
        state = 1;
    } else {
        document.body.style.backgroundColor = "#C4D0A7";
        header.style.backgroundColor = "#8EAD71";
        footer.style.backgroundColor = "#8EAD71";
        nav.style.backgroundColor = "#97B195";
        newBtn.style.backgroundColor = "#6D9500";
        saveBtn.style.backgroundColor = "#6D9500";
        darkBtn.style.backgroundColor = "#556B2F";
        cancelBtn.style.backgroundColor = "#556B2F";
        notearea.style.backgroundColor = "#E3DEB2";
        document.body.style.color = "black";
        document.querySelector("#dark").innerHTML = "Dark Theme";
        state = 0
    }
}


function hideArea() {
        notearea.style.display = "none";
        cancelBtn.style.display = "none";
        saveBtn.style.display = "none";
}