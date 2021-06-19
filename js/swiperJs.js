const swiper1 = new Swiper('.swiper1', {
    // Optional parameterr
    spaceBetween: 30,
    loop: true,
    speed: 1500,
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

  const swiper2 = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    effect: 'fade',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
