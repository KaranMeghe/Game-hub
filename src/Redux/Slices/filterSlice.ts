/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FiltersState {
  platformId?: string | null;
  platformName?: string | null;
  genreId?: number | null;
  genreName?: string | null;
  searchInput?: string | null;
}

const initialState: FiltersState = {
  platformId: null,
  platformName: null,
  genreId: null,
  genreName: null,
  searchInput: null,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,

  reducers: {
    setPlatformId: (state, action: PayloadAction<string | null>) => {
      state.platformId = action.payload;
    },
    setPlatformName: (state, action: PayloadAction<string | null>) => {
      state.platformName = action.payload;
    },
    setGenreId: (state, action: PayloadAction<number | null>) => {
      state.genreId = action.payload;
    },

    setGenreName: (state, action: PayloadAction<string | null>) => {
      state.genreName = action.payload;
    },

    setSearchInput: (state, action: PayloadAction<string | null>) => {
      state.searchInput = action.payload;
    },
  },
});

export const { setPlatformId, setPlatformName, setGenreName, setGenreId, setSearchInput } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
