/** @format */

import { AppDispatch, RootState } from '@/Redux/store';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gamesThunks } from '@/Redux/Slices/Thunks/gamesThunks';

const useFetchGames = () => {
  const dispatch = useDispatch<AppDispatch>();
  const hasFetched = useRef(false);
  const { isLoading, gameList, error, isFiltering } = useSelector((store: RootState) => store.games);

  const { genres } = useSelector((store: RootState) => store.genres);

  const isGameListEmpty = gameList?.results?.length === 0;
  const shouldShowSkelleton = isLoading || isFiltering;

  useEffect(() => {
    const controller = new AbortController();

    if (hasFetched.current) return; // prevent doubule call in dev mode,
    hasFetched.current = true;

    dispatch(gamesThunks());

    return () => {
      controller.abort();
    };
  }, [dispatch]);

  return { gameList, isLoading, error, isFiltering, isGameListEmpty, shouldShowSkelleton, genres };
};

export default useFetchGames;
