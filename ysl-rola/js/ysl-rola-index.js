$('.section-10__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                dots: true,
                infinite: true,
                slidesToShow: 1,
                arrows: true,
                prevArrow: '<div class="arrow-left"></div>',
                nextArrow: '<div class="arrow-right"></div>'
            }
        },
    ]
});