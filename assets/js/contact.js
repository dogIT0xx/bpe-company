$(document).ready(function(){
    $(".map_wrapper .map_title .tab_title").click(function(){
        if(! $(this).parents(".map_title").hasClass("active")){
            $(this).parents(".map_title").addClass("active");
        }else{
            $(this).parents(".map_title").removeClass("active");
        }
    });
    $(window).bind('click',function(e){
        var $clicked = $(e.target);
        if(! $clicked.parents().hasClass("map_title")){
            $(".map_title").removeClass("active");
        }
    });
    $(".map_wrapper .map_title ul li a").click(function (e) {
        $(".map_title").removeClass("active");
    });
    tabs1();
});
function tabs1() {
    $('.map_title li a:first').addClass('active');
    $(".map_title .tab_title").text($('.map_title li a:first').text());
    $('.map_title li a').click(function(){
        var $string = $(this).attr("class");
        if($string != "" && String($string) != "undefined" ){
            if( $string.match(/active/gi) != "" ){
                //console.log($string.match(/active/gi));
                return false;
            }
        }
        $('.map_title li a').removeClass('active');
        $(this).addClass('active');
        $(".map_title .tab_title").text($(this).text());
        return false;
    });
    $(".view_map a").click(function(){
        var $offsetTop  = $("#viewmap").offset().top;
        $("html,body").stop().animate({scrollTop:($offsetTop )},800);
        var $href = $(this).attr("href");
        if($($href).hasClass("active")){
            return false;
        }
        $(".map_title .tab_title").text($($href).text());
        $('.map_title li a').removeClass('active');
        $($href).addClass('active');
        return false;
    });
}