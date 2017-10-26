
// Write a function called listNames which takes in an array of songs and console.logs the name of each one.

function listNames(array){
	array.forEach(function(song){
		console.log(song.name);
	})
}

listNames(songs);

// Write a function called listSongDetails which takes in an array of songs and console.logs details about each one. The details should be in the following example format: "Smooth, by Santana featuring Rob Thomas (4:00)".

function listSongDetails(array){
	array.forEach(function(song){
		console.log(song.name + ', by ' + song.artist + ' (' + song.duration + ')');
	})
}

listSongDetails(songs);

// Write a function called summerJamCount which takes in an array of songs and returns the number of songs which hit #1 on the charts in June, July, or August.

function summerJamCount(array){
	var summerCount = 0;
	array.forEach(function(song){
		if (song.month === 6 || song.month === 7 || song.month === 8) {
			summerCount += 1;
		}
	})

	console.log(summerCount);
}

summerJamCount(songs);

// Write a function called getDurations which takes in an array of songs and returns an array of each song's duration.

function getDurations(array){
	return array.map(function(song){
		return song.duration;
	})
}

getDurations(songs);

// Write a function called getDurationsInSeconds which takes in an array of songs and returns an array of each song's duration in seconds.

function getDurationsInSeconds(array){
	return array.map(function(song){
		var songDurationArray = song.duration.split(':');
		var durationInSeconds = (parseInt(songDurationArray[0]) * 60) + 
			parseInt(songDurationArray[1]);
		return durationInSeconds; 
	})
}

getDurationsInSeconds(songs);

// Write a function called getMainArtists which takes in an array of songs and returns an array of the primary artists on the recordings. If there's only one artist, that artist should be returned; if there are featured artists, they should be ignored (so only the artist to the left of "featuring" is kept.)

function getMainArtists(array){
	return array.map(function(song){
		var mainArtist = song.artist.split(' featuring')[0];
		return mainArtist;
	})
}

getMainArtists(songs);

// Write a function called getBigHits which takes an array of songs and returns an array of songs which were number one for 10 or more weeks.

function getBigHits(array){
	return array.filter(function(song){
		if (song.weeksAtNumberOne > 9) {
			return song;
		}
	})
}

getBigHits(songs);

// Write a function called getShortSongs which takes an array of songs and returns an array of songs which shorter than 3 minutes.

function getShortSongs(array){
	return array.filter(function(song){
		var songDurationArray = song.duration.split(':');
		var durationInSeconds = (parseInt(songDurationArray[0]) * 60) + 
			parseInt(songDurationArray[1]);

		if (durationInSeconds < 180) {
			return song;
		}
	})
}

getShortSongs(songs);

// Write a function called getSongsByArtist which takes in an array of artists and the name of an artist and returns an array of songs by that artist.

function getSongsByArtist(array, artist){
	return array.filter(function(song){
		if (song.artist === artist) {
			return song;
		}
	})
}

getSongsByArtist(songs);

// Refactor summerJamCount to use reduce!

function reduceSummerJamCount(array){
	return array.reduce(function(count, song){
		if (song.month === 6 || song.month === 7 || song.month === 8) {
			count += 1;
		}
		return count;
	}, 0);
}

reduceSummerJamCount(songs);

// Write a function called getTotalDurationInSeconds which takes in an array of songs and returns the total amount of time (in seconds) it would take to listen to all of the songs. (Hint: can you use anything you've written already to help solve this problem?)

function getTotalDurationInSeconds(array){
	return getDurationsInSeconds(array).reduce(function(totalSeconds, songSeconds){
		totalSeconds += songSeconds;
		return totalSeconds;
	}, 0);
}

getTotalDurationInSeconds(songs);

// Write a function called getSongCountByArtist which takes in an array of songs and returns an object. The keys in the object should be artist names, and the values should be the number of songs by that artist in the original array.

function getSongCountByArtist(array){
	return array.reduce(function(obj, song){
		obj[song.artist] = (obj[song.artist] || 0) + 1;
		return obj
	}, {})
}

getSongCountByArtist(songs);

// Write a function called averageWeeksAtNumberOne which takes in an array of songs and returns the average number of weeks that songs on the list were #1.

function averageWeeksAtNumberOne(array){
	var numberOfSongs = array.length + 1;
	var totalWeeksAtNumberOne = array.reduce(function(count, song){
		return count + song.weeksAtNumberOne;
	}, 0)

	return totalWeeksAtNumberOne / numberOfSongs;
}







