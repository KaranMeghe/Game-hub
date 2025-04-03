/** @format */

import { updateFilteredGames } from '@/Redux/Slices/gamesSlice';
import { AppDispatch, RootState } from '@/Redux/store';
import { useDispatch, useSelector } from 'react-redux';

export const useFilterGames = () => {
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

    console.log(`Filtering for genre: ${genre}, Found: ${filteredGames.length} games`);

    dispatch(updateFilteredGames(filteredGames));
  };

  return { handleGameFilter };
};

export default useFilterGames;
