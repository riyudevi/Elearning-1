import React from 'react'
import { useState } from 'react'
const Task = () => {
    const[value,setValue]=useState('');
    const onChange=(event)=>{
        setValue(event.target.value);
    }
    const onSearch=(searchTerm)=>{
        console.log('search',searchTerm);
    }
  return (
    <>
    <div className='container'>
        <div className='text-center'>
            <h2>Serach bar</h2>
            <input type='text' value={value} onChange={onChange}/>
            <button onClick={()=>onSearch(value)}>search</button>
        </div>
    </div>
    </>
  )
};

export default Task