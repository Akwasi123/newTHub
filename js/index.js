
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

let clicked = false;

burger.addEventListener('click', () =>{
    burger.classList.toggle("toggle");
    
    if(!clicked){
        navLinks.classList.toggle("navSlide");
        navLinks.classList.add("slideIn");
        clicked = true;
    }
    else{
        navLinks.classList.remove("navSlide");
        clicked = false;
    }
    
});


// scroll to top
const header = document.querySelector('header');
const scrollButton = document.querySelector('.scrollToTop');
window.onscroll = function(){
    scrollFunction();
    // headerFunction();
};

function scrollFunction(){
    if(document.body.scrollTop > 600 || document.documentElement.scrollTop > 600){
        scrollButton.style.display = 'block';
        header.classList.add('stickyH');
    }
    else{
        scrollButton.style.display = 'none';
        header.classList.remove('stickyH');
    }
}

topFunction = ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// function headerFunction(){
//     if(document.body.scrollTop > 600 || document.documentElement.scrollTop > 600){
        
//     }
//     else{
//         header.classList.remove('stickyH');
//     }
// }


function openContent(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";

  } 
  document.getElementById("defaultOpen").click();
