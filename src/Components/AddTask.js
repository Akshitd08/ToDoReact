import { useState } from "react"

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [date, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add a task')
      return
    }

    onAdd({ text, date, reminder })

  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='formControl'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='formControl'>
        <label>Day & Time</label>
        <input
          type='text'
          placeholder='Add Day & Time'
          value={date}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className='formControlReminder'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Save Task' className='Form-btn' />
    </form>
  )
}
export default AddTask