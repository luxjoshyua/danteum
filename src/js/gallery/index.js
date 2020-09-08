import Swiper from "swiper";

new Swiper(".gallery .swiper-container", {
  speed: 300,
  //   spaceBetween: 160,
  slidesPerView: 2,
  draggable: true,
  height: 800,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    // 1000: {
    //   slidesPerView: 2,
    // },
  },
});

new Swiper(".gallery-two .swiper-container", {
  speed: 300,
  spaceBetween: 30,
  slidesPerView: 1,
  initialSlide: 0,
  //   draggable: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
