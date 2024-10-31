// Get the list for to-do items
const TodoList = document.getElementById('todo-list');

function addTodo() {
    // Get the to-do input field
    const TodoInput = document.getElementById("todo-input");
    // Trim whitespace
    const todoText = TodoInput.value.trim();

    // Check if the input is empty
    if (todoText === "") {
        alert("Please enter a To-Do Task!");
        return;
    }

    // Call the function to fetch and display the to-do data
    fetchTodoData(todoText);
    // Clear input
    TodoInput.value = ""; 
}

// Asynchronous function
async function fetchTodoData(todoText) {
    // Create a new list item
    const TodoItem = document.createElement("li");
    // Set the text of the list item to the todoText
    TodoItem.textContent = todoText; 

    // Create a button to delete the Todo
    const deleteButton = document.createElement("button");
    deleteButton.className = "deleteButton";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => {
        TodoList.removeChild(TodoItem);
    };

    // Append the delete button to the list item
    TodoItem.appendChild(deleteButton);
    // Append the new to-do item to the TodoList (unordered list)
    TodoList.appendChild(TodoItem);
}