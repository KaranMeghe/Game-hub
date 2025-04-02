/** @format */

import { configureStore } from '@reduxjs/toolkit';
import { gamesReducer } from './Slices/gamesSlice';
import { genresReducer } from './Slices/genresSlice';

const store = configureStore({
  reducer: {
    games: gamesReducer,
    genres: genresReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
