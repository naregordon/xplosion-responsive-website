$( document ).ready(function() {
	console.log( "ready!" );

// Colourbox galleries

	$(".news-gallery").colorbox({rel:'news-gallery'});
	$(".slider-gallery").colorbox({rel:'slider-gallery'});


// Slideshow that opens automatically on page load
	var isCompleted = false;
	$(".news-gallery:first").trigger("click", function(event){
		event.preventDefault();
	});
	var time = 0;
	$(document).bind('cbox_complete', function(){
		if(time< 3) {
	    	setTimeout(function() {
	    		  time = time + 1;
				  $.colorbox.next();
			}, 2000);
		}
		else {
			if(isCompleted === false) {
				$.colorbox.close();
				isCompleted = true;
			}
		}
	});

});
