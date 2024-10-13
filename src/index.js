import Project from "./project";
import toDoItem from "./todoitem";
//import createDropdown from "./storage.js";
import "./styles.css";
import { constructFrom } from "date-fns";

/*// Create a new project
const project1 = new Project("My Project");

// Add some tasks
const task1 = new toDoItem("Task 1", "Description of task 1", "2024-12-31", "High", false);
const task2 = new toDoItem("Task 2", "Description of task 2", "2024-10-01", "Medium", false);

project1.addToProject(task1);
project1.addToProject(task2);

// Change the completed status of Task 1
const task = project1.getTask("Task 1");

if (task) {
    console.log(`Before change: Completed? ${task.isCompleted()}`); // Outputs: false
    task.setCompleted(true); // Explicitly mark it as completed
    console.log(`After change: Completed? ${task.isCompleted()}`); // Outputs: true

    // You can also toggle the status
    task.toggleCompleted();
    console.log(`After toggle: Completed? ${task.isCompleted()}`); // Outputs: false
} else {
    console.log("Task not found");
}

console.log(`Before priority ${task.getPriority()}`);
task.setPriority("Low");
console.log(`After priority is ${task.getPriority()}`);
*/

//Create the default Project
var defaultProject = new Project("Default Project");
const projectArray = {
    "Default Project":defaultProject,
};
const contentElement=document.getElementById("content");
const contentElement2=document.getElementById("content2");

//Create a new Project
const makeProjectButton=document.getElementById("make-project");
makeProjectButton.addEventListener("click",function(){
    const projectLabel= document.createElement("label");
    projectLabel.textContent="Name of Project:";

    const projectInput = document.createElement("input");
    projectInput.type="text";
    
    contentElement2.appendChild(projectLabel);
    contentElement2.appendChild(projectInput);
    
    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    contentElement2.appendChild(submitButton);

    submitButton.addEventListener("click",function(){
        const enteredName=projectInput.value;
        projectArray[enteredName]=new Project(`${enteredName}`)
        //projectArray.push(new Project(`${enteredName}`));
        createDropdown();

        contentElement2.removeChild(projectLabel);
        contentElement2.removeChild(projectInput);
        contentElement2.removeChild(submitButton);
    });
});

//Create a new To Do Task
const makeTodoButton = document.getElementById("make-list");

makeTodoButton.addEventListener("click",()=>{
    const form = document.getElementById("list-form");
    form.style.display="block";
    const submitToDoButton = document.createElement("button");
    submitToDoButton.textContent="Submit To Do Item";
    submitToDoButton.id="submit-todo-button";
    form.appendChild(submitToDoButton);
    document.getElementById("submit-todo-button").addEventListener("click",()=>{
        const title= document.getElementById("title").value;
        const description= document.getElementById("description").value;
        const dueDate= document.getElementById("due-date").value;
        const priority= document.getElementById("priority").value;
        
        const task = new toDoItem(title,description,dueDate,priority,false);
        if(Object.keys(projectArray).length>0){
            //createDropdown(); this caused the logical error of showing select project
            const dropdown = document.getElementById("projectDropdown");

            const currProject=dropdown.value;
            console.log(currProject);
            //const selectedProject = projectArray.find(project=>project.getName()===currProjectName);
            //console.log(`${projectArray[selectedProject]}`);
            projectArray[currProject].addToProject(task);
            saveTodoFromlocalStorage(projectArray[currProject].getName(),task);
            getTodoFromlocalStorage(projectArray[currProject].getName(),task);
        }
        else
        {
            defaultProject.addToProject(task);
            saveTodoFromlocalStorage(defaultProject.getName(),task);
            getTodoFromlocalStorage(defaultProject.getName(),task);
        }
        //localStorage.setItem("defaultproject", JSON.stringify(defaultProject));
        //console.log(JSON.parse(localStorage.getItem("defaultproject"))); // "[object Object]"; not useful!
        //console.log(defaultProject.getToDoList().length);
        //contentElement.appendChild(submitToDoButton);
        document.getElementById("list-form").style.display="none";
        document.getElementById("list-form").reset();
    });
});


//Display all Todos in a project
const showTodoButton = document.getElementById("showTodos");
let isListVisible = false;

showTodoButton.addEventListener("click", function() {
    const existingList = document.querySelector("ul");
    
    // If the list is already visible, remove it
    if (isListVisible && existingList) {
        contentElement.removeChild(existingList);
        isListVisible = false; // Update the state
    } else {
        const TodoUnorderedList = document.createElement("ul");

        const dropdown = document.getElementById("projectDropdown");
        const currProject = dropdown.value;
        console.log(currProject);

        const TodosInProject = projectArray[currProject].getToDoList();
        TodosInProject.forEach(Todo => {
            const showTitle = document.createElement("li");
            showTitle.textContent = Todo.getTitle();

            const showDuedate = document.createElement("li");
            showDuedate.textContent = Todo.getDueDate();

            TodoUnorderedList.appendChild(showTitle);    
            TodoUnorderedList.appendChild(showDuedate);
        });

        // Append the list to the content
        contentElement.appendChild(TodoUnorderedList);
        isListVisible = true; // Update the state
    }
});


function saveTodoFromlocalStorage(projectname,task){
    localStorage.setItem(`${projectname}${task.getTitle()}`, JSON.stringify(task.getTitle()));
    localStorage.setItem(`${projectname}${task.getDescription()}`, JSON.stringify(task.getDescription()));
    localStorage.setItem(`${projectname}${task.getDueDate()}`, JSON.stringify(task.getDueDate()));
    localStorage.setItem(`${projectname}${task.getPriority()}`, JSON.stringify(task.getPriority()));
    localStorage.setItem(`${projectname}${task.isCompleted()}`, JSON.stringify(task.isCompleted()));
}

function getTodoFromlocalStorage(projectname,task){
    console.log(JSON.parse(localStorage.getItem(`${projectname}${task.getTitle()}`)));
    console.log(JSON.parse(localStorage.getItem(`${projectname}${task.getDescription()}`)));
    console.log(JSON.parse(localStorage.getItem(`${projectname}${task.getDueDate()}`)));
    console.log(JSON.parse(localStorage.getItem(`${projectname}${task.getPriority()}`)));
    console.log(JSON.parse(localStorage.getItem(`${projectname}${task.isCompleted()}`)));
}
function createDropdown() {
    // Remove the dropdown if it already exists to refresh it
    const existingDropdown = document.getElementById("projectDropdown");
    if (existingDropdown) {
        existingDropdown.remove();
    }

    // Create the dropdown element
    const dropdown = document.createElement("select");
    dropdown.id = "projectDropdown";

    // Create default option
    const defaultOption = document.createElement("option");
    defaultOption.textContent = "Select a project";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    dropdown.appendChild(defaultOption);

    // Populate the dropdown with projectArray contents
    Object.keys(projectArray).forEach((projectName) => {
        const option = document.createElement("option");
        option.id='options';
        option.value = projectName; // Option value can be the project name
        option.textContent = projectArray[projectName].getName(); // Display the project name
        dropdown.appendChild(option);
    });


    // Append the dropdown to the document
    contentElement.appendChild(dropdown);
}
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
