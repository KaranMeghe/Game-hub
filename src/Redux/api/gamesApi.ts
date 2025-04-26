/** @format */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GAMES_RESPONSE } from '../models/games.model';

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
      { platform?: string | null; genres?: number | null; search?: string | null }
    >({
      query: ({ platform, genres, search }) => {
        let queryString = `/games?key=${API_KEY}`;

        if (platform) {
          queryString += `&platforms=${platform}`;
        }

        if (genres) {
          queryString += `&genres=${genres}`;
        }

        if (search) {
          queryString += `&search=${search}`;
        }

        return {
          url: queryString,
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useFetchGamesQuery, useLazyFetchGamesQuery } = gamesApi;
export { gamesApi };
