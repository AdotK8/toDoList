import task from "./constructor";
import allTasksDisplay from "./all-tasks-display";
import addTask from "./add-task-button";
import createProject from "./create-project";
import displayProjectList from "./project-list-display";
import displayProjectTasks from "./project-task-display";
import "./styles/styles.css";
import logo from "./images/check-all.svg";
import listBoxOutline from "./images/list-box-outline.svg";
import git from "./images/github.svg";

const logoImg = document.getElementById("logo");
const listBoxOutlineImg = document.getElementById("icon");
const gitImg = document.getElementById("git");
logoImg.src = logo;
listBoxOutlineImg.src = listBoxOutline;
gitImg.src = git;

//initializing empty arrays to store tasks and projects
const myTasks = [];
const myProjects = ["Yase", "TOP"];

const task1 = new task(
  "Washing Up",
  "2023-11-08",
  "High",
  "No Project",
  "incomplete"
);
const task2 = new task("New Calls", "2023-11-08", "Medium", "TOP", "complete");
const task3 = new task(
  "Coding Theory",
  "2023-11-08",
  "High",
  "TOP",
  "incomplete"
);
myTasks.push(task1, task2, task3);

allTasksDisplay(myTasks);
displayProjectList(myProjects);
addTask();
createProject();

const allTasksBtn = document.getElementById("all-tasks");
allTasksBtn.addEventListener("click", () => {
  allTasksDisplay(myTasks);
  addTask();
});

export default myTasks;
export { myProjects };
