import { configureStore } from '@reduxjs/toolkit';
import phones from './reducers/phones';

const store = configureStore({
  reducer: {
    phones,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
