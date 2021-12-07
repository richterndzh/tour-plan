$(document).ready(function () {
  const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

  $(".newsletter").parallax({
    imageScr: "image/newsletter.jpg",
  });

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    console.log("Клик по кнопке меню");
    document
    .querySelector(".navbar-button")
    .classList.toggle("navbar-button--visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closemodalButton = $(".modal__close");
  modalButton.on("click", openModal); 
  closemodalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible"); 
    modalDialog.addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible"); 
    modalDialog.removeClass("modal__dialog--visible");
  }

   $(document).keydown(function (e) {
    // ESCAPE key pressed
    if (e.keyCode == 27) {
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__dialog");
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
    }
  });

      //Обработка форм 
      $('.form').each(function () {
        $(this).validate({
        errorClass: "invalid",
        rules: {
        name: {
          required: true,
          minlength: 2,
        },
        email: {
          required: true,
          email: true,
        },
        phone: {
          minlength: 12,
        },
      },
      
        messages: {
          name: {
            required: "Enter specify your name",
            minlength: "The name must be at least two letters",
          },
        email: {
          required: "Enter email address",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Enter phone number",
        },
      },
    });
  });
  $(document).ready(function(){
    $("#phone").mask("+7(000)000-00-00");
    $("#phone1").mask("+7(000)000-00-00");
  });
  AOS.init();
});