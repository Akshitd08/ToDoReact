import Task from './Task'

const Tasks = ({tasks, onDelete, toggle}) => { 
    return (
        tasks.map((task, index) => {
            return (
                <div>
                    <Task key={index} task={task} onDelete={onDelete} ontoggle={toggle} />
                </div>
            )
        })
    )
}

export default Tasks