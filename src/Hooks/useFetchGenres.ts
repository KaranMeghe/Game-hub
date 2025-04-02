/** @format */

import { fetchGenresFailure, fetchGenresStart, fetchGenresSucess } from '@/Redux/Slices/genresSlice';
import { AppDispatch, RootState } from '@/Redux/store';
import { fetchGenres } from '@/services/services';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useFetchGenres = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { isLoading, genres, error } = useSelector((store: RootState) => store.genres);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const genresList = async () => {
      try {
        dispatch(fetchGenresStart());
        const response = await fetchGenres(signal);
        dispatch(fetchGenresSucess(response));
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request was cancelled');
          return;
        }

        dispatch(fetchGenresFailure((error as Error).message));
      }
    };

    genresList();

    return () => {
      controller.abort();
    };
  }, [dispatch]);

  return { isLoading, genres, error };
};
