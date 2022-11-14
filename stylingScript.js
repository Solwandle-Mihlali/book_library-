

let body = document.querySelector('body');
let rootDiv = document.createElement('div');
let sideNav = document.getElementById('sideNav');



bodyStyle = () => {
    body.append(rootDiv);
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




























