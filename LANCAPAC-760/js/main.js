$(window).ready(function() {
    if ($(window).width() <= 991) {
        $('.sixth-carousel__wrapper').slick({
            autoPlay: true,
            infinite: true
        });
    }
    
    $('.eighth-carousel__wrapper').slick({
        autoPlay: true,
        infinite: true
    });
});