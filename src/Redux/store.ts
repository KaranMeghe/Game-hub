/** @format */

import { configureStore } from '@reduxjs/toolkit';
import { gamesApi } from './api/gamesApi';
import { genresApi } from './api/genresApi';
import { platformsApi } from './api/platformsApi';
import { filtersReducer } from './Slices/filterSlice';

const store = configureStore({
  reducer: {
    filters: filtersReducer,
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
