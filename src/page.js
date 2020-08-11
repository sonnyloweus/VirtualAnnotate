let button = document.getElementById("hideButton");
let homePage = document.getElementById("homePage");

let toggle = -1;
button.onclick = function(){
    if(toggle == -1){
        homePage.style.display = "none";
    }else{
        homePage.style.display = "block";
    }
    toggle *= -1;
}