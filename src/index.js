import task from "./constructor"
import allTasksDisplay from "./all-tasks-display";
import addTask from "./add-task-button";
import './styles/styles.css'

//initializing empty arrays to store tasks and projects
const myTasks = [];

const task1 = new task("bla bla", "2012", "High", "No Project");
const task2 = new task("fix something", "2010", "Low", "No Project");
const task3 = new task("fuck you", "2022", "Medium", "Yase")
const task4 = new task("wash up", "2022", "High", "Work" )

myTasks.push(task1, task2, task3, task4)

allTasksDisplay(myTasks);

addTask();

export default myTasks






















