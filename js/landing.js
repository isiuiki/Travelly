$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 50) {
            $('.navbar').css('background', 'rgba(136, 184, 204, 0.78)');
        } else {
            $('.navbar').css('background', 'transparent');
        }
    });

    console.log(jQuery.fn.jquery);
});