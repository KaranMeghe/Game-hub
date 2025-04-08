/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { genresThunks } from './Thunks/genresThunks';

interface GENRE_RESULTS {
  id: number;
  name: string;
  slug: string;
  game_count: number;
  image_background: string;
}

export interface GENRES {
  count: number;
  next: string;
  previous: string;
  results: GENRE_RESULTS[];
}

interface GENRES_STATE {
  isLoading: boolean;
  genres: GENRES | null;
  genresName: string | null;
  error: string | null;
}

const initialState: GENRES_STATE = {
  isLoading: false,
  genres: null,
  genresName: null,
  error: null,
};

const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    setGenresName: (state, action: PayloadAction<string>) => {
      state.genresName = action.payload;
    },
    clearGenresName: (state) => {
      state.genresName = null;
    },
  },
  extraReducers: (builder) => {
    // Fetch Genres start
    builder.addCase(genresThunks.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    // Fetch Genres Success
    builder.addCase(genresThunks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.genres = action.payload;
    });

    // Fetch Genres Fail
    builder.addCase(genresThunks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload ?? null;
    });
  },
});

export const { setGenresName, clearGenresName } = genresSlice.actions;

export const genresReducer = genresSlice.reducer;
