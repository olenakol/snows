// КАРУСЕЛЬ
var owl = $('.owl-carousel');
owl.owlCarousel({
        loop:true,
	// КІЛЬКІСТЬ СЛАЙДІВ НА РОЗШИРЕННЯ ЕКРАНУ
        responsive:{
          0:{
              items:1
          },
          599:{
              items:2
          },
          735:{
              items:3
          },
          802:{
              items:4
          }
        },
        autoplay: false,
        lazyLoad: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: false
    });                       
// КНОПКА КАРУСЕЛІ НАЗАД
$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})
// КНОПКА КАРУСЕЛІ ВПЕРЕД
$('.customPrevBtn').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
});



// МАСКА НА НОМЕР (ТРЕБА ПІДКЛЮЧЕННЯ СКРИПТА)
$("input[name=phone]").mask("+3(888)888-88-88");


// КНОПКА ЗГОРТАННЯ МІНІ МЕНЮ 

$(document).ready(function openSlideMenu(){
    $("#open-slide").click(function(){
        $(".mini-menu").slideToggle("slow");
    });
});

// КНОПКА ЗАКРИТТЯ МІНІ МЕНЮ 

$(document).ready(function openSlideMenu(){
    $("#close-slide").click(function(){
        $(".mini-menu").slideToggle("slow");
    });
});