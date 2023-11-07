//function which displays all the tasks in array 
import addTask from "./add-task-button"
import removeTask from "./remove-task"

function allTasksDisplay(myTasks) {

   const container = document.querySelector('.container')
  

   while(container.firstChild){
    container.removeChild(container.lastChild)
   }

   const titleBox = document.querySelector('.right')
   titleBox.removeChild(titleBox.firstChild)
   const title = document.createElement('div')
   title.innerHTML = 'All Tasks'
   title.setAttribute('id', 'display-title')
   titleBox.prepend(title)
   
    for (let i=0; i < myTasks.length; i++ ) {
        const newDiv = document.createElement('div')
        newDiv.classList.add('taskCard')
      
            const checkbox = document.createElement('img')
            checkbox.setAttribute('src', '../src/images/circle-outline.svg')

                if (myTasks[i].done === "incomplete") {
                    checkbox.setAttribute('src', '../src/images/circle-outline.svg')
                }  else if (myTasks[i].done === "complete") {
                    checkbox.setAttribute('src', '../src/images/check-circle-outline.svg')
                }
                

            checkbox.addEventListener('click', ()=>{
                changeDoneStatus(i, myTasks)
            })
            newDiv.appendChild(checkbox);

                const taskDescription = document.createElement('div')
                taskDescription.classList.add('taskDescription')
                taskDescription.innerHTML = myTasks[i].description;
                newDiv.appendChild(taskDescription)

                    const projectBox = document.createElement('div')
                    projectBox.classList.add('Box')

                        const projectHeader = document.createElement('div')
                        projectHeader.classList.add('box-header')
                        projectHeader.innerHTML = 'Project:'
                        projectBox.appendChild(projectHeader)
                        
                            const taskProject = document.createElement('div');
                            taskProject.classList.add('taskProject')
                            taskProject.innerHTML = myTasks[i].project;
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
                                        taskDate.innerHTML = myTasks[i].dueDate;
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
                                                    taskPriority.innerHTML = myTasks[i].priority;
                                                    priorityBox.appendChild(taskPriority)
                                                    newDiv.appendChild(priorityBox)

                                                        const bin = document.createElement('img')
                                                        bin.classList.add('bin')
                                                        bin.setAttribute('src', '../src/images/trash-can-outline.svg')
                                                        bin.setAttribute('id', 'binIcon')
                                                            bin.addEventListener('click', ()=> {
                                                                removeTask(i)
                                                                allTasksDisplay(myTasks);
                                                                addTask()

                                                            })
                                                                newDiv.appendChild(bin)
                                                                    container.appendChild(newDiv)

    }

}

function changeDoneStatus (i, myTasks) {

    switch (myTasks[i].done){
        case("complete"):
                myTasks[i].done = "incomplete";
                console.log(myTasks[i])
                    break;
        case('incomplete'):
     
                myTasks[i].done = "complete";
                console.log(myTasks[i])
                     break;
    }

    allTasksDisplay(myTasks);
    addTask()
}

export default allTasksDisplay 