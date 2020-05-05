import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './slices/citySlice';

export default configureStore({
  reducer: {
    city: cityReducer,
  },
});
