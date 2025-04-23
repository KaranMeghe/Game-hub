/** @format */

import { configureStore } from '@reduxjs/toolkit';
import { gamesReducer } from './Slices/gamesSlice';
import { genresReducer } from './Slices/genresSlice';
import { platformReducer } from './Slices/platFormSlice';
import { gamesApi } from './api/gamesApi';

const store = configureStore({
  reducer: {
    games: gamesReducer,
    genres: genresReducer,
    platforms: platformReducer,
    [gamesApi.reducerPath]: gamesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(gamesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
