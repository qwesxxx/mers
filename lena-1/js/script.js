// ================  burger menu ============
const burger = document.querySelector('.header .burger-btn');
const menu = document.querySelector('.header .header-menu');

burger.addEventListener('click',()=>{
    burger.classList.toggle('_active');
    menu.classList.toggle('_active');
});

// ============== close menu & burger =============
function fn_close() {
    burger.classList.remove('_active');
    menu.classList.remove('_active');
}

// ================= anchor-links ==================
const anchors = document.querySelectorAll('a[href*="#"]');

for (anchor of anchors) {
  if (anchor) {
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      anchorId = this.getAttribute('href');
      document.querySelector(anchorId).scrollIntoView({
        behavior: 'smooth', block: 'start'
      });
    });
  }
}


// ================= scroll-position ==================
const upArrow = document.querySelector('.up-arrow');

window.addEventListener('scroll', function () {
  const scrollPosition = window.scrollY;
  
  if (scrollPosition > 600)
    upArrow.classList.add('_active');
  else
    upArrow.classList.remove('_active');

});



const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //  Default parameters
  // slidesPerView: 4,
  // spaceBetween: 60,

  breakpoints: {
    270: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // 1200: {
    //   slidesPerView: 4,
    //   spaceBetween: 60
    // }
  }


});



