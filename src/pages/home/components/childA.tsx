import React, { useState } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
// @ts-ignore
import { counterSlice } from '@/store/slice';

const ChildA = () => {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>{count}</div>
      <div>
        <button
          onClick={() => {
            dispatch(counterSlice.actions.decrement());
          }}
        >
          减一
        </button>
        <button
          onClick={() => {
            dispatch(counterSlice.actions.increment());
          }}
        >
          加一
        </button>
      </div>
    </>
  );
};

export default ChildA;
