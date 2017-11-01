// refector vanilla JS todo app with jQuery

$(document).ready(function(){
	var $todos = [];
	var $addTodoButton = $('#addNewTodo');
	var input = $('#todoText');

	var $addNewTodo = function($newTodoText, $isCompleted){
		let newTodo = document.createElement('li'); // create new li element for todo
		let todoList = document.querySelector('#list'); // grab current todo list

		newTodo.appendChild(document.createTextNode(newTodoText)); // put new todo text in li element
		todoList.appendChild(newTodo); // add new todo to list
		input.value = ''; // reset input field text
		canMarkCompleted(newTodo); // call can mark completed to add event listener etc to todo

		if (isCompleted) { // sets saved todos as completed from local storage upon reload
			newTodo.style.textDecoration = 'line-through';
		}
	}

	var saveTodo = function(newTodoText){ // saves new todo in local storage
		todos.push({todo: newTodoText, isCompleted: false}); // add new todo to todos array
		localStorage.setItem('todos', JSON.stringify(todos)); // save todo array to local storage with JSON
	}

	var canMarkCompleted = function(todo){
		todo.title = 'Click to mark todo completed, double click to delete'; // set mouseover text of todo for instructions
		todo.addEventListener('click', function(){ // adds event listener to todo
			todo.style.textDecoration = 'line-through'; // set text decoration to line through
			for (let i = 0; i < todos.length; i++) { // walk through todos array
				if (todos[i].todo === todo.innerText) { // for each todo in the array, if it matches the passed in todo
					todos[i].isCompleted = true; // set the isCompleted property to true
					localStorage.setItem('todos', JSON.stringify(todos)); // overwrite the todos in storage to save this one being completed
				}
			}
			canUnmarkCompleted(todo); // calls can unmarkcompleted to change function of event listener
		})

		todo.addEventListener('dblclick', function(){ // calls removeTodo upon double click to remove it from the list
			removeTodo(todo);
		})
	}

	var canUnmarkCompleted = function(todo){
		todo.title = 'Click to mark todo uncompleted, double click to delete'; // set mouseover text of todo for instructions
		todo.addEventListener('click', function(){ // add event listener to todo
			todo.style.textDecoration = ''; // set text decoration to none
			for (let i = 0; i < todos.length; i++) { // walk through the todos array
				if (todos[i].todo === todo.innerText) { // if the todo in the array is the one we are looking for 
					todos[i].isCompleted = false; // set the isCompleted property to false
					localStorage.setItem('todos', JSON.stringify(todos)); // overwrite the todos in storage to save this one being not-completed
				}
			}
			canMarkCompleted(todo); // calls canMarkCompleted to change function of event listener
		})

		todo.addEventListener('dblclick', function(){ // calls removeTodo upon double click to remove it from the list
			removeTodo(todo);
		})
	}

	var removeTodo = function(todo){
		todo.remove(); // removes the element from the DOM
		todos.forEach(function(element, index){ // walks through the todos array and removes the element
			if (element.todo === todo.innerHTML) {
				todos.splice(index, 1);
			}
		})
		localStorage.setItem('todos', JSON.stringify(todos)); // overwrites local storage to store the removing of the array
	}

	if (localStorage.getItem('todos')) { // upon page reload, checks for existance of todos in local storgae
		todos = JSON.parse(localStorage.getItem('todos')); // parses the todos back into the todos array
		todos.forEach(function(element){
			addNewTodo(element.todo, element.isCompleted); // walks through all the todos in the array and adds them to the DOM
		})
	}

	input.addEventListener('keyup', function(event){ // adds an event listener to the input
		event.preventDefault(); // stops default action
		if (event.keyCode === 13) { // if the key pressed is the enter key
			document.querySelector('#addNewTodo').click(); // call the click function of the input field
		}
	})

	addTodoButton.onclick = function(){ // set the onclick function of the addTodoButton
		let newTodoText = input.value; // new todoText is the input value

		if (newTodoText === '') { // if nothing was typed in alert the user and exit the function
			alert('Please input a todo.');
			return;
		}

		addNewTodo(newTodoText); // add the todo to the DOM and todos array
		saveTodo(newTodoText); // save the new todo to local storage
	}
});





// window.onload = function(){
// 	let todos = [];
// 	let addTodoButton = document.querySelector('#addNewTodo');
// 	let input = document.querySelector('#todoText');

// 	var addNewTodo = function(newTodoText, isCompleted) {
// 		let newTodo = document.createElement('li');
// 		let todoList = document.querySelector('#list');

// 		newTodo.appendChild(document.createTextNode(newTodoText));
// 		todoList.appendChild(newTodo);
// 		input.value = '';
// 		canMarkCompleted(newTodo);

// 		if (isCompleted) {
// 			newTodo.style.textDecoration = 'line-through';
// 		}
// 	}

// 	var saveTodo = function(newTodoText){
// 		todos.push({todo: newTodoText, isCompleted: false});
// 		localStorage.setItem('todos', JSON.stringify(todos));
// 	}

// 	var canMarkCompleted = function(todo){
// 		todo.title = 'Click to mark todo completed, double click to delete';
// 		todo.addEventListener('click', function(){
// 			todo.style.textDecoration = 'line-through';
// 			for (let i = 0; i < todos.length; i++) {
// 				if (todos[i].todo === todo.innerText) {
// 					todos[i].isCompleted = true;
// 					localStorage.setItem('todos', JSON.stringify(todos));
// 				}
// 			}
// 			canUnmarkCompleted(todo);
// 		})

// 		todo.addEventListener('dblclick', function(){
// 			removeTodo(todo);
// 		})
// 	}

// 	var canUnmarkCompleted = function(todo){
// 		todo.title = 'Click to mark todo uncompleted, double click to delete';
// 		todo.addEventListener('click', function(){
// 			todo.style.textDecoration = '';
// 			for (let i = 0; i < todos.length; i++) {
// 				if (todos[i].todo === todo.innerText) {
// 					todos[i].isCompleted = false;
// 					localStorage.setItem('todos', JSON.stringify(todos));
// 				}
// 			}
// 			canMarkCompleted(todo);
// 		})

// 		todo.addEventListener('dblclick', function(){
// 			removeTodo(todo);
// 		})
// 	}

// 	var removeTodo = function(todo){
// 		todo.remove();
// 		todos.forEach(function(element, index){
// 			if (element.todo === todo.innerHTML) {
// 				todos.splice(index, 1);
// 			}
// 		})
// 		localStorage.setItem('todos', JSON.stringify(todos));
// 	}

// 	if (localStorage.getItem('todos')) {
// 		todos = JSON.parse(localStorage.getItem('todos'));
// 		todos.forEach(function(element){
// 			addNewTodo(element.todo, element.isCompleted);
// 		})
// 	}

// 	input.addEventListener('keyup', function(event){
// 		event.preventDefault();
// 		if (event.keyCode === 13) {
// 			document.querySelector('#addNewTodo').click();
// 		}
// 	})

// 	addTodoButton.onclick = function(){
// 		let newTodoText = input.value;

// 		if (newTodoText === '') {
// 			alert('Please input a todo.');
// 			return;
// 		}

// 		addNewTodo(newTodoText);
// 		saveTodo(newTodoText);
// 	}
// }





