import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../redux/slice';

export const Counter = () => {

  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <div>
        <div>
          <button onClick={() => dispatch(increment())}>Increment</button>
        </div>
        <div>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
      </div>
    </div>
  )
}