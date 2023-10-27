import task from "./constructor"
import './styles/styles.css'

//initializing empty arrays to store tasks and projects
const myTasks = [];

const task1 = new task("bla bla", "2012", "high", "No Project");
const task2 = new task("fix something", "2010", "low", "No Project");
const task3 = new task("fuck you", "2022", "medium", "Yase")


myTasks.push(task1, task2, task3)
console.log(myTasks[2].project)


















