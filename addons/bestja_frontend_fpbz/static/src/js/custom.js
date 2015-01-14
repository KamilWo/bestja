jQuery(window).load(function(){

    $('button.choose_place').click(function(){
        $('html, body').animate({
        scrollTop: $("#map_of_poland_section").offset().top
    }, 800);
    });

    var window_height = window.innerHeight;
    $('main_top_photo_text').css({'height':window_height});
        
/* EVENT LISTENERS
*----------------------------------------------------------------------------------------*/

    if(window.attachEvent) {
        window.attachEvent('onresize', function() {
            sizeChange();
        });
    }
    else if(window.addEventListener) {
        window.addEventListener('resize', function() {
            sizeChange();
        }, true);
    }
    else {
        //The browser does not support Javascript event binding
        console.log('NO! support Javascript event binding...');
        document.body.onresize = "sizeChange()";
    }
    
    function sizeChange(){
        window_height = window.innerHeight;
            $('main_top_photo_text').css({'height':window_height});
    }
});