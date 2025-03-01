const inputTask = document.querySelector('input[type="text"]');
const addTaskButton = document.getElementById('button-add'); // Selecciona por ID
const deleteTaskButton = document.getElementById('button-delete'); // Selecciona por ID
const taskContainer = document.querySelector('.task-create-container');


function addTask() {
    const taskText = inputTask.value.trim();

    if (taskText !== "") {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('task-checkbox');

        const taskTextElement = document.createElement('span');
        taskTextElement.textContent = taskText;

        taskElement.appendChild(checkbox);
        taskElement.appendChild(taskTextElement);

        taskContainer.appendChild(taskElement);

        inputTask.value = '';
    } else {
        alert("You didn't created any task");
    }
}

function deleteTasks() {
    const checkedTasks = document.querySelectorAll('.task-checkbox:checked');

    checkedTasks.forEach(task => {
        task.parentElement.remove();
    });
}

addTaskButton.addEventListener('click', addTask);
deleteTaskButton.addEventListener('click', deleteTasks);