import React from 'react'
import tick from "../assets/tick.png"
import not_tick from "../assets/not_tick.png"
import delete_icon from "../assets/delete.png"


const Todoitems = ({text, id, isCompelet, deleteTodo, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img src={isCompelet ? tick : not_tick}  className='w-7'  alt='tick '/>
           <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500
             ${ isCompelet ? "line-through" : ""}`}>{text}</p>
        </div>
        <img onClick={()=> {deleteTodo(id)}} className='w-3.5 cursor-pointer' src={delete_icon} alt="" />
    </div> 
  )
}

export default Todoitems