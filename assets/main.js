window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

var mySwiper = new Swiper('.firstswiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 100,
    loop: false,
    autoplay: {
        delay: 3000, // Delay between slides in milliseconds (5 seconds in this case)
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var secondSwiper = new Swiper('.seceondswiper', {
    slidesPerView: 1, // Set a fixed number of slides per view
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true, // Enable scrollbar dragging
      snapOnRelease: true, // Snap the thumb to the nearest slide when releasing the scrollbar
      hide: false, // Show the scrollbar
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });
