function allTasksDisplay(myTasks) {

   const container = document.querySelector('.container')
   
    for (let i=0; i < myTasks.length; i++ ) {
        const newDiv = document.createElement('div')
        newDiv.classList.add('taskCard')
      
        const checkbox = document.createElement('img')
        checkbox.classList.add('emptyCheck')
        checkbox.setAttribute('src', '../src/images/check-circle-outline.svg')
        newDiv.appendChild(checkbox);

        const taskDescription = document.createElement('div')
        taskDescription.classList.add('taskDescription')
        taskDescription.innerHTML = myTasks[i].description;
        newDiv.appendChild(taskDescription)

        const taskDate = document.createElement('div');
        taskDate.classList.add('taskDate')
        taskDate.innerHTML = myTasks[i].dueDate;
        newDiv.appendChild(taskDate)

        const taskPriority = document.createElement('div');
        taskPriority.classList.add('taskPriority')
        taskPriority.innerHTML = myTasks[i].priority;
        newDiv.appendChild(taskPriority)


        container.appendChild(newDiv)

    }

}

export default allTasksDisplay 