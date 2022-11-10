let rootElement = document.getElementById('root');
let logo = document.getElementById('logo');
let body = document.querySelector('body');
rootElement.style.display ="none"


function showEverything()
{
    document.getElementById('addBtn').style.display = "none";
    body.style.backgroundImage = "none";
    rootElement.style.display = "";
    rootElement.style.animationName = "fade";
    logo.style.display =" ";
    logo.style.animationName = "slide";
}
//function to grab and store data 
function submitDetails()
{
    let bookArray = []; //book array 
    //creating book object 
    let book ={
    author: document.getElementById('author').value,
    title: document.getElementById('title').value,
    pages: document.getElementById('pages').value,
    }

    
    alert("Book Details Succefully Added")
    
    let displayPanel = document.getElementById('displayPanel');

}
let submitButton = document.getElementById('submitBtn');
submitButton.addEventListener("click", submitDetails)























