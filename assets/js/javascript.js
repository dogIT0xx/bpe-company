var isDevice = false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	isDevice = true;
}
// khong the phong to cua so
function openPopUp(url, windowName, w, h, scrollbar) {
	var winl = (screen.width - w) / 2;
	var wint = (screen.height - h) / 2;
	winprops = 'height='+h+',width='+w+',top='+wint+',left='+winl+',scrollbars='+scrollbar ;
	win = window.open(url, windowName, winprops);
	if (parseInt(navigator.appVersion) >= 4) {
		win.window.focus();
	}
}

// co the phong to cua so
var win=null;
function NewWindow(mypage,myname,w,h,scroll,pos){
	if(pos=="random"){LeftPosition=(screen.width)?Math.floor(Math.random()*(screen.width-w)):100;TopPosition=(screen.height)?Math.floor(Math.random()*((screen.height-h)-75)):100;}
	if(pos=="center"){LeftPosition=(screen.width)?(screen.width-w)/2:100;TopPosition=(screen.height)?(screen.height-h)/2:100;}
	else if((pos!="center" && pos!="random") || pos==null){LeftPosition=0;TopPosition=20}
	settings='width='+w+',height='+h+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=yes';
	win=window.open(mypage,myname,settings);}

// is_num
function is_num(event,f){
	if (event.srcElement) {kc =  event.keyCode;} else {kc =  event.which;}
	if ((kc < 47 || kc > 57) && kc != 8 && kc != 0) return false;
	return true;
}


function format_number (num) {
	num = num.toString().replace(/\$|\./g,'');
	if(isNaN(num))
		num = "0";
	sign = (num == (num = Math.abs(num)));
	num = Math.round(num*100+0.50000000001);
	num = Math.round(num/100).toString();
	for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
		num = num.substring(0,num.length-(4*i+3))+'.'+ num.substring(num.length-(4*i+3));
	return (((sign)?'':'-') + num);
}


function numberOnly (myfield, e){
	var key,keychar;
	if (window.event){key = window.event.keyCode}
	else if (e){key = e.which}
	else{return true}
	keychar = String.fromCharCode(key);
	if ((key==null) || (key==0) || (key==8) || (key==9) || (key==13) || (key==27)){return true}
	else if (("0123456789").indexOf(keychar) > -1){return true}
	return false;
};


/*--------------- Link advertise ----------------*/
window.rwt = function (obj, type, id) {
	try {
		if (obj === window) {
			obj = window.event.srcElement;
			while (obj) {
				if (obj.href) break;
				obj = obj.parentNode
			}
		}
		obj.href = ROOT+'?'+cmd+'=mod:advertise|type:'+type+'|lid:'+id;
		obj.onmousedown = ""
	} catch(o) {}
	return true ;
};

(function (jQuery) {
	jQuery.fn.clickoutside = function (callback) {
		var outside = 1,
			self = $(this);
		self.cb = callback;
		this.click(function () {
			outside = 0
		});
		$(document).click(function (event) {
			if (event.button == 0) {
				outside && self.cb();
				outside = 1
			}
		});
		return $(this)
	}
})(jQuery);

(function($) {
	$.fn.hoverDelay = function(f,g) {
		var cfg = {
			sensitivity: 7,
			delayOver: 150,
			delayOut: 0
		};
		cfg = $.extend(cfg, g ? { over: f, out: g } : f );
		var cX, cY, pX, pY;

		var track = function(ev) {
			cX = ev.pageX;
			cY = ev.pageY;
		};

		var compare = function(ev,ob) {
			ob.hoverDelay_t = clearTimeout(ob.hoverDelay_t);

			if ( ( Math.abs(pX-cX) + Math.abs(pY-cY) ) < cfg.sensitivity ) {
				$(ob).unbind("mousemove",track);

				ob.hoverDelay_s = 1;
				return cfg.over.apply(ob,[ev]);
			} else {

				pX = cX; pY = cY;

				ob.hoverDelay_t = setTimeout( function(){compare(ev, ob);} , cfg.delayOver );
			}
		};

		var delay = function(ev,ob) {
			ob.hoverDelay_t = clearTimeout(ob.hoverDelay_t);
			ob.hoverDelay_s = 0;
			return cfg.out.apply(ob,[ev]);
		};

		var handleHover = function(e) {
			var ev = jQuery.extend({},e);
			var ob = this;

			if (ob.hoverDelay_t) { ob.hoverDelay_t = clearTimeout(ob.hoverDelay_t); }

			// if e.type == "mouseenter"
			if (e.type == "mouseenter") {
				pX = ev.pageX; pY = ev.pageY;
				$(ob).bind("mousemove",track);
				if (ob.hoverDelay_s != 1) { ob.hoverDelay_t = setTimeout( function(){compare(ev,ob);} , cfg.delayOver );}

				// else e.type == "mouseleave"
			} else {
				// unbind expensive mousemove event
				$(ob).unbind("mousemove",track);
				if (ob.hoverDelay_s == 1) { ob.hoverDelay_t = setTimeout( function(){delay(ev,ob);} , cfg.delayOut );}
			}
		};
		return this.bind('mouseenter',handleHover).bind('mouseleave',handleHover);
	};
})(jQuery);


