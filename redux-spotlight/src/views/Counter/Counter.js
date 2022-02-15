import React from 'react';
import { increment, decrement, reset } from './counterSlice';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{count}</p>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <button aria-label="Increment value" onClick={() => dispatch(reset())}>
        reset
      </button>
    </div>
  );
};

export default Counter;
