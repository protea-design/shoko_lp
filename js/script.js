const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 0,
    },
    speed: 3000,
    slidesPerView: 4,
    breakpoints: {
        767: {
          slidesPerView: 7,
        }
      }
  });