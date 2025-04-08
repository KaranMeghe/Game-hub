/** @format */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { GENRES } from '../genresSlice';
import { fetchGenres } from '@/services/services';
import { isAxiosError } from 'axios';

export const genresThunks = createAsyncThunk<GENRES, void, { rejectValue: string }>(
  'genres/fetchGenres',
  async (_, thunkApi) => {
    try {
      const response = await fetchGenres(thunkApi.signal);
      return response;
    } catch (error) {
      let errorMessage = 'Failed to fetch Genres';

      if (isAxiosError(error)) {
        errorMessage = error.response?.data?.message || error.message;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      return thunkApi.rejectWithValue(errorMessage);
    }
  },
);
