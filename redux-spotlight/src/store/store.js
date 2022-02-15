import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../views/Counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
