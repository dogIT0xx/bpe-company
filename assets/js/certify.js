$(document).ready(function() {

    $('.certify').slick({
        autoplay: false,
        autoplaySpeed: 5000,
        arrows: true,
        dots: false,
        speed: 1000,
        slidesToShow : 4,
        responsive: [
          {
            breakpoint:991,
            settings: {
				autoplay: true,
				arrows: true,
                slidesToShow : 2,
            }
          },
            {
            breakpoint:767,
            settings: {
				autoplay: true,
				arrows: true,
                slidesToShow : 2,
            }
          }
        ]
    });
	$(".certify .sub-img a").fancybox({
        type:'ajax',
        baseClass:'popupGallery',
        toolsbar:false,
        smallBtn:true,
    });
});