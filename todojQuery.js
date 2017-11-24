// refector vanilla JS todo app with jQuery

$(document).ready(function(){
	var todos = [];

	var $addNewTodo = function($newTodoText, isCompleted){
		var $newTodo = $('<li>', { // create new li element with todo
			text: $newTodoText, 
			title: 'Click to mark todo as completed or uncompleted, double click to delete', 
			class: 'list-group-item'
		})

		$('#list').append($newTodo); // append new todo to list
		$('#todoText').val(''); // reset input field text

		if (isCompleted) { // sets saved todos as completed from local storage upon reload
			$newTodo.css('text-decoration', 'line-through');
		}

		$newTodo.dblclick(function(){ // if todo is double clicked delete it
			$removeTodo($newTodo);
		})
	}

	var $saveTodo = function($newTodoText){ // saves new todo in local storage
		todos.push({todo: $newTodoText, isCompleted: false}); // add new todo to todos array
		localStorage.setItem('todos', JSON.stringify(todos)); // save todo array to local storage with JSON
	}

	$('#list').on('click', 'li', function(event){
		var currentTodo = $(event.target).text(); // grab text of clicked todo

		var indexOfSavedTodo = todos.findIndex(function(element){ // get index of clicked todo in storage
			return element.todo === currentTodo;
		})

		if (todos[indexOfSavedTodo].isCompleted === false) { // if todo is not currently completed
			$(event.target).css('text-decoration', 'line-through'); // mark completed
			todos[indexOfSavedTodo].isCompleted = true; // store completion
		} else {
			$(event.target).css('text-decoration', 'none'); // or mark uncompleted
			todos[indexOfSavedTodo].isCompleted = false; // and store uncompletion
		}
		
		localStorage.setItem('todos', JSON.stringify(todos)); // save current state to storage
	})

	var $removeTodo = function($todo){
		$todo.remove(); // removes the element from the DOM
		todos.forEach(function(element, index){ // walks through the todos array and removes the element
			if (element.todo === $todo.text()) {
				todos.splice(index, 1);
			}
		})
		localStorage.setItem('todos', JSON.stringify(todos)); // overwrites local storage to store the removing of the array
	}

	if (localStorage.getItem('todos')) { // upon page reload, checks for existance of todos in local storgae
		todos = JSON.parse(localStorage.getItem('todos')); // parses the todos back into the todos array
		todos.forEach(function(element){
			$addNewTodo(element.todo, element.isCompleted); // walks through all the todos in the array and adds them to the DOM
		})
	}

	$('input').keyup(function(event){ // adds an event listener to the input
		event.preventDefault(); // stops default action
		if (event.keyCode === 13) { // if the key pressed is the enter key
			$('#addNewTodo').click(); // call the click function of the input field
		}
	})

	$('#addNewTodo').on('click', function(){
		let $newTodoText = $('#todoText').val(); // new todoText is the input value

		if ($newTodoText === '') { // if nothing was typed in alert the user and exit the function
			alert('Please input a todo.');
			return;
		}

		$addNewTodo($newTodoText); // add the todo to the DOM and todos array
		$saveTodo($newTodoText); // save the new todo to local storage		
	})
});



// Previous Vanilla JS version below

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





