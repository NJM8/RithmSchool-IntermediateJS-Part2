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

		$('#query').val('');
		$('#delete').click();

		// first get lat and long

		$.when($.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + location[0] + location[1] + '&key=AIzaSyAa2Fm1SPYpC2qkif3suYQyLYGtBthsYtQ'))
			.then(function(response){
				let latLng = [];
				latLng.push(response.results[0].geometry.location.lat);
				latLng.push(response.results[0].geometry.location.lng);

				// then get weather conditions from FCC weather api

				$.when($.get("https://fcc-weather-api.glitch.me/api/current?lat=" + latLng[0] + "&lon=" + latLng[1]))
					.then(function(response){
						let weather = response.weather[0].description;
						let tempurature = response.main.temp;
						let wind = response.wind.speed;

						// then find gifs

						$.when($.get("http://api.giphy.com/v1/gifs/search?q=" + weather + "&api_key=fLBc8pLLd3UMGWIvHv1hRu2tlwKbGBvE&limit=5"))
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
			});	

	});

	$('#delete').on('click', function(){
		$('.giphy-embed').remove();
	})
})