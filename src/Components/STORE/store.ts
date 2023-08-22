import Board from '../../Features/Board';

import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({
    reducer:{
      Board : Board
    }
  })

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;