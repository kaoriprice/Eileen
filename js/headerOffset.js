$(document).ready(function(){
	var $headerHeight = $("header").height();
	// $(".resume__content__title").css("padding-top", $headerHeight + 0);
	// $(".resume__content__title").css("margin-top", -($headerHeight + 10));
	$("main").css("margin-top", $headerHeight +10);
});