

let body = document.querySelector('body');
let rootDiv = document.createElement('div');
let sideNav = document.getElementById('sideNav');
let displayPane = document.createElement('div');

let author = document.getElementById('authorInput');
let title = document.getElementById('title');
let pages = document.getElementById('pages');

const storageArray = []



bodyStyle = () => {
    body.append(rootDiv);
    body.append(displayPane)
    body.style.minHeight = "100vh";
    body.style.width = "100%"
    body.style.display = "grid";
    body.style.gridTemplateRows = "repeat(100,auto)";
    body.style.gridTemplateColumns= "repeat(100,auto)"

    
}

rootDivStyle = () => {
//assigning ID and Class
    rootDiv.id = "rootDiv";
    rootDiv.className = "rootDiv"
    //actual styling //
    rootDiv.style.gridRow = "1/101";
    rootDiv.style.gridColumn = "1/101";
    rootDiv.style.position = "relative";
    rootDiv.style.display = "grid";
    rootDiv.style.gridTemplateColumns = "repeat(100,auto)";
    rootDiv.style.gridTemplateRows = "repeat(100,auto)";
    rootDiv.style.background = "rgba( 255, 255, 255, 0.25)";
    rootDiv.style.boxShadow = "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )";
    rootDiv.append(sideNav)
   
}
bodyStyle();
rootDivStyle();

const bookObj = 
{
  
    author: [],
    title: [],
    pages: []

}

function onClick(){
  for(x=0; x < 100; x++){
    
    bookObj.author[x] = author.value,
    bookObj.title[x] = title.value,
    bookObj.pages[x] = Number(pages.value)

    console.log("author: " + bookObj.author[x] +"\n" +
    "Title: " + bookObj.title[x] +"\n"+ "pages: " + bookObj.pages[x])

    if(x == 0){
        const inputs = document.querySelectorAll('input');

        inputs.forEach(inputs => {
            
            inputs.value = " ";
        });
         break;
        
    }
    
   
  }
}

















































