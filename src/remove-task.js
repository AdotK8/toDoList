import myTasks from "."

function removeTask(i) {
    myTasks.splice(i, 1)
}

export default removeTask