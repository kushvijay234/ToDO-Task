// script.js

        let addTaskButton = document.querySelector('#addTaskButton');

        addTaskButton.addEventListener("click", (e) => {
            let taskInput = document.querySelector('#taskInput');
            let taskInputValue = taskInput.value;

            if (taskInputValue.trim() === "") {
                alert("please enter a task");
                return;
            }
            let taskList = document.querySelector('#taskList');
            // console.log(taskInputValue);

            let li = document.createElement('li');
            li.classList.add('list-group-item');
            li.textContent = taskInputValue;
            taskList.appendChild(li);
            taskInput.value = "";
        });

