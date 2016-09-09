// templatemo 467 easy profile

// PRELOADER

$(window).load(function() {
    $('.preloader').delay(500).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function() {
    jQuery(document).ready(function() {
        $('body').backstretch([
            "/images/tm-bg-slide-1.jpg",
            "/images/tm-bg-slide-2.jpg",
            "/images/tm-bg-slide-3.jpg"
        ], { duration: 3200, fade: 1300 });
    });
})

jQuery(document).ready(function($) {
    /*setTimeout(function() {
        $('.progress .progress-bar').progressbar({
            display_text: 'fill'
        });
    }, 1000);*/

    $(document).scroll(function() {
        var st = $("body").scrollTop();
        // console.log(st);
        if (st > 400) {
            $('.progress .progress-bar').progressbar({
                display_text: 'fill',
                duration: 3000
            });
        }
    })

});
