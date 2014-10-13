$(document).ready(function(){
	var navWidth = $(".resume__nav").width();
	var containerWidth = $(".resume").width()  -15;
	$(".resume__container").css("width", containerWidth);
	$(".resume__container").css("padding-left", navWidth);

});
