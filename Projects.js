

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
        } else {
        x.className = "topnav";
        }
}   



 

 function hoverEffect(elemId, gifName){
    document.getElementById(elemId).src = gifName;
 }

 function removeEffect(elemId, pngName){
    document.getElementById(elemId).src = pngName;
 }