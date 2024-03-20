// Assuming you are using Redux Toolkit and have configured your store using `configureStore`

import { configureStore } from '@reduxjs/toolkit';
import aiDataReducer from './reducers/aiDataSlice';

const store = configureStore({
  reducer: {
    aiData: aiDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // Define RootState type

export default store;




