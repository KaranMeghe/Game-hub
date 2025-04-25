/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FiltersState {
  platformId?: string | undefined;
  platformName?: string | null;
}

const initialState: FiltersState = {
  platformId: undefined,
  platformName: null,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,

  reducers: {
    setPlatformId: (state, action: PayloadAction<string | undefined>) => {
      state.platformId = action.payload;
    },
    setPlatformName: (state, action: PayloadAction<string | null>) => {
      state.platformName = action.payload;
    },
  },
});

export const { setPlatformId, setPlatformName } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
