/** @format */

import { configureStore } from '@reduxjs/toolkit';
import { gamesReducer } from './Slices/gamesSlice';
import { genresReducer } from './Slices/genresSlice';
import { platformReducer } from './Slices/platFormSlice';

const store = configureStore({
  reducer: {
    games: gamesReducer,
    genres: genresReducer,
    platforms: platformReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
