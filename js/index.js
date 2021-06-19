
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
const scrollButton = document.querySelector('.scrollToTop');
window.onscroll = function(){scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        scrollButton.style.display = 'block';
    }
    else{
        scrollButton.style.display = 'none';
    }
}

topFunction = ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

