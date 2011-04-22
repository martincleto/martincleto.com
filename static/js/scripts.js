
if (typeof martincleto === "undefined") {
	var martincleto = {};
}


$(document).ready(function(){

	$(".gallery-handler").bind('mouseover focus', function(e){
		martincleto.slideItems($(this),$('.gallery-items ul'));
	});
	$(".gallery-handler").bind('mouseout blur', function(e){
		martincleto.stopItems($(this),$('.gallery-items ul'));
   	});
});

martincleto.slideItems = function(poHandler,poGalleryItems){
	var cMode = (poHandler.hasClass('gallery-handler-next'))? 'forward' : 'backward';

	if(Modernizr.csstransitions){
		poGalleryItems.addClass(cMode);
	}
	else {
		var iPosX = (cMode == 'forward')? -2036 : 0; 
		poGalleryItems.animate({left: iPosX + 'px'}, 8000, 'linear');	
	}
}

martincleto.stopItems = function(poHandler,poGalleryItems){
	var oPosition = poGalleryItems.position();
	var cMode = (poHandler.hasClass('gallery-handler-next'))? 'forward' : 'backward';

	if(Modernizr.csstransitions){
		poGalleryItems.css('left', oPosition.left).removeClass(cMode);
	}
	else {
		poGalleryItems.stop();				
	}
}



