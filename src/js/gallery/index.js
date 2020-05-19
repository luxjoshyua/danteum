new Swiper(".gallery .swiper-container", {
  speed: 300,
  spaceBetween: 160,
  slidesPerView: 2,
  initialSlide: 0,
  draggable: true,
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

new Swiper(".gallery-two .swiper-container", {
  speed: 300,
  spaceBetween: 80,
  slidesPerView: 1,
  initialSlide: 0,
  draggable: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
