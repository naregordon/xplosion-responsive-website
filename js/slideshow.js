$( document ).ready(function() {

	console.log( "ready!" );

	$(".news-gallery").colorbox({rel:'news-gallery'});
	$(".slider-gallery").colorbox({rel:'slider-gallery'});

	var isCompleted = false;

	$(".news-gallery:first").trigger("click");
	var time = 0;
	$(document).bind('cbox_complete', function(){
		if(time< 3) {
	    	setTimeout(function() {
	    		  time = time + 1;
				  $.colorbox.next();
			}, 500);
		}
		else {
			if(isCompleted === false) {
				$.colorbox.close();
				isCompleted = true;
			}
		}
	});

});
