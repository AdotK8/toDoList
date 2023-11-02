//logic to allow user to create and save new 'projects'

import { myProjects } from ".";

const container = document.querySelector('.bottom-nav');


function createProject () {

    const projectItem = document.createElement('div')
    projectItem.classList.add('nav-item')

        const addTaskButton = document.createElement('div')
        addTaskButton.classList.add('nav-item')
        addTaskButton.setAttribute('id', 'create-project-btn')
        addTaskButton.innerHTML = 'Create Project'

            const plus = document.createElement('img')
            plus.setAttribute('id', 'icon')
            plus.setAttribute('src', '../src/images/plus.svg')

            projectItem.appendChild(plus)    
            projectItem.appendChild(addTaskButton)

                container.appendChild(projectItem)

    container.addEventListener('click', myCallBack)
    

}

function myCallBack() {
    while(container.firstChild) {
        container.removeChild(container.lastChild)
    }
    addFields();
    container.removeEventListener('click', myCallBack);
}

function addFields () {
    
    const form = document.createElement('form')
    form.setAttribute('id', 'create-project-form')

        form.addEventListener('submit', (e)=>{
            e.preventDefault();
            storeInput()
        })

                const text = document.createElement('input')
                text.type = 'text';
                text.placeholder = " Project Name";
                text.setAttribute('required', '')
                text.setAttribute('id', 'create-project-input')

                    const btn = document.createElement('button')
                    btn.innerHTML = "Add Project"
                    btn.type = 'submit'

                        form.appendChild(text)
                        form.appendChild(btn)

                            container.appendChild(form)

}

function storeInput(){
    const input1 = document.getElementById('create-project-input')
    myProjects.push(input1.value)
    console.log(myProjects)

}

export default createProject

