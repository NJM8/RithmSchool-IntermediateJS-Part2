// Basic getters to get the innerHTML, text or value of an HTML element

$(document).ready(function(){
	$('article').html(); // innerHTML
	$('article').text(); // innerText
	$('input').val(); // value
});

// You can use the same functions put pass in something to use them as setters

$(document).ready(function(){
	//$('article').html("<h1>Here's some large text.</h1>"); // innerHTML
	//$('li').text('hi!'); // innerText
	$('input').val('New value'); // value = New value
});

$(document).ready(function(){
	$('article').addClass('hidden'); // add a class
	$('article').removeClass('hidden'); // remove a class
	$('article').toggleClass('hidden'); // toggle an existing class
});

// You can use the css, attr, and data functions to access or modify them. Pass a single arguement to get the value, 2 arguements to set the value.

// $(document).ready(function(){
// 	$('article').css('background-color', 'red');
// 	$('article').css('background-color'); // returns red
// 	$('article').attr('style', 'display: flex;');
// 	$('article').data('id', '1');
// });

// The DOM can be traversed using the find, prev, next, parent, and children functions

$(document).ready(function(){
	var $childDivsInsideArticle = $('article').find('div').children();
});

// There are many useful fitering methods in jQuery like eq, use it to retain the jQuery object while accessing elements inside a jQuery object.

$(document).ready(function(){
	var firstLi = $('li').eq(0);
	var secondLi = $('li').eq(1);
	console.log(firstLi.text());
	console.log(secondLi.text());
});

// You can add or remove elements using after, before, append, or prepend.
// $(document).ready(function(){
// 	// You can create a new element and set its attributes
// 	var $newParagraph = $('<p>');
// 	$newParagraph.text('Another article');
// 	$newParagraph.css('color', 'red');

// 	// Or you can create a new element and pass in an object with its attributes
// 	var $anotherParagraph = $('<p>', {
// 		text: 'Another approach',
// 		css: {
// 			color: 'purple',
// 			'font-size': '2em' // use quotes due to the hyphen
// 		}
// 	});

// 	$('article').prepend($newParagraph);
// 	$('article').append($anotherParagraph);
// });

// $(document).ready(function(){
// 	$('article').empty(); // remove all the contents inside an element
// 	$('article').remove(); // remove an element completely from the DOM
// });

// jQuery can use event listeners as well, just be sure to wrap them in a jQuery function otherwise you will get a type error

$(document).ready(function(){
	$('article').on('click', function(e){
		console.log($(e.target).val());
	});
});

// Animations

// fade, hide, slide, and show

// $(document).ready(function(){
// 	$('article').hide();
// 	$('article').fadeIn(2000);
// 	var toggleShow = true;
// 	$('article').on('click', function(){
// 		if (toggleShow) {
// 			$('#edit_user').show();
// 		} else {
// 			$('#edit_user').hide();
// 		}
// 		$('.items').slideToggle(500);
// 		toggleShow = !toggleShow;
// 	});
// });

// this is an example of a custom animation

$(document).ready(function(){
	$('.items').click(function(){
		$('li').animate({
			opacity: 0.5,
			marginLeft: '+=100'
		}, 5000, function(){
			$('p').css('font-size', '+=5');
		});
	});
});







