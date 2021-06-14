
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


// carousel code

