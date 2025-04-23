/** @format */

import { configureStore } from '@reduxjs/toolkit';
import { gamesReducer } from './Slices/gamesSlice';
import { genresReducer } from './Slices/genresSlice';
import { platformReducer } from './Slices/platFormSlice';
import { gamesApi } from './api/gamesApi';
import { genresApi } from './api/genresApi';
import { platformsApi } from './api/platformsApi';

const store = configureStore({
  reducer: {
    games: gamesReducer,
    genres: genresReducer,
    platforms: platformReducer,
    [gamesApi.reducerPath]: gamesApi.reducer,
    [genresApi.reducerPath]: genresApi.reducer,
    [platformsApi.reducerPath]: platformsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gamesApi.middleware, genresApi.middleware, platformsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
