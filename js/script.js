// FV Swiper
const swiper = new Swiper('.fv_swiper', {
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

// 導入事例 Swiper
const case_swiper = new Swiper('.case_swiper', {
  loop: true,
  slidesPerView: 1,
});


$(window).scroll(function () {
  $('.slidein').each(function () {
    var elemPos = $(this).offset().top,
      scroll = $(window).scrollTop(),
      windowHeight = $(window).height();

    if (scroll > elemPos - windowHeight + 150) {
      $(this).addClass('scrollin');
    }
  });
});