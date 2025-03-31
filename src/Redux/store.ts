/** @format */

import { configureStore } from '@reduxjs/toolkit';
import { gamesReducer } from './Slices/gamesSlice';
import { fetchGamesStart, fetchGamesFailure, fetchGamesSuccess } from './Slices/gamesSlice';

const store = configureStore({
  reducer: {
    games: gamesReducer,
  },
});

export { store, fetchGamesStart, fetchGamesFailure, fetchGamesSuccess };

// medalaii
