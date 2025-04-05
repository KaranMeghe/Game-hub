/** @format */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPlatforms } from '@/services/services';
import { PLATFORM_RESPONSE } from '../platFormSlice';

export const fetchPlatformThunk = createAsyncThunk<PLATFORM_RESPONSE, void, { rejectValue: string }>(
  'Platform/fetchPlatforms',
  async (_, thunkApi) => {
    try {
      const response = await fetchPlatforms();
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message || 'Failed to fetch platforms');
    }
  },
);
