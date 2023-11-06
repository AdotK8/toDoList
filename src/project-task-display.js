import myTasks, { myProjects } from ".";
import addTask from "./add-task-button";

const container = document.querySelector('.container')

function displayProjectTasks (myTasks, currentProject) {

    const titleBox = document.querySelector('.right')
    titleBox.removeChild(titleBox.firstChild)
    const title = document.createElement('div')
    title.innerHTML = currentProject
    title.setAttribute('id', 'display-title')
    titleBox.prepend(title)

    while(container.firstChild){
        container.removeChild(container.lastChild)
        }
        
            for (let i=0; i < myTasks.length; i++ ) {
                if (myTasks[i].project === currentProject){

                    printProjectTasks(myTasks[i])
                }  
            }
    addTask()
}

function printProjectTasks(task) {

        const newDiv = document.createElement('div')
        newDiv.classList.add('taskCard')
      
            const checkbox = document.createElement('img')
            checkbox.classList.add('emptyCheck')
            checkbox.setAttribute('src', '../src/images/circle-outline.svg')
            newDiv.appendChild(checkbox);

                const taskDescription = document.createElement('div')
                taskDescription.classList.add('taskDescription')
                taskDescription.innerHTML = task.description;
                newDiv.appendChild(taskDescription)

                const projectBox = document.createElement('div')
                    projectBox.classList.add('dateBox')

                        const projectHeader = document.createElement('div')
                        projectHeader.classList.add('box-header')
                        projectHeader.innerHTML = 'Project:'
                        projectBox.appendChild(projectHeader)
                        
                            const taskProject = document.createElement('div');
                            taskProject.classList.add('taskProject')
                            taskProject.innerHTML = task.project;
                            projectBox.appendChild(taskProject)
                            newDiv.appendChild(projectBox)  

                                const dateBox = document.createElement('div')
                                dateBox.classList.add('dateBox')

                                    const dateHeader = document.createElement('div')
                                    dateHeader.classList.add('box-header')
                                    dateHeader.innerHTML = 'Due:'
                                    dateBox.appendChild(dateHeader)

                                        const taskDate = document.createElement('div');
                                        taskDate.classList.add('taskDate')
                                        taskDate.innerHTML = task.dueDate;
                                        dateBox.appendChild(taskDate)
                                        newDiv.appendChild(dateBox)

                                            const priorityBox = document.createElement('div')
                                            priorityBox.classList.add('priorityBox')

                                                const priorityHeader = document.createElement('div')
                                                priorityHeader.classList.add('box-header')
                                                priorityHeader.innerHTML = 'Priority:'
                                                priorityBox.appendChild(priorityHeader)  
                        
                                                    const taskPriority = document.createElement('div');
                                                    taskPriority.classList.add('taskPriority')
                                                    taskPriority.innerHTML = task.priority;
                                                    priorityBox.appendChild(taskPriority)
                                                    newDiv.appendChild(priorityBox)
                    
                                                        container.appendChild(newDiv)

                                                       

}



export default displayProjectTasks