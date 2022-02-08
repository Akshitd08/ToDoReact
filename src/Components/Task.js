import { FaTimes } from 'react-icons/fa'
const Task = ({ task, onDelete, ontoggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder ' : ' ' }`} 
        onDoubleClick={() => ontoggle(task.id)}>

            <h4>{task.text}
                <FaTimes
                    className='crossBtn' onClick={() => onDelete(task.id)}
                />
            </h4>
            <h5>{task.date}</h5>
        </div>
    )
}
export default Task