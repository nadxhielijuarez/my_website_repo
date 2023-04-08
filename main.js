var selected = false;

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  
  
  window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);
  

  function ClickIcon( IconID, link){
    var Icon = document.getElementById(IconID);

    Icon.addEventListener("click", function() {
      window.location = link;
      });

  }




function toggleTheme(value) {
    var sheets = document.getElementsByTagName('link');
    sheets[1].href = value;
}

function toggleInnerTheme(pageSpecificCss){
  var sheets = document.getElementsByTagName('link');
    sheets[2].href = pageSpecificCss;
}

function changeTheme(firstSheet, secondSheet){
  if(localStorage.getItem("Sheet") == firstSheet){
    localStorage.setItem("Sheet", secondSheet); 
    toggleTheme(secondSheet);
  } else {
    toggleTheme(firstSheet);
    localStorage.setItem("Sheet", firstSheet);
  }
  
}

//redundant code due to time constraints
function changeInnerTheme(firstInnerSheet, secondInnerSheet){
  if(localStorage.getItem("Sheet2") == firstInnerSheet){
    localStorage.setItem("Sheet2", secondInnerSheet); 
    toggleInnerTheme(secondInnerSheet);
    toggleTheme("blue.css");
    localStorage.setItem("Sheet", "blue.css"); //always true


  } else {
    toggleInnerTheme(firstInnerSheet);
    localStorage.setItem("Sheet2", firstInnerSheet);
    toggleTheme("pink.css");
    localStorage.setItem("Sheet", "pink.css"); //always true
  }
  
}
