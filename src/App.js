import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
var a = 10 ;
function App() {

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

  const onClick = (e) => {
    console.log('test');
  }

  return (
    <div className="container">
      <Header test2={onClick}/>
      <Tasks tasks={tasks} onDelete={deleteTask} updateTasks={updateTask} />
    </div>
  );
}

export default App;
