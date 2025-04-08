/** @format */

import { genresThunks } from '@/Redux/Slices/Thunks/genresThunks';
import { AppDispatch, RootState } from '@/Redux/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useFetchGenres = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { isLoading, genres, error } = useSelector((store: RootState) => store.genres);

  useEffect(() => {
    const controller = new AbortController();
    dispatch(genresThunks());
    return () => {
      controller.abort();
    };
  }, [dispatch]);

  return { isLoading, genres, error };
};
