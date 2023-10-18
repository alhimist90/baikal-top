const swiperVertical = new Swiper('.vertical-slider', {
  direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 700,
      effect: "fade",
      loop: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".vertical-swiper-pagination",
        clickable: true,
      },
});
