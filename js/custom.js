$(function() {
	$(".slider-bg").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
	});

	$(".photogallery .photo-slider").owlCarousel({
		items: 2,
		slideBy: 2,
		loop: true,
		margin: 7,
		nav: true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true,
	        },
	        480:{
	            items:1,
	            nav:false,
	        },
	        768:{
	            items:2,
	            nav:true,
	        },
	        1000:{
	            items:2,
	        }
	    }
	});

	$(".video-slider").owlCarousel({
		loop:true,
		items: 1,
		nav: true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:false,
	        },
	        480:{
	            items:1,
	            nav:false,
	        },
	        768:{
	            items:1,
	            nav:false,
	        },
	        1280:{
	            items:1,
	            nav:true,
	            loop:true,
	        }
	    }
	});
	$(".toggle").click(function() {
		$(this).toggleClass("on");
		$(".menu").slideToggle();
	});

	$('.menu a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	    return false;
	}); 
});