//function which displays all the tasks in array 

function allTasksDisplay(myTasks) {

   const container = document.querySelector('.container')

   while(container.firstChild){
    container.removeChild(container.lastChild)
   }
   
    for (let i=0; i < myTasks.length; i++ ) {
        const newDiv = document.createElement('div')
        newDiv.classList.add('taskCard')
      
        const checkbox = document.createElement('img')
        checkbox.classList.add('emptyCheck')
        checkbox.setAttribute('src', '../src/images/circle-outline.svg')
        newDiv.appendChild(checkbox);

        const taskDescription = document.createElement('div')
        taskDescription.classList.add('taskDescription')
        taskDescription.innerHTML = myTasks[i].description;
        newDiv.appendChild(taskDescription)

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
        container.appendChild(newDiv)

    }

}

export default allTasksDisplay 