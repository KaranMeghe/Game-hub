/** @format */

import { updateFilteredGames, setIsFiltering } from '@/Redux/Slices/gamesSlice';
import { setPlatformName } from '@/Redux/Slices/platFormSlice';
import { AppDispatch, RootState } from '@/Redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useFetchPlatforms } from './useFetchPlatforms';
import { clearGenresName } from '@/Redux/Slices/genresSlice';

export const useFilterGamesPlatforms = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, platforms } = useFetchPlatforms();
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

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPlatformSlug = e.target.value;
    const selectedPlatform = platforms?.results.find((p) => p.slug === selectedPlatformSlug);

    if (selectedPlatform) {
      dispatch(setPlatformName(selectedPlatform.name));
      dispatch(clearGenresName());
    }

    handlePaltfomFilter(selectedPlatformSlug);
  };

  return { isFiltering, handleChange, isLoading, platforms };
};
