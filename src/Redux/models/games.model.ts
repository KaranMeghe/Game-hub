/** @format */

import { GENRE_RESULTS } from './genres.model';

interface ESRB_RATING {
  id: number;
  slug: string;
  name: string;
}

interface PLATFORM {
  id: number;
  slug: string;
  name: string;
}

interface PARENT_PLATFORM {
  platform: PLATFORM;
}

interface PLATFORM_DETAILS {
  platform: PLATFORM;
  released_at: string;
  requirements: {
    minimum: string;
    recommended: string;
  };
}

interface RATINGS {
  id: number;
  count: number;
  percent: number;
  title: string;
}

interface GENRE {
  id: number;
  name: string;
  slug: string;
}

interface GAME_RESULT {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  playtime: number;
  updated: string;
  esrb_rating: ESRB_RATING;
  platforms: PLATFORM_DETAILS[];
  parent_platforms: PARENT_PLATFORM[];
  ratings: RATINGS[];
  genres: GENRE[];
}

export interface GAMES_RESPONSE {
  count: number;
  next: string;
  previous: string;
  results: GAME_RESULT[];
}

export interface GAMES_STATE {
  //   results: GAME_RESPONSE | null;
  gameList: GAMES_RESPONSE | null;
  originalGameList: GAMES_RESPONSE | null;
  genreType: string | null;
  isLoading: boolean;
  isFiltering: boolean;
  error: string | null;
  searchInput: string | null;
}

//

export interface GAME_PLATFORM {
  id: number;
  name: string;
  slug: string;
}

interface GAME_RESULT {
  background_image: string;
  name: string;
  metacritic?: number;
  id: number;
  parent_platforms: PARENT_PLATFORM[];
}

export interface GAME_CARD_PROPS {
  gameData: GAME_RESULT;
}

// Game Details
interface PARENT_PLATFORM {
  id: number;
  slug: string;
  name: string;
}

interface PUBLISHER {
  games_count: number;
  id: number;
  image_background: string;
  name: string;
  slug: string;
}
export interface GAME_DETAILS {
  name: string;
  description_raw: string;
  metacritic: number;
  genres: GENRE_RESULTS[];
  parent_platforms: PARENT_PLATFORM[];
  publishers: PUBLISHER[];
}
