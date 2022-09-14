let form = document.getElementById("form");
let addBtn = document.getElementById("addBtn");
let toggle = document.getElementById("toggle")

let author = document.getElementById("author");
let authorName = document.querySelectorAll("#author").value;

let confirmBtn = document.getElementById("confirmBtn");
confirmBtn.addEventListener("click",display);

function display(){

    console.log("heloo" + authorName)
}


form.style.display = "none"
toggle.style.display = "none"
addBtn.addEventListener('click',showForm);


function showForm(){
  form.style.display ="";
  toggle.style.display = "";
}

let bookLibrary = []














