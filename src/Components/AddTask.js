import { useState } from "react"

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState('false')

    
    const onSubmit = (e) => {
        e.preventDefault()
        if(!text) {
            alert('enter something')
        }

        onAdd({ text, day, reminder })
    }
    return (
        <form className="addForm" onSubmit={onSubmit}>
            <div className="formControl">
                <label>Task</label><br></br>
                <input type='text' placeholder="Add Task" value={text}
                    onChange={(e) => setText(e.target.value)}></input>
            </div>
            <div className="formControl">
                <label>Day</label><br></br>
                <input type='text' placeholder="Add Day" value={day}
                    onChange={(e) => setDay(e.target.value)}></input>
            </div>
            <div className="formControl-Reminder">
                <label>Reminder</label>
                <input type='checkbox' value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}></input>
            </div>
            <input type='submit' value='Save Task' className='Form-btn'></input>
        </form>

    )
}

export default AddTask