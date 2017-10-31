// When the DOM is ready, console.log the message "Let's get ready to party with jQuery!"

$(document).ready(function(){
	console.log('Let\'s get ready to party with Jquery!');

	// Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).

	$('article').find('img').addClass('image-center')

	// Remove the last paragraph in the article.

	$('article').find('p').last().remove();

	// Set the font size of h1 with an id of title to be a random pixel size from 0 to 100.

	var rand = Math.floor(100 * Math.random());
	$('#title').css('font-size', rand);

	// Add an item to the list; it can say whatever you want.

	var $newListItem = $('<li>', {
		text: 'it can say whatever you want.'
	});
	$('ol').append($newListItem);

	// Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list's existence.

	$('aside').empty();
	$('aside').append('<p>Sorry about that silly list.</p>');

	// When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.

	$('.form-control').on('click', function(){
		console.log('hi');
		var red = $('input').eq(0).val();
		var blue = $('input').eq(1).val();
		var green = $('input').eq(2).val();
		
		;$('body').css('background-color', 'rgb(' + red + ',' + blue + ',' + green + ')');
	});

	// Add an event listener so that when you click on the image, it is removed from the DOM.
	$('img').on('click', function(){
		$('img').remove();
	});
})







