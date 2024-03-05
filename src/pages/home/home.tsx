import React, { useState } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
// @ts-ignore
import { store } from '@/store/store';
import ChildA from './components/childA';
import ChildB from './components/childB';

const Home = () => {
  return (
    <>
      <Provider store={store}>
        <div>home page</div>
        <ChildA />
        <ChildB />
      </Provider>
    </>
  );
};

export default Home;
