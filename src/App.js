import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './Components/About'
import AddTask from './Components/AddTask'
import Tasks from './Components/Tasks'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTask] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const dataFormServer = await fetchTasks()
      setTask(dataFormServer)
    }
    getTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('https://akshitd08.github.io/json-file/db.json')
    const data = await res.json()
    return (data)
  }

  const toggle = (id) => {
    setTask
      (tasks.map(
        (task) =>
          task.id === id ? { ...task, reminder: !task.reminder } : task
      )
      )
  }
  const onDelete = async (id) => {
    await fetch(`https://akshitd08.github.io/json-file/db.json/${id}`,
      {
        method: 'DELETE',
      })
    setTask(tasks.filter((task) => (task.id !== id)))
  }
  const addTask = async (task) => {
    const res = await fetch('https://akshitd08.github.io/json-file/db.json',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task),
      })
    const data = await res.json()

    setTask([...tasks, data])
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTask([...tasks, newTask])
  }
  return (
    <Router>
      <div className="headerBody">
        <Header addShow={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
        <Routes>
          <Route path='/' element=
          {
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              <Tasks tasks={tasks}
                onDelete={onDelete}
                toggle={toggle} />
            </>
          } />

          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
