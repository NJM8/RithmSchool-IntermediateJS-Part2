$(document).ready(function(){

	$('input').keyup(function(event){ // adds an event listener to the input
		event.preventDefault(); // stops default action
		if (event.keyCode === 13) { // if the key pressed is the enter key
			$('#search').click(); // call the click function of the input field
		}
	})

	$('#search').on('click', function(){
		let query = $('#query').val();
		if (query === '') {
			alert("please enter something in the search field.");
			return;
		}
		$('#query').val('');
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
});




