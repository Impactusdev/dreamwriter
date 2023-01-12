import React, { useState } from 'react'
import Trash from '../../assets/icons/trash.svg'
import Arrow from '../../assets/icons/arrow.svg'

const Index = () => {

  const [done, setDone] = useState(false)

  // const [task, setTask] = useState('')
  const initialValue = {text:'', isDone: false}
  const [task, setTask] = useState(initialValue)
  const [tasks, setTasks] = useState([])

  const handleAddTask = (e) => {
    setTasks([...tasks, task])
    setTask(initialValue)
    e.preventDefault()
  }

  const removeTask = (index) => {
    let tasksCopy = [...tasks]
    tasksCopy.splice(index, 1)
    setTasks(tasksCopy)
  }

  const doneTask = (i) => {
    const tasksCopy = tasks;
    tasksCopy[i] = {
      ...tasksCopy[i],
      isDone: true,
    };
    setTasks(tasksCopy);
  }

  return (
    <div className='flex flex-col bg-white shadow-xl px-10 py-20 max-2xl:py-12 w-full relative'>

      <h1 className='text-[#242423] text-5xl'>
        <strong>💡Anote suas metas</strong>
      </h1>
      <div className='h-[80%] max-2xl:h-[75%] flex-wrap flex flex-col mt-20 max-2xl:mt-6 '>
        {
          tasks.map((item, index) => 
            (
              <div 
                key={index} 
                className={`flex flex-row items-center max-w-[400px] px-6 py-4 my-3 rounded-lg ${task.isDone ? 'bg-green-200' : 'bg-[#E7E7E7]'}`}
              >
                <button 
                  className={`flex items-center justify-center text-white shrink-0 w-[20px] h-[20px] mr-3  border-[#6363FC] rounded-[4px] ${task.isDone ? 'bg-green-500' : 'border-2'}`}
                  onClick={() => doneTask(index)}
                  >
                  {task.isDone ? '✓' : undefined}
                </button>
                <p className={task.isDone ? 'line-through' : undefined}>{item}</p>
                <button className='ml-auto' onClick={() => removeTask(index)}><Trash/></button>
              </div>
            )
          )
        }
      </div>
      
      <form className='absolute bottom-[30px] flex flex-row items-center w-full'>
        <input 
          className='text-[#242423] placeholder:italic px-5 py-3 border-2 border-[#6363FC] rounded-full w-[400px] outline-none' 
          placeholder='✍️ Escreva aqui...'
          type='text'
          value={task.text}
          onChange={(e) => setTask(e.target.value)}
        />
        <button 
          className='bg-[#6363FC] p-3 rounded-full ml-5'
          onClick={handleAddTask}
        > <Arrow/>
        </button>
      </form>
    </div>
  )
}

export default Index
