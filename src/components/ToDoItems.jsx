import React from 'react'
import Tick from '../assets/tick.png'
import notTick from '../assets/not_tick.png'
import DelTick from '../assets/delete.png'

const ToDoItems = ({text,id,isComplete , deleteToDo}) => {
  return (
    <div className='flex items-center my-3 gap-2 '>
        <div className='flex flex-1 items-center cursor-pointer'>
            <img src={Tick} alt='' className='w-7'/>
            <p className='text-slate-700 ml-4 text=[17px]'>{text}</p>
        </div>
        <img onClick={()=>{deleteToDo(id)}} src={DelTick} alt='' className='w-3.5 cursor-pointer' />
    </div>
  )
}

export default ToDoItems