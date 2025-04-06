/** @format */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPlatforms } from '@/services/services';
import { PLATFORM_RESPONSE } from '../platFormSlice';
import { isAxiosError } from 'axios';

export const fetchPlatformThunk = createAsyncThunk<PLATFORM_RESPONSE, void, { rejectValue: string }>(
  'Platform/fetchPlatforms',
  async (_, thunkApi) => {
    try {
      const response = await fetchPlatforms();
      return response.data;
    } catch (error) {
      let errorMessage = 'Failed to fetch platforms';

      if (isAxiosError(error)) {
        errorMessage = error.response?.data?.message || error.message;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      return thunkApi.rejectWithValue(errorMessage);
    }
  },
);
