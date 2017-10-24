
// Write a function called printFirstAndLast which accepts an array (of objects) and console.logs a new string with the first character and the last character of each value.

function printFirstAndLast(array){
	let firstAndLast = [];
	array.forEach(function(element, index){
		var ends = '';
		ends += element.substring(0,1);
		ends += element.substring(element.length - 1);
		firstAndLast.push(ends);
		console.log(ends);
	})

	console.log(firstAndLast.join(' '));
}

printFirstAndLast(['awesome','example','of','forEach'])

// Write a function called addKeyAndValue which accepts three parameters, an array (of objects), a key and a value. This function should return the array of objects after each key and value have been added to each object in the array.

function addKeyAndValue(array, key, value){
	array.forEach(function(element){
		element[key] = value;
	})

	return array;
}

console.log(addKeyAndValue([{firstName: 'Bob'}, {firstName: 'Billy'}, {firstName: 'Joe'}], "lastName", 'Keller'));

// Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:

function valTimesIndex(array){
	return array.map(function(element, index){
		return element * index;
	})
}

console.log(valTimesIndex([1,2,3]));
console.log(valTimesIndex([5, 10, 15]));

// Write a function called extractKey which accepts two parameters, an array of objects, and the name of a key and returns an array with just the values for that key

function extractKey(array, key){
	return array.map(function(element){
		return element[key];
	})
}

