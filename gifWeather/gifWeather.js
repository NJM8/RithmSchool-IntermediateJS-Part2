$(document).ready(function(){
	$('input').keyup(function(event){ // adds an event listener to the input
		event.preventDefault(); // stops default action
		if (event.keyCode === 13) { // if the key pressed is the enter key
			$('#check').click(); // call the click function of the input field
		}
	})

	$('#check').on('click', function(){
		let location = $('#query').val().split(' ');

		if (location === '') {
			alert("please enter something in the search field.");
			return;
		}

		let weather = '';
		let tempurature = 0;
		let wind = 0;

		$('#query').val('');
		$('#delete').click();

		// first get lat and long
		let getLatLng = function(location){
			let latLng = [];
			$.ajax({
				async: false,
				method: 'GET', 
				url: 'https://maps.googleapis.com/maps/api/geocode/json', 
				data: {
					address: location[0] + location[1], 
					key: 'AIzaSyAa2Fm1SPYpC2qkif3suYQyLYGtBthsYtQ'
				},
				success:function(response){
					latLng.push(response.results[0].geometry.location.lat);
					latLng.push(response.results[0].geometry.location.lng);
				}
			})
			return latLng;
		}

		let coordinatePostion = getLatLng(location);

		// then get weather conditions from fcc 

		$.get("https://fcc-weather-api.glitch.me/api/current?lat=" + coordinatePostion[0] + "&lon=" + coordinatePostion[1]).then(function(data){
			console.log(data);
		})

		// then find gifs

		$.get("http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=fLBc8pLLd3UMGWIvHv1hRu2tlwKbGBvE&limit=5")
		.then(function(data){
			var randNum = Math.floor(Math.random() * 5);
			var $newGif = $("<iframe>", {
				src: data.data[randNum].embed_url, 
				width: '300', 
				height: '300', 
				class: 'giphy-embed', 
				frameBorder: '0'
			});
			$('#gifs').append($newGif);
		});
	});

	$('#delete').on('click', function(){
		$('.giphy-embed').remove();
	})



})