$(function () {

   $('.slider__inner').slick({
      responsive: [
         {
            breakpoint: 1220,
            settings: {
               arrows: false,
            }
         },
      ]
   });

   $('.header__burger').click(function (event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');

   });

   $('.header__link-item').click(function (event) {
      $('.header__link-item,.header__link-item').toggleClass('active');

   });

});