console.log(extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name"));

// Write a function called filterLetters which accepts an array of letters and returns the number of occurrences of a specific letter. This function should be case insensitive

function filterLetters(array, letter){
	let newArray = array.filter(function(element){
		return element.toLowerCase() === letter.toLowerCase();
	})

	return newArray.length;
}

console.log(filterLetters(["a","a","b","c","A"], "a"));
console.log(filterLetters(["a","a","b","c","A"], "z"));
console.log(filterLetters(["a","a","b","c","A"], "B"));

// Write a function called filterKey which accepts two parameters, an array of objects, and the name of a key and returns an array with only those objects which have truthy values for that key

function filterKey(array, key){
	return array.filter(function(element){
		return element[key];
	})
}


console.log(filterKey([{name: "Elie", isInstructor:true, isHilarious: false},{name: "Tim", isInstructor:true, isHilarious: true},{name: "Matt", isInstructor:true}], "isHilarious")
);


// Using reduce Write a function called extractKey which accepts two parameters, an array of objects, and the name of a key and returns an array with just the values for that key:

function reduceExtractKey(array, key){
	return array.reduce(function(acc, next){
		acc.push(next[key]);
		return acc;
	}, []);
}

console.log(reduceExtractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name"));

// Using reduce Write a function called filterLetters which accepts an array of letters and returns the number of occurrences of a specific letter. This function should be case insensitive

function reduceFilterLetters(array, letter){
	return array.reduce(function(acc, next){
		if (next.toLowerCase() === letter.toLowerCase()) {
			acc += 1;
		}
		return acc;
	}, 0);
}

console.log(reduceFilterLetters(["a","a","b","c","A"], "a")); // 3
console.log(reduceFilterLetters(["a","a","b","c","A"], "z")); // 0
console.log(reduceFilterLetters(["a","a","b","c","A"], "B")); // 1

// Using reduce Write a function called addKeyAndValue which accepts three parameters, an array (of objects), a key and a value. This function should return the array of objects after each key and value has been added. You can do this a few ways, either by reducing starting with an empty array and making copies of the object or by starting with the actual array!

function reduceAddKeyAndValue(array, key, value){
	return array.reduce(function(acc, next, index){
		acc[index][key] = value;
		return acc;
	}, array);
}

console.log(reduceAddKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true));


// final exercises Part 1

var users = [
{
  username: "larry",
  email: "larry@foo.com",
  yearsExperience: 22.1,
  favoriteLanguages: ["Perl", "Java", "C++"],
  favoriteEditor: "Vim",
  hobbies: ["Fishing", "Sailing", "Hiking"],
  hometown: {
    city: "San Francisco",
    state: "CA"
  }
},
{
  username: "jane",
  email: "jane@test.com",
  yearsExperience: 33.9,
  favoriteLanguages: ["Haskell", "Clojure", "PHP"],
  favoriteEditor: "Emacs",
  hobbies: ["Swimming", "Biking", "Hiking"],
  hometown: {
    city: "New York",
    state: "NY"
  }
},
{
  username: "sam",
  email: "sam@test.com",
  yearsExperience: 8.2,
  favoriteLanguages: ["JavaScript","Ruby", "Python", "Go"],
  favoriteEditor: "Atom",
  hobbies: ["Golf", "Cooking", "Archery"],
  hometown: {
    city: "Fargo",
    state: "SD"
  }
},
{
  username: "anne",
  email: "anne@test.com",
  yearsExperience: 4,
  favoriteLanguages: ["C#", "C++", "F#"],
  favoriteEditor: "Visual Studio Code",
  hobbies: ["Tennis", "Biking", "Archery"],
  hometown: {
    city: "Albany",
    state: "NY"
  }
},
{
  username: "david",
  email: "david@test.com",
  yearsExperience: 12.5,
  favoriteLanguages: ["JavaScript", "C#", "Swift"],
  favoriteEditor: "Sublime Text",
  hobbies: ["Volunteering", "Biking", "Coding"],
  hometown: {
    city: "Los Angeles",
    state: "CA"
  }
}
]

// Write a function called printEmails which console.log's each email for the users.

function printEmails(array){
	array.forEach(function(element){
		console.log(element.email);
	})
}

printEmails(users);

// Write a function called printHobbies which console.log's each hobby for each user.

function printHobbies(array){
	array.forEach(function(element){
		element.hobbies.forEach(function(element){
			console.log(element);
		})
	})
}

printHobbies(users);

// Write a function called findHometownByState which returns the first user which has a hometown of the state that is passed in

function findHometownByState(array, state){
	return array.find(function(element){
		if (element.hometown.state === state){
			return element;
		}
	})
}

console.log(findHometownByState(users, 'CA'));

// Write a function called allLanguages which returns an array of all of the unique values

function allLanguages(array){
	return array.reduce(function(acc, next){
		let languages = next.favoriteLanguages;

		languages.forEach(function(language){
			let languageAlreadyFound = acc.some(function(element){
				return language === element;
			})

			if (!languageAlreadyFound) {
				acc.push(language);
			}
		})

		return acc;
	}, [])
}

console.log(allLanguages(users))

// Write a function called hasFavoriteEditor which returns a boolean if any of the users have the editor passed in

function hasFavoriteEditor(array, editor){
	let editors = array.map(function(element){
		return element.favoriteEditor;
	})

	return editors.some(function(item){
		return item === editor;
	})
}

console.log(hasFavoriteEditor(users, 'Sublime Text'));
console.log(hasFavoriteEditor(users, 'Eclipse'));

// Write a function called findByUsername which takes in a string and returns an object in the users array that has that username

function findByUsername(array, name){
	let user = array.filter(function(element){
		if (element.username === name) {
			return element;
		}
	})

	return user[0];
}

console.log(findByUsername(users, 'david'));


// Write a function called vowelCount that accepts a string and returns an object with each key being the vowel and the value being the number of times the vowel occurs in the string (the order of keys in the object does not matter).

function vowelCount(string){
	var stringArray = string.split('');
	var vowels = 'aeiou';

	return stringArray.reduce(function(obj, next){
		if (vowels.includes(next)) {
			obj[next] = (obj[next] || 0) + 1;
		}
		return obj;
	}, {});
}

console.log(vowelCount('incredible'));
console.log(vowelCount('awesome'));

// Write a function called removeVowels that accepts a string and returns an array of each character that is not a vowel (y should not count as a vowel for this function).

function removeVowels(string){
	var stringArray = string.split('');
	var vowels = 'aeiou';

	return stringArray.reduce(function(array, next){
		if (!vowels.includes(next)) {
			array.push(next);
		}
		return array;
	}, []);
}

console.log(removeVowels('amazing'));
console.log(removeVowels('fun'));
console.log(removeVowels('silly'));
























