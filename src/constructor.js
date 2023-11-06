//class constructor to create tasks
class task {   
    constructor(description, dueDate, priority, project,done) {
        this.description=description, 
        this.dueDate=dueDate, 
        this.priority=priority,
        this.project=project,
        this.done=done
    }
}
export default task