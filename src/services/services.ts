/** @format */

import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const baseUrl = 'https://api.rawg.io/api';

// Fetch Games
export const fetchGames = async (signal?: AbortSignal) => {
  try {
    const response = await axios.get(`${baseUrl}/games?key=${API_KEY}&page_size=30`, { signal });
    return response.data;
  } catch (error) {
    console.error(`Error fetching games:`, error);
    throw error;
  }
};

// "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
//"https://media.rawg.io/media/crop/600/400/games/562/562553814dd54e001a541e4ee83a591c.jpg"

// SET CROPPED IMG URL
export const getCroppedImageUrl = (url: string) => {
  if (!url) return '';

  const target = 'media/';
  const index = url.indexOf(target);

  if (index === -1) return url;

  return url.slice(0, index + target.length) + 'crop/600/400/' + url.slice(index + target.length);
};

export const fetchGenres = async (signal?: AbortSignal) => {
  try {
    const response = await axios.get(`${baseUrl}/genres?key=${API_KEY}`, { signal });
    const data = response.data;
    return data;
  } catch (error) {
    console.log(`Error fetching genres:`, error);
    throw error;
  }
};
