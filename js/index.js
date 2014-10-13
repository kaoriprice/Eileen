$(document).ready(function(){
	var headerHeight = $("header").height() +20;
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();

	var heroHeight = (windowHeight - headerHeight);

	var imageHeight = $(".hero__image").height();
	var imageWidth = $(".hero__image").width();

	var rh = heroHeight / imageHeight;
	var rw = windowWidth / imageWidth;

	var scale = Math.min(rh, rw);

	var nw = imageWidth*scale;
	var nh = imageHeight*scale;




	$(".hero__image").css("height", nh + "px");
	$(".hero__image").css("width", nw + "px");

	

});


