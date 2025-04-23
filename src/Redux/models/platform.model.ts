/** @format */

interface PLATFORMS {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  image: null;
  year_start: null;
  year_end: null;
}

interface RESULTS {
  id: number;
  name: string;
  slug: string;
  platforms: PLATFORMS[];
}

export interface PLATFORM_RESPONSE {
  count: number;
  next: null;
  previous: null;
  results: RESULTS[];
}
