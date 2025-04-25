/** @format */

// /** @format */

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { GAMES_RESPONSE } from '../models/games.model';

// const API_KEY = import.meta.env.VITE_API_KEY;
// const url = 'https://api.rawg.io/api';

// const gamesApi = createApi({
//   reducerPath: 'gamesResult',

//   baseQuery: fetchBaseQuery({
//     baseUrl: `${url}`,
//   }),

//   endpoints: (builder) => ({
//     fetchGames: builder.query<GAMES_RESPONSE, { platform?: string }>({
//       query: () => ({
//         url: `/games?key=${API_KEY}`,
//         method: 'GET',
//       }),
//     }),
//   }),
// });

// export const { useFetchGamesQuery } = gamesApi;
// export { gamesApi };

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
    fetchGames: builder.query<GAMES_RESPONSE, { platform?: string }>({
      query: ({ platform }) => {
        let queryString = `/games?key=${API_KEY}`;

        if (platform) {
          queryString += `&platforms=${platform}`; // 👈 filters by platform (e.g., 4 = PC)
        }

        return {
          url: queryString,
          method: 'GET',
        };
      },
    }),
  }),
  keepUnusedDataFor: 0,
});

export const { useFetchGamesQuery, useLazyFetchGamesQuery } = gamesApi;
export { gamesApi };
