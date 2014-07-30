$(document).ready(function(){
	var $ulWidth = $(".nav_ul").width();
	if($(document).width() < 640){
		$(".global_nav").css("width", $ulWidth);
	}
});