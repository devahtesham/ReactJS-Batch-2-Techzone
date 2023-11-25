import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementCounter,decrementCounter, resetCounter } from '../store/Actions'

const Counter = () => {
  const dispatch = useDispatch();
  const {counter} = useSelector((state) => state.CounterReducer);
  const {reset} = useSelector((state) => state.ResetCounterReducer);
  // console.log(selector)
  const addCounterHandler = ()=>{
    dispatch(incrementCounter())
  }

  const decrementCounterHandler = ()=>{
    dispatch(decrementCounter())
  }

  const resetCounterHandler = ()=>{
    dispatch(resetCounter())
  }
  return (
    <section className='counter'>
      <button className='btn' onClick={addCounterHandler}>+</button>
      <div className='screen'>{counter} {reset}</div>
      <button className='btn' onClick={decrementCounterHandler}>-</button>
      <div>

        <button className='btn' onClick={resetCounterHandler}>RESET</button>
      </div>
    </section>
  )
}

export default Counter