$(document).ready(function(){

        $('.figure_show_offers_text').on('click', function(e){
            $('html,body').stop().animate({ scrollTop: $('#individual_coupe_section').offset().top }, 1000);
            e.preventDefault();
        });	
		
		jQuery('.main_photo_container_row').addClass("hidden_animate").viewportChecker({
		classToAdd: 'visible_animate animated zoomInDown',
		offset: 100
		});
				
		jQuery('.main_photo_container_row, .advantages_container, .individual_coupe_container, .footer').addClass("hidden_animate").viewportChecker({
		classToAdd: 'visible_animate animated fadeIn',
		offset: 100
		});
		
		jQuery('.main_form').addClass("hidden_animate").viewportChecker({
		classToAdd: 'visible_animate animated flipInX',
		offset: 200
		});
		
		jQuery('.figure_show_offers').addClass("hidden_animate").viewportChecker({
		classToAdd: 'visible_animate animated flipInY',
		offset: 130
		});
		
	});