$(document).ready(function(){
    $.isMobile = function(type){
        var reg = [];
        var any = {
            blackberry : 'BlackBerry',
            android : 'Android',
            windows : 'IEMobile',
            opera : 'Opera Mini',
            ios : 'iPhone|iPad|iPod'
        };
        type = 'undefined' == $.type(type) ? '*' : type.toLowerCase();
        if ('*' == type) reg = $.map(any, function(v){ return v; });
        else if (type in any) reg.push(any[type]);
        return !!(reg.length && navigator.userAgent.match(new RegExp(reg.join('|'), 'i')));
    };
    if ($.fn.parallax){
        $('.parallax-background').each(function(e){
            if (!$.isMobile()){
                $(this).attr('data-parallax-id', ('' + Math.random()).replace(/\D/g, '')).parallax('50%', 0.2, true);
            }else{
                $(this).addClass("isMobile");
            }
        });
    }
    $(".w_effect_up").each(function(e){
        $(this).find(".effect_up").each(function(e){
            //var $delay = (Math.random());
            var $delay = (0.2 * e);
            $(this).css({"transition-delay": $delay + "s","-webkit-transition-delay": $delay + "s","-moz-transition-delay": $delay + "s"});
        });
    });
    $(".w_effect_up2").each(function(e){
        $(this).find(".effect_up").each(function(e){
            $(this).css({"animation-duration": parseFloat(0.3*(e+3))+ "s"});
        });
    });
    $('#slider_process').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 1000,
        pauseOnHover: false,
        responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: true
              }
          },
          {
              breakpoint: 991,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
        ]
    });
    $('#slide-news-wrap').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 1000,
        pauseOnHover: false,
        responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true
              }
          },
          {
              breakpoint: 991,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
        ]
    });
    $("#slideProductFeature").slick({
      slidesToShow:4,
      autoplay:false,
      apeed:1024,
      responsive: [
          {
              breakpoint: 991,
              settings: {
                  slidesToShow: 3,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 360,
              settings: {
                  slidesToShow: 1
              }
          }
        ]
    });
    (function($) {
        $.fn.getSlide = function(id) {
            if($(this).parent().hasClass("current")){
                return false;
            }
            $(this).parents(".cat_style").removeClass("active").find(".cp_title").text($(this).text());
            $(this).parents("li").siblings("li").removeClass("current");
            $(this).parent().addClass("current");
            var $this = $(this);
            var request = $.ajax({
                url: 'loadProd.html',
                type: 'POST',
                method: 'POST',
                //dataType: "json",
                data: {id:id},
                beforeSend : function(){
                    $("#loadProduct").append("<div class='slide_overlay'></div>");
                }
            });

            $.when( request ).then( function(data){
                setTimeout(function() {
                    $("#loadProduct").html(data);
                }, 2000);
            });
        };
    })(jQuery);
});
$(document).ready(function() {
    $(".w_effect_up").each(function(e){
        $(this).find(".effect_up").each(function(e){
            $(this).css({"animation-duration": parseFloat(0.3*(e+3))+ "s"});
        });
    });
    var isMobile = false; //initiate as false
// device detection
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
    if(isMobile == false){
        $("body").lazyScrollLoading({
            lazyItemSelector : ".lazyloading ,.w_effect_up , .loadLeft , .loadRight , .loadBottom",
            onLazyItemVisible : function(e, $lazyItems, $visibleLazyItems) {
                $visibleLazyItems.each(function() {
                    $(this).addClass("show");
                });
            }
        });
    }else{
        $(".lazyloading , .w_effect_up , .loadLeft , .loadRight , .loadBottom").addClass("show");
    }
});