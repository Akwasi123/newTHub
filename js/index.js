// animated text code
const changingText = document.querySelector(".changing-text").children;

textLen = changingText.length;

let index = 0;

const textInTimer = 3000, textOutTimer = 2700;

function changeText(){
   
    for(let i = 0; i < textLen; i++){
        changingText[i].classList.remove("text-in", "text-out");
    }
    changingText[index].classList.add("text-in");

    setTimeout(function(){
        changingText[index].classList.add("text-out");
    }, textOutTimer);

    setTimeout(function(){
        if(index == textLen - 1){
        index = 0;
        }
        else{
            index++;
        }

        changeText();

    }, textInTimer);
    
}

window.onload = changeText();


// hamburger menu code

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

const swiper = new Swiper('.swiper-container', {
    // Optional parameterr
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    effect: 'slide',
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,    
            slidesPerGroup: 3,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
    },
  
  });
  
