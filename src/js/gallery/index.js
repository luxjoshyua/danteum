new Swiper(".gallery .swiper-container", {
    speed: 400,
    spaceBetween: 100,
    slidesPerView: 1,
    initialSlide: 2,
    draggable: true,
    breakpoints: {
        600: {
            slidesPerView: 2
        },
        1000: {
            slidesPerView: 3
        }
    },
    scrollbar: {
        el: ".gallery .swiper-scrollbar",
        draggable: true,
        dragSize: 100
    }
    // on: {
    //     init: function () {
    //         setSwiperClasses(this);
    //     },
    //     slideChange: function () {
    //         setSwiperClasses(this);
    //     }
    // }
});