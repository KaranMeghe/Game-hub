/** @format */

import { fetchGames } from '@/services/services';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { GAME_RESPONSE } from '../gamesSlice';
import { isAxiosError } from 'axios';

export const gamesThunks = createAsyncThunk<GAME_RESPONSE, void, { rejectValue: string }>(
  'games/fetchGames',
  async (_, thunkApi) => {
    try {
      const response = await fetchGames(thunkApi.signal);
      return response;
    } catch (error) {
      let errorMessage = 'Failed to fetch games';

      if (isAxiosError(error)) {
        errorMessage = error.response?.data?.message || error.message;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      return thunkApi.rejectWithValue(errorMessage);
    }
  },
);
