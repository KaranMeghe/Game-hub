/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { fetchPlatformThunk } from './Thunks/platformThunks';

interface PLATFORMS {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  image: null;
  year_start: null;
  year_end: null;
}

interface RESULTS {
  id: number;
  name: string;
  slug: string;
  platforms: PLATFORMS[];
}

export interface PLATFORM_RESPONSE {
  count: number;
  next: null;
  previous: null;
  results: RESULTS[];
}

interface PLATFORMS_STATE {
  isLoading: boolean;
  platforms: PLATFORM_RESPONSE | null;
  platformName: string | null;
  error: null | string;
}

const initialState: PLATFORMS_STATE = {
  isLoading: false,
  platforms: null,
  platformName: null,
  error: null,
};

const platFormSlice = createSlice({
  name: 'Platform',
  initialState,
  reducers: {
    setPlatformName: (state, action) => {
      state.platformName = action.payload;
    },
    clearPlatformName: (state) => {
      state.platformName = null;
    },
  },
  extraReducers: (builder) => {
    // Request start
    builder.addCase(fetchPlatformThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    //Request Success
    builder.addCase(fetchPlatformThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.platforms = action.payload;
    });

    // Request failed
    builder.addCase(fetchPlatformThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || 'Something went wrong';
    });
  },
});

export const { setPlatformName, clearPlatformName } = platFormSlice.actions;
export const platformReducer = platFormSlice.reducer;
