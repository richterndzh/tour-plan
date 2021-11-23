var MySwiper = new Swiper('.swiper', {
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
  keyboard: {
    enabled: true, 
    onlyInViewport: true,
    pageUpDown: true,
  }
});