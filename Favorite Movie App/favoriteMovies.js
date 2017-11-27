$(document).ready(function(){

	function addMovie(movie, rating){
		var newMovie = $('<tr>', {
			id: movie
		});
		var newMovieName = $('<td>', {
			text: movie
		}) 
		var newMovieRating = $('<td>', {
			text: rating
		})
		var newMovieDelete = $('<td>', {
		})
		var deleteButton = $('<button>', {
			text: 'delete',
			class: 'btn btn-secondary btn-sm', 
			click: function(){
				$('#' + movie).remove();
			}
		})
		newMovieDelete.append(deleteButton);

		newMovie.append(newMovieName).append(newMovieRating).append(newMovieDelete);

		$('tbody').append(newMovie);
	}

	$('input').keyup(function(event){ // adds an event listener to the input
		event.preventDefault(); // stops default action
		if (event.keyCode === 13) { // if the key pressed is the enter key
			$('#submit').click(); // call the click function of the input field
		}
	})

	$('#submit').on('click', function(){
		var movieName = $('#movieName').val();
		var movieRating = $('#movieRating').val();

		if (movieName === '') {
			alert('You must enter a movie name.');
			return;
		}

		if (movieRating === '') {
			alert('You must enter a movie rating.');
			return;
		}

		addMovie(movieName, movieRating);

		$('#movieName').val('');
		$('#movieRating').val('');
	})

	$('#alphaAsc').on('click', function(event){
		var movies = $('tbody').children('tr').detach();

		console.log(movies[0].); // figure out how to access proper info for sorting
		
	})
	$('#alphaDesc').on('click', function(event){
		var movies = $('tbody').children('tr').detach();

		console.log('alphaDesc');
		
	})
	$('#numericAsc').on('click', function(event){
		var movies = $('tbody').children('tr').detach();

		console.log('numericAsc');
		
	})
	$('#numericDesc').on('click', function(event){
		var movies = $('tbody').children('tr').detach();

		console.log('numbericDesc');
		
	})
})








