/** @format */

import { updateFilteredGames } from '@/Redux/Slices/gamesSlice';
import { AppDispatch, RootState } from '@/Redux/store';
import { useDispatch, useSelector } from 'react-redux';

export const useFilterGamesPlatforms = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { originalGameList } = useSelector((store: RootState) => store.games);
  console.log(originalGameList);

  const handlePaltfomFilter = (platform: string | null) => {
    if (!originalGameList) return;

    if (platform === null) {
      dispatch(updateFilteredGames(originalGameList.results));
      return;
    }

    const filterGames = originalGameList.results.filter((game) => {
      return game.parent_platforms && game.parent_platforms.some((g) => g.platform.slug === platform);
    });

    dispatch(updateFilteredGames(filterGames));
  };

  return { handlePaltfomFilter };
};
