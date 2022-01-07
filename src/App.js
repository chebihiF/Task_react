import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';
var a = 10 ;
function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Lear React JS',
            day: 'dec 30th at 10:00pm',
            reminder: true
        },
        {
            id: 2,
            text: 'Lear React Native',
            day: 'Jan 30th at 9:00pm',
            reminder: false
        },
        {
            id: 3,
            text: 'Lear Mobile Hybrid tools',
            day: 'Feb 10th at 10:00pm',
            reminder: false
        }
      ]
  )

  //Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random()*100 + 1)
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id))
  }

  //update Task (reminder)
  const updateTask = (id) => {
    setTasks(
      tasks.map((task) => task.id == id ? {...task, reminder: !task.reminder } : task)
    )
  }

  return (
    <div className="container">
      <Header onAdd={()=>{setShowAddTask(!showAddTask)}}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      <Tasks tasks={tasks} onDelete={deleteTask} updateTasks={updateTask} />
    </div>
  );
}

export default App;
