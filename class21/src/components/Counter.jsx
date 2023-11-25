import React from 'react'
import "../index.css"
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../store/Slices/CounterSlice'

const Counter = () => {
  const dispatch = useDispatch()
  const {counter} = useSelector(state => state.CounterReducer)
 
  // console.log(selector)
  const addCounterHandler = ()=>{
    dispatch(increment())
  }
  
  const decrementCounterHandler = ()=>{
    dispatch(decrement())
    
  }

  const resetCounterHandler = ()=>{
 
  }
  return (
    <section className='counter'>
      <button className='btn' onClick={addCounterHandler}>+</button>
      <div className='screen'>{counter}</div>
      <button className='btn' onClick={decrementCounterHandler}>-</button>
      <div>

        <button className='btn' onClick={resetCounterHandler}>RESET</button>
      </div>
    </section>
  )
}

export default Counter