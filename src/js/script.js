$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron_left_solid.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron_right_solid.svg"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                  dots: true,
                  arrows: false
                }
            }
        ]
    });
    $('ul.catalogue__tabs').on('click', 'li:not(.catalogue__tab_active)', function() {
      $(this)
        .addClass('catalogue__tab_active').siblings().removeClass('catalogue__tab_active')
        .closest('div.container').find('div.catalogue__content').removeClass('catalogue__content_active').eq($(this).index()).addClass('catalogue__content_active');
    });

    // $('.catalogue-item__link').each(function(i) {
    //   $(this).on('click', function(e) {
    //     e.preventDefault();
    //     $('.catalogue-item__content').eq(i).toggleClass('catalogue-item__content_active');
    //     $('.catalogue-item__list').eq(i).toggleClass('catalogue-item__list_active');
    //   })
    // });

    // $('.catalogue-item__back').each(function(i) {
    //   $(this).on('click', function(e) {
    //     e.preventDefault();
    //     $('.catalogue-item__content').eq(i).toggleClass('catalogue-item__content_active');
    //     $('.catalogue-item__list').eq(i).toggleClass('catalogue-item__list_active');
    //   })
    // });

    function togglerSlide(item) {
      $(item).each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalogue-item__content').eq(i).toggleClass('catalogue-item__content_active');
          $('.catalogue-item__list').eq(i).toggleClass('catalogue-item__list_active');
        })
      })
    };

    togglerSlide('.catalogue-item__link');
    togglerSlide('.catalogue-item__back');

});         

// const slider = tns({
//     container: '.carousel__inner',
//     items: 1,
//     slideBy: 'page',
//     autoplay: false,
//     controls: false,
//     nav: false
//   });

//   document.querySelector('.prev').addEventListener( 'click', function () {
//     slider.goTo('prev');
//   });

//   document.querySelector('.next').addEventListener( 'click', function () {
//     slider.goTo('next');
//   });



  // $('ul.catalogue__tabs').on('click', 'li:not(.catalogue__tab_active)', function() {
  //   $(this)
  //     .addClass('catalogue__tab_active').siblings().removeClass('catalogue__tab_active')
  //     .closest('div.container').find('div.catalogue__content').removeClass('catalogue__content_active').eq($(this).index()).addClass('catalogue__content_active');
  // });