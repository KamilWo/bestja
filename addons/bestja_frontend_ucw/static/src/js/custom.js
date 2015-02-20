jQuery(window).ready(function () {
    /* Function which changes size of Main top photo snippet when window is resized */
    var windowResize = $(window).on('resize', function () {
        var height = $(this).height() - $("navbar-static-top").height() - 50;
        if (height > 1080) {
            $('.carousel').height(1080);
        } else {
            $('.carousel').height(height);
        }
    });
    /* End of function resize */

    $(".category_link").hover(function () {
        $('img', this).attr("src", function (index, attr) {
            return attr.replace("off", "on");
        });
    }, function () {
        $('img', this).attr("src", function (index, attr) {
            return attr.replace("on", "off");
        });
    });

    setInterval(function () {
        $("#down_arrow_scroll").animate({'margin-bottom': '-10px'}, 1000);
        $("#down_arrow_scroll").animate({'margin-bottom': '10px'}, 1000);
    }, 1400);

    /* Smooth scrolling */

    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            $('html,body').stop();
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 500);
                    return false;
                }
            }
        });
    });
    /* End of smooth scrolling */

    /* Cookie for reminder */
    function setCookie(cookieName, cookieValue, daysToExpire) {
        var d = new Date();
        d.setTime(d.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cookieName + "=" + cookieValue + "; " + expires;
    }

    function getCookie(cookieName) {
        var name = cookieName + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1);
            if (c.indexOf(name) == 0)
                return c.substring(name.length, c.length);
        }
        return "";
    }

    $('#cookie_reminder_close').click(function(){
        setCookie('cookie_info_dismissed','yes',7);
        $('#cookie_reminder_container').hide();
    });

    if(getCookie('cookie_info_dismissed') === 'yes'){
        $('#cookie_reminder_container').hide();
    }
    /* End of cookie for reminder */

    /* Mobile viewport, tel added */
    window.isMobile = /iphone|ipod|ipad|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(navigator.userAgent.toLowerCase());
    if(window.isMobile){
        $('.telephone_number').replaceWith(function() {
            var url = $.trim($(this).text());
            var urlClean = url.replace(/\s+/g,'');
            return '<a href="tel:' + urlClean + '">' + url + '</a>';
        });
    }
    /* End of mobile viewport, tel added */

    /* Same height recrutation steps columns */
    var sameHeightBlocks = $('.category_column');
    var maxHeight = Math.max.apply(
            Math, sameHeightBlocks.map(function () {
                return $(this).height();
            }).get());
    sameHeightBlocks.height(maxHeight);
    /* End of same height recrutation steps columns */
});
