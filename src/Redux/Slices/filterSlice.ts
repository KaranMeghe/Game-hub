/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FiltersState {
  platformId?: string | null;
  platformName?: string | null;
  genreId?: number | null;
  genreName?: string | null;
  searchInput?: string | null;
  pageNumber?: number | null;
  gameId?: number | null;
}

const initialState: FiltersState = {
  platformId: null,
  platformName: null,
  genreId: null,
  genreName: null,
  searchInput: null,
  pageNumber: 1,
  gameId: null,
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

    setNextPageNumber: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload + 1;
    },

    setPrevPageNumber: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload - 1;
    },

    setGameiD: (state, action: PayloadAction<number>) => {
      state.gameId = action.payload;
    },
  },
});

export const {
  setPlatformId,
  setPlatformName,
  setGenreName,
  setGenreId,
  setSearchInput,
  setNextPageNumber,
  setPrevPageNumber,
  setGameiD,
} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
