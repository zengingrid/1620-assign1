const header = document.querySelector (".header");
const footer = document.querySelector (".footer");
const container = document.querySelector (".container");
const nav = document.querySelector(".nav");
const notearea = document.getElementById("notearea");
const newBtn = document.getElementById("new");
const saveBtn = document.getElementById("save");
const darkBtn = document.getElementById("dark");
const cancelBtn = document.getElementById("cancel");


function changeTheme() {
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
}