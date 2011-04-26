
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
		var iTargetPosX = (cMode == 'forward')? -2036 : 0;
		var iCurrentPosX = poGalleryItems.position().left;
		var iSpeedRatio = (8000/2036).toFixed(3); // 8000 ms estimated to slide 2036 px gallery left position
		var iSpeed = Math.abs(iTargetPosX-iCurrentPosX) * iSpeedRatio;
		poGalleryItems.animate({left: iTargetPosX + 'px'}, iSpeed, 'linear');	
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



