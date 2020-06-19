$(document).ready(function () {
    const mMenuBtn = $('.m-menu-button'),
          mMenu = $('.m-menu'),
          tab = $(".tab");

    mMenuBtn.on('click', () => {
        mMenu.toggleClass('active');

        $('body').toggleClass('no-scroll');
    });

    tab.on('click', function() {
        tab.removeClass('active');
        $(this).addClass('active');
        let activeTabContent = $(this).attr('data-target');
        $('.tabs-content').removeClass('visible');
        $(activeTabContent).toggleClass('visible');
    });

    var mySwiper = new Swiper ('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        breakpoints: {
            991: {
                slidesPerView: 4,
            },
            576: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
                slidesOffsetAfter: 20,
                navigation: {
                    nextEl: '.button-next',
                }
            }
        }
    });
});