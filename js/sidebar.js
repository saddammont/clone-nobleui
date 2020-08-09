/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.querySelector(".logo-menu a").style.display = "flex";
    document.getElementById("close-btn").style.display = "flex";
    document.querySelector(".logo-menu i").style.display = "none";

    document.getElementById("main").style.width = "1023px";
    document.querySelector("body nav").style.width="calc(100% - 250px)";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "70px";
    document.getElementById("main").style.marginLeft = "70px";
    document.querySelector(".logo-menu a").style.display = "none";
    document.getElementById("close-btn").style.display = "none";
    document.querySelector("body nav").style.width="1193px";
    document.querySelector(".logo-menu i").style.display = "inline-block";
  }