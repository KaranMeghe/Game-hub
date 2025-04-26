/** @format */

// /** @format */

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { searchGames } from '@/services/services';
// import { GAME_RESPONSE } from '../gamesSlice';
// import { isAxiosError } from 'axios';
// import { RootState } from '@/Redux/store'; // ✅ import your RootState type

// export const searchGamesThunks = createAsyncThunk<GAME_RESPONSE, void, { state: RootState; rejectValue: string }>(
//   'games/searchGames',
//   async (_, thunkApi) => {
//     try {
//       // Get searchInput from state
//       const searchInput = thunkApi.getState().games.searchInput;

//       const response = await searchGames(searchInput);
//       return response;
//     } catch (error) {
//       let errorMessage = 'Failed to fetch search games';

//       if (isAxiosError(error)) {
//         errorMessage = error.response?.data?.message || error.message;
//       } else if (error instanceof Error) {
//         errorMessage = error.message;
//       }

//       return thunkApi.rejectWithValue(errorMessage);
//     }
//   },
// );
