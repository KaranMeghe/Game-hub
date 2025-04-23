/** @format */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GENRES } from '../models/genres.model';

const API_KEY = import.meta.env.VITE_API_KEY;
const url = 'https://api.rawg.io/api';

const genresApi = createApi({
  reducerPath: 'genresResults',

  baseQuery: fetchBaseQuery({
    baseUrl: `${url}`,
  }),

  endpoints: (builder) => ({
    fetchGenres: builder.query<GENRES, void>({
      query: () => ({
        url: `/genres?key=${API_KEY}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useFetchGenresQuery } = genresApi;
export { genresApi };
