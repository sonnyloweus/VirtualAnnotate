let addReadingButton = document.getElementById("addReadingButton");
let bookList = document.getElementById("bookList");
let counter = 0;

addReadingButton.onclick = function(){
    bookList.innerHTML += "<p>bobby" + counter + "</p>";
    counter++;
}