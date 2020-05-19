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
  spaceBetween: 20,
  slidesPerView: 1,
  initialSlide: 0,
  draggable: true,
  breakpoints: {
    600: {
      slidesPerView: 1,
    },
    1000: {
      slidesPerView: 1,
    },
  },
  // on: {
  //     init: function () {
  //         setSwiperClasses(this);
  //     },
  //     slideChange: function () {
  //         setSwiperClasses(this);
  //     }
  // }
});
