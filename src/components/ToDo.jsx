import React, { useRef , useState} from 'react'
import ToDoIcon from '../assets/todo_icon.png'
import ToDoItems from './ToDoItems'

const ToDo = () => {
  const [tasks, setTasks] = useState([]);



  const inputRef = useRef();

  const add = ()=>{
    const inputtext = inputRef.current.value.trim();
    if (inputtext == ""){
      return null;
    }

    const newToDo =
    {
      id:Date.now(),
      text:inputtext,
      isComplete:false,
    }
    setTasks((prev)=>[...prev,newToDo]); 
    inputRef.current.value = '';
    console.log(inputtext); 
  };

  const deleteToDo = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };
  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>

        {/*-----title-------*/}
        <div className='flex items-center mt-7 gap-2'>
            <img  className=" w-8" src={ToDoIcon}/>
            <h1 className='text-3xl font-semibold'>ToDO List</h1>
        </div>
        {/*-----input box -------*/}

        <div className='flex items-center my-7 bg-gray-200 rounded-full'>
            <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type='text' placeholder='Enter you task.....'/>
            <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>ADD +</button>
         </div>

         {/*-----input box -------*/}
         <div>

          {tasks.map((item , index)=>{
              return <ToDoItems  key={index} text={item.text} id={item.id} 
              isComplete={item.isComplete} deleteToDo={deleteToDo}/>
          })}
         </div>
    </div>
  )
}

export default ToDo