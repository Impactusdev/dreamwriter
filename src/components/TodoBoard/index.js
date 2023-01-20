import React, { useState } from 'react';
import Task from './Task';
import Arrow from '../../assets/icons/arrow.svg';

const Index = () => {

  const initialValue = { text: '', completed: false}
  const [task, setTask] = useState(initialValue)
  const [tasks, setTasks] = useState([])

  const handleAddTask = (event) => {
    event.preventDefault()
    const newTask = { text: task.text, completed: false };
    setTasks([...tasks, newTask]);
    setTask(initialValue);
  }

  const completeTask = (index) => {
    const tasksCopy = [...tasks];
    tasksCopy[index] = {
      ...tasksCopy[index],
      completed: !tasksCopy[index].completed,
    };
    setTasks(tasksCopy);
  }

  const removeTask = (index) => {
    const tasksCopy = [...tasks];
    tasksCopy.splice(index, 1);
    setTasks(tasksCopy);
  };


  return (
    <div className='flex flex-col bg-white shadow-xl max-sm:shadow-sm px-10 max-sm:px-3 py-20 max-sm:pb-28 max-2xl:py-12 w-full max-sm:h-fit relative'>

      <h1 className='text-[#242423] text-5xl max-sm:text-3xl'>
        <strong>💡Anote suas metas</strong>
      </h1>
      <div className='h-[80%] max-2xl:h-[75%] flex-wrap max-sm:flex-nowrap flex flex-col mt-20 max-2xl:mt-6 '>
      {
        tasks.map((task, index) => 
          <Task
            key={index} 
            task={task}
            index={index}
            completeTask={completeTask}
            removeTask={removeTask}
          />
        )
      }
      </div>
      
      <form className='absolute max-sm:fixed bottom-[30px] flex flex-row items-center w-full max-sm:w-[80%]'>
        <input 
          className='text-[#242423] placeholder:italic px-5 py-3 border-2 border-[#6363FC] rounded-full w-[400px] outline-none' 
          placeholder='✍️ Escreva aqui...'
          type='text'
          value={task.text}
          onChange={(event) => setTask({...task, text: event.target.value})}
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