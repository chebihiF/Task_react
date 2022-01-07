import React from 'react'
import Task from './Task'

function Tasks({tasks, onDelete}) {

    return (
        <>
          {tasks.map((task)=>(<Task task={task} OnDeleteTasks={onDelete} />))}  
        </>
    )
}

export default Tasks
