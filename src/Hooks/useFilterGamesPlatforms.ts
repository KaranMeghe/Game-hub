/** @format */

import { updateFilteredGames, setIsFiltering } from '@/Redux/Slices/gamesSlice';
import { AppDispatch, RootState } from '@/Redux/store';
import { useDispatch, useSelector } from 'react-redux';

export const useFilterGamesPlatforms = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { originalGameList, isFiltering } = useSelector((store: RootState) => store.games);

  const handlePaltfomFilter = (platform: string | null) => {
    if (!originalGameList) return;

    dispatch(setIsFiltering(true));

    setTimeout(() => {
      if (platform === null) {
        dispatch(updateFilteredGames(originalGameList.results));
      } else {
        const filterGames = originalGameList.results.filter((game) =>
          game.parent_platforms?.some((g) => g.platform.slug === platform),
        );
        dispatch(updateFilteredGames(filterGames));
      }

      dispatch(setIsFiltering(false));
    }, 500);
  };

  return { handlePaltfomFilter, isFiltering };
};
