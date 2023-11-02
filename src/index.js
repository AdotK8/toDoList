import task from "./constructor"
import allTasksDisplay from "./all-tasks-display";
import addTask from "./add-task-button";
import createProject from "./create-project";
import displayProjectList from "./project-list-display";
import displayProjectTasks from "./project-task-display";
import './styles/styles.css'

//initializing empty arrays to store tasks and projects
const myTasks = [];
const myProjects = ["Yase", "TOP"];

const task1 = new task("Washing Up", "2012", "High", "No Project");
const task2 = new task("New Calls", "2022", "Medium", "Yase")
const task3 = new task("Coding Theory", "2022", "High", "TOP" )
    myTasks.push(task1, task2, task3)

allTasksDisplay(myTasks);
displayProjectList(myProjects);
addTask();
createProject();

const allTasksBtn = document.getElementById('all-tasks')
allTasksBtn.addEventListener('click', ()=> {
    allTasksDisplay(myTasks);
    addTask();
})


export default myTasks
export {myProjects}






















