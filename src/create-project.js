//logic to allow user to create and save new 'projects'

import { myProjects } from ".";

const container = document.querySelector('#create-task-btn');

function createProject () {

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
    console.log(myProjects)

}

export default createProject

