/** @format */

import { updateFilteredGames } from '@/Redux/Slices/gamesSlice';
import { setGenresName } from '@/Redux/Slices/genresSlice';
import { clearPlatformName } from '@/Redux/Slices/platFormSlice';
import { AppDispatch, RootState } from '@/Redux/store';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useFilterGames = () => {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  const dispatch = useDispatch<AppDispatch>();
  const { originalGameList } = useSelector((store: RootState) => store.games);

  const handleGameFilter = (input: string | null) => {
    if (!originalGameList?.results) return;

    if (input === null) {
      dispatch(updateFilteredGames(originalGameList.results));
      return;
    }

    const filteredGames = originalGameList.results.filter(
      (game) => game.genres && game.genres.some((g) => g.name === input),
    );

    setSelectedGenre(input);
    dispatch(updateFilteredGames(filteredGames));
    dispatch(setGenresName(input));
    dispatch(clearPlatformName());
  };

  return { handleGameFilter, selectedGenre };
};

export default useFilterGames;
