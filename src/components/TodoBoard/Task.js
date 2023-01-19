import React from 'react'
import Trash  from '../../assets/icons/trash.svg'

const Task = ({index, task, completeTask, removeTask}) => {
  return (
    <div 
      // key={index} 
      className={`flex flex-row items-center max-w-[400px] px-6 py-4 my-3 rounded-lg ${task.completed ? 'bg-green-200' : 'bg-[#E7E7E7]'}`}
    >
      <button 
        className={`flex items-center justify-center text-white shrink-0 w-[20px] h-[20px] mr-3  border-[#6363FC] rounded-[4px] ${task.completed ? 'bg-green-500' : 'border-2'}`}
        onClick={() => completeTask(index)}
        >
        {task.completed ? '✓' : undefined}
      </button>
      <p className={task.completed ? 'line-through' : undefined}>{task.text}</p>
      <button 
        className='ml-auto' 
        onClick={() => removeTask(index)}
      >
        <Trash/>
      </button>
    </div>
  )
}

export default Task