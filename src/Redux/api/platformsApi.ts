/** @format */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PLATFORM_RESPONSE } from '../models/platform.model';

const API_KEY = import.meta.env.VITE_API_KEY;
const url = 'https://api.rawg.io/api';

const platformsApi = createApi({
  reducerPath: 'platformsData',

  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),

  endpoints: (builder) => ({
    fetchPlatforms: builder.query<PLATFORM_RESPONSE, void>({
      query: () => ({
        url: `/platforms/lists/parents?key=${API_KEY}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useFetchPlatformsQuery } = platformsApi;
export { platformsApi };
