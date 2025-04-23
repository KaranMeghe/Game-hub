/** @format */

interface GENRE_RESULTS {
  id: number;
  name: string;
  slug: string;
  game_count: number;
  image_background: string;
}

export interface GENRES {
  count: number;
  next: string;
  previous: string;
  results: GENRE_RESULTS[];
}
