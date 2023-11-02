//this module includes all the logic to add a new task without project 

import myTasks from "."
import task from "./constructor"
import allTasksDisplay from "./all-tasks-display";



function addTask () {
    const container = document.querySelector('.container')

    const newDiv = document.createElement('div')
    newDiv.setAttribute('id', 'create-task')

        const plus = document.createElement('img')
        plus.classList.add('plus')
        plus.setAttribute('src', '../src/images/plus.svg')
        newDiv.appendChild(plus);
        
            container.appendChild(newDiv)

                const createTask = document.createElement('div')
                createTask.classList.add('create-task-text')
                createTask.innerHTML = 'Create Task';
                newDiv.appendChild(createTask)

    removeContent();
}

function removeContent (){
    const container = document.querySelector('#create-task');
        container.addEventListener('click', myCallBack)
}

function myCallBack () {
    const container = document.querySelector('#create-task');

        while(container.firstChild) {
            container.removeChild(container.lastChild)
        }

            container.removeEventListener('click', myCallBack);
                addInputForm();

}

function addInputForm() {
    const container = document.querySelector('#create-task');
    const form = document.createElement('form')

        form.setAttribute('id', 'create-task-form')

            form.addEventListener('submit', (e)=>{
                e.preventDefault();
                submitTask()
            })

                const text = document.createElement('input');
                text.type = 'text';
                text.placeholder = "  Enter your task";
                text.setAttribute('required', '')
                text.setAttribute('id', 'input1')

                    const date = document.createElement('input');
                    date.type = 'date';
                    date.setAttribute('required', '')
                    date.setAttribute('id', 'input2')

                        const priority = document.createElement('select');
                        priority.setAttribute('id', 'input3')
                            var newOption1 = document.createElement("option");
                            newOption1.text = 'High';
                            newOption1.value = 'High';
                                var newOption2 = document.createElement("option");
                                newOption2.text = 'Medium';
                                newOption2.value = 'Medium';
                                    var newOption3 = document.createElement("option");
                                    newOption3.text = 'Low';
                                    newOption3.value = 'Low';

                                        priority.appendChild(newOption1);
                                        priority.appendChild(newOption2);
                                        priority.appendChild(newOption3);

                                                const btn = document.createElement('button')
                                                btn.innerHTML = "Create Task"
                                                btn.type = 'submit';
          

                                                    form.appendChild(text);
                                                    form.appendChild(date);
                                                    form.appendChild(priority);
                                                    form.appendChild(btn);

                                                        container.appendChild(form)

}

function submitTask(){
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const input3 = document.getElementById("input3");

        const newTask = new task(input1.value, input2.value, input3.value, "No Project");
        myTasks.push(newTask)

            allTasksDisplay(myTasks)
                
                addTask()
}

export default addTask