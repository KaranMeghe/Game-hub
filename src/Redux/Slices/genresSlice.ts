/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GENRE_RESULTS {
  id: number;
  name: string;
  slug: string;
  game_count: number;
  image_background: string;
}

interface GENRES {
  count: number;
  next: string;
  previous: string;
  results: GENRE_RESULTS[];
}

interface GENRES_STATE {
  isLoading: boolean;
  genres: GENRES | null;
  error: string | null;
}

const initialState: GENRES_STATE = {
  isLoading: false,
  genres: null,
  error: null,
};

const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    fetchGenresStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    fetchGenresSucess: (state, action: PayloadAction<GENRES>) => {
      state.isLoading = false;
      state.genres = action.payload;
    },

    fetchGenresFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchGenresStart, fetchGenresSucess, fetchGenresFailure } = genresSlice.actions;

export const genresReducer = genresSlice.reducer;
