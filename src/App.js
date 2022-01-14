import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useEffect, useState } from 'react';
import AddTask from './components/AddTask';
var a = 10 ;
function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(()=>{
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  },[])


  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/Tasks")
    const data = await res.json()
    console.log(data);
    return data ;
  }

  //Add task
  const addTask = async (task) => {

    const res = await fetch("http://localhost:5000/Tasks",{
      method: 'POST',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()
    setTasks([...tasks, data])
  }

  // delete Task
  const deleteTask = async (id) => {
    
    await fetch(`http://localhost:5000/Tasks/${id}`,{
      method: 'DELETE'
    })
    
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
      <Header onAdd={()=>{setShowAddTask(!showAddTask)}} showTask={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      <Tasks tasks={tasks} onDelete={deleteTask} updateTasks={updateTask} />
    </div>
  );
}

export default App;
