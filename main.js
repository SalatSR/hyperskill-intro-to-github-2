/*            POP-UP              */

let popup = document.querySelector(".window");
let popup1 = document.querySelector(".window1");

let flash = document.querySelector(".open-window");
let flash1 = document.querySelector(".open-window1");

let close = document.querySelector(".close-window");
let close1 = document.querySelector(".close-window1");

flash.onclick = function(){
    popup.style.display = "block";
}

close.onclick = function(){
    popup.style.display ="none";
}

flash1.onclick = function(){
    popup1.style.display = "block";
}

close1.onclick = function(){
    popup1.style.display ="none";
}

/*              HUMBURGER               */

let popUpMenu = document.querySelector(".hamburger");
let x = document.querySelector("nav li");

popUpMenu.onclick = function(){
    if (x.style.display === "none"){
        x.style.display = "block";
    }   else {
        x.style.display = "none";
    }

}