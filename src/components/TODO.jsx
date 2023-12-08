import React, { useState } from 'react';

const TODO = () => {
    const [task, setTask] = useState('');
    const[list,setlist] = useState([]);
    const handleClick = (e) => {
        e.preventDefault()
        if(!task.trim()){
          console.log("Cannot be empty");
          return;
        }
        setlist(
          [...list , task]
        )
        setTask('')
        console.log('Task added:', task)
        console.log('TaskList:',list)
    };

    const handleDelete = (index)=>{
      const newList = [...list]
      newList.splice(index,1)
      setlist(newList)
      console.log('deleted')
    }

    return (
        <div className='mt-3 w-[150] h-[500px] flex flex-col items-center dark:bg-slate-900 rounded-md'>
            <form className='flex justify-center pt-3' onSubmit={handleClick}>
                <input
                    onChange={(e) => setTask(e.target.value)}
                    value={task}
                    className='w-[350px] h-[45px] rounded-md p-1'
                    placeholder='Add Task'
                />
                <button
                    type='submit'
                    className='border h-[45px] w-[100px] rounded-md bg-red-500 ml-2 text-white text-lg hover:bg-blue-800'
                >
                    Add
                </button>
            </form>
            <div className=" mt-4 w-80 "><ul className=' text-white border rounded-md shadow-md shadow-slate-100 font-semibold text-xl'>
              {list.map((t,index)=>(<li className='flex justify-between p-2 mt-2 align-middle' key={index}>{t}
              <button className=' text-white text-sm boder border-white rounded-md p-2 bg-red-600 hover:bg-blue-700' onClick={()=>handleDelete(index)}>Delete</button>
              </li>
              ) )}
            </ul></div>
        </div>
    );
};

export default TODO;
