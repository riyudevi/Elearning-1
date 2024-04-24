import React,{useEffect} from 'react'

const Counter1 = ({number}) => {

    useEffect(()=>{
        console.log("functional Component Mounting");
    },[number]);
  return (
    <div>{number}</div>
  )
}

export default Counter1