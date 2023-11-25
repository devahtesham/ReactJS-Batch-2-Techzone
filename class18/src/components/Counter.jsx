import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementCounter } from '../store/Actions'
import { decrementCounter } from '../store/Actions/CounterActions';

const Counter = () => {
  const dispatch = useDispatch();
  const {counter} = useSelector((state) => state);
  const addCounterHandler = ()=>{
    dispatch(incrementCounter())
  }

  const decrementCounterHandler = ()=>{
    dispatch(decrementCounter())
  }
  return (
    <section className='counter'>
      <button className='btn' onClick={addCounterHandler}>+</button>
      <div className='screen'>{counter}</div>
      <button className='btn' onClick={decrementCounterHandler}>-</button>
      <div>

        <button className='btn'>RESET</button>
      </div>
    </section>
  )
}

export default Counter