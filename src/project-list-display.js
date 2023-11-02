import { myProjects } from ".";

const container = document.querySelector('.bottom-nav')

function displayProjectList(myProjects) {


    while(container.firstChild) {
        container.removeChild(container.lastChild)
    }
       
        for (let i=0; i < myProjects.length; i++ ) {
            const newDiv = document.createElement('div')
            newDiv.classList.add('nav-item')

                const icon = document.createElement('img')
                icon.setAttribute('id', 'icon')
                icon.setAttribute('src', '../src/images/folder-outline.svg')

                    const projectName = document.createElement('div')
                    projectName.innerHTML = myProjects[i]

                        newDiv.appendChild(icon)
                        newDiv.appendChild(projectName)

                            container.appendChild(newDiv)
        }
}


export default displayProjectList