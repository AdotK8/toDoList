import { myProjects } from "."
import myTasks from "."


function removeProject(i){
    
    
    for (let j=0; j < myTasks.length; j++ ) {

        if (myTasks[j].project == myProjects[i]){
            myTasks.splice(j, 1)
            removeProject(i)
        } 
    }

}


export default removeProject