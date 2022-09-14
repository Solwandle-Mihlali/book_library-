let author = prompt("author?");
let title = prompt("title?");
let pages = prompt("number of pages?")
let read = prompt("have you read the book?")

let authorConf = document.getElementById('author"');

let library = [];

function Book(author,title,pages,read){ 
   
    this.author = author,
    this.title = title,
    this.pages = pages;
    this.read = read;

}

function addBookToLibrary(){

    library[0] = author;
     library[1]= title;
    library[2] = pages;

   
}
























