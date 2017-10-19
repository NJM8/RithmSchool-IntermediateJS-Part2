
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









