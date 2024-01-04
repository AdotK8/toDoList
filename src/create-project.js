//logic to allow user to create and save new 'projects'

import { myProjects } from ".";
import displayProjectList from "./project-list-display";
import plusImg from "./images/plus.svg";

const container = document.querySelector(".bottom-nav");

function createProject() {
  const projectItem = document.createElement("div");
  projectItem.classList.add("nav-item");
  projectItem.setAttribute("id", "create-project-btn");
  projectItem.addEventListener("click", myCallBack);

  const addTaskButton = document.createElement("div");
  addTaskButton.classList.add("nav-item");
  addTaskButton.innerHTML = "Create Project";

  const plus = document.createElement("img");
  plus.setAttribute("id", "icon");
  plus.setAttribute("src", plusImg);

  projectItem.appendChild(plus);
  projectItem.appendChild(addTaskButton);

  container.appendChild(projectItem);
}

function myCallBack() {
  container.removeChild(container.lastChild);
  addFields();
  container.removeEventListener("click", myCallBack);
}

function addFields() {
  const form = document.createElement("form");
  form.setAttribute("id", "create-project-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    storeInput();
  });

  const text = document.createElement("input");
  text.type = "text";
  text.placeholder = " Project Name";
  text.setAttribute("required", "");
  text.setAttribute("id", "create-project-input");

  const btn = document.createElement("button");
  btn.innerHTML = "Add Project";
  btn.type = "submit";

  form.appendChild(text);
  form.appendChild(btn);

  container.appendChild(form);
}

function storeInput() {
  const input1 = document.getElementById("create-project-input");
  myProjects.push(input1.value);
  displayProjectList(myProjects);
  createProject();
}

export default createProject;
