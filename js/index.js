$(window).load(function () { 
	var headerHeight = $("header").height() +20;
	var windowHeight = $(window).height();
	var windowWidth = $(".enter").width();


    var imageObj = new Image();

	var randomImages = ["east_of_the_sun_west_of_the_moon_large.jpg", "lascaux_large.jpg", "resistance_large.jpg"];
    var num = Math.floor( Math.random() * randomImages.length );
    var img = randomImages[num];
   
//	    $(".hero__image").attr("src", "img/large/" + img);

	imageObj.onload = function () {

		$(".hero__image").attr("src", imageObj.src);

		var heroHeight = (windowHeight - headerHeight);

		var imageHeight = $(".hero__image").height();
		var imageWidth = $(".hero__image").width();

		var rh = heroHeight / imageHeight;
		var rw = windowWidth / imageWidth;

		var scale = Math.min(rh, rw);

		var nw = imageWidth*scale;
		var nh = imageHeight*scale;
		$(".hero__image").css("height", nh + "px");
		$(".hero__image").css("width", nw-20 + "px");
	};
	imageObj.src = "img/large/" + img;

});	




