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
  
  
  var AHICLink = document.getElementById("AHIC");
  AHIC.addEventListener("click", function() {
  window.location = "https://www.ahic-tamu.org/";
  });



  var InstLink = document.getElementById("Insta");
  InstLink.addEventListener("click", function() {
  window.location = "https://www.instagram.com/nadxhielijuarez/";
  });

  var LinkedinLink = document.getElementById("Linkedin");
  LinkedinLink.addEventListener("click", function() {
  window.location = "https://www.linkedin.com/in/nadxhieli-juarez-6b3595191/";
  });

  