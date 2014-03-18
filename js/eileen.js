$(function () {

	var container = $("#container");


	var templateHtml = $("#portfolioItemTemplate").html();
	var templateFunction = Handlebars.compile(templateHtml);

	$.each(portfolio__item, function (index, item) {

		var outputHtml = templateFunction(item);

		container.append(outputHtml);

	});

	new AnimOnScroll( container[0], {
		minDuration : 0.4,
		maxDuration : 0.7,
		viewportFactor : 0.2
	} );

});