/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { gamesThunks } from './Thunks/gamesThunks';

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

interface PLATFORM_DETAILS {
  platforms: PLATFORM;
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
  platform: PLATFORM_DETAILS[];
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
  error: string | null;
}

const initialState: GAMES_STATE = {
  gameList: null,
  originalGameList: null,
  isLoading: false,
  error: null,
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
  },

  extraReducers: (builder) => {
    // Fetching Start
    builder.addCase(gamesThunks.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    // Fetching Sucess
    builder.addCase(gamesThunks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.gameList = action.payload;
      state.originalGameList = action.payload;
      // state.firstLoad = false;
    });

    // Fetching Failed
    builder.addCase(gamesThunks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload ?? null;
    });
  },
});

export const { updateFilteredGames } = gamesSlice.actions;
export const gamesReducer = gamesSlice.reducer;
