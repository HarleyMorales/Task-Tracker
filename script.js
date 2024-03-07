let tasks = [];
const tasksForm = document.getElementById("taskForm");
const taskTable = document.getElementById("taskTable");

// Function to handle form submissions
function handleSubmission(event) {
    event.preventDefault();
    // TODO: Get form input values
    const taskName = document.getElementById('taskName').value
    const taskDescription = document.getElementById('taskDescription').value
    const taskDeadline = document.getElementById('taskDeadline').value
    // TODO: Validate input fields
    if(taskName.trim === "" || taskDeadline === ""){
        alert('Task name and deadline are required!');
        return;
    };
    // TODO: Update the tasks array
    tasks.push({name: taskName, description: taskDescription, deadline: taskDeadline});
    render();
}

// Function to render tasks in the table
function render() {
    // TODO: Use array methods to create a new table row of data for each item in the arr
    taskTable.innerHTML = tasks.map(task => `
    <tr>
        <td>${task.name}</td>
        <td>${task.description}</td>
        <td>${task.deadline}</td>
        <td><button onclick="markTaskComplete(this)">Complete</button></td>
        <td><button onclick="removeTask(this)">Remove</button></td>
    </tr>`
    ).join('');
}

// Function to initialize the table
function init() {
    taskTable.innerHTML = '';
    tasks = [];
    render(); 
}

document.getElementById("taskForm").addEventListener('submit', handleSubmission);
