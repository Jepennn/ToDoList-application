
const todoForm = document.querySelector('form');
const input = document.getElementById('todo-input');
const todoListToday = document.getElementById('todo-list-today');
const addButton = document.querySelector('button[type="submit"]');

const deleteButtons = document.querySelectorAll('.delete-todo');


allTodos = [];


addTodo = () => {
    const todoText = input.value.trim();
    if (todoText.length > 0) {
      allTodos.push(todoText);
      updateTodoList();
    }   
}

//Helper function to add a new todo to the list
updateTodoList = () => {
    //Clear the list and re-render all changes
    todoListToday.innerHTML = '';

    //Loop through all todos and render them every time anything changes
    allTodos.forEach((todo, todoIndex) => {

        //Create a new list item (HTML) for each todo
        const todoLI = createTodoLI(todo, todoIndex);

        //display the new todo in to the UI
        todoListToday.appendChild(todoLI);
    });
    }

createTodoLI = (todo, todoIndex) => {
    const li = document.createElement('li');
    li.setAttribute('data-index', todoIndex);

    li.innerHTML = `<li class="todo">
    <input type="checkbox" id="todo-${todoIndex}">
    <label class="custom-checkbox" for="todo-${todoIndex}">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
        </svg>
    </label>
    <label for="todo-${todoIndex}" class="todo-text">
        ${todo}
    </label>
    <button class="delete-todo">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
    </button>
    </li>`;

    return li;
}

//Function to delete a todo from the list
deleteTodo = (index) => {
    allTodos.splice(index, 1);
    updateTodoList();
}

//Clear input filed after added task
clearInputField = () => {
    input.value = '';
  }


/*Event listener for the form submission and todo items*/

//Event listener for adding a todo
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo();
    clearInputField();
  });

//Event listener with eventdelegation for delete todo item
todoListToday.addEventListener('click', (e) => {
    if (e.target.closest('.delete-todo')) {
        const todoItem = e.target.closest('.todo');
        const todoIndex = todoItem.getAttribute('data-index');
        deleteTodo(todoIndex);
    }
});


  
