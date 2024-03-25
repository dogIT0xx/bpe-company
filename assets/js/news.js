$(document).ready(function() {
    $("#contentComment").focus(function(){
        $(this).parents(".w_content").find(".content-info").stop().slideDown(700);
    });
    $("#btn-close").click(function(){
        $(this).parents(".w_content").find(".content-info").stop().slideUp(700);
    });
});
$(document).ready(function() {
    $('#slide-news').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        fade: true,
        autoplaySpeed: 5000,
        speed: 800,
        pauseOnHover: false
    });
    $(window).load(function(){
        var $div_scroll = $("#div_scroll");
        $div_scroll.css({position:"relative"});
        var $scroll_fixed = $(".scroll-fixed");
        var $h_active_scroll = 0;
        $(window).scroll(function(){
            if(! (typeof $div_scroll.offset() == 'object')){
                return false;
            }
            var $heightContent = $scroll_fixed.parents(".wrap-scroll").innerHeight();
            var $offset_ws = $scroll_fixed.parents(".wrap-scroll").offset().top;
            var $offset_st = $div_scroll.offset().top + $h_active_scroll;
            var $width_st = $div_scroll.width();
            var $height_sf = $scroll_fixed.innerHeight();
            var $heightFixed = $heightContent + (2 * $offset_ws) - $offset_st - $height_sf - 20;
            var $window_scroll = $(window).scrollTop();
            var $heigth_window = $(window).innerHeight();
            var $offset_st1 = $offset_st +  $height_sf - $heigth_window;
            var $top_active = $heigth_window - $height_sf;
            var height1 = $heightContent + $offset_ws - $offset_st - $height_sf - 20;
            var height2 = $heightContent - ($window_scroll - $offset_st + $heigth_window);
            if($height_sf <= $heigth_window){
                if($window_scroll > $offset_st && $window_scroll < $heightFixed){
                    $scroll_fixed.css({position:"fixed",width:$width_st,top: $h_active_scroll}); //$window_scroll - $offset_st
                }else{
                    if($window_scroll > $heightFixed){
                        $scroll_fixed.css({position:"relative",top:(height1)});
                    }else{
                        $scroll_fixed.css({position:"relative", top:0});
                    }
                }
            }else{
                if($window_scroll > $offset_st1 && $window_scroll < $heightFixed){
                    $scroll_fixed.css({position:"fixed",width:$width_st,top: $top_active}); //$window_scroll - $offset_st
                }else{
                    if($window_scroll > $heightFixed){
                        if(height2 > 0){
                            $scroll_fixed.css({position:"relative",top:(height1 - height2)});
                        }else{
                            $scroll_fixed.css({position:"relative",top:(height1)});
                        }
                    }else{
                        $scroll_fixed.css({position:"relative", top:0});
                    }
                }
            }
        });
    });
});