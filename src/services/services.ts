/** @format */

import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const baseUrl = 'https://api.rawg.io/api';

export const fetchGames = async () => {
  try {
    const response = await axios.get(`${baseUrl}/games?key=${API_KEY}`);
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.error(`Error fetching games:`, error);
  }
};
