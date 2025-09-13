/*
----------------------------------------project plan----------------------------------------
*Project Name:To-Do List Application
*Project Description: A simple web application to manage a to do list with features to add, edit, 
delete, and mark tasks as completed.
*Project Goal:The goal of this project is to create a web application that allows users to manage
a to-do list. The application should have features to add, edit, delete, and mark tasks as completed.
*Project Inputs: 
           -User inputs for task details (task name, due date)
           -User actions (add, edit, delete, mark as completed)
*Project Outputs:
            -Updated to-do list displayed on the web page.
            -Confirmation messages for actions performed.
            -Task filtering options (all, completed, pending).            
* Project Tasks:
    1. Set up the project structure (HTML, CSS, JS files) 
    2. Implement the user interface (UI) for the to-do list 
    3. Develop the functionality to add tasks 
    4. Implement task editing capabilities 
    5. Add the ability to delete tasks 
    6. Implement task completion functionality 
    7. Add task filtering options
    8. Test the application for bugs and issues
    9. Deploy the application to GitHub Pages                      
*/
const form = document.querySelector("#task_form");
const taskInput = document.querySelector("#task");
const taskDateInput = document.querySelector("#due_date");
const taskSubmitBtn = document.querySelector("#add_task");
const taskList = document.querySelector("#task_list");
const completedTasksBtn = document.querySelector("#completed__tasks");
const pendingTasksBtn = document.querySelector("#pending__tasks");
let tasks = [];
let completedTasks = [];
let pendingTasks = [];


taskSubmitBtn.addEventListener(
    "click",
    function(event){
        event.preventDefault();
        console.log(taskInput.value);
        console.log(taskDateInput.value);
        if (taskInput.value === "" || taskDateInput.value === "") {
            taskInput.style.border = "2px solid red";
            taskDateInput.style.border = "2px solid red";
            taskInput.setAttribute("placeholder", "Please enter a task");
        }
         else {
        tasks.push(new Task(taskInput.value, taskDateInput.value, "Pending"));
        console.log(tasks);
        // create task item
        renderTasks();
        form.reset();
        }
    }
)
/* delete task*/
taskList.addEventListener(
    "click",
    function(event){
        console.log(event.target);
        if(event.target.classList.contains("delete_btn")){
            const taskItem = event.target.parentElement;
            console.log(taskItem);
            taskList.removeChild(taskItem);
        }      
        /* mark task as complete*/
        if(event.target.classList.contains("complete_btn")){
            const taskItem = event.target.parentElement;
            taskItem.classList.toggle("completed");
            completedTasks.push({taskStatus: "Completed"});
            console.log(completedTasks);
        }     
         if (target.classList.contains("edit_btn")) {
        const newName = prompt("Edit task name:", tasks[index].taskName);
        const newDate = prompt("Edit due date (YYYY-MM-DD):", tasks[index].taskDate);
        if (newName && newDate) {
            tasks[index].taskName = newName;
            tasks[index].taskDate = newDate;
            saveTasks();
            renderTasks(tasks);
            showFilterMessage("All Tasks");
        }
    }
});
/*Filter buttons*/
/* const All-tasks = document.querySelector("#all-tasks");
All-tasks.addEventListener(
    "click",
     function(event){
         console.log(event.target);
              }
)

 const completed = document.querySelector("#completed-tasks");
completed.addEventListener(
 "click",    
     function(event){
        console.log(event.target);  
     }    
 )

 const pending = document.querySelector("#pending-tasks");
 pending.addEventListener(
     "click",
     function(event){
         console.log(event.target);
     }
 )*/

// task filtering (all, completed, pending)
console.log(tasks); 
/*create a constructor function for tasks*/
function Task(taskName, taskDate, taskStatus){
    this.taskName = taskName;
    this.taskDate = taskDate;
    this.taskStatus = taskStatus;
}
/* create a function to render tasks*/
function renderTasks(){
    taskList.innerHTML = "";
    for(let task of tasks){
        const taskItem = document.createElement("li");
        taskItem.innerHTML= `
        <span class="task_name">${task.taskName}</span>
        <span class="task_date">${task.taskDate}</span>
        <button class="delete_btn">delete</button>
        <button class="edit_btn">Edit</button>
        <button class="complete_btn">Complete</button>
        `;
        taskList.appendChild(taskItem);
    }
}