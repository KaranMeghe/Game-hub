/** @format */

import { updateFilteredGames } from '@/Redux/Slices/gamesSlice';
import { AppDispatch, RootState } from '@/Redux/store';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useFilterGames = () => {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  const dispatch = useDispatch<AppDispatch>();
  const { originalGameList } = useSelector((store: RootState) => store.games);

  const handleGameFilter = (genre: string | null) => {
    if (!originalGameList?.results) return;

    if (genre === null) {
      dispatch(updateFilteredGames(originalGameList.results));
      return;
    }

    const filteredGames = originalGameList.results.filter(
      (game) => game.genres && game.genres.some((g) => g.name === genre),
    );

    setSelectedGenre(genre);
    dispatch(updateFilteredGames(filteredGames));
  };

  return { handleGameFilter, selectedGenre };
};

export default useFilterGames;
