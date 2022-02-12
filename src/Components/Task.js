import { FaTimes } from 'react-icons/fa'
const Task = ({ task, onDelete, ontoggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder ' : ' ' }`} 
        onDoubleClick={() => ontoggle(task.id)}>

            <h4 className='taskText'>{task.text}
                <FaTimes
                    className='crossBtn' onClick={() => onDelete(task.id)}
                />
            </h4>
            <h5 className='taskText'>{task.date}</h5>
        </div>
    )
}
export default Task