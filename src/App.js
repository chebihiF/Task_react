import React from 'react'
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useEffect, useState } from 'react';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from './components/About';

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

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/Tasks/${id}`)
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
  const updateTask = async (id) => {

    const taskToUpdate = await fetchTask(id);
    const updatedTask = {...taskToUpdate, reminder: !taskToUpdate.reminder}
    
    const res = await fetch(`http://localhost:5000/Tasks/${id}`,{
      method: 'PUT',
      headers: {
        'Content-type':'Application/json'
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json();

    setTasks(
      tasks.map((task) => task.id == id ? {...task, reminder: data.reminder } : task)
    )
  }

  return (
    <Router>
      <div className="container">
        <Header onAdd={()=>{setShowAddTask(!showAddTask)}} showTask={showAddTask}/>
        {showAddTask && <AddTask onAdd={addTask} />}
        <Route path='/' exact render={(props)=>(      
            <Tasks tasks={tasks} onDelete={deleteTask} updateTasks={updateTask} />
        )} />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
