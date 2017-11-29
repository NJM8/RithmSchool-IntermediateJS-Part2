$(document).ready(function(){
	var movies = [];

	function save(movieName, movieRating){
		movies.push({movie: movieName, rating: movieRating});

		localStorage.setItem('movies', JSON.stringify(movies));
	}

	function addMovie(movieName, movieRating){
		var newMovie = $('<tr>', {
			id: movieName
		});
		var newMovieName = $('<td>', {
			text: movieName
		}) 
		var newMovieRating = $('<td>', {
			text: movieRating
		})
		var newMovieDelete = $('<td>', {
		})
		var deleteButton = $('<i>', {
			class: 'fa fa-trash-o', 
			click: function(){
				removeMovie($('#' + movieName));
			}
		})

		newMovieDelete.append(deleteButton);
		newMovie.append(newMovieName).append(newMovieRating).append(newMovieDelete);
		$('tbody').append(newMovie);
	}

	var removeMovie = function(movie){
		movie.remove(); // removes the element from the DOM
		movies.forEach(function(element, index){ // walks through the movies array and removes the element
			if (element.movie === movie.children()[0].innerText) {
				movies.splice(index, 1);
			}
		})
		localStorage.setItem('movies', JSON.stringify(movies)); // overwrites local storage to store the removing of the array
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
		save(movieName, movieRating);

		$('#movieName').val('');
		$('#movieRating').val('');
	})

	$('#alphaAsc').on('click', function(event){
		$('tbody').children('tr').detach();

		movies.sort(function(a,b){
			return a.movie > b.movie;
		})

		movies.forEach(function(element){
			addMovie(element.movie, element.rating);
		})

		localStorage.setItem('movies', JSON.stringify(movies));
	})

	$('#alphaDesc').on('click', function(event){
		$('tbody').children('tr').detach();

		movies.sort(function(a,b){
			return a.movie < b.movie;
		})

		movies.forEach(function(element){
			addMovie(element.movie, element.rating);
		})
		
		localStorage.setItem('movies', JSON.stringify(movies));
	})

	$('#numericAsc').on('click', function(event){
		$('tbody').children('tr').detach();

		movies.sort(function(a,b){
			return a.rating > b.rating;
		})

		movies.forEach(function(element){
			addMovie(element.movie, element.rating);
		})
		
		localStorage.setItem('movies', JSON.stringify(movies));
	})

	$('#numericDesc').on('click', function(event){
		$('tbody').children('tr').detach();

		movies.sort(function(a,b){
			return a.rating < b.rating;
		})

		movies.forEach(function(element){
			addMovie(element.movie, element.rating);
		})
		
		localStorage.setItem('movies', JSON.stringify(movies));
	})

	if (localStorage.getItem('movies')) { // upon page reload, checks for existance of movies in local storage
		movies = JSON.parse(localStorage.getItem('movies')); // parses the movies back into the movies array
		movies.forEach(function(element){
			addMovie(element.movie, element.rating); // walks through all the movies in the array and adds them to the DOM
		})
	}
})