function load_Statistics ()
{
	$.ajax({
		async: true,
		dataType: 'json',
		url: ROOT+"load_ajax.php?do=statistics",
		type: 'POST',
		success: function (data) {
			$("#stats_online").html(data.online);
			$("#stats_totals").html(data.totals);
			$("#stats_member").html(data.mem_online);
		}
	}) ;

}


function LoadAjax(doAct,mydata,ext_display) {
	$.ajax({
		async: true,
		url: ROOT+'load_ajax.php?do='+doAct,
		type: 'POST',
		data: mydata ,
		success: function (data) {
			$("#"+ext_display).html(data)
		}
	}) ;
}

/** 01. Top Nav
 **************************************************************** **/
function _topNav() {

}


/** Core
 **************************************************************** **/
function TRUSTvn() {
	var Xwidth = $(window).width();

	if(Xwidth<1100){$(".floating-left").hide() ; $(".floating-right").hide()}
	_topNav();


	$(".fancybox").fancybox();

	$(".alert-autohide").delay(5000).slideUp(200, function() {
		$(this).alert('close');
	});
 
	load_Statistics();
	vnTRUST.goTopStart();

}

/* Init */
jQuery(window).ready(function () {
	TRUSTvn();
});
$(document).ready(function(){

	$(".wrap-form-search #do_submit").click(function(e){
		if(! $(this).parents(".wrap-form-search").hasClass("active")){
			$(this).parents(".wrap-form-search").addClass("active");
			$(".vnt-menutop").addClass("visible-hidden");
			return false;
		}else{
			if($(this).parents(".wrap-form-search").find("#keyword").val().trim() == ''){
				$(this).find("span").animate({"margin-left": "-4px"}, 70).animate({"margin-left": "0"}, 70).animate({"margin-left": "3px"}, 70).animate({"margin-left": "0"}, 70).animate({"margin-left": "-2px"}, 70).animate({"margin-left": "0"}, 70);
				return false;
			}
		}
	});
	$(".cat_style .cp_title").click(function(){
		if(! $(this).parents(".cat_style").hasClass("active")){
			$(this).parents(".cat_style").addClass("active");
		}else{
			$(this).parents(".cat_style").removeClass("active");
		}
	});
	$(window).bind('click',function(e){
		var $clicked = $(e.target);
		if(! $clicked.parents().hasClass("cat_style")){
			$(".cat_style").removeClass("active");
		}
	});

	$(".wrap-form-search .close-search").click(function(){
		if(!$(this).parents(".wrap-form-search").hasClass("active")){
			$(this).parents(".wrap-form-search").addClass("active");
			$(".vnt-menutop").addClass("visible-hidden");
			$('#btn-search').css('display','block');
			$('.vnt-search .wrap-form-search .input-group .close-search a.icon-close-search .fa').css('color','#000');
			$('.close-search i.fa').removeClass('fa-search');
			$('.close-search i.fa').addClass('fa-close');
			return false;
		}else{
			$(this).parents(".wrap-form-search").removeClass("active");
			$(".vnt-menutop").removeClass("visible-hidden");
			$('#btn-search').css('display','none');
			$('.vnt-search .wrap-form-search .input-group .close-search a.icon-close-search .fa').css('color','#fff');
			$('.close-search i.fa').removeClass('fa-close');
			$('.close-search i.fa').addClass('fa-search');
			return false;
		}

	});
	$('#vnt-banner').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		autoplay: true,
		fade: true,
		autoplaySpeed: 5000,
		speed: 800,
		pauseOnHover: false
	});
	$('.slide-banner-page').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		autoplay: true,
		fade: true,
		autoplaySpeed: 5000,
		speed: 800,
		pauseOnHover: false
	});
	$('#vnt-banner').addClass("active");
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
	$(".support-hotline .div_title").click(function(){
		if(! $(this).parents(".support-hotline").hasClass("show")){
			$(this).parents(".support-hotline").addClass("show");
		}else{
			$(this).parents(".support-hotline").removeClass("show");
		}
	});
	$(window).scroll(function(){
		if($(window).scrollTop() >= 670){
			$(".support-hotline .div_title").addClass("show");
		}else{
			$(".support-hotline .div_title").removeClass("show");
			$(".support-hotline").removeClass("show");
		}
	});
});
$(document).ready(function(){
	$(".mmMenu ul li").each(function(){
		var countsize = $(this).find("ul li").size();
		if(countsize > 0){
			$(this).find("a:first").wrap("<div class='m-sub'></div>");
			$(this).find(".m-sub:first").append("<div class='button-submenu'></div>")
		}
	});
	$(".mmMenu ul li ul").css({'display':'none'});
	$(".mmMenu ul li .button-submenu").click(function(){
		if(! $(this).hasClass("show")){
			$(this).parent().parent().find("ul:first").stop().slideToggle(700);
			$(this).addClass("show");
			$(this).parent().parent().siblings().each(function(){
				if($(this).find(".m-sub:first").find(".button-submenu").hasClass("show")){
					$(this).find("ul:first").stop().slideToggle(700);
					$(this).find(".m-sub:first").find(".button-submenu").removeClass("show");
				}
			});
		}else{
			$(this).parent().parent().find("ul:first").stop().slideToggle(700);
			$(this).removeClass("show");
		}
	});
	$(".menu_mobile .icon_menu").click(function(event) {
		if(! $(".menu_mobile").hasClass("showmenu")){
			$(".menu_mobile").find(".divmm").addClass('show');
			$('.menu_mobile').addClass("showmenu");
			$('html').addClass("openmenu");
			$('body').css({});
		}else{
			$(".menu_mobile").find(".divmm").removeClass('show');
			$('.menu_mobile').removeClass("showmenu");
			$('html').removeClass("openmenu");
		}
	});
	$(".menu_mobile .divmm .divmmbg , .menu_mobile .divmm .mmContent .close-mmenu").click(function(event) {
		$(this).parents(".menu_mobile").find(".divmm").removeClass('show');
		setTimeout(function() {
			$('.menu_mobile').removeClass("showmenu");
			$('html').removeClass("openmenu");
		}, 500);
	});
	$(window).resize(function(){
		if($(window).innerWidth() > 1024){
			$(".menu_mobile").find(".divmm").removeClass('show');
			$('.menu_mobile').removeClass("showmenu");
			$('html').removeClass("openmenu");
		}
	});
});
$(document).ready(function() {
	var isMobile = false; //initiate as false
// device detection
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
		|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
	if(isMobile == false){
		if($(window).innerWidth() > 1024){
			$("body").lazyScrollLoading({
				lazyItemSelector : ".lazyloading , .w_effect_up , .w_effect_up2",
				onLazyItemVisible : function(e, $lazyItems, $visibleLazyItems) {
					$visibleLazyItems.each(function() {
						$(this).addClass("show");
					});
				}
			});
		}else{
			$(".lazyloading , .w_effect_up , .w_effect_up2").addClass("show");
		}
	}else{
		$(".lazyloading , .w_effect_up , .w_effect_up2").addClass("show");
	}
});

