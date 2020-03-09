new Swiper(".gallery .swiper-container", {
    speed: 300,
    spaceBetween: 160,
    slidesPerView: 2,
    initialSlide: 0,
    draggable: true,
    breakpoints: {
        600: {
            slidesPerView: 2
        },
        1000: {
            slidesPerView: 3
        }
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

