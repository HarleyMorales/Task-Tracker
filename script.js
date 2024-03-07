let taskIdCounter = 0;
let tasks = [];
const taskForm = document.getElementById("taskForm");
const taskTable = document.getElementById("taskTable");

function handleSubmission(event) {
    event.preventDefault();
    const taskName = document.getElementById('taskName').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const taskDeadline = document.getElementById('taskDeadline').value;

    if(taskName.trim() === "" || taskDeadline === ""){
        alert('Task name and deadline are required!');
        return;
    }

    // Add a unique ID to each task for easier management
    tasks.push({
        id: taskIdCounter++,
        name: taskName,
        description: taskDescription,
        deadline: taskDeadline,
        completed: false // Track whether the task is completed
    });
    render();
}

function render() {
    taskTable.innerHTML = `<tr><th>Task</th><th>Description</th><th>Deadline</th><th>Actions</th></tr>` + 
        tasks.map(task => `
        <tr data-task-id="${task.id}" class="${task.completed ? 'task-completed' : ''}">
            <td>${task.name}</td>
            <td>${task.description}</td>
            <td>${task.deadline}</td>
            <td>
                <button onclick="markTaskComplete(${task.id})">Complete</button>
                <button onclick="removeTask(${task.id})">Remove</button>
            </td>
        </tr>`
    ).join('');
}

function markTaskComplete(taskId) {
    const task = tasks.find(completion => completion.id === taskId);
    if(task) {
        task.completed = !task.completed; // 
        render();
    }
}

function removeTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    render();
}

taskForm.addEventListener('submit', handleSubmission);
render();