$(function(){
	$(".social-ft").find("li").each(function(i,e){
		var color = $(e).data("color");
		var a = $(e).find("a");
		a.css("background-color", color);
		$(e).hover(function(){
			var a = $(this).find("a");
			a.css("color", color);
			a.css("background-color", "#FFF");
			a.css("border-color", color);
		}, function(){
			var a = $(this).find("a");
			a.removeAttr("style");
			a.css("background-color", color);
		});
	});
})



$(function(){
	// MENU TAB
    $(".menuTab .mc-menu").click(function(){
        if(!$(this).parents(".menuTab").hasClass("active")){
            $(this).parents(".menuTab").addClass("active");
        }
        else{
            $(this).parents(".menuTab").removeClass("active");
        }
    });
	// MENU NAV
    $(".menuToggle .mcMenuToggle").click(function(){
        if(!$(this).parents(".menuToggle").hasClass("active")){
            $(this).parents(".menuToggle").addClass("active");

        }
        else{
            $(this).parents(".menuToggle").removeClass("active");
        }
    });
    $(".menuToggle ul li").each(function(){
        if($(this).find("ul li").size() > 0){
            $(this).append("<span class='sub'></span>");
        }
    });
    $('.categoryMenu ul').each(function(){
        if($(this).innerHeight() > 50){
            $(this).parents('.categoryMenu').addClass('retset_float')
        }
    })
    $(".menuToggle .sub").click(function(){
        $(this).parent("li").siblings().removeClass("active");
        $(this).parent("li").siblings().find("ul").hide();
        if(!$(this).parent("li").hasClass("active")){
			$(this).addClass("active");
            $(this).parent("li").addClass("active");
            $(this).parent("li").find("ul").stop().slideDown(700);
        }
        else{
			$(this).removeClass("active");
            $(this).parent("li").removeClass("active");
            $(this).parent('li').find("ul").stop().slideUp(700);
        }
    });
});