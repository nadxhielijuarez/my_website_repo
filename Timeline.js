
const rows = document.querySelectorAll(".row");
const lefttarget = document.querySelectorAll('.colLeft');
const righttarget = document.querySelectorAll('.colRight');
const dateText = document.querySelectorAll(".Date");
const titleText = document.querySelectorAll(".timeTitle");
const SummaryText = document.querySelectorAll(".Summary");


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}
  

function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}



function MoveIn() {
		
	var index=0, length = lefttarget.length -3;
	for(index; index < length; index++){
		var leftrate = lefttarget[index].dataset.rate; 
		var screenWidth = document.documentElement.clientWidth 
		var leftposx =  window.pageYOffset * (window.scrollY/ document.documentElement.scrollHeight)  - ( window.pageYOffset *offset( lefttarget[index]).top /document.documentElement.scrollHeight );
			//console.log("position is ", leftposx);
				
		var rightrate = -2;
		var rightposx= -leftposx;
		var rightposy = window.pageYOffset * 2;
		var Position = offset(lefttarget[index]);
		if(Position.top > window.scrollY && leftposx<=0){
			righttarget[index].style.transform = 'translate3d(' +rightposx + 'px, ' +0 +'px, 0px)';	
			lefttarget[index].style.transform = 'translate3d(' +leftposx + 'px, ' +  0+ 'px, 0px)';
			//rows[index].style.transform = "translate3d( 0px, 275px,0px)';"
			rows[index].style = "height: 250px";
			
			
		}
		else{
			if(localStorage.getItem("Sheet")=="pink.css"){
				rows[index].style = "background-color: white";
			} else {
				rows[index].style = "background-color: #AAABB8";
			}
			
			righttarget[index].style.transform = 'translate3d(' +0 + 'px, ' + 0 +'px, 0px)';	
			lefttarget[index].style.transform = 'translate3d(' +0 + 'px, ' + 0+'px, 0px)';
			//rows[index].style.transform = "translate3d( 0px, 275px,5px)';"
			//rows[index].style = "height: 550px";
		}
		
	}
}




window.addEventListener('scroll', MoveIn);


  