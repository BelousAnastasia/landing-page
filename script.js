$(document).ready(function () {
	$(window).scroll(function(){
		var scroll_img = $('.new_responsive_design').offset().top;
		if ($(this).scrollTop() > scroll_img){
			$('.animate').addClass('animated-left');
		} else {
			$('.animate').removeClass('animated-left');
		}
	});
});