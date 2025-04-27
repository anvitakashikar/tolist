import React from 'react';
import tick from '../assets/tick.png';
import not_tick from '../assets/not_tick.png';
import deleteIcon from '../assets/delete.png';

const Todoitems = ({ text, id, isComplete, deleteTodo, toggleComplete }) => {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div onClick={() => toggleComplete(id)} className='flex flex-1 items-center cursor-pointer'>
        <img className='w-7' src={isComplete ? tick : not_tick} alt="Status" />
        <p className={`ml-4 text-[17px] ${isComplete ? 'line-through text-gray-400' : 'text-slate-700'}`}>
          {text}
        </p>
      </div>
      <img
        onClick={() => deleteTodo(id)}
        className='w-3 cursor-pointer'
        src={deleteIcon}
        alt="Delete"
      />
    </div>
  );
};

export default Todoitems;
