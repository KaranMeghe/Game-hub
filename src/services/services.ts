/** @format */

import axios from 'axios';
import noImage from '../assets/Image Placeholder/no-image-placeholder-6f3882e0.webp';

const API_KEY = import.meta.env.VITE_API_KEY;
const baseUrl = 'https://api.rawg.io/api';

// Fetch Games
export const fetchGames = async (signal?: AbortSignal) => {
  const response = await axios.get(`${baseUrl}/games?key=${API_KEY}&page_size=30`, { signal });
  return response.data;
};

// Search Games

export const searchGames = async (searchInput: string | null, signal?: AbortSignal) => {
  const response = await axios.get(`${baseUrl}/games?key=${API_KEY}&page=2&page_size=20&search=${searchInput}`, {
    signal,
  });

  return response.data;
};

// "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
//"https://media.rawg.io/media/crop/600/400/games/562/562553814dd54e001a541e4ee83a591c.jpg"

// SET CROPPED IMG URL
export const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;

  const target = 'media/';
  const index = url.indexOf(target);

  if (index === -1) return url;

  return url.slice(0, index + target.length) + 'crop/600/400/' + url.slice(index + target.length);
};

export const fetchGenres = async (signal?: AbortSignal) => {
  const response = await axios.get(`${baseUrl}/genres?key=${API_KEY}`, { signal });
  const data = response.data;
  return data;
};

export const fetchPlatforms = (signal?: AbortSignal) => {
  return axios.get(`${baseUrl}/platforms/lists/parents?key=${API_KEY}`, { signal });
};
