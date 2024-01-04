import myTasks from ".";
import { myProjects } from ".";
import displayProjectTasks from "./project-task-display";
import addTask from "./add-task-button";
import removeProject from "./remove-project";
import allTasksDisplay from "./all-tasks-display";
import createProject from "./create-project";
import folderOutlineImg from "./images/folder-outline.svg";
import trashImg from "./images/trash-can-outline.svg";

const container = document.querySelector(".bottom-nav");

function displayProjectList(myProjects) {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }

  for (let i = 0; i < myProjects.length; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("nav-item");

    const icon = document.createElement("img");
    icon.setAttribute("id", "icon");
    icon.setAttribute("src", folderOutlineImg);

    const projectName = document.createElement("div");
    projectName.innerHTML = myProjects[i];
    projectName.classList.add("project-name");

    projectName.addEventListener("click", () => {
      displayProjectTasks(myTasks, myProjects[i]);
      addTask();
    });

    const bin = document.createElement("img");
    bin.setAttribute("src", trashImg);
    bin.setAttribute("id", "binIconTask");
    bin.addEventListener("click", () => {
      removeProject(i);
      displayUpdater();
      myProjects.splice(i, 1);
      displayProjectList(myProjects);
      createProject();
    });

    newDiv.appendChild(icon);
    newDiv.appendChild(projectName);
    newDiv.appendChild(bin);

    container.appendChild(newDiv);
  }
}

function displayUpdater() {
  const title = document.getElementById("display-title");

  if (title.innerHTML === "All Tasks") {
    allTasksDisplay(myTasks);
    addTask();
  } else {
    displayProjectTasks(myTasks, title.innerHTML);
    addTask();
  }
}

export default displayProjectList;
