/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { gamesThunks } from './Thunks/gamesThunks';
import { searchGamesThunks } from './Thunks/searchGamesThunks';

interface ESRB_RATING {
  id: number;
  slug: string;
  name: string;
}

interface PLATFORM {
  id: number;
  slug: string;
  name: string;
}

interface PARENT_PLATFORM {
  platform: PLATFORM;
}

interface PLATFORM_DETAILS {
  platform: PLATFORM;
  released_at: string;
  requirements: {
    minimum: string;
    recommended: string;
  };
}

interface RATINGS {
  id: number;
  count: number;
  percent: number;
  title: string;
}

interface GENRE {
  id: number;
  name: string;
  slug: string;
}

interface GAME_RESULT {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  playtime: number;
  updated: string;
  esrb_rating: ESRB_RATING;
  platforms: PLATFORM_DETAILS[];
  parent_platforms: PARENT_PLATFORM[];
  ratings: RATINGS[];
  genres: GENRE[];
}

export interface GAME_RESPONSE {
  count: number;
  next: string;
  previous: string;
  results: GAME_RESULT[];
}

interface GAMES_STATE {
  gameList: GAME_RESPONSE | null;
  originalGameList: GAME_RESPONSE | null;
  isLoading: boolean;
  isFiltering: boolean;
  error: string | null;
  searchInput: string | null;
}

const initialState: GAMES_STATE = {
  gameList: null,
  originalGameList: null,
  isLoading: false,
  isFiltering: false,
  error: null,
  searchInput: null,
};

const gamesSlice = createSlice({
  name: 'games',
  initialState,

  reducers: {
    updateFilteredGames: (state, action: PayloadAction<GAME_RESULT[]>) => {
      if (state.originalGameList) {
        state.gameList = { ...state.originalGameList, results: action.payload };
      }
    },

    setIsFiltering: (state, action: PayloadAction<boolean>) => {
      state.isFiltering = action.payload;
    },

    handleSearchInput: (state, action: PayloadAction<string | null>) => {
      state.searchInput = action.payload;
    },
  },

  extraReducers: (builder) => {
    // Fetching Games Start
    builder.addCase(gamesThunks.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    // Fetching Games Sucess
    builder.addCase(gamesThunks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.gameList = action.payload;
      state.originalGameList = action.payload;
    });

    // Fetching Game Failed
    builder.addCase(gamesThunks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload ?? null;
    });

    // Fetching Search Games Start
    builder.addCase(searchGamesThunks.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    // Fetching Search Games Success
    builder.addCase(searchGamesThunks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.gameList = action.payload;
      state.originalGameList = action.payload;
    });
    // Fetching Search Games Failed

    builder.addCase(searchGamesThunks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload ?? null;
    });
  },
});

export const { updateFilteredGames, setIsFiltering, handleSearchInput } = gamesSlice.actions;
export const gamesReducer = gamesSlice.reducer;
