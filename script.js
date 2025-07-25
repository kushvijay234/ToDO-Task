// script.js

function addTask() {
    let taskInput = document.querySelector('#taskInput');
    let taskInputValue = taskInput.value;

    if (taskInputValue.trim() === "") {
        alert("Please enter a task");
        return;
    }

    let taskList = document.querySelector('#taskList');
    let li = document.createElement('li');
    li.classList.add('list-group-item');
    li.textContent = taskInputValue;
    taskList.appendChild(li);

    // Create a delete button for the task
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteButton.classList.add('btn', 'btn-danger', 'btn-sm', 'float-end');

    // Add an event listener to the delete button
    deleteButton.addEventListener("click", function() {
        taskList.removeChild(li);
    });
    // Append the delete button to the list item
    li.appendChild(deleteButton);

    // Clear the input field after adding the task
    taskInput.value = "";
}

let addTaskButton = document.querySelector('#addTaskButton');
addTaskButton.addEventListener("click", addTask);

