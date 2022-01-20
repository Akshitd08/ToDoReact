import { useState } from 'react'
import AddTask from './AddTask'
import Task from './Task'

const Tasks = () => {

    const [tasks, setTask] = useState([
        {
            id: 1,
            text: 'new 1',
            date: '5 Jan 2022',
            reminder: true,
        },
        {
            id: 2,
            text: 'new 2',
            date: '15 dec 2022',
            reminder: false,
        },
        {
            id: 3,
            text: 'new 3',
            date: '12 Oct 2022',
            reminder: true,
        },
    ])
    const addTask = (task) => {
        console.log(task)
    }
    const toggle = (id) => {
        setTask
            (tasks.map(
                (task) =>
                    task.id === id ? { ...task, reminder: !task.reminder } : task
            )
            )
    }
    const onDelete = (id) => {
        setTask(tasks.filter((task) => (task.id !== id)))
    }
    return (
        tasks.map((task) => {
            return (
                <div>
                    <AddTask onAdd={addTask} />
                    <Task key={task.id} task={task} onDelete={onDelete} ontoggle={toggle} />
                </div>
            )
        })
    )
}

export default Tasks
