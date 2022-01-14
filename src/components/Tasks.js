import React from 'react'
import Task from './Task'

function Tasks({tasks, onDelete, updateTasks}) {

    return (
        <>
          {tasks.map((task,index)=>(<Task key={index}  task={task} OnDeleteTasks={onDelete} updateTask={updateTasks} />))}  
        </>
    )
}

export default Tasks
