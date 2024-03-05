import React, { useState } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
// @ts-ignore
import { counterSlice } from '@/store/slice';

const ChildB = () => {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>{count}</div>
      <div>
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

export default ChildB;
