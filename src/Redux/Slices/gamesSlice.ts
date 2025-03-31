/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
}

interface GAME_RESPONSE {
  count: number;
  next: string;
  previous: string;
  results: GAME_RESULT[];
}

interface GAMES_STATE {
  gameList: GAME_RESPONSE | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: GAMES_STATE = {
  gameList: null,
  isLoading: false,
  error: null,
};

const gamesSlice = createSlice({
  name: 'games',
  initialState,

  reducers: {
    fetchGamesStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    fetchGamesSuccess: (state, action: PayloadAction<GAME_RESPONSE>) => {
      state.isLoading = false;
      state.gameList = action.payload;
    },

    fetchGamesFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchGamesStart, fetchGamesSuccess, fetchGamesFailure } = gamesSlice.actions;
export const gamesReducer = gamesSlice.reducer;
