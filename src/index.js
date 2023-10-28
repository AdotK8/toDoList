import task from "./constructor"
import allTasksDisplay from "./all-tasks-display";
import './styles/styles.css'

//initializing empty arrays to store tasks and projects
const myTasks = [];

const task1 = new task("bla bla", "2012", "high", "No Project");
const task2 = new task("fix something", "2010", "low", "No Project");
const task3 = new task("fuck you", "2022", "medium", "Yase")
const task4 = new task("wash up", "2022", "high", "Work" )

myTasks.push(task1, task2, task3, task4)

allTasksDisplay(myTasks);




















