// Write the necessary to code wait for the DOM to load in jQuery.

$(document).ready(function(){
	// Select the footer element.
	var $footer = $('footer');
	console.log($footer);

	// Select the div with an id of "container".
	var $container = $('#container');
	console.log($container);


	// Select all of the lis inside of the ul with a class of nav.
	var $lis = $('.nav-item');
	console.log($lis);

	// Select the third li inside of the div with a class of list-container.
	var $thirdli = $lis[2];
	console.log($thirdli);

	// Select only the last li in each of the uls.
	var $lastli = $('ul li:last-child');
	console.log($lastli);
});




