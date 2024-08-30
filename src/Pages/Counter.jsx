import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrementdata, Incrementdata } from '../Redux/Counter/action'
const Counter = () => {
    const {counter}=useSelector((store)=>store.Counterreducer)
    console.log(counter)
    const dispatch=useDispatch();
  return (
    <>
        <h1>Counter:{counter }</h1>
        <button onClick={()=>dispatch(Incrementdata())}>+</button>
        <button onClick={()=>dispatch(Decrementdata())}>-</button>
    </>
  )
}

export default Counter