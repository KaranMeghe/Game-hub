/** @format */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GAME_DETAILS, GAMES_RESPONSE } from '../models/games.model';

const API_KEY = import.meta.env.VITE_API_KEY;
const url = 'https://api.rawg.io/api';

const gamesApi = createApi({
  reducerPath: 'gamesResult',

  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),

  endpoints: (builder) => ({
    fetchGames: builder.query<
      GAMES_RESPONSE,
      {
        platform?: string | null;
        genres?: number | null;
        search?: string | null;
        pageNumber?: number | null;
      }
    >({
      query: ({ platform, genres, search, pageNumber }) => {
        let queryString = `/games?key=${API_KEY}`;
        if (platform) queryString += `&platforms=${platform}`;
        if (genres) queryString += `&genres=${genres}`;
        if (search) queryString += `&search=${search}`;
        if (pageNumber) queryString += `&page=${pageNumber}`;
        return { url: queryString, method: 'GET' };
      },
    }),

    fetchGameById: builder.query<GAME_DETAILS, string | undefined>({
      query: (gameId) => `/games/${gameId}?key=${API_KEY}`,
    }),
  }),
});

export const { useFetchGamesQuery, useLazyFetchGamesQuery, useFetchGameByIdQuery } = gamesApi;
export { gamesApi };
